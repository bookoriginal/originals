import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
Vue.use(Router)
import Index from '../components/index/index'
import Creation from '@/components/creation'
import News from '@/components/news'
import ReadClub from '@/components/ReadClub'
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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/creation',
      name: 'creation',
      component: Creation
    },
    {
      path: '/readclub',
      name: 'readclub',
      component: ReadClub
    },
    {
      path:'/',
      redirect:'/index' //重定向
    },
    
  ]
})
