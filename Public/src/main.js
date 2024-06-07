import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router, VueAxios, Axios).mount('#app')
