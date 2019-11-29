import Vue from 'vue'
import { Button } from 'vant';
import {Card,Area,Field,AddressEdit,DropdownMenu, DropdownItem, Popup,DatetimePicker } from 'vant';

Vue.use(Card,Field,Popup,Area );

Vue.use(Button,AddressEdit,DatetimePicker);
Vue.use(DropdownMenu).use(DropdownItem);
import { Field,  Sticky} from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';
import { Image } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);


Vue.use(Cell).use(CellGroup);
Vue.use(Image);
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Tabbar).use(TabbarItem);

Vue.use(Field);
Vue.use(Sticky);
Vue.use(Button);
