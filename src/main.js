import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.scss'
import { router } from './router'
createApp(App).use(router).mount('#app')
