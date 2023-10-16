import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('forms', () => {
  
    // current form id state and a setter for the same
    const currentFormId = ref<string>()
  
    function setCurrentFormId(value:string) {
    currentFormId.value = value
  }

  return { currentFormId, setCurrentFormId }
})
