<script setup lang="ts">
import { Check } from 'lucide-vue-next';
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue';
import {
    CheckboxIndicator,
    CheckboxRoot,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    CheckboxRootProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<CheckboxRootEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <CheckboxRoot v-bind="forwarded" class="CheckboxRoot" :class="props.class">
        <CheckboxIndicator class="CheckboxIndicator">
            <slot>
                <Check class="Check" />
            </slot>
        </CheckboxIndicator>
    </CheckboxRoot>
</template>

<style lang="scss">
.CheckboxRoot {
    flex-shrink: 0;
    border-radius: 0.125rem;
    border-width: 1px;
    width: 1rem;
    height: 1rem;
    --tw-ring-offset-color: var(--background);
    border-color: var(--primary);

    &[data-state='checked'] {
        color: var(--primary-foreground);
        background-color: var(--primary);
    }
}

.CheckboxIndicator {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: currentColor;
}

.Check {
    width: 1rem;
    height: 1rem;
}
</style>
