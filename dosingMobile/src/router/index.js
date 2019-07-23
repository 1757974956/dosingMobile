import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/news/index'
import dynamic from "../components/news/dynamic"
import zhizao from "../components/zhizao/zhizao"
import zhizao1 from "../components/zhizao/zhizao1"
import zhizao2 from "../components/zhizao/zhizao2"
import zhizao3 from "../components/zhizao/zhizao3"
import media from "../components/media/media"
import media1 from "../components/media/media1"
import media2 from "../components/media/media2"
import media3 from "../components/media/media3"
import media4 from "../components/media/media4"
import media5 from "../components/media/media5"
import media6 from "../components/media/media6"
import media7 from "../components/media/media7"
import trench from "../components/trench/trench"
import services from "../components/services/services"
import services1 from "../components/services/services1"
import services2 from "../components/services/services2"
import services3 from "../components/services/services3"
import aboutUs from "../components/aboutUS/aboutUS"
import aboutUs1 from "../components/aboutUS/aboutUS1"
import aboutUs2 from "../components/aboutUS/aboutUS2"
Vue.use(Router)
fnResize()
window.onresize = function () {
  fnResize()
}

function fnResize () {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
}

export default new Router({
  mode: 'history',
  routes: [
    {path: '/index.html', component: index},
    {path: '/zhizao.html', component: zhizao},
    {path: '/', redirect: '/index.html'},
    {path: '/dynamic.html',component: dynamic},
    {path:'/zhizao/zhizao1.html',component:zhizao1},
    {path:'/zhizao/zhizao2.html',component:zhizao2},
    {path:'/zhizao/zhizao3.html',component:zhizao3},
    {path:'/media.html',component:media},
    {path:'/media/media1.html',component:media1},
    {path:'/media/media2.html',component:media2},
    {path:'/media/media3.html',component:media3},
    {path:'/media/media4.html',component:media4},
    {path:'/media/media5.html',component:media5},
    {path:'/media/media6.html',component:media6},
    {path:'/media/media7.html',component:media7},
    {path:'/trench.html',component:trench},
    {path:'/services.html',component:services},
    {path:'/services/services1.html',component:services1},
    {path:'/services/services2.html',component:services2},
    {path:'/services/services3.html',component:services3},
    {path:'/aboutUs.html',component:aboutUs},
    {path:'/aboutUs/aboutUs1.html',component:aboutUs1},
    {path:'/aboutUs/aboutUs2.html',component:aboutUs2},
  ]
})
