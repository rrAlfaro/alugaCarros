<template>
  <div>
    <NavMenu class="z-20" />

    <main class="mx-[10%]">
      <section class="flex flex-col items-center justify-center h-[55vh] mx-auto max-w-[18rem] text-center">
        <h3 class="font-bold">Planeje, explore e inspire-se</h3>
        <h1 class="p-2 py-6 text-4xl font-extrabold">Para sua viagem, <b class="text-4xl text-[#FF914D]">nosso carro</b>
        </h1>
        <p class="px-1 mt-4 font-normal text-slate-800">Descubra o melhor carro para você, economize, viage sem
          preocupações e muito mais.</p>
      </section>

      <section
        class="flex flex-col items-center justify-center h-[35vh] mx-auto max-w-[18rem] gap-3 text-center text-xl font-extrabold text-white">
        <button
          class="flex items-center justify-between w-4/5 px-4 py-3 rounded-sm bg-[#FF914D] transition-all active:bg-[#ff7e2e] hover:bg-[#ff7e2e]">Reserve
          <i class="fa-solid fa-chevron-right"></i></button>
        <button
          class="flex items-center justify-between w-4/5 px-4 py-3 rounded-sm bg-gray-800 transition-all active:bg-black hover:bg-black">Saiba
          mais <i class="fa-solid fa-chevron-right"></i></button>
      </section>

      <section class="my-16">
        <div class="text-center mb-10">
          <p class="font-bold text-slate-800">Planeje sua viagem</p>
          <h2 class="p-1 text-3xl font-extrabold">Aluguel de forma rápida e fácil</h2>
        </div>

        <div class="flex flex-col items-center justify-center text-center gap-10">
          <div v-for="item in planningSection" :key="item.title" class="first:pt-6">
            <i class="text-5xl text-[#FF914D] p-2" :class="item.icon"></i>
            <h3 class="text-xl font-bold p-2">{{ item.title }}</h3>
            <p class="text-sm p-2">{{ item.content }}</p>
          </div>
        </div>
      </section>

      <section class="my-16">
        <div class="text-center mb-10">
          <p class="font-bold text-slate-800">Nos diga onde e quando</p>
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
            <option v-for="store in stores" :key="store" :value="store">{{ store }}</option>
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
            <option v-for="store in stores" :key="store" :value="store">{{ store }}</option>
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
      </section>

      <section class="my-16">
        <div class="text-center mb-10">
          <h2 class="p-1 text-3xl font-extrabold">Nossa frota</h2>
          <p class="font-bold text-slate-800">Um carro para sua próxima aventura</p>
        </div>

        <ul class="my-16">
          <li v-for="car in cars" :key="car.id">
            <button @click="carSelect = car.id" class="w-full px-4 py-2 my-1 text-left border border-gray-300 rounded-sm"
              :class="{ 'bg-[#FF914D]': carSelect === car.id }">{{ car.mark }} {{ car.model }}</button>
          </li>
        </ul>

        <div v-for="car in cars" :key="car.id">
          <img v-if="car.id === carSelect" v-show="car.id === carSelect" :src="getCarImage(car.image)"
            class="w-full h-[16vh] my-16 object-cover">
          <table v-if="car.id === carSelect" class="divide-y-2 divide-black">
            <tr class="divide-y divide-black">
              <th>{{ car.price }} /dia</th>
            </tr>
            <tr>
              <th class="divide-y divide-black">Modelo</th>
              <td>{{ car.model }}</td>
            </tr>
            <tr>
              <th>Marca</th>
              <td>{{ car.mark }}</td>
            </tr>
            <tr>
              <th>Ano</th>
              <td>{{ car.year }}</td>
            </tr>
            <tr>
              <th>Motor</th>
              <td>{{ car.fuel }}</td>
            </tr>
            <tr>
              <th>Câmbio</th>
              <td>{{ car.transmission }}</td>
            </tr>
            <tr>
              <th>Portas</th>
              <td>{{ car.doors }}</td>
            </tr>
            <tr>
              <th>Lugares</th>
              <td>{{ car.seats }}</td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
//Imports
import { ref, computed } from 'vue';
//Components
import VueDatePicker from '@/components/helpers/VueDatePicker.vue'
import NavMenu from '@/components/NavMenu.vue'

//Data 
const planningSection = ref([
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
])
const cars = ref([
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
    image: "../assets/img/cars/audi_a3.png"
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
    image: '../assets/img/cars/chevrolet_onix.png'
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
    image: '../assets/img/cars/hyundai_hb20.png'
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
    image: '../assets/img/cars/jeep_grand.png'
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
    image: '../assets/img/cars/toyota_corolla.png'
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
    image: '../assets/img/cars/volkswagen_polo.png'
  }
])
const stores = ref(['Florianópolis', 'Joinville', 'Jaraguá do Sul', 'Curitiba', 'Balneário Camboriú', 'Blumenau', 'Penha', 'Pomerode'])

//Variables
const carSelect = ref(1)

//Functions
const getCarImage = (img) => {
  return new URL(img, import.meta.url)
}
</script>
