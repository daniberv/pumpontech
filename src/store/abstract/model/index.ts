import { types as t, Instance, applySnapshot } from 'mobx-state-tree';
import { v4 as uuid } from 'uuid';
import DateType from '../date_time';
import views from './views';

export const Identifier = t.optional(t.identifier, () => `new_${uuid()}`);

const actions = (self) => ({
  reset() {
    applySnapshot(self, {});
  }
});

export const Model = t.model().actions(actions).views(views);

export const ModelV1 = Model.props({
  _id: Identifier,
  created_at: t.maybeNull(DateType)
});

export const ModelV2 = Model.props({
  id: Identifier,
  created_at: t.maybeNull(DateType)
});

export interface IModel extends Instance<typeof Model> {}
export interface IModelV1 extends Instance<typeof ModelV1> {}
export interface IModelV2 extends Instance<typeof ModelV2> {}
