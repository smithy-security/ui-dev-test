<script lang="ts" setup>
import { Separator, type SeparatorProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    SeparatorProps & { class?: HTMLAttributes['class']; label?: string }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <Separator
        :class="[
            'Separator',
            props.orientation === 'vertical' ? 'vertical' : '',
            props.class,
        ]"
        v-bind="delegatedProps"
    >
        <span
            v-if="props.label"
            :class="props.orientation === 'vertical' ? 'vertical' : ''"
            >{{ props.label }}</span
        >
    </Separator>
</template>

<style lang="scss" scoped>
.Separator {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    height: 1px;
    background-color: var(--border);

    &.vertical {
        width: 1px;
        height: 100%;
    }

    > span {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        line-height: 1rem;
        padding: 0.25rem 0.5rem;
        height: 1px;

        &.vertical {
            padding: 0.5rem 0.25rem;
            width: 1px;
        }
    }
}
</style>
