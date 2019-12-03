import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import './assets/style/resize.css'
import vueAxios from 'vue-axios'
import http from './utils/http'
import { Button, Icon ,Container ,Header,Aside,Main,Footer,Menu,MenuItem,MenuItemGroup,Table,TableColumn} from 'element-ui';
import { Submenu,Input,Checkbox,Pagination,Dropdown,DropdownMenu,DropdownItem,Select,Option} from 'element-ui';

import Echarts from 'echarts'

Vue.prototype.echarts = Echarts

Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Option)
Vue.use(Select)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
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
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

