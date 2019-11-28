import Vue from 'vue'
import { Button } from 'vant';
import {Card,Area,Field,AddressEdit,DropdownMenu, DropdownItem, Popup,DatetimePicker } from 'vant';

Vue.use(Card,Field,Popup,Area );

Vue.use(Button,AddressEdit,DatetimePicker);
Vue.use(DropdownMenu).use(DropdownItem);