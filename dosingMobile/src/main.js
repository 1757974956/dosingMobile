// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import Mint from 'mint-ui'
import $ from "jquery"
import { Swipe, SwipeItem } from 'mint-ui'
import lazyLoad from "vue-lazyload"
Vue.use(lazyLoad)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)
// Vue.use($)
Vue.prototype.$ajax = axios
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
