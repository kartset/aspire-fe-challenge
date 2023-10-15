<template>
    <div @click="freezeCard(currentCardId)" style="text-align: center;" class="col q-gutter-sm" >
        <q-icon size="sm" name="img:src/assets/freeze_card.svg" />
        <p class="wrap font-class" >{{freeze_card_string}} card</p>
    </div>
    <div class="col q-gutter-sm" style="text-align: center;">
        <q-icon size="sm" name="img:src/assets/set_spend_limit.svg" />
        <p class="wrap font-class ">Set Spend Limit</p>
    </div>
    <div class="col q-gutter-sm" style="text-align: center;">
        <q-icon size="sm" name="img:../assets/gpay.svg" />
        <p class="wrap font-class " >Add to Gpay</p>
    </div>
    <div class="col q-gutter-sm" style="text-align: center;">
        <q-icon size="sm" name="img:src/assets/replace_card.svg" />
        <p class="wrap font-class " >Replace Card</p>
    </div>
    <div @click="deleteCard(currentCardId)" style="text-align: center;" class="col q-gutter-sm" >
        <q-icon size="sm" name="img:src/assets/deactivate_card.svg" />
        <p class="wrap font-class " >Cancel Card</p>
    </div>
</template>

<script lang="ts" setup>
import { useCardsStore } from '@/stores/cards';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { ref, watchEffect } from 'vue';

const $q = useQuasar()
const { deleteCard, freezeCard } = useCardsStore()
const { cards, currentCard:currentCardId } = storeToRefs(useCardsStore())
const freeze_card_string = ref('')

watchEffect(() => {
    try {
        let currentCard = cards.value.find((card) => card.id == currentCardId.value)
        if(currentCard !== undefined) {
            freeze_card_string.value = currentCard.freezed ? 'Unfreeze' : 'Freeze'
        }
    } catch (error:any) {
        $q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: error.message
        })   
    }
})



</script>

<style lang="scss" scoped>

</style>