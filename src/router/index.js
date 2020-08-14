import Vue from 'vue'
import VueRouter from 'vue-router'
import homeIndex from '../components/home/homeIndex.vue'
import orderIndex from '../components/order/orderIndex.vue'
import successfulIndex from '../components/success/successfulIndex.vue'
import fillIndex from '../components/fill/fillIndex.vue'
import paymentIndex from '../components/payment/paymentIndex.vue'

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
    name: 'homeIndex',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/orderIndex',  // 订单详情
    name: 'orderIndex',
    component: () => import('../views/order/order.vue')
  },
  {
    path: '/successfulIndex',  // 订单成功  
    name: 'successfulIndex',
    component: () => import('../views/success/success.vue')
  },
  {
    path: '/fillIndex',  // 填写信息
    name: 'fillIndex',
    component: () => import('../views/fill/fill.vue')
  },
  {
    path: '/paymentIndex',  // 支付页
    name: 'paymentIndex',
    component: () => import('../views/payment/payment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
