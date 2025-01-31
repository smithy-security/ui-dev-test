<template>
    <TableRow data-test="cre-row" class="CreRow">
        <TableCell class="NameCell">
            <h3 class="line-clamp-2">
                <a :href="cre.Url">
                    {{ cre.Name }}
                </a>
            </h3>
        </TableCell>
        <TableCell class="LabelsCell">
            <Tags :tags="cre.Tags" />
        </TableCell>
        <TableCell class="TimeCell">
            {{ cre.CreatedAt }}
        </TableCell>
    </TableRow>
</template>
<script lang="ts">
import type { PropType } from 'vue';
import { TableCell, TableRow } from '~/components/shadcn/table';
import Tags from '~/components/cres/Tags.vue';
import { Cre } from '~/mocks/cres';

export default {
    name: 'CreRow',
    components: {
        Tags,
        TableRow,
        TableCell,
    },
    props: {
        cre: {
            type: Object as PropType<Cre>,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.CreRow {
    &:hover {
        box-shadow:
            0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .TableCell {
        display: table-cell;
        justify-content: flex-end;
        align-items: baseline;
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-align: left;
    }

    .NameCell {
        width: 50%;
        justify-content: flex-start;

        > div {
            display: flex;
            gap: 1em;
            align-items: center;
        }

        .Name {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 0.5rem;

            h3 {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                font-size: 1.25rem;
                font-weight: 600;
                letter-spacing: -0.025em;
                line-height: 1.25;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .LabelsCell {
        width: 270px;
    }

    .TimeCell {
        max-width: 250px;
    }
}
</style>
