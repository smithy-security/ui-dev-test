<template>
    <div v-if="tags.length > 0" class="Tags">
        <Badge
            v-for="tag in tags"
            :key="tag.name"
            class="Badge"
            variant="secondary"
        >
            <a :href="tag.link">
                {{ tag.name }}
            </a>
        </Badge>
    </div>
</template>
<script lang="ts">
import { Badge } from '~/components/shadcn/badge';

export default {
    name: 'Tags',
    components: {
        Badge,
    },
    props: {
        tags: {
            type: Object,
            default: null,
        },
    },
};
</script>

<style lang="scss" scoped>
.Tags {
    max-width: 100%;

    .Badge {
        display: inline-block;
        margin-right: 0.5rem;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: var(--muted);
    }
}
</style>
