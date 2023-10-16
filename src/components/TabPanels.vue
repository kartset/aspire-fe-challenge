<template>
    <!-- Rendering Tabs Panerls -->
    <q-tab-panels
        v-model="currentTab"
        animated
        transition-prev="jump-up"
        transition-next="jump-up"
        class="bg-brand text-white"
    >
        <q-tab-panel name="my-debit-cards">
            <div class="q-pa-sm">
                <BaseCarousel />
            </div> 
        </q-tab-panel>
        <q-tab-panel name="all-company-cards">
            <div class="q-pa-sm">
                <BaseCarousel />
            </div>     
        </q-tab-panel>
    </q-tab-panels>
</template>

<script lang="ts" setup>
import { useTabsStore } from '@/stores/tabs';
import { storeToRefs } from 'pinia';
import BaseCarousel from './BaseCarousel.vue';


const { currentTab } = storeToRefs(useTabsStore())


</script>

<style lang="scss" scoped>

</style>