
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

app.use(router)
app.component('VueDatePicker', VueDatePicker);

app.mount('#app')
