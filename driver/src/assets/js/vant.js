import Vue from 'vue';
import { Field } from 'vant';
import { Step, Steps } from 'vant';
import { Uploader } from 'vant';
import { Overlay } from 'vant';

Vue.use(Overlay);
Vue.use(Uploader);
Vue.use(Step).use(Steps);
Vue.use(Field);