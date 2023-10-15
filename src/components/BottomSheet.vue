<template>
    <Teleport to="body">
        <div class="q-pa-md">      
            <q-card
                style="border-radius: 20px;"
                class="slide-drawer bg-white text-black slide-drawer--bottom text-white fixed-bottom column no-wrap"
                :class="`slide-drawer--open-${drawerMode}`"
                :style="drawerStyle"
            >
                <q-card-section class="q-pa-0" style="background-color: #EDF3FF;">
                    <div class="row justify-between text-center q-pt-sm" v-touch-pan.mouse.vertical="slideDrawer">
                        <CardActions />
                    </div>
                </q-card-section>
                <q-card-section>
                    <div v-for="(item, i) in items" :key="i" class=" q-px-md q-py-sm">
                        <ExpansionItem :item="item" />
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { computed, nextTick, onUnmounted, ref } from 'vue';
import CardActions from './CardActions.vue';
import ExpansionItem from './ExpansionItem.vue';
import RecentTransactions from './RecentTransactions.vue';
import LoremIpsum from './LoremIpsum.vue'


const $q = useQuasar()
const drawerMinHeight = 275
const drawerTopOffset = 100
const drawerOpenRatioHalf = 50
const drawerPos = ref(drawerMinHeight)
const animateTimeout = ref(0)


let items = [
    {
        label: 'Card Details',
        icon: "img:src/assets/card_details.svg",
        content: LoremIpsum
    },
    {
        label: 'Recent Transcations',
        icon: "img:src/assets/recent_trans.svg",
        content: RecentTransactions
    }
]

const drawerMaxHeight = computed(() => {
    return Math.max(0, $q.screen.height - drawerTopOffset)
})

const drawerOpenRatio = computed(() => {
    return Math.round(Math.max(0, drawerPos.value - drawerMinHeight) / Math.max(1, drawerMaxHeight.value - drawerMinHeight) * 100)
})

const drawerStyle = computed(() => {
    return {
    height: `${drawerMaxHeight.value}px`,
    transform: `translateY(${-drawerPos.value}px)`
    }
})

const drawerMode = computed(() => {
    if (drawerOpenRatio.value > drawerOpenRatioHalf) {
    return 'full'
    }
    
    return drawerOpenRatio.value > 0
    ? 'half'
    : 'handler'
})

const slideDrawer = async (ev: any) => {
    const { direction, delta, isFinal } = ev
    
    drawerPos.value = Math.max(drawerMinHeight, Math.min(drawerMaxHeight.value, drawerPos.value - delta.y))
    
    if (isFinal === true) {
    await nextTick(() => {
        const aboveHalf = drawerOpenRatio.value > drawerOpenRatioHalf
        const targetHeight = direction === 'up'
        ? (aboveHalf ? drawerMaxHeight : Math.round(drawerMaxHeight.value / 2))
        : (aboveHalf ? Math.round(drawerMaxHeight.value / 2) : drawerMinHeight)
        
        animateDrawerTo(targetHeight)
    })
    }
}

const animateDrawerTo = (height:any) => {
    clearTimeout(animateTimeout.value)
    
    const diff = height - drawerPos.value
    
    if (diff !== 0) {
    drawerPos.value += Math.abs(diff) < 2 ? diff : Math.round(diff / 2)

    animateTimeout.value = setTimeout(() => {
        animateDrawerTo(height)
    }, 30)
    }
}

onUnmounted(() => clearTimeout(animateTimeout.value))

</script>

<style lang="sass" scoped>

.slide-drawer
  &--bottom
    border-bottom-left-radius: 0
    border-bottom-right-radius: 0
    background-color: #333
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)
    bottom: unset
    top: 100%
    transition: background-color 0.3s ease-in-out

    > div:last-child,
    > img:last-child
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0

</style>