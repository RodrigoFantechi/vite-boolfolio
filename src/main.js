import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.scss'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleUp)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
