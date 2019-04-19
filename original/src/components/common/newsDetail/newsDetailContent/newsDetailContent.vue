<template>
  <div class="newsDetailContentWrap">
    <div class="newsDetailContent" v-if="newsCon">
      <div class="title">{{newsCon.title}}</div>
      <div class="type">史 诺</div>
      <span class="time">{{newsCon.add_time | formatDate("yyyy年MM月dd日 hh:mm")}}</span>
      <span>&nbsp;&nbsp;出版社:</span>
      <span class="comefrom">{{newsCon.publishinghouse}}</span>
      <div class="maintitle">{{newsCon.f_title}}</div>
      <div class="content">
        {{newsCon.content}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["newsContents"],
  data() {
    return {
      newsCon:{}
    }
  },
  watch: {
    newsContents(val) {
      this.newsCon = val;
      console.log(val);
    }
  }
};
</script>

<style lang="less" scoped>
.newsDetailContentWrap {
  width: 100%;
  .newsDetailContent {
    width: 1200px;
    margin: 0 auto;
    .title {
      font-size: 42px;
      font-weight: 500;
      text-align: center;
      line-height: 186px;
    }
    .type {
      font-size: 26px;
      margin-bottom: 20px;
    }
    span {
      font-size: 16px;
      color: #a1a1a1;
    }
    .maintitle {
      font-size: 18px;
      margin-top: 82px;
      margin-bottom: 43px;
    }
    .content {
      font-size: 18px;
      text-indent: 2em;
      line-height: 70px;
      margin-bottom: 70px;
    }
  }
}
</style>

