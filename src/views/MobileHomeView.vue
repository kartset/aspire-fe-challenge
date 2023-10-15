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
        <q-card class=" row justify-center items-center mobile-nav q-px-md">
            <div style="flex:1;text-align:center" class="col justify-center items-end">
                <q-icon style="font-size:25px;" name="img:logo.svg" />
                <p style="color: #DDDDDD;font-size:10px;" >Home</p>
            </div>
            <div style="flex:1;text-align:center" class="col justify-center items-end">
                <q-icon style="font-size:25px;" name="img:pay_selected.svg"  />
                <p style="color: #DDDDDD;font-size:10px;" >Cards</p>
            </div>
            <div style="flex:1;text-align:center" class="col justify-center items-end">
                <q-icon style="font-size:25px;" name="img:payments_new.svg"  />
                <p style="color: #DDDDDD;font-size:10px;" >Payments</p>
            </div>
            <div style="flex:1;text-align:center" class="col justify-center items-end">
                <q-icon style="font-size:25px;" name="img:credit_new.svg"  />
                <p style="color: #DDDDDD;font-size:10px;">Credit</p>
            </div>
            <div style="flex:1;text-align:center" class="col justify-center items-end">
                <q-icon style="font-size:25px;" name="img:settings_new.svg" />
                <p style="color: #DDDDDD;font-size:10px;">Settings</p>
            </div>
        </q-card>
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

.mobile-nav {
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    z-index: 100;
}

</style>