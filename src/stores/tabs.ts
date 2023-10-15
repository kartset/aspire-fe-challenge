import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTabsStore = defineStore('tabs', () => {
  const currentTab = ref('')
  
  const setCurrentTab = (value:string) => {
    currentTab.value = value
  }

  return { currentTab, setCurrentTab }
})
