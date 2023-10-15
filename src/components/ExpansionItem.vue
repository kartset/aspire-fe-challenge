<template>
    <q-expansion-item
        v-model="expand"
        :icon="props.item.icon"
        :label="props.item.label"
        dense
        expand-icon="img:public/down-arrow.svg"
        expanded-icon="img:public/up-arrow.svg"
        header-style="color:#0C365A;border-radius:15px;background-color:#FAFCFF;padding:15px;font-size:14px;text-align:left;font-weight:450"                                                    
    >
        <q-card style="border: 1px solid #F7F7F7;border-radius: 0px 0px 10px 10px;">
            <component :is="props.item.content" />
        </q-card>
    </q-expansion-item>
</template>

<script lang="ts" setup>
import { useExpansionStore } from '@/stores/expension';
import { storeToRefs } from 'pinia';

const props = defineProps<{item:any}>()

const { expand } = storeToRefs(useExpansionStore())

</script>

<style lang="scss" scoped>

</style>