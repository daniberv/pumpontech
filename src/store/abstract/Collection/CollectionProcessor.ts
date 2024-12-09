import { toMapById } from '@/utils/toMapById';
import { types as t } from 'mobx-state-tree';

const CollectionProcessor = (store) =>
  t.snapshotProcessor(store, {
    preProcessor(values) {
      return {
        models: toMapById(values)
      };
    },
    postProcessor(sn) {
      return sn;
    }
  });

  export { CollectionProcessor }