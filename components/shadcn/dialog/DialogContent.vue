<script setup lang="ts">
import { X } from 'lucide-vue-next';
import {
    DialogClose,
    DialogContent,
    type DialogContentEmits,
    type DialogContentProps,
    DialogOverlay,
    DialogPortal,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DialogContentProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <DialogPortal>
        <DialogOverlay class="DialogOverlay" />
        <DialogContent
            v-bind="forwarded"
            class="DialogContent"
            :class="props.class"
        >
            <slot />

            <DialogClose class="DialogClose">
                <X class="DialogCloseIcon" />
                <span class="sr-only">Close</span>
            </DialogClose>
        </DialogContent>
    </DialogPortal>
</template>

<style lang="scss" scoped>
.DialogOverlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    background-color: #000c;
}

.DialogContent {
    animation-duration: 0.15s;
    animation-name: enter;
    background-color: var(--background);
    border-radius: 8px;
    box-shadow:
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
    box-sizing: border-box;
    color: var(--primary);
    column-gap: 16px;
    display: flex;
    flex-direction: column;
    font-family: Inter, sans-serif;
    font-feature-settings: normal;
    font-variation-settings: normal;
    line-height: 24px;
    max-height: 90%;
    max-width: none;
    padding: 1.5rem;
    pointer-events: auto;
    position: fixed;
    row-gap: 16px;
    tab-size: 4;
    text-size-adjust: 100%;
    transform: translate(-50%, -50%);
    transition-duration: 0.2s;
    unicode-bidi: isolate;
    z-index: 50;
    left: 50%;
    top: 50%;

    @media (min-width: 640px) {
        border-radius: 0.5rem;
    }
}

.DialogClose {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border-radius: 0.125rem;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    opacity: 0.7;
    padding: 0;

    &:hover {
        opacity: 1;
    }

    .DialogCloseIcon {
        width: 1rem;
        height: 1rem;
    }
}
</style>
