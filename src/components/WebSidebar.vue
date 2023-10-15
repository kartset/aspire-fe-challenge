<template>
    <aside style="flex:1.5;background-color:#0C365A;" class="column q-mr-xl">
        <div style="flex:2" class="column justify-center items-start q-gutter-md q-px-lg" >
            <img src="/public/aspire_logo_full_green.svg" />
            <p style="color:white;opacity:0.3;text-align:start;font-size:13px" >
                Trusted way of banking for 3,000+ SMEs and startups in Singapore
            </p>
        </div>
        <ul class="column" style="flex:4" >
            <li style="flex:1" v-for="(tab, i) in sidebarTabs" :key="i" class="row q-gutter-sm q-px-lg" >
                <q-icon style="font-size: 20px;" :name="tab.icon" />
                <p style="color:white" >{{ tab.name }}</p>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts" setup>

const sidebarTabs = [
    {
        name:'Home',
        icon: 'img:home.svg',
        selected: false
    },
    {
        name: 'Cards',
        icon:'img:pay_selected.svg',
        selected:true,
    },
    {
        name:'Payments',
        icon: 'img:payments.svg',
        selected: false
    },
    {
        name:'Credit',
        icon: 'img:credit.svg',
        selected: false
    },
    {
        name:'Settings',
        icon: 'img:settings.svg',
        selected: false
    },
]

</script>

<style lang="scss" scoped>

</style>