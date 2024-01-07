import { reactive } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';

interface State {
  count: number;
}

const state = reactive<State>({
  count: 0,
});

export function provideStore() {
  provide('store', state);
}

export function useStore() {
  const store = (inject('store') as State | undefined);
  if (!store) {
    throw new Error('store not provided');
  }
  return store;
}