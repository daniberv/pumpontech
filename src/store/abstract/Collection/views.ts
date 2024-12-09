import { getIdentifier } from 'mobx-state-tree';
import first from 'lodash/first';

export default (self) => ({
  get size() {
    return self.toArray.length;
  },
  get first() {
    return first(self.toArray);
  },
  get isEmpty() {
    return self.size === 0;
  },
  getById(id) {
    return self.toArray.find((model) => getIdentifier(model) === id);
  },
  findWhere(attrs: any) {
    return self.toArray.find((model) => Object.entries(attrs).every(([key, value]) => model[key] === value));
  },
});
