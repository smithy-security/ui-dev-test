<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    AccordionContentProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <AccordionContent v-bind="delegatedProps" class="AccordionContent">
        <div :class="props.class">
            <slot />
        </div>
    </AccordionContent>
</template>

<style lang="scss" scoped>
.AccordionContent {
    overflow: hidden;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    > div {
        padding-top: 1rem;
    }

    &[data-state='closed'] {
        animation: accordion-up 0.2s ease-out;
    }

    &[data-state='open'] {
        animation: accordion-down 0.2s ease-out;
    }
}
</style>
