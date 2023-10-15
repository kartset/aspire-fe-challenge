<template>
    <div style="background-color: #0C365A;" >
        <div class="row justify-end q-pt-none">
            <div class="q-pr-sm q-pt-none" >
                <img src="/public/logo.ico" height="50" width="50" />
            </div>
        </div>
        <div class="row justify-start q-pl-md q-pt-none" >
            <p class="text-white" >Account Balance</p>
        </div>
        <div class="row q-pl-md justify-between q-pt-none">
            <div class="row" >
                <div class="q-pt-none q-pr-sm" > 
                    <q-badge color="green" text-color="white" label="S$" />
                </div>
                <div class="text-white q-pt-none text-weight-bold" > 3,000</div>
            </div>
            <div class="q-pr-sm q-pt-none">
                <q-btn @click="() => {toggleModal();setCurrentFormId('add_card')}" size="sm" unelevated no-caps text-color="blue" icon="add_circle" flat>New card</q-btn>
            </div>
        </div>
        <div class="q-pt-md" >
            <TabsItems :tabs="tabs" :currentTab="currentTab" />
            <TabPanels />
            <BaseModal />
            <BottomSheet />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'
import BottomSheet from '@/components/BottomSheet.vue'
import TabsItems from '@/components/TabsItems.vue'
import TabPanels from '@/components/TabPanels.vue'
import BaseModal from '@/components/BaseModal.vue'
import { useModalStore } from '@/stores/modal'
import { storeToRefs } from 'pinia'
import { useTabsStore } from '@/stores/tabs'
import { useFormStore } from '@/stores/forms'


export interface TabProps {
    name:string, 
    label:string
}

interface billingAddressProps {
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    country: string,
    zipCode: string
}

export interface formStateProps {
    id: string,
    cardNumber: string,
    expiryDate: string,
    cvv: string,
    cardHolderName: string,
    freezed: boolean,
    billingAddress : billingAddressProps
}



const tabs:TabProps[] = [
    { name: 'my-debit-cards', label:'My debit cards' },
    { name: 'all-company-cards', label: 'All company cards'}
]

const { setCurrentTab } = useTabsStore()
const { currentTab } = storeToRefs(useTabsStore())
const { toggleModal } = useModalStore()
const { setCurrentFormId } = useFormStore()

watchEffect(() => setCurrentTab(tabs[0].name))

</script>

<style lang="scss" scoped >
.bg-brand {
    background: #0C365A !important;
}
</style>