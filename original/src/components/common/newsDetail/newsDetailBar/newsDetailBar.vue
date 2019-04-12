<template>
  <div class="newsDetailBarWrap">
    <div class="newsDetailBar">
        <span @click="goindex">首页</span>
        <span>></span>
        <span @click="gonews">新闻</span>
        <span>></span>
        <span class="content">正文</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gonews(){
      this.$router.push('/news');
    },
    goindex(){
      this.$router.push('/index');
    }
  }
};
</script>

<style lang="less" scoped>
.newsDetailBarWrap {
  height: 124px;
  width: 100%;
  .newsDetailBar{
      height: 123px;
      border-bottom:1px solid #eeeeee;
      width: 1200px;
      margin: 0 auto;
      span{
          font-size: 22px;
          line-height: 123px;
          margin-right: 14px;
      }
      .content{
          color:#989898;
      }
  }
}
</style>