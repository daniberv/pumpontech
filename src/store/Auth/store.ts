import AuthStore from './model';
import { persist } from 'mobx-state-tree-persist';

const authStore = AuthStore.create();
export const persistedStore = persist([[authStore, { key: 'auth', storage: localStorage, whitelist: ['theme', 'organization_id', 'locale'] }]]);

export default authStore;
