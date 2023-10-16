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

//useBreakpoint is a composable which monitors the changes in the screen and 
//returns the screen type. screen types [xs, md, lg]
// here we're using type of screen to decide whether to render a Mobile Home 
// View or Web Home View through this Component



</script>

<style scoped>

</style>