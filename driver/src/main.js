import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './assets/js/vant'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap,{
    ak:'百度地图秘钥'		//使用申请的百度地图秘钥
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
