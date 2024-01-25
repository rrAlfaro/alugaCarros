<template>
    <main class="container mx-auto">
        <nav>
            <nav class="flex justify-between items-center h-[10vh]">
                <div class="w-1/2">
                    <p>DEVRRA</p>
                    <span></span>                    
                </div>
                <div class="w-1/2">
                    <ul class="flex items-center justify-between child:w-1/5">
                        <li v-for="menuItem in menuItems" :key="menuItem.id" class="text-center first:text-left">
                            <button type="button">
                                <p>
                                    {{ menuItem.name }}
                                </p>
                            </button>
                        </li>
                        <li class="text-right">
                            <button type="button">
                                <p>CV</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </nav>
        <div>
        
        </div>
        <div></div>
        <div></div>
    </main>
</template>

<script setup>
const menuItems = [
    {
        id: 1,
        name: 'Início',
        href: '#'
    },
    {
        id: 2,
        name: 'Projetos',
        href: '#'
    },
    {
        id: 3,
        name: 'Sobre mim',
        href: '#'
    },
]
</script>

<style scoped>
</style>