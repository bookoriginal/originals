<template>
  <div id="news">
    <router-view v-show="this.newsDetailShow"></router-view>
    <nBanner v-show="!this.newsDetailShow"></nBanner>
    <aNews v-show="!this.newsDetailShow"></aNews>
    <newsLists v-show="!this.newsDetailShow"></newsLists>
  </div>
</template>

<script>
import nBanner from "./newsBanner/newsBanner";
import aNews from "./activeNews/activeNews";
import newsLists from "./newsList/newsList";

export default {
  data() {
    return {
      newsDetailShow: false,
      newsPath: "/" + this.$route.params.path
    };
  },
  mounted() {
    this.isNewsDetailShow();
  },
  methods: {
    isNewsDetailShow() {
      switch (this.newsPath) {
        case "/news":
          this.newsDetailShow = false;
          break;
        default:
          this.newsDetailShow = true;
          break;
      }
    }
  },
  components: {
    nBanner,
    aNews,
    newsLists
  },
  watch: {
    $route(to, from) {
      this.newsPath = to.path;
      console.log(this.newsPath);
      this.isNewsDetailShow();
    }
  }
};
</script>

<style lang="less" scoped>
</style>

