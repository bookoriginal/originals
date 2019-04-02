import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Wei from '../components/sample/wei'
import Shi from '../components/sample/shi'
import Sui from '../components/sample/sui'

export default new Router({
  routes: [
    {
      path: '/wei',
      name: 'Wei',
      component: Wei
    },
    {
      path: '/shi',
      name: 'Shi',
      component: Shi
    },
    {
      path: '/sui',
      name: 'Sui',
      component: Sui
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      redirect:'/wei'
  }
  ]
})
