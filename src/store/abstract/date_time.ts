import { types as t } from 'mobx-state-tree';
import isString from 'lodash/isString';
import { DateTime } from 'luxon';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export default t.custom({
  name: 'DateTime',
  fromSnapshot(value: string | number | null) {
    if (!value) {
      return null;
    }
    if (isString(value)) {
      return DateTime.fromISO(value, { setZone: true }).toMillis();
    }
    return value;
  },
  toSnapshot(ts: number | null) {
    if (!ts) {
      return null;
    }
    if (DateTime.fromMillis(ts).isValid) {
      return DateTime.fromMillis(ts).toFormat(DATE_FORMAT);
    }
    if (DateTime.fromISO(ts).isValid) {
      return DateTime.fromISO(ts).toFormat(DATE_FORMAT);
    }
    return ts;
  },
  isTargetType: () => false,
  getValidationMessage() {
    return '';
  }
});
