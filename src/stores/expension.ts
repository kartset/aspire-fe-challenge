import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExpansionStore = defineStore('expansion', () => {
    
    //states for expands
    const recentTransactionExpand=  ref(false)
    const cardDetailsExpand = ref(false)

    const toggleRecentTransactionExpand = () => {
        recentTransactionExpand.value = !recentTransactionExpand.value
    }
    const toggleCardDetailsExpand = () => {
        cardDetailsExpand.value = !cardDetailsExpand.value
    }


    return { 
        recentTransactionExpand, cardDetailsExpand, 
        toggleRecentTransactionExpand, toggleCardDetailsExpand 
    }
})
