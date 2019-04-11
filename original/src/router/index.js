import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import BookShelf from '@/components/bookshelf'
import BookDetail from '@/components/bookdetail'
import BookContent from '@/components/bookcontent'
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
      path:'/bookcontent',
      name:'bookcontent',
      component:BookContent
     },
    {
     path:'/bookdetail',
     name:'bookdetail',
     component:BookDetail
    },
    {
      path:'/bookshelf',
      name:'bookshelf',
      component:BookShelf
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
