<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import login from './components/login' // 引入login.vue组件
import index from './components/index/index'
import headers from '@/components/common/header/header';
import footers from '@/components/common/footer/footer';
export default {
  name: 'App',
  components: {
    'login': login ,
    'index':index,
    'headers':headers,
    'footers':footers
  }
}
</script>

<style lang="less" scoped>
  // @import './common/style/reset.css';
</style>
