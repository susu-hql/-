import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Home',
    component: Home,
    children:[]
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/personal.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/changephone',
    name: 'changephone',
    component: () => import('../views/changephone.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: () => import('../views/myorder.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/orderReceiving',
    name: 'orderReceiving',
    component: () => import('../views/orderReceiving.vue'),
    children:[
      {
        path: '/orderStatus',
        name: 'orderStatus',
        component: () => import('../views/orderStatus.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: '/orderAmount2',
        name: 'orderAmount2',
        component: () => import('../views/orderAmount2.vue'),
        meta: {
          auth: true
        }
      }
    ],
    meta: {
      auth: true
    }
  },
  {
    path: '/orderAmount',
    name: 'orderAmount',
    component: () => import('../views/orderAmount.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      auth: true
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // 获取 token，登录的标识
//   var token = sessionStorage.getItem("token")

//   if (to.meta.auth) { // 判断是否需要权限
//     if (token) { // 再次判断是否已经有权限了
//       next()
//     } else {
//       next({ // 没有权限，导向登录页
//         path: "/login",
//         query: { redirect: to.fullPath } // 记录原本想访问的路由
//       })
//     }
//   } else {
//     next() // 想去哪就去哪
//   }
// })

export default router
