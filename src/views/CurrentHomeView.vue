<template>
    <div v-if="type == 'xs'" >
        <MobileHomeView />
    </div>
    <div v-else-if="type=='lg'" >
        <WebHomeView />
    </div>
    <div v-else >
        No Show. Please Either increase or decrease with
    </div>
</template>

<script setup lang="ts">
import  MobileHomeView from './MobileHomeView.vue';
import  WebHomeView from './WebHomeView.vue';
import { useBreakpoints } from '../utils/composables/useBreakpoints'

const { type } = useBreakpoints()



</script>

<style scoped>

</style>