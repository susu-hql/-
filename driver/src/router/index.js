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
    path: '/homea',
    name: 'homea',
    component: () => import('../views/homea.vue')
  },
  {
    path: '/evaluate',
    name: 'evaluate',
    component: () => import('../views/evaluate.vue')
  },
  {
    path: '/salary',
    name: 'salary',
    component: () => import('../views/salary.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
