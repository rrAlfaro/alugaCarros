<template>
    <header>
        <nav class="absolute w-screen h-screen overflow-hidden">
            <button @click="menuCtrl = !menuCtrl"  class="absolute right-0 p-4 text-4xl">
                <i key="bars" v-if="menuCtrl" class="fa-solid fa-bars"></i>
                <i key="xmark" v-else class="fa-solid fa-xmark" ></i>
            </button>

            <ul class="flex flex-col items-center justify-center h-full text-xl transition bg-[#FF914D]" :class="{'origin-right translate-x-full overflow-hidden': menuCtrl}">
                <li v-for="menuItem in menuItems" :key="menuItem.name" class="py-4 hover:font-bold">
                    <router-link :to="menuItem.href">{{ menuItem.name }}</router-link>
                </li>
            </ul>
        </nav>
        <slot></slot>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const menuItems = [
    {
        name: 'Início',
        href: '/'
    },
    {
        name: 'Reserve',
        href: '/'
    },
    {
        name: 'Nossa frota',
        href: '/'
    },
    {
        name: 'Nossa equipe',
        href: '/'
    },
    {
        name: 'Contato',
        href: '/'
    },
]

const menuCtrl = ref(false)
</script>