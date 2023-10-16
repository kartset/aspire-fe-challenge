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
                <!-- 
                    Click on this button will trigger 2 functions, 
                    one to set the formId, which will act as a decision maker 
                    in the BaseModal Component component. It will make a call 
                    to toggleModal function which will change the modal/dialog
                    variable.
                -->
                <q-btn 
                    @click="() => {toggleModal();setCurrentFormId('add_card')}"  
                    size="sm" unelevated no-caps flat
                    text-color="blue" icon="add_circle" 
                >
                    New card
                </q-btn>
            </div>
        </div>
        <div class="q-pt-md" >
            <!-- 
                In this wrapper, there are four components,
                1)  TabsItems -> This component renders the tabs (not the tab panels), 
                    it takes list of tabs and the currentTab pointer. This component will 
                    perform a list rendering on the tabs list and keep a track of the current 
                    selected tab using currentTab pointer

                2)  TabPanels -> This Component renders the panels for the tabs and shows the panel 
                    for the currently selected Tab.
                
                3)  BaseModal -> This component renders the dialog/modal for the project. 
                    Currently we use dialog/modal for 2 ops, for Add New Card form and for a 
                    confirmation click while deleting a card
                
                4)  BottomSheet -> This Contains the Card Action List which have options like 
                    freeze card, delete card and etc., and it has list of recent transaction. 
                    This component aims to be a draggable, scrollable bottom sheet for the mobile 
                    view
             -->
            <TabsItems :tabs="tabs" :currentTab="currentTab" />
            <TabPanels />
            <BaseModal />
            <BottomSheet />
        </div>
        <!-- This is the navbar for the mobile view, fixed at the bottom of the screen -->
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