import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import InsuerHome from '../views/InsureHome.vue'
import Insuretype from '../views/Insuretype.vue'
import InsuerInput from '../views/InsuerInput.vue'
import GetInsurePrice from '../views/GetInsurePrice.vue'
import Dash from '../views/Dash'
import Detail from '../views/Detail'
import CarBrand from '../views/CarBrand'
import CarBxh from '../views/CarBxh'
import CarBxl from '../views/CarBxl'
import CarSelect from '../views/CarSelect'
import MoreStore from '../views/MoreStore'
import ConfirmOrder from '../views/ConfirmOrder'
import SafeDetail from '../views/SafeDetail'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
    
  },

  {
    path: '/moreStore',
    name: 'MoreStore',
    component: MoreStore
    
  },
  {
    path: '/ConfirmOrder',
    name: 'ConfirmOrder',
    component:ConfirmOrder
    
  },
  {
    path: '/carBrand',
    name: 'carBrand',
    component:CarBrand
  },
  {
    path: '/CarSelect',
    name: 'CarSelect',
    component:CarSelect
  },
  {
    path: '/carBxh',
    name: 'CarBxh',
    component:CarBxh
  },
  {
    path: '/CarBxl',
    name: 'carBxl',
    component:CarBxl
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: "",
        name: "home",
        component: Dash,
        meta: {
          auth: true
        }
      },
      {
        path: "mydata",
        name: "maydata",
        component: () => import('../views/Mydata.vue'),
        meta: {
          auth: true
        }
      }

    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')

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
    component: Insuretype


  },
  {
    path: '/getprice',
    name: 'GetInsurePrice',
    component: GetInsurePrice

  },
  {
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
    path: "/comment",//司机评价
    name: "comment",
    component: () => import('../views/Comment.vue'),
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
      component: Detail,
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
  },
  {
    path: "/allsafe",//全部保险订单
    name: "allsafe",
    component: () => import('../views/Allsafe.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },
  {
    path: "/safeDetails",//保险订单详情
    name: "safeDetails",
    component: () => import('../views/SafeDetails.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    },
    children: [{
      path: "",//
      name: "details",
      component: SafeDetail,
      meta: {
        auth: true,
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        keepAlive: false, //此组件不需要被缓存
      }
    },
    {
      path: "safeProgress",//保险订单详情
      name: "safeProgress",
      component: () => import('../views/SafeProgress.vue'),
      meta: {
        auth: true,
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        keepAlive: false, //此组件不需要被缓存
      }
    }]
  },
  {
    path: "/idCard",//身份录入
    name: "idCard",
    component: () => import('../views/IDcard.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },
  {
    path: "/carid",//车主卡
    name: "carid",
    component: () => import('../views/CarID.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },
  {
    path: "/addcarID",//新增车主卡
    name: "addcarID",
    component: () => import('../views/AddCarid.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },
  {
    path: "/mypolicy",//我的保单
    name: "mypolicy",
    component: () => import('../views/MyPolicy.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },
  {
    path: "/policy",//新增车主卡
    name: "policy",
    component: () => import('../views/Policy.vue'),
    meta: {
      auth: true,
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      keepAlive: false, //此组件不需要被缓存
    }
  },




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
