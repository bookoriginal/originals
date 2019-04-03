<template>
  <div id= "news">
    <nBanner></nBanner>
    <aNews></aNews>
  </div>
</template>

<script>
import nBanner from './newsBanner/newsBanner';
import aNews from './activeNews/activeNews';

export default {
  components: {
    nBanner,
    aNews,
  }
}
</script>

<style lang="less" scoped>

</style>

