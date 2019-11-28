import Vue from 'vue'
import { Button } from 'vant';
import { Field,  Sticky} from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';
import { Image } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Card } from 'vant';
import { Dialog } from 'vant';
import { Toast } from 'vant';

import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(Icon);
Vue.use(Cell).use(CellGroup);
Vue.use(Image);
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Tabbar).use(TabbarItem);

Vue.use(Field);
Vue.use(Sticky);
Vue.use(Button);