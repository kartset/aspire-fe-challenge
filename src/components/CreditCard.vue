<template>
    <q-card style="border-radius:15px;" class="my-card" :class="{freeze_green:props.card.freezed, bg_green:!props.card.freezed}">
        <q-card-section>
            <div class="row justify-end" ><img src="src/assets/aspire_logo_full.svg" /></div>
            <div class="column" style="margin-top: 5px;" >
                <div><p style="font-size:22px;font-weight:550" >{{props.card.cardHolderName}}</p></div>
                <div class="credit-card visa selectable"><div class="credit-card-last4">
                    {{props.card.cardNumber.slice(props.card.cardNumber.length-4, props.card.cardNumber.length)}}
                </div></div>
                <div class="row" >
                    <div style="margin-right: 10px;" >Thru:12/20</div>
                    <div>CVV: ***</div>
                </div>
            </div>
            <div class="row justify-end" >
                <img src="src/assets/visa_logo.svg" />
            </div>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">

import type { formStateProps } from '@/views/HomeView.vue';

const props = defineProps<{card:formStateProps}>()

</script>

<style scoped>

.credit-card-last4 {
    font-family: "PT Mono", Helvetica, sans-serif;
    font-size: 16px;
}

.credit-card-last4:before {
    content: "•••• •••• •••• ";
    color: white;
    font-size: 28px;
    letter-spacing: 3px;
}

.bg_green {
    background: #01D167 !important;
}

.freeze_green {
    background-color: #A7D397;
}

</style>