import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExpansionStore = defineStore('expansion', () => {
    
    const expand=  ref(false)

    const toggleExpand = () => {
        expand.value = !expand.value
    }
    return { expand, toggleExpand }
})
