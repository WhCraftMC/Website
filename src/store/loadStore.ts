import { defineStore } from 'pinia'

const useLoadCounterStore = defineStore('counter', {
    state: () => ({ loading: true }),
    getters: {
      double: (state) => state.loading,
    },
    actions: {
        loaded() {
            this.loading = false
        },
        loading() {
            this.loading = true
        },
    },
})

export default useLoadCounterStore;