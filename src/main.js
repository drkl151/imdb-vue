import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import vueDebounce from 'vue-debounce'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).use(VueSplide).use(vueDebounce).mount('#app')
