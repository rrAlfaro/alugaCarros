<template>
    <div class="bg-whitesmoke">
        <div class="container h-screen mx-auto grid grid-cols-2 bg-[#fff0e5]">
            <div class="px-20">
                <p>frontend</p>
                <h1>DEV</h1>
                <h2>TESTE TESTEEE TESTE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales, felis quis lacinia sodales,
                    libero neque placerat eros, quis malesuada mi odio eget metus. Morbi vitae mi vulputate, luctus diam sit
                    amet, cursus ante. Ut nec laoreet metus. Duis at neque mattis elit blandit commodo. Donec ut facilisis
                    sem. Aliquam id nisl laoreet, pretium arcu sed, semper est. Cras consequat sagittis erat, id sagittis mi
                    eleifend quis.</p>
            </div>
            <div class="relative h-full px-20  overflow-hidden">
                <div class="absolute h-full w-full ">
                    <ul class="h-full flex items-center gap-2 teste opacity-0">
                        <li v-for="projeto in projetos" :key="projeto.id"
                            :class="[projeto.image, slideY(projeto.id)]"
                            class="h-1/2 w-20 rounded-md text-white group hover:w-60 transition-all duration-200 ease-in-out">

                            <div class=" grid-rows-2 w-full h-full p-2 hidden group-hover:grid">
                                <div class=" flex justify-between">
                                    <div class="opacity-0 flex flex-col gap-4 slideFromLeft">
                                        <i v-for="stack in projeto.stacks" :key="stack"
                                            class="text-2xl p-2 h-[38px] w-[38px] text-center rounded-full bg-opacity-25 bg-gray-50"
                                            :class="stack"></i>
                                    </div>
                                    <div class="opacity-0 flex flex-col gap-4 slideFromRight">
                                        <i
                                            class="fa-brands fa-github text-2xl p-2 h-[38px] w-[38px] text-center rounded-full bg-opacity-25 bg-gray-50"></i>
                                        <i
                                            class="fa-solid fa-link text-xl p-2 h-[38px] w-[38px] text-center rounded-full bg-opacity-25 bg-gray-50"></i>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-end ">
                                    <div class="opacity-0 rounded-sm bg-opacity-25 bg-gray-50 p-1 slideFromTop">
                                        <h2 class="text-4xl">
                                            {{ projeto.title }}</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales, felis
                                            quis
                                            lacinia sodales,
                                            libero neque placerat eros.</p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <button @click="slideY(8)">AQUI</button>
    </div>
</template>

<script setup>
const projetos = [
    {
        id: 1,
        title: 'Teste 1',
        image: 'bg-gray-500',
        description: '',
        url: '',
        url_git: '',
        stacks: ['fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-html5', 'fa-brands fa-js'],
    },
    {
        id: 2,
        title: 'Teste 2',
        image: 'bg-red-500',
        description: '',
        url: '',
        url_git: '',
        stacks: ['fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-html5', 'fa-brands fa-js'],
    },
    {
        id: 3,
        title: 'Teste 3',
        image: 'bg-green-500',
        description: '',
        url: '',
        url_git: '',
        stacks: ['fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-html5', 'fa-brands fa-js'],
    },
    {
        id: 4,
        title: 'Teste 4',
        image: 'bg-blue-500',
        description: '',
        url: '',
        url_git: '',
        stacks: ['fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-html5', 'fa-brands fa-js'],
    },
    {
        id: 5,
        title: 'Teste 5',
        image: 'bg-yellow-500',
        description: '',
        url: '',
        url_git: '',
        stacks: ['fa-brands fa-vuejs', 'fa-brands fa-css3-alt', 'fa-brands fa-html5', 'fa-brands fa-js'],
    },
]
let a = 0
const slideY = (id) => {
    switch (id % 4) {
        case 1:
            return 'teste1'
            break;

        case 2:
            return 'teste2'
            break;

        case 3:
            return 'teste3'
            break;

        case 0:
            return 'teste4'
            break;

    }
}
</script>

<style scoped>
.slideFromRight {
    animation: slideRight .5s forwards ease-in-out;
}
.slideFromLeft {
    animation: slideLeft .5s forwards ease-in-out;
}
.slideFromTop {
    animation: slideTop .5s forwards ease-in-out;
}

@keyframes hover {
    from {

    }
}

@keyframes slideRight {
    from {
        opacity: 0;
        transform: translateX(30%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideTop {
    from {
        opacity: 0;
        transform: translateY(30%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideLeft {

    from {
        opacity: 0;
        transform: translateX(-30%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.teste {
    animation: slideIn 2.5s forwards 1s ease-in-out;
}

.teste1 {
    animation: slideUpDown1 2s forwards 1.5s ease-in-out, tilt1 1.7s alternate 3.5s infinite ease-in-out;
}

.teste2 {
    animation: slideUpDown2 2s forwards 1.5s ease-in-out, tilt2 1.8s alternate 3.5s infinite ease-in-out;
}

.teste3 {
    animation: slideUpDown3 2s forwards 1.5s ease-in-out, tilt3 1.9s alternate 3.5s infinite ease-in-out;
}

.teste4 {
    animation: slideUpDown4 2s forwards 1.5s ease-in-out, tilt4 2s alternate 3.5s infinite ease-in-out;
}

.tittleSlide1 {
    animation: tittleSlide 1s ease-in-out .3s forwards;
    /* transform: translateX(-20%); */
}

@keyframes tittleSlide {
    from {
        opacity: 0;
        transform: translateX(-10%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 1;
    }

    50% {
        transform: translateX(-1%);
        opacity: 1;
    }


    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideUpDown {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-10%);
    }
}

@keyframes slideUpDown1 {
    from {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-21%);
    }

    to {
        transform: translateY(-20%);
    }
}

@keyframes slideUpDown2 {
    from {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-1%);
    }

    to {
        transform: translateY(-0%);
    }
}

@keyframes slideUpDown3 {
    from {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-6%);
    }

    to {
        transform: translateY(-5%);
    }
}

@keyframes slideUpDown4 {
    from {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-11%);
    }

    to {
        transform: translateY(-10%);
    }
}

@keyframes tilt1 {
    from {
        transform: translateY(-20%);
    }

    to {
        transform: translateY(-19.5%);
    }
}

@keyframes tilt2 {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-0.5%);
    }
}

@keyframes tilt3 {
    from {
        transform: translateY(-5%);
    }

    to {
        transform: translateY(-4.5%);
    }
}

@keyframes tilt4 {
    from {
        transform: translateY(-10%);
    }

    to {
        transform: translateY(-9.5%);
    }
}</style>