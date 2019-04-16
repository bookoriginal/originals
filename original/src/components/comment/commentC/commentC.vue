<template>
  <div class="commentC">
    <ul class="wraper">
      <li>
        <div class="title">
          <span></span>
          <p>热门书籍</p>
        </div>
        <ul>
          <li class="box" v-for="(item,index) in 3" :key="index" @click="godetail(index)">
            <div class="left">
              <div class="head">
                <span>[书籍]</span>
                <span>漫画之王</span>
              </div>
              <div class="middle">
                <Rate disabled allow-half v-model="valueDisabled"/>
                <span>8.8</span>
                <span>刘静娴/黄天一/武汉大学出版社/2019</span>
              </div>
              <div class="bottom">
                <div>读者评论</div>
                <span>瞬息之间:</span>
                <span
                  class="cont"
                >画风和上色都极具特色，极具有复古彩漫的韵味，线条又带有冷战后欧美漫画的特色，可以当做新加坡政治任务和社会变迁的简史来读，阅读体验非常奇妙……</span>
              </div>
              <div class="more">查看更多书评>></div>
            </div>
            <div class="right">
              <img src="../../../common/img/img_com.jpg" alt="">
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueDisabled: 4.4,
      comData: []
    };
  },
  methods: {
    godetail(index) {
      this.$router.push("/comment/commentDetail");
    },
    initCommentData() {
      this.$axios.get("/hy/original/introduce_novel/?id=1").then(data => {
        console.log(data);
      });
    }
  },

  mounted() {
    this.initCommentData();
  }
};
</script>

<style lang="less" scoped>
.commentC {
  width: 100%;
  .wraper {
    width: 1200px;
    margin: 0 auto;
    .title {
      font-size: 28px;
      height: 40px;
      display: flex;
      margin-bottom: 25px;
      span {
        display: inline-block;
        width: 5px;
        height: 40px;
        border-radius: 5px;
        background: #1fbffd;
        margin-right: 22px;
      }
    }
    .box {
      display: flex;
      margin-top: 25px;
      justify-content: space-between;
      border-bottom: 2px solid #eeeeee;
      .head {
        font-size: 20px;
        margin-bottom: 25px;
      }
      .middle {
        font-size: 20px;
        margin-bottom: 25px;
        span {
          margin-right: 25px;
        }
      }
      .bottom {
        font-size: 16px;
        margin-bottom: 15px;
        div,
        span {
          margin: 7px 0 7px 0;
        }
        .cont {
          color: #656565;
        }
      }
      .more {
        font-size: 14px;
        margin-bottom: 25px;
        color: #b6b6b6;
      }
    }
    .right {
      margin-left: 65px;
    }
  }
}
</style>


