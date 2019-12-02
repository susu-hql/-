import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:Home,
    children:[
      {
        path: '',   // Home 的默认页面
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/banner',   // Banner管理
        name: 'banner',
        component: () => import('../views/Banner.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/order',   // 订单管理
        name: 'order',
        component: () => import('../views/Order.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/client',   // 客户管理  用户管理
        name: 'client',
        component: () => import('../views/Client.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/adduser',   // 客户管理  添加用户管理
        name: 'adduser',
        component: () => import('../views/AddUser.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/usercard',   // 客户管理   车主卡
        name: 'usercard',
        component: () => import('../views/UserCard.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/driver',   // 客户管理   司机管理
        name: 'driver',
        component: () => import('../views/Driver.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/contents',   // 内容管理  汽车品牌
        name: 'contents',
        component: () => import('../views/Contents.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/door',   // 内容管理  门店管理
        name: 'door',
        component: () => import('../views/Door.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/insurance',   // 保险管理
        name: 'insurance',
        component: () => import('../views/Insurance.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/evaluate',   // 评价管理
        name: 'evaluate',
        component: () => import('../views/Evaluate.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/sword',   // 评价管理  敏感词设置
        name: 'sword',
        component: () => import('../views/Sword.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/refund',   // 退款管理
        name: 'refund',
        component: () => import('../views/Refund.vue'),
        meta: {
          auth: true
        }
      },
      { 
        path: '/refundHistory',   // 退款管理  退款历史
        name: 'refundHistory',
        component: () => import('../views/RefundHistory.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/thirdParty',   // 第三方管理
        name: 'thirdParty',
        component: () => import('../views/ThirdParty.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/settings',   // 设置管理  权限管理
        name: 'settings',
        component: () => import('../views/Settings.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/openCity',   // 设置管理  开通城市
        name: 'openCity',
        component: () => import('../views/OpenCity.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/pushMess',   // 设置管理  推送消息
        name: 'pushMess',
        component: () => import('../views/PushMess.vue'),
        meta: {
          auth: true
        }
      },
    ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 注册全局守卫
// 在访问路由之前进行拦截
// router.beforeEach((to, from, next) => {
//   // 获取 token，登录的标识
//   var token = sessionStorage.getItem("token")

//   if(to.meta.auth) { // 判断是否需要权限
//     if(token) { // 再次判断是否已经有权限了
//       next() 
//     } else {
//       next({ // 没有权限，导向登录页
//         path: "/login",
//         query: {redirect: to.fullPath} // 记录原本想访问的路由
//       })
//     }
//   } else {
//     next() // 想去哪就去哪
//   }
// })

export default router
