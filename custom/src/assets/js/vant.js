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
import { IndexBar, IndexAnchor } from 'vant';
import { Tab, Tabs } from 'vant';
import { Step, Steps } from 'vant';

Vue.use(Card,Popup,Area );
Vue.use(IndexBar).use(IndexAnchor);

import { Rate } from 'vant';


import { Checkbox, CheckboxGroup } from 'vant';
import { Divider } from 'vant';
import { Uploader } from 'vant';

Vue.use(Uploader)
Vue.use(Divider);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Step).use(Steps);
Vue.use(Tab).use(Tabs);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(Button,AddressEdit,DatetimePicker);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Overlay);
Vue.use(Card,Popup,Area );
Vue.use(Icon);
Vue.use(Rate);

Vue.use(Cell).use(CellGroup);
Vue.use(Image);
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Tabbar).use(TabbarItem);

Vue.use(Field);
Vue.use(Sticky);
Vue.use(Button);
