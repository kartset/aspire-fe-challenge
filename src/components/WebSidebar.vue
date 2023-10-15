<template>
    <div style="flex:1.5;background-color:#0C365A;" class="column q-mr-xl">
        <div style="flex:2" class="column justify-center items-start q-gutter-md q-px-lg" >
            <img src="../assets/aspire_logo_full_green.svg" />
            <p style="color:white;opacity:0.3;text-align:start;font-size:13px" >
                Trusted way of banking for 3,000+ SMEs and startups in Singapore
            </p>
        </div>
        <div class="column" style="flex:4" >
            <div style="flex:1" v-for="(tab, i) in sidebarTabs" :key="i" class="row q-gutter-sm q-px-lg" >
                <q-icon style="font-size: 20px;" :name="tab.icon" />
                <p style="color:white" >{{ tab.name }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const sidebarTabs = [
    {
        name:'Home',
        icon: 'img:/src/assets/home.svg',
        selected: false
    },
    {
        name: 'Cards',
        icon:'img:/src/assets/pay_selected.svg',
        selected:true,
    },
    {
        name:'Payments',
        icon: 'img:/src/assets/payments.svg',
        selected: false
    },
    {
        name:'Credit',
        icon: 'img:/src/assets/credit.svg',
        selected: false
    },
    {
        name:'Settings',
        icon: 'img:/src/assets/settings.svg',
        selected: false
    },
]

</script>

<style lang="scss" scoped>

</style>