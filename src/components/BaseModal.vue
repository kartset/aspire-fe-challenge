<template>
    <q-dialog :maximized="type == 'xs'"  transition-show="slide-up" transition-hide="slide-down" v-model="modal" persistent>
        <q-card style="width: 35vw">
            <q-card-section class="row items-center">
                <div class="text-h6">Add New Card</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
  
            <q-card-section class="q-pt-none">
                <AddNewCardForm />
            </q-card-section>
    
            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn form="add_card" label="Submit" type="submit" flat color="primary"/>
                <q-btn form="add_card" label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';
import AddNewCardForm from './AddNewCardForm.vue';
import { useBreakpoints } from '@/utils/composables/useBreakpoints';



const { modal } = storeToRefs(useModalStore())
const { type } = useBreakpoints()


</script>

<style lang="scss" scoped>

</style>