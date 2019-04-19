<template>
  <div class="newsRelaxWrap">
    <div class="newsRelaxBar">
      <div class="relaxNews">相关新闻</div>
      <ul class="relaxList">
        <li class="relax" v-for="(item,index) in newslist" :key="index" @click="goDetail(item)">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["newstype"],
  data() {
    return {
      newslist: []
    };
  },
  methods: {
    goDetail(item) {
      // console.log(item.id);
      this.$router.push(`/news/newsdetail/${item.id}`);
    },
    newslists(){
      let url = `/newslist`;
      this.$axios.get(url).then(data => {
        // console.log(data.data);
        let arr = [];
        // console.log(data);
        data.map((item, index) => {
          // console.log(item.type);
          if (item.type===this.newstype.type&&arr.length<8&&item.id!=this.newstype.id) {
            arr.push(item)
          }
        });
        arr.sort((a, b) => {
          return a.time > b.time ? -1 : 1;
        });
        this.newslist = arr;
        console.log(arr);
        
      });
    }
  },
  created() {
    this.newslists()
  },
  watch: {
    newstype(val) {
      this.newslists()
      console.log(val);
    }
  }
};
</script>

<style lang="less" scoped>
.newsRelaxWrap {
  height: auto;
  width: 100%;
  .newsRelaxBar {
    height: auto;
    border-top: 1px solid #eeeeee;
    width: 1200px;
    margin: 0 auto;
    .relaxNews {
      font-size: 26px;
      margin-top: 110px;
      margin-block-end: 28px; 
    }
    .relaxList {
        height: 160px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-size: 16px;
        .relax {
          width: 450px;
          height: 40px;
          line-height: 40px;
        }
      }
  }
}
</style>