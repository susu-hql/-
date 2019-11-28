import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import InsuerHome from '../views/InsureHome.vue'
import Insuretype from '../views/Insuretype.vue'
import InsuerInput from '../views/InsuerInput.vue'
import GetInsurePrice from '../views/GetInsurePrice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/insureHome',
    name: 'insureHome',
    component: InsuerHome

  },
  {
    path: '/InsuerInput',
    name: 'InsuerInput',
    component: InsuerInput

  },
  {
    path: '/Insuretype',
    name: 'insuretype',
    component:Insuretype
    

  },
  {
    path: '/getprice',
    name: 'GetInsurePrice',
    component:GetInsurePrice

  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
