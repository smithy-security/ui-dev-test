<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';

import TableCell from './TableCell.vue';
import TableRow from './TableRow.vue';

const props = withDefaults(
    defineProps<{
        class?: HTMLAttributes['class'];
        colspan?: number;
    }>(),
    {
        colspan: 1,
        class: '',
    },
);

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <TableRow class="TableRow">
        <TableCell
            class="TableCell"
            :class="props.class"
            v-bind="delegatedProps"
        >
            <div>
                <slot />
            </div>
        </TableCell>
    </TableRow>
</template>

<style lang="scss" scoped>
.TableRow {
    .TableCell {
        padding: 1rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        vertical-align: middle;
        white-space: nowrap;

        > div {
            display: flex;
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
