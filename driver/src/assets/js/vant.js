import Vue from 'vue';
import { Field } from 'vant';
import { Step, Steps } from 'vant';
import { Overlay } from 'vant';
import { Button } from 'vant';
import { Uploader } from 'vant';

Vue.use(Uploader);
Vue.use(Button);
Vue.use(Overlay);
Vue.use(Step).use(Steps);
Vue.use(Field);