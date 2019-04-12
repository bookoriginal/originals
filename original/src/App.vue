<template>
  <div id="app">
     <div v-if="!show">
        <headers></headers>
    <router-view></router-view>
    <footers></footers>
     </div>
    <div v-if='show'>
      <bookcontent></bookcontent>
    </div>
    
  </div>
</template>

<script>
import login from './components/login/index' // 引入login.vue组件
import index from './components/index/index'
import headers from '@/components/common/header/header';
import footers from '@/components/common/footer/footer';
import bookcontent from '@/components/bookcontent/index'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    'login': login ,
    'index':index,
    'headers':headers,
    'footers':footers,
    'bookcontent':bookcontent
  },
  computed:{
      ...mapState({title:state=>state.book.title,show:state=>state.book.show})
    }
}
</script>

<style lang="less" scoped>
  // @import './common/style/reset.css';
</style>
