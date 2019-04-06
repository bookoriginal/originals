<template>
  <div class="wrapper" ref="wapper">
    <ul class="content">
          <li v-for="(item,index) in arr"
            :key="index"
          >{{item}}</li>
        
        </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      arr:[1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,11,1]
    }
  },
  methods:{
    initBscroll(){
      console.log(123);
      new BScroll('.wrapper',{click:true,probeType:2})
    },
    initData(){
        this.arr = this.arr;
        this.$nextTick(()=>{
          this.initBscroll()
        })
      }
  },
  created() {
     this.initData()
  },
}
</script>

<style lang="less" scoped>

.wrapper{
  // position: fixed;
  //       top:138px;
  //       bottom: 0;
      height: 100%;
      overflow: hidden;
  .content{
    overflow: hidden;
      li{
        float: left;
        margin: 20px;
        width: 100px;
        height: 150px;
        background: red;
      }
  }
}
</style>
