<template>
  <div id="news">
    <router-view v-show="this.newsDetailShow"></router-view>
    <nBanner v-show="!this.newsDetailShow"></nBanner>
    <aNews :newslist="newslist" v-show="!this.newsDetailShow"></aNews>
    <newsLists :newslist="newslist" v-show="!this.newsDetailShow"></newsLists>
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
      newsPath: "/news",
      newslist: []
    };
  },
  mounted() {
    this.isNewsDetailShow();
  },
  created() {
    this.initNews();
  },
  methods: {
    initNews() {
      let url = `/newslist`;
      const formatDate = Vue.filter("formatDate");
      this.$axios.get(url).then(data => {
        // console.log(data.data);
        let arr = [];
        // console.log(data);
        data.map((item, index) => {
          // console.log(item);
          arr.push({
            id: item.id,
            img: item.img,
            time: item.add_time,
            type: item.type,
            // Vue.filter('formatDate')(item.add_time,"yyyy"),
            title: item.title,
            contents: item.content
          });
        });
        arr.sort((a, b) => {
          return a.time > b.time ? -1 : 1;
        });
        this.newslist = arr;
      });
    },
    isNewsDetailShow() {
      this.newsPath = this.$route.path || this.newsPath;
      // console.log(this.$route,this.newsPath);
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

