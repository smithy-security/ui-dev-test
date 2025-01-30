<script setup lang="ts">
import {
    AccordionItem,
    type AccordionItemProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    AccordionItemProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <AccordionItem
        v-bind="forwardedProps"
        class="AccordionItem"
        :class="props.class"
    >
        <slot />
    </AccordionItem>
</template>

<style lang="scss" scoped>
.AccordionItem {
    border-bottom-width: 1px;
}
</style>
