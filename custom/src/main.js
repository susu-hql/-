import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './assets/js/vant'
import http from './util/http'
import vueAxios from 'vue-axios'



Vue.use(vueAxios, http)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
