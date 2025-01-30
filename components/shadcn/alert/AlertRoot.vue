<script setup lang="ts">
const props = defineProps({
    variant: {
        type: String,
        default: 'default',
    },
    class: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div :class="[props.variant, props.class]" class="Alert" role="alert">
        <slot />
    </div>
</template>

<style lang="scss">
.Alert {
    position: relative;
    width: 100%;
    border-radius: 0.5rem;
    border-width: 1px;
    padding: 1rem;

    > svg ~ * {
        padding-left: 1.75rem;
    }

    > svg + div {
        transform: translateY(-3px);
    }

    > svg {
        position: absolute;
        left: 1rem;
        top: 1rem;
        color: var(--foreground);
        width: 1rem;
        height: 1rem;
    }

    &.default {
        color: var(--foreground);
        background-color: var(--background);
    }

    &.destructive {
        border-color: rgba(var(--destructive), 0.5); /* border-destructive/50 */
        color: var(--destructive); /* text-destructive */

        > svg {
            color: var(--destructive); /* [&>svg]:text-destructive */
        }
    }
}
</style>
