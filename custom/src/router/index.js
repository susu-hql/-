import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import InsuerHome from '../views/InsureHome.vue'
import Insuretype from '../views/Insuretype.vue'
import InsuerInput from '../views/InsuerInput.vue'
import GetInsurePrice from '../views/GetInsurePrice.vue'
import Dash from '../views/Dash'



Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/home',//主页
    name: 'home',
    component: Home,
    children: [
      {
        path: "",
        name: "home",
        component: Dash,//首页
        meta: {
          auth: true
        }
      },
      {
        path: "mydata",//我的资料
        name: "mydata",
        component: () => import('../views/Mydata.vue'),
        meta: {
          auth: true,
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          keepAlive: false, //此组件不需要被缓存
        }
      },
    ]

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
<<<<<<< HEAD
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
  
  
=======
    path: "/mylist",//我的资料
    name: "mylist",
    component: () => import('../views/Mylist.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },
  {
    path: "/carlist",//车辆订单
    name: "carlist",
    component: () => import('../views/Carlist.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },
  {
    path: "/refund",//退款理由
    name: "refund",
    component: () => import('../views/Refund.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },
  {
    path: "/details",//订单详情
    name: "details",
    component: () => import('../views/Details.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    },
    children: [{
      path: "",//我的资料
      name: "details",
     
      meta: {
        auth: true,
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        keepAlive: false, //此组件不需要被缓存
      }
    },
    {
      path: "progress",//我的资料
      name: "progress",
      component: () => import('../views/Progress.vue'),
      meta: {
        auth: true,
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        keepAlive: false, //此组件不需要被缓存
      }
    }]
  }

>>>>>>> 9d785a632e2050ab39ecb1305bbc7913377b4877
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
