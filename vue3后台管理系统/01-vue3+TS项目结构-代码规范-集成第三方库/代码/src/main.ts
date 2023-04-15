import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

import 'normalize.css'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
