<template>
    <header>
        <nav class="w-screen h-screen bg-[#FF914D]">
            <button class="absolute right-0 p-4 text-4xl">X</button>
            <ul class="flex flex-col items-center justify-center h-full text-xl">
                <li v-for="menuItem in menuItems" :key="menuItem.name" class="py-4">
                    <router-link :to="menuItem.href">{{ menuItem.name }}</router-link>
                </li>
            </ul>
        </nav>
        <!-- <div>
            <img src="../assets/img/logo.png" alt="Logomarca da Aluga Carros">
        </div> -->
    </header>
</template>

<script setup>
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
</script>