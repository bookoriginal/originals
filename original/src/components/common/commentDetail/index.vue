<template>
  <div class="commentDetail">
    <commentdesc></commentdesc>
    <comments></comments>
  </div>
</template>

<script>
import commentdesc from './commentDesc/commentDesc'
import comments from './comment/comment'
export default {
  components: {
    commentdesc,
    comments
  }
}
</script>

<style lang="less" scoped>
</style>
