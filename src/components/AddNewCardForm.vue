<template>
    <q-form
        @submit="addNewCardWrapper"
        @reset="onReset"
        class="q-gutter-md"
        id="add_card"
    >
        <q-input 
            lazy-rules 
            :rules="[ val => val && val.length > 0 || 'Required']" 
            filled  
            label="Enter Credit Card Number *" 
            v-model="reactiveFormState.cardNumber" 
            :dense="true"
            type="text"
            @update:model-value="(value) => detectCardTypeWrapper(value)"
        >
            <template v-slot:append>
                <i v-if="cardValue === 'mastercard'" class="fa-brands fa-cc-mastercard fa-bounce "></i>
                <i v-else-if="cardValue === 'visa'" class="fa-brands fa-cc-visa fa-bounce"></i>
                <i v-else-if="cardValue === 'jcb'" class="fa-brands fa-cc-jcb fa-bounce"></i>
                <i v-else-if="cardValue === 'discover'" class="fa-brands fa-cc-discover fa-bounce"></i>
                <i v-else-if="cardValue === 'amex'" class="fa-brands fa-cc-amex fa-bounce"></i>
                <i v-else-if="cardValue === 'diners'" class="fa-brands fa-cc-diners-club fa-bounce"></i>
                <i v-else class="fa-regular fa-credit-card fa-bounce"></i>
            </template>
        </q-input>
        <div class="row justify-between items-start" >
            <q-input
                filled
                type="text"
                v-model="reactiveFormState.expiryDate"
                label="Expiry Date*"
                lazy-rules
                dense
                @update:model-value="(value) => cc_expires_format(String(value))"
                :rules="[
                    val => val !== null && val !== '' || 'Required',
                ]"
                :input-style="{width:type == 'xs' ? '30vw' : '11vw'}"
            />
            <q-input
                filled
                type="number"
                v-model="reactiveFormState.cvv"
                label="CVV *"
                lazy-rules
                dense
                :rules="[
                    val => val !== null && val !== '' || 'Required',
                    val => val > 0 && val < 999 || 'Wrong CVV'
                ]"
                :input-style="{width:type == 'xs' ? '30vw' : '11vw'}"

            />
        </div>
        <q-input
            filled
            type="text"
            v-model="reactiveFormState.cardHolderName"
            label="CardHolder Name *"
            lazy-rules
            dense
            :rules="[
                val => val !== null && val !== '' || 'Enter Cardholder Name',
            ]"

        />
        <hr />
        <div class="text-h6">Add Billing Address</div>
        <q-input
            filled
            type="text"
            v-model="reactiveFormState.billingAddress.addressLine1"
            label="Address Line 1"
            lazy-rules
            dense
        />
        <q-input
            filled
            type="text"
            v-model="reactiveFormState.billingAddress.addressLine2"
            label="Address Line 2"
            lazy-rules
            dense
        />
        <div class="row justify-between items-start" >
            <q-input
                filled
                type="text"
                v-model="reactiveFormState.billingAddress.city"
                label="City"
                lazy-rules
                dense
                :input-style="{width:type == 'xs' ? '30vw' : '11vw'}"
            />
            <q-input
                filled
                type="text"
                v-model="reactiveFormState.billingAddress.state"
                label="State"
                lazy-rules
                dense
                :input-style="{width:type == 'xs' ? '30vw' : '11vw'}"

            />
        </div>
        <q-input
            filled
            type="text"
            v-model="reactiveFormState.billingAddress.country"
            label="Country"
            lazy-rules
            dense
        />
        <q-input
            filled
            type="text"
            v-model="reactiveFormState.billingAddress.zipCode"
            label="Zip Code"
            lazy-rules
            dense
        />
    </q-form>
</template>

<script setup lang="ts">
import { useCardsStore } from '@/stores/cards';
import { useBreakpoints } from '@/utils/composables/useBreakpoints';
import { detectCardType } from '@/utils/helper';
import type { formStateProps } from '@/views/MobileHomeView.vue';
import { reactive, ref, toRaw } from 'vue';


const initialFormState = {
    id:"",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
    freezed: false,
    billingAddress :{
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        zipCode: ""
    }
}


const { addNewCard } = useCardsStore()
const cardValue = ref<string | undefined>('no-value')
const reactiveFormState:formStateProps = reactive(initialFormState)
const { type } = useBreakpoints()

const addNewCardWrapper = () => {
    let payload = toRaw(reactiveFormState)
    addNewCard({
        ...payload,
        cardNumber: payload.cardNumber.split(' ').join(''),
        id: String(Math.floor(Math.random() *345345354))
    })
}

const onReset = () => {
    Object.assign(reactiveFormState, initialFormState);
}

const detectCardTypeWrapper = (value:any) => {
    reactiveFormState.cardNumber = cc_number_format(value)
    cardValue.value = detectCardType(value.split(' ').join(''))
}

function cc_number_format(value:string) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

function cc_expires_format(value:string) {
    let formatted_value = value.replace(
        /[^0-9]/g, '' // To allow only numbers
    ).replace(
        /^([2-9])$/g, '0$1' // To handle 3 > 03
    ).replace(
        /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
    ).replace(
        /^0{1,}/g, '0' // To handle 00 > 0
    ).replace(
        /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
    );
    reactiveFormState.expiryDate = formatted_value
    return formatted_value
}

</script>

<style scoped>

</style>