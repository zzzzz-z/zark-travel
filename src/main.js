import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'

import 'normalize.css'
import './assets/css/index.css'

createApp(App).use(router).use(router).use(pinia).mount('#app')
