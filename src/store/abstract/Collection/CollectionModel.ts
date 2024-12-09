import { types as t, getIdentifier, Instance, IAnyStateTreeNode, applySnapshot, detach } from 'mobx-state-tree';
import { ModelV1 as Model } from '../model';
import views from './views';

const CollectionModelFactory = (modelType) =>
  t
    .model({
      items: t.map(modelType)
    })
    .actions((self) => {
      function detachItems() {
        detach(self.items);
      }
      return {
        detach() {
          detachItems();
        },
        add(model: IAnyStateTreeNode) {
          self.items.put(model);
        },
        remove(model: IAnyStateTreeNode) {
          detach(model);
          self.items.delete(getIdentifier(model)!);
        },
        update(model: IAnyStateTreeNode) {
          self.items.delete(getIdentifier(model)!);
          self.items.put(model);
        },
        reset() {
          detachItems();
          applySnapshot(self, { items: {} });
        }
      };
    })
    .views((self) => ({
      get toArray() {
        return Array.from(self.items.values());
      }
    }))
    .views(views);

const CollectionMap = CollectionModelFactory(Model);
export interface ICollectionMap extends Instance<typeof CollectionMap> {}

export default CollectionModelFactory;
