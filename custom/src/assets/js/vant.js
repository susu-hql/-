import Vue from 'vue'
import { Button } from 'vant';
import {Card,Area,AddressEdit,DropdownMenu, DropdownItem, Popup,DatetimePicker } from 'vant';
import { Field,  Sticky} from 'vant';
import { Tabbar, TabbarItem,Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';
import { Image } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Overlay,Dialog } from 'vant';
Vue.use(Card,Popup,Area );

import { Tab, Tabs } from 'vant';
import { Step, Steps } from 'vant';

Vue.use(Step).use(Steps);
Vue.use(Tab).use(Tabs);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(Button,AddressEdit,DatetimePicker);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Overlay);

Vue.use(Icon);


Vue.use(Cell).use(CellGroup);
Vue.use(Image);
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Tabbar).use(TabbarItem);

Vue.use(Field);
Vue.use(Sticky);
Vue.use(Button);
