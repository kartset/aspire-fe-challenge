<template>
    <q-expansion-item
        :model-value="props.item.expand.value"
        :icon="props.item.icon"
        :label="props.item.label"
        dense
        @update:model-value="() => props.item.toggleExpand()"
        expand-icon="img:down-arrow.svg"
        expanded-icon="img:up-arrow.svg"
        header-style="color:#0C365A;border-radius:15px;background-color:#FAFCFF;padding:15px;font-size:14px;text-align:left;font-weight:450"                                                    
    >
        <q-card style="border: 1px solid #F7F7F7;border-radius: 0px 0px 10px 10px;">
            <component :is="props.item.content" />
        </q-card>
    </q-expansion-item>
</template>

<script lang="ts" setup>

const props = defineProps<{item:any}>()

</script>

<style lang="scss" scoped>

</style>