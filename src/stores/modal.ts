import { ref, } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {

    // modal toggal state and toggle function to change 
    // the value to open and close the modal
    const modal = ref(false)
    function toggleModal() {
        modal.value = !modal.value
    }

  return { modal, toggleModal }
})
