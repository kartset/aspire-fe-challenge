import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { formStateProps } from '@/views/MobileHomeView.vue'
import { useQuasar } from 'quasar'
import { useModalStore } from './modal'
import { STATUS } from '@/utils/status'

//This is a pinia store to manage states regarding to the credit card 
//operationns (add, delete freeze)
export const useCardsStore = defineStore('cards', () => {
    
    const $q = useQuasar()  //initialising an instance
    const { toggleModal } = useModalStore() //importing toggleModal function from another store
    
    // this is the cards array where are the card data is being stored for now, 
    //initially it has 2 cards for UI
    const cards = ref<formStateProps[]>([   
        {
            id: '1', //unique id
            cardNumber: '4687790028237293', //unique card number
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

    // this is a pointer to the current card shown in the carousel, 
    // we need this pointer to find and take actions for that specific 
    // card when it is on screen/selected
    const currentCard = ref(cards.value[0].id)
    
    //status variable for add new card
    const addNewCardSTATUS = ref(STATUS.NOT_STARTED)

    const setCurrentCard = (id:string) => { //setter for the currentCardId
        currentCard.value = id
    }
    
    //function to add a new card and it'll be added to the carousel
    const addNewCard = async (cardDetails:formStateProps) => {    
    
        try {
            //checks for if there exist any card for same card number
            const existingCard = cards.value.filter((card) => card.cardNumber == cardDetails.cardNumber)
            
            if(existingCard.length > 0) {
                throw new Error('Card Already Exist')
            }

            addNewCardSTATUS.value = STATUS.LOADING
            await new Promise((resolve, reject) => { // resolving a promise
                setTimeout(() => {  //making it an async operation
                    cards.value = [...cards.value, cardDetails]
                    addNewCardSTATUS.value = STATUS.SUCCESS
                    toggleModal()
                    resolve('')
                }, 3000)
            }).then(() => {
                $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Submitted'
                })
            })

        } catch (error:any) {
            //if there is any error status is failed, modal will get closed and 
            // error toast will be shown
            toggleModal()
            addNewCardSTATUS.value = STATUS.FAILED 
            $q.notify({
                color: 'red-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: error.message
            })
        }
    }

    // for delete a card operation
    const deleteCard = (id:string) => {
        try {
            cards.value = cards.value.filter((card) => card.id != id)
            if(cards.value.length > 0) {
                setCurrentCard(cards.value[0].id)
            }
            toggleModal()
            $q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: 'Card Deleted Successfully'
            })
        } catch (error:any) {
            toggleModal()
            $q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: error.message
            })
        }

    }

    // for freeze a card operation
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
            $q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: 'Card Freezed Successfully'
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

    // returning the states and methods to be used in components 
    return { 
        cards, currentCard, addNewCardSTATUS,
        setCurrentCard, addNewCard, deleteCard, 
        freezeCard 
    }
})
