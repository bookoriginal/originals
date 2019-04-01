<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login' // 引入login.vue组件
import index from './components/index/index'
export default {
  name: 'App',
  components: {
    'login': login ,
    'index':index
  }
}
</script>

<style lang="less" scoped>
  // @import './common/style/reset.css';
</style>
