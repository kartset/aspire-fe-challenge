import { computed, onMounted, onUnmounted, ref } from "vue"

// This is a vue composable, which let us monitor the change in screen 
// size and serve the home view regarding to it. This composable removes 
// the event listner when the component where this composable is used is unmounted

export const useBreakpoints = () => {
  const windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  
  const type = computed(() => {
    if (windowWidth.value < 550) return 'xs'
    if (windowWidth.value >= 550 && windowWidth.value < 1200) return 'md'
    else return 'lg' // Fires when windowWidth.value >= 1200
  })

  const width = computed(() => windowWidth.value)

  return { width, type }
}