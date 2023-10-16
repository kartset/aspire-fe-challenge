<template>
    <q-carousel
        v-model="currentCard"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        navigation
        v-ripple
        @update:model-value="(id) => setCurrentCard(String(id))"
        padding
        height="280px"
        class="text-white rounded-borders"
        :class="{'bg-brand':type == 'xs'}"
    >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-icon style="width: 2em;height:0.75em;font-size:12px;margin:0px;padding:0px" v-if="active" @click="onClick" name="img:rect.svg" />
            <q-btn style="color: #0B455C;margin:0px;padding:0px;font-size:8px" v-else :icon="btnProps.icon" flat round dense @click="onClick" />
            
        </template>
        <q-carousel-slide v-for="(card) in cards" :key="card.cardNumber" :name='card.id' class="column">
            <CreditCard :card="card" />
        </q-carousel-slide>
    </q-carousel>
</template>

<script lang="ts" setup>
import { useCardsStore } from '@/stores/cards';
import { storeToRefs } from 'pinia';
import CreditCard from './CreditCard.vue';
import { useBreakpoints } from '@/utils/composables/useBreakpoints';


const { cards, currentCard } = storeToRefs(useCardsStore())
const { setCurrentCard } = useCardsStore()
const { type } = useBreakpoints()


</script>

<style lang="scss" scoped>

.bg-brand {
    background: #0C365A !important;
}

</style>