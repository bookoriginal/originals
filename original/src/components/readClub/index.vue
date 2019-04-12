<template>
  <div id= "news">
    <ReadBanner/>
    <Readclub/>
  </div>
</template>

<script>
import Readclub from './readclub/readclub';
import ReadBanner from './readclub/banner';


export default {
  components: {
    Readclub,
    ReadBanner
  }
}
</script>

<style lang="less" scoped>

</style>

