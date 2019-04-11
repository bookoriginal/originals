<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login' // 引入login.vue组件
import index from './components/index/index'
import bookshelf from './components/bookshelf/index'
import bookdetail from './components/bookdetail/index'
import bookcontent from './components/bookcontent/index'
export default {
  name: 'App',
  components: {
    'login': login ,
    'index':index,
    'bookshelf':bookshelf,
    'bookdetail':bookdetail,
    'bookcontent':bookcontent
  }
}
</script>

<style lang="less" scoped>
  // @import './common/style/reset.css';
</style>
