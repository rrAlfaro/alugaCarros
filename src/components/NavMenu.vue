<template>
    <header class="sticky top-0 flex items-center justify-between p-4 h-[10vh] bg-white ">
        <button type="button"><a href="#start"><img class="h-10" src="/img/logo/color-logo.png" alt="Logomarca da Aluga Carros"></a></button>
        <nav>
            <button @click="menuCtrl = !menuCtrl" class="text-4xl z-20" :class="{ 'fixed top-0 right-0 my-4 mx-4 text-5xl': !menuCtrl }">
                <i :key="menuCtrl ? 'bars' : 'xmark'" :class="menuCtrl ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'"></i>
            </button>
            <ul class="fixed top-0 right-0 w-screen h-screen z-10 flex flex-col items-center justify-center text-2xl bg-[#FF914D] origin-right hide-menu"
                :class="{ 'show-menu': !menuCtrl }">
                <li v-for="menuItem in menuItems" :key="menuItem.name"
                    class="py-8 opacity-0 hover:font-bold active:font-bold"
                    :class="[{ 'hidden': menuCtrl }, { 'link-animation': !menuCtrl }]">
                    <button type="button" @click="menuCtrl = !menuCtrl"><a :href="menuItem.href">{{ menuItem.name }}</a></button>
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
        href: '#start'
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