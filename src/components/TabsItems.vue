<template>
    <q-tabs
        v-model="currentTab"
        no-caps
        dense
        class="text-white"
        align="left"
        @update:model-value="(value) => setCurrentTab(value)"
    > 
        <template v-for="tab in props.tabs" :key="tab.name" >
            <q-tab :name="tab.name" :class="{'text-black':!isMobile()}" style="font-size: 8px;" :label="tab.label" />
        </template>
    </q-tabs>
</template>

<script lang="ts" setup>
import { useTabsStore } from '@/stores/tabs';
import type { TabProps } from '@/views/MobileHomeView.vue';
import { storeToRefs } from 'pinia';
import { isMobile } from '@/utils/helper';


const props = defineProps<{tabs:TabProps[]}>()


const { setCurrentTab } = useTabsStore()
const { currentTab } = storeToRefs(useTabsStore())

</script>

<style lang="scss" scoped>

</style>