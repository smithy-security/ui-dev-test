<script lang="ts" setup>
const props = defineProps({
    variant: {
        type: String,
        default: 'default',
    },
    size: {
        type: String,
        default: '',
    },
    class: {
        type: String,
        default: '',
    },
    as: {
        type: String,
        required: false,
        default: '',
    },
    href: {
        type: String,
        required: false,
        default: '',
    },
});
</script>

<template>
    <a
        v-if="props.as == 'a'"
        :href="props.href"
        :class="[props.variant, props.size, props.class]"
        class="button"
    >
        <slot />
    </a>
    <button
        v-else
        :class="[props.variant, props.size, props.class]"
        class="button"
    >
        <slot />
    </button>
</template>

<style lang="scss" scoped>
/* Base button styles */
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: 0.375rem; /* Rounded-md */
    font-size: 0.875rem; /* Text-sm */
    font-weight: 500; /* Font-medium */
    transition:
        color 0.2s,
        background-color 0.2s;
    text-decoration: none;
    outline: none;
    box-shadow: none;
    pointer-events: auto;

    &:hover {
        text-decoration: none;
        cursor: pointer;
    }

    &:focus-visible {
        outline: none;
        ring: 2px solid var(--ring-color);
        ring-offset: 2px;
    }

    &.disabled,
    &:disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    /* Button Variants */
    &.default {
        background-color: var(--primary);
        color: var(--primary-foreground);

        &:hover {
            background-color: var(--primary-hover);
        }
    }

    &.destructive {
        background-color: var(--destructive);
        color: var(--destructive-foreground);

        &:hover {
            background-color: var(--primary-hover);
            color: var(--destructive-foreground);
        }
    }

    &.destructive-outline {
        border: 1px solid var(--destructive);
        color: var(--destructive);

        &:hover {
            background-color: var(--destructive);
            color: var(--destructive-foreground);
        }
    }

    &.outline {
        border: 1px solid var(--input);
        background-color: transparent;
        color: inherit;
        transition: all ease 300ms;

        &:hover {
            background-color: transparent;
            color: var(--accent-foreground);
            border-color: var(--accent-foreground);
            transition: all ease 300ms;
        }
    }

    &.secondary {
        background-color: var(--secondary);
        color: var(--secondary-foreground);

        &:hover {
            background-color: var(--secondary-hover);
        }
    }

    &.ghost {
        background-color: transparent;

        &:hover {
            background-color: var(--accent);
            color: var(--accent-foreground);
        }
    }

    &.link {
        background-color: transparent;
        color: var(--primary);
        text-underline-offset: 0.25rem;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }

    &.link.destructive {
        border: none;
        color: var(--destructive);

        &:hover {
            background-color: transparent;
            color: var(--destructive);
        }
    }

    /* Component-Specific Variants */
    &.component-resource {
        border: 1px solid var(--input);
        background-color: var(--background);

        &:hover {
            background-color: var(--accent);
            color: var(--accent-foreground);
        }
    }

    &.component-source {
        border: 1px solid var(--yellow-600);
        background-color: var(--background);

        &:hover {
            background-color: var(--accent);
            color: var(--accent-foreground);
        }
    }

    &.component-producer {
        border: 1px solid var(--blue-600);
        background-color: var(--background);

        &:hover {
            background-color: var(--accent);
            color: var(--accent-foreground);
        }
    }

    &.component-enricher {
        border: 1px solid var(--red-600);
        background-color: var(--background);

        &:hover {
            background-color: var(--accent);
            color: var(--accent-foreground);
        }
    }

    &.component-consumer {
        border: 1px solid var(--green-600);
        background-color: var(--background);

        &:hover {
            background-color: var(--accent);
            color: var(--accent-foreground);
        }
    }

    /* Button Sizes */
    height: 2.5rem; /* H-10 */
    padding: 0.5rem 1rem; /* Px-4 Py-2 */

    &.xs {
        height: 1.75rem; /* H-7 */
        border-radius: 0.25rem; /* Rounded */
        padding: 0 0.5rem; /* Px-2 */
    }

    &.sm {
        height: 2.25rem; /* H-9 */
        border-radius: 0.375rem; /* Rounded-md */
        padding: 0 0.75rem; /* Px-3 */
    }

    &.lg {
        height: 2.75rem; /* H-11 */
        border-radius: 0.375rem; /* Rounded-md */
        padding: 0 2rem; /* Px-8 */
    }

    &.icon {
        height: 2.5rem; /* H-10 */
        width: 2.5rem; /* W-10 */
        padding: 0.75rem;
    }
}
</style>
