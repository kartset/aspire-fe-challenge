<template>
    <div class="row q-gutter-md" style="margin-top:5px;margin-bottom:10px;" >
        <div style="flex: 1;" class="row justify-start items-start " >
            <component :is="props.listItem.icon" />
        </div>
        <div style="flex:5  ;" class="column">
            <div class="row justify-between " >
                <div class="column" >
                    <div style="font-size: 14px;font-weight:400" >{{ props.listItem.name }}</div>
                    <div style="color:#D0D0D0;" >{{ props.listItem.date }}</div>
                </div>
                <div class="row items-baseline " >
                    <p 
                        :class="{
                            expense_font_color_credit:props.listItem.type == 'credit', 
                            expense_font_color_debit: props.listItem.type =='debit' 
                        }" 
                    >
                        {{ (props.listItem.type == 'credit' ? '+' : '-') + 'S$' +  props.listItem.expense }}
                    </p>
                    <q-icon name="img:public/next.svg" />
                </div>
            </div>
            <div style="margin-top: 7px;" class="row justify-start items-center" >
                <q-avatar size="24px" style="background-color:#325BAF;" >
                    <q-icon style="font-size: 10px;" name="img:public/business-and-finance.svg" />
                </q-avatar>
                <div style="margin-left:8px;font-size:12px;color:#4F72BA;font-weight:500" >{{ props.listItem.comment }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

let props = defineProps<{listItem:any}>()

</script>

<style lang="scss" scoped>

.expense_font_color_credit {
    color:#01D167;
    font-weight:550;
    margin-right:7px;
}

.expense_font_color_debit {
    color:black;
    font-weight:550;
    margin-right:7px;
}

</style>