import Vue from 'vue'
import VueRouter from 'vue-router'
// import homeIndex from '../components/home/homeIndex.vue'
// import orderIndex from '../components/order/orderIndex.vue'
// import successfulIndex from '../components/success/successfulIndex.vue'
// import fillIndex from '../components/fill/fillIndex.vue'
// import paymentIndex from '../components/payment/paymentIndex.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  // {
  //   path: '/',
  //   name: 'login',
  //   redirect: { name: 'login' }
  // },
  {
    path: '/',  // 首页
    name: 'home',
    redirect: { name: 'home'},
    component: () => import('@/layout/home.vue'),
    children: [
      {
        path: '/home',  // 订单详情
        name: 'home',
        component: () => import('@/views/home/home.vue')
      },
      {
        path: '/order',  // 订单详情
        name: 'order',
        component: () => import('@/views/order/order.vue')
      },
      {
        path: '/success',  // 订单成功  
        name: 'success',
        component: () => import('@/views/success/success.vue')
      },
      {
        path: '/fill',  // 填写信息
        name: 'fill',
        component: () => import('@/views/fill/fill.vue')
      },
      {
        path: '/payment',  // 支付页
        name: 'payment',
        component: () => import('@/views/payment/payment.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
