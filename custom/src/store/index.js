import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   lists:[],
   list2:[],
   partId:"",
   xlId:"",
   getbwid:[]





  },
  mutations: {
   get(state,n){
     state.lists=n;
   },
   gets(state,n){
    state.list2=n;
   },
   getPartId(state,n){
    state.partId=n;
   },
   getbwid(state,n){
    state.getbwid=n;
   },
   getxlID(state,n){
    state.xlId=n;
   },
  },
 
  actions: {
  },
  modules: {
  }
})
