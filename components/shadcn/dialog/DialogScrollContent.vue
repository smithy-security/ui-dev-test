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
        <DialogOverlay class="DialogOverlay">
            <DialogContent
                class="DialogContent"
                :class="props.class"
                v-bind="forwarded"
                @pointer-down-outside="
                    (event) => {
                        const originalEvent = event.detail.originalEvent;
                        const target = originalEvent.target as HTMLElement;
                        if (
                            originalEvent.offsetX > target.clientWidth ||
                            originalEvent.offsetY > target.clientHeight
                        ) {
                            event.preventDefault();
                        }
                    }
                "
            >
                <slot />

                <DialogClose class="DialogClose">
                    <X class="DialogCloseIcon" />
                    <span class="sr-only">Close</span>
                </DialogClose>
            </DialogContent>
        </DialogOverlay>
    </DialogPortal>
</template>

<style lang="scss" scoped>
.DialogOverlay {
    display: grid;
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    place-items: center;
}

.DialogContent {
    display: grid;
    position: relative;
    z-index: 50;
    padding: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 1rem;
    border-width: 1px;
    width: 100%;
    max-width: 32rem;
    transition-duration: 200ms;
    box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);

    @media (min-width: 640px) {
        border-radius: 0.5rem;
    }
    @media (min-width: 768px) {
        width: 100%;
    }
}

.DialogClose {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.125rem;
    border-radius: 0.375rem;
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

.DialogCloseIcon {
    width: 1rem;
    height: 1rem;
}
</style>
