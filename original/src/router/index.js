import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'


import Creation from '../components/creation'
import Btn from '../components/sample/btn'
import Upwork from '../components/sample/upwork'
import Creatbook from '../components/sample/creatbook'
import News from '@/components/news'
import Register from '@/components/register'
import Login from '@/components/login/index'
import newsdetail from '@/components/common/newsDetail'
import commentdetail from '@/components/common/commentDetail'
import Bianji from '@/components/sample/bianji'
import Bianjiing from '@/components/sample/bianjiing'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/creation',
      name: 'creation',
      component: Creation,
      children:[
        {
          path:'btn',
          name: 'btn',
          component: Btn,
        },

        {
          path:'upwork',
          name: 'upwork',
          component: Upwork,
        },
        {
          path:'creatbook',
          name: 'creatbook',
          component: Creatbook,
        },
        {
          path:'bianji',
          name: 'bianji',
          component: Bianji,
        },
        {
          path:'bianjiing',
          name: 'bianjiing',
          component: Bianjiing,
        },
       

      ]},
     
          {
          path: '/news',
          name: 'news',
          component: News,
          children: [
            {
              path: 'newsdetail',
              component: newsdetail
            }
          ]
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
