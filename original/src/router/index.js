import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../components/index/index'
import News from '@/components/news'
import Register from '@/components/register'
import Login from '@/components/login/index'
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
