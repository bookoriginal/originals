<template>
  <div id= "news">
      <Banner/>
      <Creation/>
  </div>
</template>

<script>
import Creation from './creation/creation';
import Banner from "../index/banner/banner"
export default {
  components: {
    Creation,
    Banner
  }
}
</script>

<style lang="less" scoped>

</style>

