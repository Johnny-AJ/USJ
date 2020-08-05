import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// ui庫
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局默认样式
import global from './assets/css/global.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
