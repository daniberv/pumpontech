/* eslint-disable no-param-reassign */
import { types as t, Instance, onAction, getParent, hasParent } from 'mobx-state-tree';
import axios from 'axios';
import { DateTime } from 'luxon';
import defaults from 'lodash/defaults';
import has from 'lodash/has';

type Config = {
  cache?:
    | boolean
    | {
        lifeTime?: number; // seconds
      };
};
const Fetchable = (config: Config = {}) => {
  const { cache } = config;
  const { lifeTime } = defaults(cache, { lifeTime: 300 });

  return t
    .model({})
    .volatile(() => ({
      controller: new AbortController(),
      error: null,
      retries: 0,
      isFetching: false,
      isFetched: false,
      ...(cache && {
        cache: new Map()
      })
    }))
    .views((self) => ({
      get hasError() {
        return Boolean(self.error);
      },
      get signal() {
        return self.controller.signal;
      }
    }))
    .actions((self) => {
      function resetCache(model) {
        if (model?.cache) {
          model.cache?.clear();
        }
        if (hasParent(model)) {
          const parent = getParent(model);
          return resetCache(parent);
        }
        return null;
      }
      function finishFetching() {
        self.isFetching = false;
        self.isFetched = true;
      }
      function startFetching() {
        self.isFetching = true;
        self.isFetched = false;
        self.controller = new AbortController();
      }
      function failFetching(thrown: any) {
        self.isFetching = false;
        self.isFetched = false;
        if (!axios.isCancel(thrown)) {
          self.error = thrown;
          self.retries += 1;
          if (self.retries >= 3) {
            finishFetching();
          }
          throw new Error(thrown);
        }
      }
      return {
        startFetching,
        finishFetching,
        abortFetching() {
          self.controller.abort();
        },
        failFetching,
        sync(api, ...args) {
          const [request, ...requestArgs] = api(...args);
          const options = { signal: self.signal };
          let requestArgsWithSignal;
          switch (requestArgs.length) {
            case 2:
              // e.x. request('get', 'users', null, { signal })
              requestArgsWithSignal = [...requestArgs, null, options];
              break;
            case 3:
              // e.x. request('get', 'users', params, { signal })
              requestArgsWithSignal = [...requestArgs, options];
              break;
            case 4:
              // e.x. request('get', 'users', params, { ...options, signal })s
              requestArgsWithSignal = [...requestArgs.slice(0, -1), { ...requestArgs.slice(-1)[0], ...options }];
              break;
            default:
              throw Error('Wrong arguments');
          }
          if (cache) {
            const params = requestArgs[2];
            if (has(params, ['last'])) {
              return request(...requestArgsWithSignal);
            }
            const now = DateTime.now().toMillis();
            const cacheKey = JSON.stringify(params || {});
            const cacheExpired = self.cache?.has(cacheKey) === false || now >= self.cache.get(cacheKey).expiresIn;
            if (requestArgs[3]?.noCache || cacheExpired) {
              const xhr = request(...requestArgsWithSignal);
              self.cache?.set(cacheKey, {
                xhr,
                expiresIn: now + lifeTime * 1000
              });
              return xhr;
            }
            return self.cache?.get(cacheKey).xhr;
          }
          return request(...requestArgsWithSignal);
        },
        resetIsFetched() {
          self.isFetched = false;
        },
        resetCache() {
          resetCache(self);
        },
        afterCreate() {
          if (cache) {
            onAction(
              self,
              (action) => {
                const { name } = action;
                if (['create', 'destroy', 'update'].includes(name)) {
                  self.resetCache(self);
                }
              },
              true
            );
          }
        }
      };
    });
};

export interface IFetchable extends Instance<typeof Fetchable> {}

export default Fetchable;
