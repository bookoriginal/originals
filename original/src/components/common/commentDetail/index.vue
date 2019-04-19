<template>
  <div class="commentDetail">
    <commentdesc :detail = "detail"></commentdesc>
    <comments :comment = "comment"></comments>
  </div>
</template>

<script>
import commentdesc from "./commentDesc/commentDesc";
import comments from "./comment/comment";
export default {
  data() {
    return {
      detail:{},
      comment:{}
    };
  },
  methods: {
    initComment(id) {
      let url = "/commentdetail";
      this.$axios
        .post(url, {
          params: {
            id: id
          }
        })
        .then(data => {
          // console.log(data.data[id]);
          console.log(data);
          
          this.detail = data.data[id];
          this.comment = data.data[id].common
          console.log(this.comment);
          
          // this.newstype = data.data[id];
        });
    }
  },
  components: {
    commentdesc,
    comments
  },
  created() {
    let id = this.$route.params.id;
    this.initComment(id);
  },
  watch: {
    $route(to, from) {
      console.log(to.path.split("/"));
      let arr = to.path.split("/");
      let id = arr[arr.length - 1];
      // console.log("watch",id);
      this.initComment(id);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
