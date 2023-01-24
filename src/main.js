import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.scss'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
library.add(faAngleUp, faSquareGithub,faLinkedin, faAngleDown )
library.add(faFacebookF)
library.add(faYoutube)
library.add(faTwitter)
library.add(faInstagram)
library.add(faPaypal)
library.add(faLinkedinIn)
library.add(faTelegram)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
