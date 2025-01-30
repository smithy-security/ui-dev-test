<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
import {
    AccordionHeader,
    AccordionTrigger,
    type AccordionTriggerProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    AccordionTriggerProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <AccordionHeader class="AccordionHeader">
        <AccordionTrigger
            v-bind="delegatedProps"
            class="AccordionTrigger"
            :class="props.class"
        >
            <slot />
            <slot name="icon">
                <ChevronDown class="ChevronDown" />
            </slot>
        </AccordionTrigger>
    </AccordionHeader>
</template>
<style lang="scss" scoped>
.AccordionHeader {
    display: flex;
}

.AccordionTrigger {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 1 1 0%;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    &:hover {
        text-decoration: underline;
    }

    &[data-state='open'] {
        .ChevronDown {
            transform: rotate(-180deg);
        }
    }
}

.ChevronDown {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
}
</style>
