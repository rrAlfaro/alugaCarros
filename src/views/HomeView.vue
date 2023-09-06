<template>
  <div>
    <NavMenu class="z-20" />

    <main>
      <section class="flex flex-col items-center justify-center h-[80vh] my-16 mx-[10%] text-center md:max-w-sm">
        <h3 class="font-bold">Planeje, explore e inspire-se</h3>

        <h1 class="p-2 py-6 text-4xl font-extrabold">Para sua viagem, <b class="text-4xl text-[#FF914D]">nosso carro</b>
        </h1>

        <p class="px-1 mt-4 font-normal text-slate-800">Descubra o melhor carro para você, economize, viage sem
          preocupações e muito mais.</p>

        <div
          class="flex flex-col items-center justify-center w-full my-16 mx-auto gap-3 text-center text-xl font-extrabold text-white ">
          <button class="w-4/5 px-4 py-3 rounded-sm bg-[#FF914D] transition-all active:bg-[#ff7e2e] hover:bg-[#ff7e2e]"><a
              class="flex items-center justify-between w-full" href="#booking">Reserve
              <i class="fa-solid fa-chevron-right"></i></a></button>
          <button
            class="flex items-center justify-between w-4/5 px-4 py-3 rounded-sm bg-gray-800 transition-all active:bg-black hover:bg-black">
            <a class="flex items-center justify-between w-full" href="#footer">Saiba
              mais <i class="fa-solid fa-chevron-right"></i></a>
          </button>
        </div>
      </section>



      <section class="mx-[10%] my-16 lg:max-w-6xl lg:mx-auto">
        <div class="text-center mb-10">
          <p class="font-bold text-slate-800">Planeje sua viagem</p>
          <h2 class="p-1 text-3xl font-extrabold">Aluguel de forma rápida e fácil</h2>
        </div>

        <div
          class="flex flex-col items-center justify-center text-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-row">
          <div v-for="item in planningSection" :key="item.title"
            class="first:pt-6 md:first:pt-0 md:flex md:flex-col md:items-center md:justify-center">
            <i class="text-5xl text-[#FF914D] p-2" :class="item.icon"></i>
            <h3 class="text-xl font-bold p-2">{{ item.title }}</h3>
            <p class="text-sm p-2 max-w-sm md:max-w-xs">{{ item.content }}</p>
          </div>
        </div>
      </section>

      <section id="booking" class="py-16 bg-gray-900 text-white">
        <div class="mx-[10%] max-w-lg sm:mx-auto">
          <div class="text-center mb-10">
            <p class="font-bold ">Nos diga onde e quando</p>
            <h2 class="p-1 text-3xl font-extrabold">Reserve um carro</h2>
          </div>

          <div class="flex flex-col py-2">
            <div class="flex items-center p-2">
              <i class="fa-solid fa-car text-[#FF914D] text-xl"></i>
              <label for="modelo" class="px-2">Modelo</label>
            </div>
            <select name="modelo" id="modelo"
              class="p-2 border border-slate-300 rounded-md bg-white text-sm text-slate-600">
              <option value="" class="font-bold">Selecione um modelo</option>
              <option v-for="car in cars" :key="car.id" :value="car.id">{{ car.mark }} {{ car.model }}</option>
            </select>
          </div>

          <div class="flex flex-col py-2">
            <div class="flex items-center p-2">
              <i class="fa-solid fa-location-dot text-[#FF914D] text-xl"></i>
              <label for="retirada" class="px-2">Local de retirada</label>
            </div>
            <select name="retirada" id="retirada"
              class="p-2 border border-slate-300 rounded-md bg-white text-sm text-slate-600">
              <option value="" class="font-bold">Selecione um local</option>
              <option v-for="store in stores" :key="store.name" :value="store.name">{{ store.name }}</option>
            </select>
          </div>

          <div class="flex flex-col py-2">
            <div class="flex items-center p-2">
              <i class="fa-solid fa-location-dot text-[#FF914D] text-xl"></i>
              <label for="devolucao" class="px-2">Local de devolução</label>
            </div>
            <select name="devolucao" id="devolucao"
              class="p-2 border border-slate-300 rounded-md bg-white text-sm text-slate-600">
              <option value="Florianópolis" class="font-bold">Selecione um local</option>
              <option v-for="store in stores" :key="store.name" :value="store.name">{{ store.name }}</option>
            </select>
          </div>

          <div>
            <div class="flex p-2">
              <i class="fa-regular fa-calendar text-[#FF914D] text-xl"></i>
              <h4 class="px-2">Período de locação</h4>
            </div>
            <VueDatePicker></VueDatePicker>
          </div>

          <div class="pt-10">
            <button
              class="w-full py-2 text-white font-bold rounded-sm bg-[#FF914D] transition-all active:bg-[#ff7e2e] hover:bg-[#ff7e2e]">Reservar</button>
          </div>
        </div>
      </section>

      <section id="fleet" class="mx-[10%] my-16">
        <div class="text-center mb-10">
          <p class="font-bold text-slate-800">Nossa frota</p>
          <h2 class="p-1 text-3xl font-extrabold">Um carro para sua próxima aventura</h2>
        </div>

        <ul class="my-16">
          <li v-for="car in cars" :key="car.id">
            <button @click="carSelect = car.id" class="w-full px-4 py-2 my-1 text-left border border-gray-300 rounded-sm"
              :class="{ 'bg-[#FF914D]': carSelect === car.id }">{{ car.mark }} {{ car.model }}</button>
          </li>
        </ul>

        <div v-for="car in cars" :key="car.id">
          <img v-if="car.id === carSelect" v-show="car.id === carSelect" :src="getCarImage(car.image)"
            class="w-full h-[30vh] my-16 object-contain">
        </div>

        <div v-for="car in cars" :key="car.id">
          <div v-if="car.id === carSelect" class="border border-solid border-[#FF914D] rounded-sm">
            <p class="col-span-2 py-1 px-10 text-xl font-bold text-white bg-[#FF914D]"><i
                class="text-3xl italic font-extrabold">{{ car.price }}</i> /dia</p>
            <div class="flex flex-col divide-y divide-solid divide-slate-400">
              <div class="grid grid-cols-2 divide-x divide-solid divide-slate-400">
                <p class="pl-8 text-lg">Modelo</p>
                <p class="flex items-center justify-center">{{ car.model }}</p>
              </div>
              <div class="grid grid-cols-2 divide-x divide-solid divide-slate-400">
                <p class="pl-8 text-lg">Marca</p>
                <p class="flex items-center justify-center">{{ car.mark }}</p>
              </div>
              <div class="grid grid-cols-2 divide-x divide-solid divide-slate-400">
                <p class="pl-8 text-lg">Ano</p>
                <p class="flex items-center justify-center">{{ car.year }}</p>
              </div>
              <div class="grid grid-cols-2 divide-x divide-solid divide-slate-400">
                <p class="pl-8 text-lg">Motor</p>
                <p class="flex items-center justify-center">{{ car.fuel }}</p>
              </div>
              <div class="grid grid-cols-2 divide-x divide-solid divide-slate-400">
                <p class="pl-8 text-lg">Câmbio</p>
                <p class="flex items-center justify-center">{{ car.transmission }}</p>
              </div>
              <div class="grid grid-cols-2 divide-x divide-solid divide-slate-400">
                <p class="pl-8 text-lg">Portas</p>
                <p class="flex items-center justify-center">{{ car.doors }}</p>
              </div>
              <div class="grid grid-cols-2 divide-x divide-solid divide-slate-400">
                <p class="pl-8 text-lg">Lugares</p>
                <p class="flex items-center justify-center">{{ car.seats }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stores" class="py-16 text-white bg-cover bg-center" :class="bgImageUrl">
        <div class="mb-10 text-center">
          <p class="font-bold">Nossas lojas</p>
          <h2 class="p-1 text-3xl font-extrabold">Nos destinos mais populares</h2>
        </div>
        <div class="flex items-center">
          <button @click="changePlaceControl('left')">
            <i class="fa-solid fa-chevron-left text-5xl p-3 hover:scale-90 active:scale-90"></i>
          </button>

          <div class="w-2/4 mx-auto p-4 bg-transparent/50">
            <div v-for="store in stores" :key="store">
              <button v-if="store.type_id === placeControl"
                class="flex items-center justify-between w-full p-2 transition-all group hover:scale-90 active:scale-90">
                <p
                  class="group-hover:underline group-hover:underline-offset-2 group-active:underline group-active:underline-offset-2">
                  {{ store.name }}</p>
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <button @click="changePlaceControl('right')">
            <i class="fa-solid fa-chevron-right text-5xl p-3 hover:scale-90 active:scale-90"></i>
          </button>
        </div>
      </section>

      <section class="mx-[10%] my-16">
        <div class="mb-10 text-center">
          <p class="font-bold">Fique por dentro de tudo</p>
          <h2 class="p-1 text-3xl font-extrabold">Baixe nosso aplicativo</h2>
        </div>

        <div class="flex flex-col items-center text-center">
          <div class="flex justify-between items-center w-full">
            <div class="flex flex-col text-white">
              <button class="flex items-center p-1 my-1 rounded-md bg-gray-900">
                <i class="fa-brands fa-apple text-4xl mr-2"></i>
                <div class="text-left">
                  <p class="text-sm">Baixar na</p>
                  <p class="text-xl font-bold">App Store</p>
                </div>
              </button>
              <button class="flex items-center p-1 my-1 rounded-md bg-gray-900">
                <i class="fa-brands fa-google-play text-3xl mr-2"></i>
                <div class="text-left">
                  <p class="text-sm">Baixar na</p>
                  <p class="text-xl font-bold">Google Play</p>
                </div>
              </button>
            </div>
            <img src="/img/app/app-icon.png" alt="Ícone do aplicativo" class="w-24">
          </div>
          <h3 class="mt-10 mb-2 text-xl text-center font-bold">Seu aluguel na palma da mão!</h3>
          <p>Compare preços, fale conosco e alugue um carro onde estiver.</p>
        </div>

        <img v-if="false" src="/img/app/app-store.png" alt="Tela do aplicativo">
      </section>

      <section id="faq" class="py-16 bg-gray-900 text-white">
        <div class="mx-[10%]">
          <div class="mb-10 text-center text-[#FF914D]">
            <p class="font-bold">Ficou com dúvidas?</p>
            <h2 class="p-1 text-3xl font-extrabold">Perguntas frequentes</h2>
          </div>

          <ul>
            <li v-for="question in faq" :key="question.id" class="py-2">
              <button @click="changeFaqControl(question.id)" type="button"
                class="flex items-center justify-between w-full pb-2">
                <h3 class="pr-4 text-left text-lg text-[#FF914D]">{{ question.question }}</h3>
                <Transition name="rotate-icon">
                  <i class="fa-solid fa-chevron-right" :class="{ 'fa-rotate-90': faqControl === question.id }"></i>
                </Transition>
              </button>
              <Transition name="show-answer">
                <p v-if="faqControl === question.id" class="pb-2 text-sm">{{ question.answer }}</p>
              </Transition>
              <div class="border border-solid border-[#FF914D] border-collapse"></div>
            </li>
          </ul>
        </div>
      </section>
    </main>

    <footer id="footer" class="py-16 flex flex-col items-center justify-center bg-[#FF914D]">

      <div class="pb-4">
        <h2 class="text-center font-bold">ACESSO CLIENTE</h2>

        <div class="flex flex-col items-center py-2 child:py-1">
          <button class="hover:font-bold active:font-bold">Acesse sua Conta</button>
          <button class="hover:font-bold active:font-bold">Cadastra-se</button>
          <button class="hover:font-bold active:font-bold">Consultar reservas</button>
        </div>
      </div>

      <div class="py-4 cursor-default">
        <h2 class="font-bold">ATENDIMENTO AO CLIENTE</h2>

        <div class="flex flex-col items-center child:py-2">
          <div>
            <div class="flex items-center">
              <i class="fa-solid fa-phone-volume"></i>
              <p class="pl-3">Central de reservas</p>
            </div>
            <p class="text-center">24h - 0800-000-000</p>
          </div>

          <div>
            <div class="flex items-center">
              <i class="fa-brands fa-whatsapp"></i>
              <p class="pl-3">Assistência a clientes</p>
            </div>
            <p class="text-center">24h - (11) 00000-0000</p>
          </div>

          <div>
            <div class="flex items-center">
              <i class="fa-brands fa-whatsapp"></i>
              <p class="pl-3">Assistência a clientes</p>
            </div>
            <p class="text-center">24h - (11) 00000-0000</p>
          </div>

          <div class="flex items-center">
            <i class="fa-solid fa-envelope"></i>
            <p class="pl-3">Envie uma mensagem</p>
          </div>
        </div>
      </div>

      <div class="py-4">
        <h2 class="text-center font-bold">SOBRE NÓS</h2>

        <div class="flex flex-col items-center py-2 child:py-1">
          <button class="hover:font-bold active:font-bold">Aluga carros</button>
          <button class="hover:font-bold active:font-bold">Política de Privacidade</button>
          <button class="hover:font-bold active:font-bold">Termos e Condições</button>
          <button class="hover:font-bold active:font-bold">Código de Conduta</button>
          <button class="hover:font-bold active:font-bold">Trabalhe Conosco</button>
        </div>
      </div>

      <div class="pt-4 child:px-3 child:text-3xl ">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-x-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>

    </footer>
  </div>
</template>

<!-- ############################################################################### -->

<script setup>
//Imports
import { ref, computed } from 'vue';
//Components
import VueDatePicker from '@/components/helpers/VueDatePicker.vue'
import NavMenu from '@/components/NavMenu.vue'

//Data 
const planningSection = [
  {
    title: 'Modelos',
    content: 'Diversos modelos, diversas experiências. Nos diga sua necessidade e te daremos uma solução.',
    icon: 'fa-solid fa-car-on'
  },
  {
    title: 'Reserva',
    content: 'Faça online ou por telefone, é rápido, fácil e sem burocracias. Somos transparentes!',
    icon: 'fa-solid fa-handshake-simple'
  },
  {
    title: 'Atendimento',
    content: 'Nosso atendimento está preparado para te auxiliar com quaisquer dúvidas que possam surgir, antes, durante e depois do aluguel.',
    icon: 'fa-solid fa-headset'
  },
  {
    title: 'SOS',
    content: 'Teve algum problema durante sua viagem? Temos uma equipe de assistência em prontidão para te ajudar. Vamos muito além do aluguel!',
    icon: 'fa-solid fa-car-burst'
  },
]
const cars = [
  {
    id: 1,
    model: 'A3',
    mark: 'Audi',
    year: '2020',
    doors: '4',
    seats: '5',
    fuel: 'Gasolina',
    transmission: 'Automático',
    price: 'R$124',
    image: "/img/cars/audi_a3.png"
  },
  {
    id: 2,
    model: 'Onix',
    mark: 'Chevrolet',
    year: '2019',
    doors: '4',
    seats: '5',
    fuel: 'Gasolina',
    transmission: 'Manual',
    price: 'R$74',
    image: '/img/cars/chevrolet_onix.png'
  },
  {
    id: 3,
    model: 'HB20',
    mark: 'Hyundai',
    year: '2020',
    doors: '4',
    seats: '5',
    fuel: 'Gasolina',
    transmission: 'Automático',
    price: 'R$88',
    image: '/img/cars/hyundai_hb20.png'
  },
  {
    id: 4,
    model: 'Grand Cherokee',
    mark: 'Jeep',
    year: '2017',
    doors: '5',
    seats: '7',
    fuel: 'Gasolina',
    transmission: 'Automático',
    price: 'R$206',
    image: '/img/cars/jeep_grand.png'
  },
  {
    id: 5,
    model: 'Corolla',
    mark: 'Toyota',
    year: '2018',
    doors: '4',
    seats: '5',
    fuel: 'Gasolina',
    transmission: 'Automático',
    price: 'R$118',
    image: '/img/cars/toyota_corolla.png'
  },
  {
    id: 6,
    model: 'Polo',
    mark: 'Volkswagen',
    year: '2018',
    doors: '4',
    seats: '5',
    fuel: 'Diesel',
    transmission: 'Automático',
    price: 'R$110',
    image: '/img/cars/volkswagen_polo.png'
  }
]
const stores = [
  { type_id: 1, name: 'São Paulo' },
  { type_id: 1, name: 'Rio de Janeiro' },
  { type_id: 1, name: 'Porto Alegre' },
  { type_id: 1, name: 'Belo Horizonte' },
  { type_id: 1, name: 'Curitiba' },
  { type_id: 2, name: 'Fortaleza' },
  { type_id: 2, name: 'Salvador' },
  { type_id: 2, name: 'Recife' },
  { type_id: 2, name: 'Florianópolis' },
  { type_id: 2, name: 'Maceió' },
  { type_id: 3, name: 'João Pessoa' },
  { type_id: 3, name: 'Porto Seguro' },
  { type_id: 3, name: 'Osasco' },
  { type_id: 3, name: 'Niterói' },
  { type_id: 3, name: 'Barueri' },
]
const faq = [
  {
    id: 1,
    question: 'O que é necessário para alugar um carro?',
    answer: 'O locatário precisa ter 21 anos, Carteira Nacional de Habilitação (CNH) válida e emitida há mais de 2 anos (CNH definitiva) e cartão de crédito com limite suficiente para o bloqueio caução, também chamado de pré-autorização.',
  },
  {
    id: 2,
    question: 'Como funciona o caução?',
    answer: 'O bloqueio caução ou pré-autorização é um valor retido no cartão de crédito do locatário para a segurança da locadora. Esta quantia, que é determinada pela própria locadora, não é cobrada como uma compra comum, mas sim bloqueada do limite do cartão de crédito. Essa é uma exigência das locadoras, que fazem o bloqueio no momento da retirada do veículo alugado. Mas pode ficar tranquilo! O valor é desbloqueado após a vistoria e entrega do carro nas mesmas condições de retirada.',
  },
  {
    id: 3,
    question: 'É possível devolver o carro em outra loja?',
    answer: 'Sim! Na hora da reserva, basta nos informar o local de devolução e selecionar uma de nossas lojas.',
  },
  {
    id: 4,
    question: 'Preciso devolver o veículo com tanque cheio?',
    answer: 'Nós entregamos o carro com o tanque cheio e é necessário fazer a devolução também com o tanque cheio, porém, caso você não queira se incomodar, pode apenas pagar a taxa de combustivel ao fim da sua locação.',
  }
]

//Variables
const carSelect = ref(1)
const placeControl = ref(1)
const faqControl = ref(0)
//Computed variables
const bgImageUrl = computed(() => {
  switch (placeControl.value) {
    case 2:
      return "bg-[url('/img/backgrounds/sao-paulo.jpg')]"
    case 3:
      return "bg-[url('/img/backgrounds/brasil.jpg')]"
    default:
      return "bg-[url('/img/backgrounds/rio-de-janeiro.jpg')]"
  }
})

//Functions
const getCarImage = (img) => {
  return new URL(img, import.meta.url)
}

const changePlaceControl = (button) => {
  switch (button) {
    case "left":
      if (placeControl.value > 1) {
        placeControl.value--
      }
      break;

    case "right":
      if (placeControl.value < 3) {
        placeControl.value++
      }
      break;
  }
}

const changeFaqControl = (id) => {
  id === faqControl.value ? faqControl.value = 0 : faqControl.value = id
}
</script>

<!-- ############################################################################### -->

<style>
.show-answer-enter-from,
.show-answer-leave-to {
  transform: rotateX(-90deg);
  opacity: 0;
}

.show-answer-enter-to,
.show-answer-leave-from {
  transform: rotateX(0);
  opacity: 1;
}

.show-answer-enter-active,
.show-answer-leave-active {
  transform-origin: top;
  transition: 0.5s ease-in-out;
}
</style>