<template>
    <q-dialog :maximized="type == 'xs'"  transition-show="slide-up" transition-hide="slide-down" v-model="modal" persistent>
        <q-card :style=" type != 'xs'  && {width: '35vw'}">
            <q-card-section class="row items-center">
                <div class="text-h6">{{ currentFormId == 'add_card' ? 'Add New Card' : 'Delete Card'}}</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
  
            <q-card-section v-if="currentFormId == 'add_card'" class="q-pt-none">
                <AddNewCardForm />
            </q-card-section>
            <q-card-section v-else class="q-pt-none">
                <p>Are You Sure ?</p>
            </q-card-section>
    
            <q-card-actions v-if="currentFormId == 'add_card'" align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn :loading="addNewCardSTATUS == STATUS.LOADING" :form="currentFormId" label="Submit" type="submit" flat color="primary"/>
                <q-btn :form="currentFormId" label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </q-card-actions>
            <q-card-actions v-else-if="currentFormId=='delete_card'" align="right" class="text-primary" >
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn :form="currentFormId" @click="() => {deleteCard(currentCardId)}" label="Delete" color="red-10"/>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';
import AddNewCardForm from './AddNewCardForm.vue';
import { useBreakpoints } from '@/utils/composables/useBreakpoints';
import { useFormStore } from '@/stores/forms';
import { useCardsStore } from '@/stores/cards';
import { STATUS } from '@/utils/status'


const { modal } = storeToRefs(useModalStore())
const { currentFormId } = storeToRefs(useFormStore())
const { type } = useBreakpoints()
const { addNewCardSTATUS, currentCard:currentCardId } = storeToRefs(useCardsStore())
const { deleteCard } = useCardsStore()

</script>

<style lang="scss" scoped>

</style>