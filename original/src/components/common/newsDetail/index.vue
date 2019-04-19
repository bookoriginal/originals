<template>
  <div id="newsDetail">
    <newsDetailBanner></newsDetailBanner>
    <newsDetailBar></newsDetailBar>
    <newsDetailContent :newsContents="news"></newsDetailContent>
    <newsRelax :newstype="newstype"></newsRelax>
  </div>
</template>

<script>
import newsDetailBanner from "./newsDetailBanner/newsDetailBanner";
import newsDetailBar from "./newsDetailBar/newsDetailBar";
import newsDetailContent from "./newsDetailContent/newsDetailContent";
import newsRelax from "./newsRelax/newsRelax";
export default {
  data() {
    return {
      newstype: {},
      news: {}
    };
  },
  methods: {
    initNews(id) {
      let url = "/newsdetail";
      this.$axios
        .post(url, {
          params: {
            id: id
          }
        })
        .then(data => {
          console.log(data.data[id]);
          this.news = data.data[id];
          this.newstype = data.data[id];
        });
      // console.log(this.news);
    }
  },
  created() {
    let id = this.$route.params.id;
    this.initNews(id);
    // console.log("路由", this.$route.params.id);
  },
  watch: {
    $route(to, from) {
      console.log(to.path.split("/"));
      let arr = to.path.split("/");
      let id = arr[arr.length - 1];
      // console.log("watch",id);
      this.initNews(id);
    }
  },
  components: {
    newsDetailBanner,
    newsDetailBar,
    newsDetailContent,
    newsRelax
  }
};
</script>

<style lang="less" scoped>
</style>