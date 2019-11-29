import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/personal.vue')
  },
  {
    path: '/changephone',
    name: 'changephone',
    component: () => import('../views/changephone.vue')
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: () => import('../views/myorder.vue')
  },
  {
    path: '/orderAmount',
    name: 'orderAmount',
    component: () => import('../views/orderAmount.vue')
  },
  {
    path: '/orderReceiving',
    name: 'orderReceiving',
    component: () => import('../views/orderReceiving.vue')
  },
  {
    path: '/orderStatus',
    name: 'orderStatus',
    component: () => import('../views/orderStatus.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
