<template>
    <VueDatePicker  
    v-model="date" 
    range
    :format="format"
    :enable-time-picker="false"
    auto-apply 
    allow-prevent-default
    hide-input-icon
    placeholder="Início da reserva"
    ></VueDatePicker>
</template>
  
<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref([new Date(), new Date()]);

const format = ([data1, data2]) => {
    const day1 = data1.getDate();
    const month1 = data1.getMonth() + 1;
    const year1 = data1.getFullYear();
    const day2 = data2.getDate();
    const month2 = data2.getMonth() + 1;
    const year2 = data2.getFullYear();

    return `${day1}/${month1}/${year1} até ${day2}/${month2}/${year2}`;
}
</script>