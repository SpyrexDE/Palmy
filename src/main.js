import Vue from 'vue'
import Ionic from '@ionic/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import './theme.css'
import VueAnime from 'vue-animejs';
import VueCompositionApi from '@vue/composition-api'


Vue.config.productionTip = false

Vue.use(Ionic)
Vue.use(firestorePlugin)
Vue.use(VueAnime)
Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
