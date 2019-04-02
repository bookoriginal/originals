<template>
  <div id="app">
    <login></login>
    <sample></sample>
    <readgroup></readgroup>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import login from './components/login' // 引入login.vue组件
import sample from './components/sample/btn'
import readgroup from './components/readgroup/readgroup'
export default {
  name: 'App',
  components: {
    'login': login ,
    sample,
    readgroup,
  }
}
</script>

<style>
</style>
