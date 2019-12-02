import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import './assets/style/resize.css'
import vueAxios from 'vue-axios'
import http from './utils/http'
import { Button, Icon ,Container ,Header,Aside,Main,Footer,Menu,MenuItem,MenuItemGroup} from 'element-ui';
import { Submenu } from 'element-ui';

Vue.use(vueAxios, http)
Vue.use( Button)
Vue.use(Icon)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)

Vue.config.productionTip = false

Vue.prototype.formatWord = function (val) {
  return val.replace(/\n/g, '<br>')
},

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

