import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faBell,
  faBorderAll,
  faEnvelope,
  faListCheck,
  faPenToSquare,
  faTrashCan,
  faUser,
  faUserSecret,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'

/* add icons to the library */
library.add(
  faUserSecret,
  faUser,
  faBorderAll,
  faListCheck,
  faBell,
  faEnvelope,
  faPenToSquare,
  faTrashCan,
  faXmark,
)
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
