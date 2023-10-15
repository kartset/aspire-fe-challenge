import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { formStateProps } from '@/views/MobileHomeView.vue'
import { useQuasar } from 'quasar'
import { useModalStore } from './modal'

export const useCardsStore = defineStore('cards', () => {
    const $q = useQuasar()
    const modalStore = useModalStore()
    const { toggleModal } = modalStore
    const cards = ref<formStateProps[]>([
        {
            id: '1',
            cardNumber: '4687790028237293',
            expiryDate:'10/27',
            cvv:'077',
            cardHolderName: "Card Holder",
            billingAddress: {
                addressLine1: 'Fake address line',
                addressLine2: 'Fake address Line',
                city: 'Fakity',
                state:'Fakajasthan',
                country:'Fadia',
                zipCode:'302012'
            },
            freezed: false
        },
        {
            id: '2',
            cardNumber: '4687790028237294',
            expiryDate:'10/27',
            cvv:'077',
            cardHolderName: "Card Holder 2",
            billingAddress: {
                addressLine1: 'Fake address line',
                addressLine2: 'Fake address Line',
                city: 'Fakity',
                state:'Fakajasthan',
                country:'Fadia',
                zipCode:'302012'
            },
            freezed: true
        }
    ])
    const currentCard = ref(cards.value[0].id)

    const setCurrentCard = (id:string) => {
        currentCard.value = id
    }
    
    const addNewCard = (cardDetails:formStateProps) => {
    
        try {
            
            const existingCard = cards.value.filter((card) => card.cardNumber == cardDetails.cardNumber)
            
            if(existingCard.length > 0) {
                throw new Error('Card Already Exist')
            }

            cards.value = [...cards.value, cardDetails]
            
            toggleModal()
            
            $q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: 'Submitted'
            })

        } catch (error:any) {
            
            $q.notify({
                color: 'red-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: error.message
            })
        }
    }

    const deleteCard = (id:string) => {
        cards.value = cards.value.filter((card) => card.id != id)
        if(cards.value.length > 0) {
            setCurrentCard(cards.value[0].id)
        }
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Card Deleted Successfully'
        })

    }

    const freezeCard = async (id:string) => {
        try {
            cards.value = cards.value.map((card) => {
                if(card.id == id) {
                    return {
                        ...card,
                        freezed: !card.freezed
                    }
                }
                return card
            })
        } catch (error:any) {
            $q.notify({
                color: 'red-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: error.message
            })
        }
    }

  return { currentCard, setCurrentCard, cards, addNewCard, deleteCard, freezeCard }
})
