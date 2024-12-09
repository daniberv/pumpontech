/* eslint-disable no-param-reassign */
import { types as t, Instance } from 'mobx-state-tree';
import { jwtDecode } from 'jwt-decode';
import { Syncable } from '../abstract/Syncable';

const AuthModel = t
  .compose(
    t.model({
      token: t.maybeNull(t.string),
      locale: t.optional(t.string, 'ru-RU')
    }),
    Syncable,
    // Fetchable()
  )
  .views((self) => ({
    get isAuthorized() {
      return Boolean(self.token);
    },
    get isTokenExpired() {
      if (self.token) {
        const { exp } = jwtDecode(self.token);
        const expiration = new Date(exp * 1000);
        const now = new Date();
        now.setSeconds(now.getSeconds() - 10);
        return now > expiration;
      }
      return true;
    },
  }));

export interface IAuthModel extends Instance<typeof AuthModel> {}

export default AuthModel;
