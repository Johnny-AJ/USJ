import Vue from 'vue'
import VueRouter from 'vue-router'
import homeIndex from '../components/home/homeIndex.vue'
import orderIndex from '../components/order/orderIndex.vue'
import successfulIndex from '../components/success/successfulIndex.vue'

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
  {
    path: '/login',
    name: 'login',
    redirect: { name: 'login' }
  },
  {
    path: '/homeIndex',
    name: 'homeIndex',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/orderIndex',
    name: 'orderIndex',
    component: () => import('../views/order/order.vue')
  },
  {
    path: '/successfulIndex',
    name: 'successfulIndex',
    component: () => import('../views/success/success.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
