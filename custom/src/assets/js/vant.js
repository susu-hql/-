import Vue from 'vue'
import { Button } from 'vant';
import { Field,  Sticky} from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Tabbar).use(TabbarItem);

Vue.use(Field);
Vue.use(Sticky);
Vue.use(Button);