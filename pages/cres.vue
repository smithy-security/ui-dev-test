<template>
    <div class="PageTitle">
        <p class="subtitle">
            A visual explorer of Open Common Requirement Enumerations (CREs).
            Originally created by:
            <a
                target="_blank"
                href="https://zeljkoobrenovic.github.io/opencre-explorer/"
                >Zeljko Obrenovic</a
            >.
        </p>
    </div>
    <div class="MainContent">
        <Alert v-if="error" variant="destructive" class="Alert">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{{ error }}</AlertDescription>
        </Alert>
        <pre>{{ cres }}</pre>
        <template v-if="loading && cres.length === 0">
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </template>
    </div>
</template>
<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { Alert, AlertDescription, AlertTitle } from '~/components/shadcn/alert';
import { Skeleton } from '~/components/shadcn/skeleton';
import { useUIStore } from '~/stores/ui-interactions';
import { useCreStore } from '~/stores/cres';

export default defineNuxtComponent({
    components: {
        AlertDescription,
        AlertTitle,
        Alert,
        Skeleton,
    },
    setup() {
        definePageMeta({
            layout: 'internal',
        });
    },
    computed: {
        ...mapState(useCreStore, ['cres', 'error']),
        ...mapState(useUIStore, ['loading']),
    },
    async mounted() {
        await Promise.all([await this.resetCres(), await this.fetchCres()]);
    },
    data: () => ({
        fetching: false,
    }),
    methods: {
        ...mapActions(useCreStore, {
            fetchCres: 'fetchCres',
            resetCres: 'resetCres',
        }),
    },
});
</script>

<style lang="scss" scoped>
.MainContent {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    display: grid;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
}

.List,
.Pagination {
    grid-column: 1 / -1;
}

.Alert {
    grid-column: 1 / -1;
    margin-bottom: 1rem;
}

.SkeletonRoot {
    grid-column: span 6 / span 2;
    height: 120px;
    margin-top: 1rem;
}
</style>
