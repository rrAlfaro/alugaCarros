<template>
    <header class="sticky top-0 flex items-center justify-between p-4 h-[10vh] bg-white ">
        <button type="button"><a href="#start"><img class="h-10 lg:h-12" src="/img/logo/color-logo.png"
                    alt="Logomarca da Aluga Carros"></a></button>
        <nav class="md:hidden">
            <button @click="menuCtrl = !menuCtrl" class="text-4xl z-20"
                :class="{ 'fixed top-0 right-0 my-4 mx-4 text-5xl': !menuCtrl }">
                <i :key="menuCtrl ? 'bars' : 'xmark'" :class="menuCtrl ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'"></i>
            </button>
            <ul class="fixed top-0 right-0 w-screen h-screen z-10 flex flex-col items-center justify-center text-2xl bg-[#FF914D] origin-right hide-menu"
                :class="{ 'show-menu': !menuCtrl }">
                <li v-for="menuItem in menuItems" :key="menuItem.name"
                    class="py-8 opacity-0 hover:font-bold active:font-bold"
                    :class="[{ 'hidden': menuCtrl }, { 'link-animation': !menuCtrl }]">
                    <button type="button" @click="menuCtrl = !menuCtrl"><a :href="menuItem.href">{{ menuItem.name
                    }}</a></button>
                </li>
            </ul>
        </nav>
        <nav class="hidden md:flex">
            <ul class="flex items-center">
                <li v-for="menuItem in menuItems" :key="menuItem.name" class="px-2 last:pr-0 first:pl-0 lg:px-4">
                    <transition name="link-animation">
                        <a :href="menuItem.href" class="hover:font-bold menu-link" :class="{ 'p-1 text-gray-700 font-bold border-4 border-solid rounded-sm border-[#FF914D] hover:bg-[#FF914D] hover:text-white' : menuItem.name === 'Acesse sua conta'}">{{ menuItem.name }}</a>
                    
                    </transition>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
//Imports
import { ref } from 'vue';
//Data
const menuItems = [
    {
        name: 'Início',
        href: '#'
    },
    {
        name: 'Reserve',
        href: '#booking'
    },
    {
        name: 'Nossa frota',
        href: '#fleet'
    },
    {
        name: 'Nossas lojas',
        href: '#stores'
    },
    {
        name: 'Contato',
        href: '#footer'
    },
    {
        name: 'Acesse sua conta',
        href: '#'
    },
]
//Variables
const menuCtrl = ref(true)
</script>

<style>
.hide-menu {
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out
}

.show-menu {
    transform: translateX(0);
}

.link-animation {
    animation: navLinkFade 0.5s forwards 0.3s;
}

.menu-link {
    transition: all 0.2s ease-in-out;
}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(10em);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>