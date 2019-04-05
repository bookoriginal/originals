<template>
  <div id= "newsDetail">
    <newsDetailBanner></newsDetailBanner>
    <newsDetailBar></newsDetailBar>
    <newsDetailContent></newsDetailContent>
    <newsRelax></newsRelax>
  </div>
</template>

<script>
import newsDetailBanner from './newsDetailBanner/newsDetailBanner';
import newsDetailBar from './newsDetailBar/newsDetailBar'
import newsDetailContent from './newsDetailContent/newsDetailContent'
import newsRelax from './newsRelax/newsRelax'
export default {
  components: {
    newsDetailBanner,newsDetailBar,newsDetailContent,newsRelax
  }
}
</script>

<style lang="less" scoped>
  
</style>