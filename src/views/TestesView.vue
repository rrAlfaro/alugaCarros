<template>
    <div>
        <nav class="">
            <div class="relative h-[10vh] bg-black">
                <ul class="flex justify-between items-center w-full h-full">
                    <li v-for="menuItem in menuData" :key="menuItem.id" class="flex items-center justify-center w-1/3 h-full z-10">
                        <i class="text-white text-3xl" :class="[{ 'testee' : menuItem.id === 3}, { 'testeereverse' : menuItem.id === 1}, menuItem.icon]"></i>
                    </li>
                    <div class="absolute flex items-center justify-center w-full top-10 tst start z-0">
                        <div class="w-24 h-24 rounded-full bg-white "></div>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
const menuData = [
    {
        id: 1,
        icon: 'fa-solid fa-house',
        href: '#'
    },
    {
        id: 2,
        icon: 'fa-solid fa-code',
        href: '#'
    },
    {
        id: 3,
        icon: 'fa-solid fa-ellipsis',
        href: '#'
    },
]
</script>

<style>
.start {
    transform: translateX(-33.33%);
}

.tst {
    animation: menuSlideB1ToB3 1s forwards 1s;
}

.slideDown {
    place-self: end;
}

.testee {
    animation: slideDownIcon 1s normal forwards 1s ease-in-out ;
}

.testeereverse {
    animation: slideUpIcon 1s  forwards 1s;
}

@keyframes slideUpIcon {
    from {
        transform: translateY(100%);
        color: chocolate;
    }

    to {
        transform: translateY(0);
        scale: 1;
    }
}
@keyframes slideDownIcon {
    from {
        transform: translateY(0);
        color: white;
    }

    60% {
        transform: translateY(100%);
        color: chocolate;
    }
    80% {
        transform: translateY(90%);
        color: chocolate;
    }
    to {
        transform: translateY(100%);
        color: chocolate;
        scale: 1.1;
    }
}

@keyframes menuSlideB1ToB2 {
    from {
        transform: translateX(-33.33%);
    }

    50% {
        transform: translateX(35.33%);
    }

    70% {
        transform: translateX(32.33%);
    }

    to {
        transform: translateX(33.33%);
    }
}

@keyframes menuSlideB1ToB3 {
    from {
        transform: translateX(-33.33%);
    }

    50% {
        transform: translateX(35.33%);
    }

    70% {
        transform: translateX(32.33%);
    }

    to {
        transform: translateX(33.33%);
    }
}

@keyframes menuSlideB2ToB3 {
    from {
        transform: translateX(-33.33%);
    }

    50% {
        transform: translateX(35.33%);
    }

    70% {
        transform: translateX(32.33%);
    }

    to {
        transform: translateX(33.33%);
    }
}


</style>