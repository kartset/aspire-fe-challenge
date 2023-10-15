<template>
    <q-card style="border: 1px solid #F7F7F7;border-radius: 0px 0px 10px 10px;" >
        <q-card-section v-for="(item, i) in recentTransactions" :key="i">
            <TransactionListItem :listItem="item" />
            <q-separator style="background-color: #DDDDDD;" />
        </q-card-section>
        <div style="color:#01D167;background-color:#DDFFEC;text-align:center" class="q-pa-md" >
            View All Transcations
        </div>
    </q-card>
</template>

<script setup lang="ts">

import TransactionListItem from './TransactionListItem.vue';
import MegaphoneAvatar from './MegaphoneAvatar.vue'
import FileStorageAvatar from './FileStorageAvatar.vue'

let recentTransactions = [
    {
        name: 'Hamleys',
        date: '20 May 2020',
        icon: FileStorageAvatar,
        comment: 'Refund on debit card',
        currency: '$',
        expense: '150',
        type: 'credit'
    },
    {
        name: 'Hamleys',
        date:'20 May 2020',
        icon: MegaphoneAvatar,
        comment: 'Refund on debit card',
        currency: '$',
        expense: '150',
        type: 'debit',
        
    }
]

</script>

<style scoped>

</style>