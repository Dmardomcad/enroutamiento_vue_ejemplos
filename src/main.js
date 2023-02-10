import { createApp } from 'vue'
import App from './App.vue'

import router from './modules/router/router'
import './assets/main.css'

createApp(App).use(router).mount('#app')