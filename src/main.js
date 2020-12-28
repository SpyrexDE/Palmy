import Vue from 'vue'
import Ionic from '@ionic/vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import './theme.css'

Vue.config.productionTip = false

Vue.use(Ionic)
Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
