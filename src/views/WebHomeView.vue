<template>
    <div style="height:100vh;width:100vw;display: flex;">
        <WebSidebar />
        <div style="flex:6" class="column justify-center q-mx-xl" >
            <main class="scrollbar-hidden" style="overflow-y: scroll;" >
                <div class="column" >
                    <div><p class="q-mb-none" >Available Balance</p></div>
                    <div class="row justify-between ">
                        <div class="row items-center" >
                            <div class="q-pt-none q-pr-sm" >
                                <q-badge color="green" text-color="white" label="S$" />
                            </div>
                            <div class="text-black text-h5 text-weight-bold" > 3,000</div>
                        </div>
                        <div class="q-pr-sm">
                            <q-btn @click="() => {toggleModal();setCurrentFormId('add_card')}" style="background-color: #325BAF;" size="md" no-caps text-color="white" icon="add_circle">New card</q-btn>
                        </div>
                    </div>
                </div>
                <div class="q-mt-md" >
                    <TabsItems :tabs="tabs" :currentTab="currentTab" />
                    <q-card class="row q-pa-md q-mt-sm scrollbar-hidden" >
                        <div style="flex:3;" class="col q-pt-md"  >
                            <TabPanels />
                            <div class="row q-pt-md" style="background-color: #EDF3FF;border-radius:15px" >
                                <CardActions />
                            </div>
                        </div>
                        <div style="flex:3;" class="column" >
                            <div v-for="(item, i) in items" :key="i" class="q-px-md q-py-sm">
                                <ExpansionItem :item="item" />
                            </div>
                        </div>
                    </q-card>
                </div>
            </main>
            </div>
        <BaseModal />
    </div>
</template>

<script lang="ts" setup>
import TabsItems from '@/components/TabsItems.vue'
import TabPanels from '@/components/TabPanels.vue'
import BaseModal from '@/components/BaseModal.vue'
import CardActions from '@/components/CardActions.vue'
import WebSidebar from '@/components/WebSidebar.vue'
import type { TabProps } from './MobileHomeView.vue';
import { storeToRefs } from 'pinia';
import { useTabsStore } from '@/stores/tabs';
import { watchEffect } from 'vue';
import RecentTransactions from '@/components/RecentTransactions.vue';
import LoremIpsum from '@/components/LoremIpsum.vue'
import ExpansionItem from '@/components/ExpansionItem.vue';
import { useModalStore } from '@/stores/modal'
import { useFormStore } from '@/stores/forms'
import { useExpansionStore } from '@/stores/expension'

const tabs:TabProps[] = [
    { name: 'my-debit-cards', label:'My debit cards' },
    { name: 'all-company-cards', label: 'All company cards'}
]

const { currentTab } = storeToRefs(useTabsStore())
const { setCurrentTab } = useTabsStore()
const { toggleModal } = useModalStore()
const { setCurrentFormId } = useFormStore()
const { toggleCardDetailsExpand, toggleRecentTransactionExpand } = useExpansionStore()
const { cardDetailsExpand, recentTransactionExpand } = storeToRefs(useExpansionStore())


let items = [
    {
        label: 'Card Details',
        icon: "img:card_details.svg",
        content: LoremIpsum,
        expand:cardDetailsExpand,
        toggleExpand: toggleCardDetailsExpand
    },
    {
        label: 'Recent Transcations',
        icon: "img:recent_trans.svg",
        content: RecentTransactions,
        expand: recentTransactionExpand,
        toggleExpand: toggleRecentTransactionExpand
    }
]



watchEffect(() => setCurrentTab(tabs[0].name))



</script>

<style lang="scss" scoped>

.scrollbar-hidden::-webkit-scrollbar {
    display: none;
}

</style>