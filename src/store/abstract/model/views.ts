import { getIdentifier } from 'mobx-state-tree';
import isUndefined from 'lodash/isUndefined';

export default (self) => ({
  get isNew() {
    return getIdentifier(self)?.startsWith('new');
  },
  get presentName() {
    // @ts-ignore
    if (isUndefined(self.name)) {
      console.warn('name is not defined');
    }
    // @ts-ignore
    return self.name;
  },
  get valueLabelPair() {
    // @ts-ignore
    return { label: self.presentName, value: getIdentifier(self), model: self };
  }
});
