import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
    state: (): {
        loading: boolean;
    } => ({
        loading: false,
    }),
    actions: {
        setLoading(isLoading: boolean) {
            this.loading = isLoading;
        },
    },
});
