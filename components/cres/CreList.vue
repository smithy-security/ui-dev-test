<template>
    <div v-if="cres && cres?.length > 0" class="CresList">
        <CmTable>
            <TableCaption> Showing {{ cres.length }} CREs </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Created at</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <CreRow v-for="cre in cres" :key="cre.Name" :cre="cre" />
            </TableBody>
        </CmTable>
    </div>
</template>
<script lang="ts">
import { Cre } from '~/mocks/cres';
import {
    TableHead,
    TableRow,
    TableHeader,
    TableCaption,
    TableBody,
    Table as CmTable,
} from '~/components/shadcn/table';
import CreRow from '~/components/cres/CreRow.vue';

export default {
    name: 'CreList',
    components: {
        TableHead,
        TableRow,
        TableHeader,
        CreRow,
        TableCaption,
        TableBody,
        CmTable,
    },
    props: {
        cres: {
            type: Object as PropType<Cre[]>,
            required: true,
        },
    },
};
</script>
<style lang="scss" scoped>
.CresList {
    width: 100%;

    .TableCaption {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
}
</style>
