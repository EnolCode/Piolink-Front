import './assets/scss/main.scss'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
import VueCookies from 'vue-cookies'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Oruga)
app.use(VueCookies,{expires: '1d'})

app.mount('#app')
