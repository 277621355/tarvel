// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/iconfont.css'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/font-awesome-4.7.0/css/font-awesome.min.css'
Vue.config.productionTip = false
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
