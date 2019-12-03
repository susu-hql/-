import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import 'amfe-flexible'
import './assets/js/vant'
import http from './utils/http'
import vueAxios from 'vue-axios'

Vue.use(vueAxios, http)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
