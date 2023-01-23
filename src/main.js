import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.scss'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faAngleUp, faSquareGithub,faLinkedin )
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
