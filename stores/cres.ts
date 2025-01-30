import { defineStore } from 'pinia';
import { apiGetCres } from '~/api-calls/cres';
import { useUIStore } from '~/stores/ui-interactions';
import { Cre } from '~/mocks/cres';

export const useCreStore = defineStore('cres', {
    state: (): {
        cres: Cre[];
        error: string;
    } => ({
        cres: [],
        error: '',
    }),
    actions: {
        resetCres() {
            this.cres = [];
            this.error = '';
        },
        async fetchCres() {
            const ui = useUIStore();
            ui.setLoading(true);
            try {
                const creResponse = await apiGetCres();
                if (creResponse) {
                    this.cres = creResponse.cres;
                }
                this.error = '';
            } catch (e: any) {
                this.error = e;
            }
            ui.setLoading(false);
        },
    },
});
