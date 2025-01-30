<script lang="ts" setup>
import { useForwardPropsEmits } from 'radix-vue';
import type { DialogRootEmits, DialogRootProps } from 'radix-vue';
import { Dialog as CnDialog, DialogContent } from '~/components/shadcn/dialog';

import Command from './CommandRoot.vue';

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <CnDialog v-bind="forwarded">
        <DialogContent class="DialogContent">
            <Command class="Command">
                <slot />
            </Command>
        </DialogContent>
    </CnDialog>
</template>

<style lang="scss" scoped>
:deep() .DialogContent {
    overflow: hidden;
    padding: 0;
    box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
