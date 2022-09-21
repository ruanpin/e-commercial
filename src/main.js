import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

import Pagination from './components/Pagination'

import './mock/mockServer'

// 引入SWIPER-------VueAwesomeSwiper-------------------
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// 引入VueAwesomeSwiper-------------------
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.component(Pagination.name, Pagination)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
