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
      newsPath: "/news"
    };
  },
  mounted() {
    this.isNewsDetailShow();
  },
  methods: {
    isNewsDetailShow() {
      console.log(this.newsPath);
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
      this.isNewsDetailShow();
    }
  }
};
</script>

<style lang="less" scoped>
</style>

