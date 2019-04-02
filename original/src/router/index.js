import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
Vue.use(Router)
import Index from '../components/index/index'
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/',
      redirect:'/index' //重定向
    }
  ]
})
