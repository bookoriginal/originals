import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'


import Creation from '../components/creation'
import Btn from '../components/sample/btn'
import Wei from '../components/sample/wei'
import Shi from '../components/sample/shi'
import Sui from '../components/sample/sui'
import Upwork from '../components/sample/upwork'
import Creatbook from '../components/sample/creatbook'
import News from '@/components/news'
import Register from '@/components/register'
import Login from '@/components/login/index'
import newsdetail from '@/components/common/newsDetail'
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
          children:[
            {
              path: 'wei',
              name: 'Wei',
              component: Wei
            },
            {
              path: 'shi',
              name: 'Shi',
              component: Shi
            },
            {
              path: 'sui',
              name: 'Sui',
              component: Sui
            },
          ]
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
        }
       

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
    // {
    //   path:'/',
    //   redirect:'/index' //重定向
    // }
  ]
})
