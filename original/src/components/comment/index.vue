<template>
  <div id="comment">
    <router-view v-show="this.commentsDetailShow"></router-view>
    <commentB v-show="!this.commentsDetailShow"></commentB>
    <CommentC v-show="!this.commentsDetailShow"></CommentC>
  </div>
</template>

<script>
import commentB from "./commentBanner/commentBanner";
import CommentC from "./commentC/commentC";
export default {
  data() {
    return {
      commentsDetailShow: false,
      commentsPath: "/comment"
    };
  },
  components: {
    commentB,
    CommentC
  },
  mounted() {
    this.isCommentsDetailShow();
  },
  methods: {
    isCommentsDetailShow() {
      this.commentsPath = this.$route.path || this.commentsPath;
      console.log(this.$route, this.commentsPath);
      switch (this.commentsPath) {
        case "/comment":
          this.commentsDetailShow = false;
          break;
        default:
          this.commentsDetailShow = true;
          break;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.commentsPath = to.path;
      this.isCommentsDetailShow();
    }
  }
};
</script>

<style lang="less" scoped>
</style>


