<template>
  <div class="commentdesc">
    <div class="title">
      <span></span>
      <p>漫画之王</p>
    </div>
    <div class="content">
      <img class="cover" src="@/common/img/book_cover.jpg" alt>
      <div class="desc">
        <p>
          作者：
          <span>刘敬贤</span>
        </p>
        <p>
          出版社：
          <span>武汉大学出版社</span>
        </p>
        <p>
          出品方：
          <span>鹿书deerbook</span>
        </p>
        <p>
          副标题：
          <span>陈福财正传</span>
        </p>
        <p>
          原作名：
          <span>The Art of Charlie Chan Hock Chye</span>
        </p>
        <p>
          译者：
          <span>黄天怡</span>
        </p>
        <p>
          出版年：
          <span>2019-3-1</span>
        </p>
        <p>
          页数：
          <span>328</span>
        </p>
        <p>
          定价：
          <span>188.00元</span>
        </p>
        <p>
          装帧：
          <span>精装</span>
        </p>
        <p>
          ISBN：
          <span>1234567898765432</span>
        </p>
      </div>
      <div class="score">
        <p class="score_title">评分:</p>
        <div class="rate">
          <p class="rate_num">8.8</p>
          <Rate disabled allow-half v-model="valueDisabled"/>
          <div class="star">
            <p>
              5星&nbsp;
              <span class="five"></span>&nbsp;61.8%
            </p>
            <p>
              4星&nbsp;
              <span class="four"></span>&nbsp;26.5%
            </p>
            <p>
              3星&nbsp;
              <span class="three"></span>&nbsp;11.7%
            </p>
            <p>
              2星&nbsp;
              <span class="two"></span>&nbsp;0.0%
            </p>
            <p>
              1星&nbsp;
              <span class="one"></span>&nbsp;0.0%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Rate } from "iview";
export default {
  data() {
    return {
      valueDisabled: 8.8 / 2,
      params: {
        content: "战争",
        tag: "Ture"
      }
    };
  },
  methods: {
    initDescData(id) {
      let url = ``;
    },
    initcommentDetailData() {
      // let url = '/ol/original/introduce_novel/?id=1'
      let param = this.$qs.stringify(this.params);
      this.$axios.post("/hy/original/search_novel/", param).then(data => {
        // console.log(data);
      });
    }
  },
  created() {
    // console.log(this.$route.params.id);
    this.initDescData(this.$route.params.id);
  },
  mounted() {
    this.initcommentDetailData();
  },
  components: {
    Rate
  }
};
</script>

<style lang="less" scoped>
.commentdesc {
  width: 1200px;
  margin: 50px auto 60px;
  .title {
    font-size: 28px;
    height: 40px;
    display: flex;
    span {
      display: inline-block;
      width: 5px;
      height: 40px;
      border-radius: 5px;
      background: #1fbffd;
      margin-right: 22px;
    }
  }
  .content {
    display: flex;
    margin-top: 19px;
    .cover {
      margin-top: 16px;
      width: 348px;
      height: auto;
    }
    .desc {
      width: 595px;
      margin-top: 7px;
      padding-left: 55px;
      display: flex;
      flex-direction: column;
      p {
        height: 48px;
        line-height: 48px;
        font-size: 18px;
      }
    }
    .score {
      border-left: 2px solid #e5e5e5;
      height: 320px;
      .score_title {
        padding-left: 35px;
        font-size: 24px;
      }
      .rate {
        padding-left: 40px;
        .rate_num {
          width: 180px;
          height: 70px;
          width: 100%;
          font-size: 40px;
          line-height: 80px;
          text-align: center;
        }
        .star {
          font-size: 16px;
          padding-top: 10px;
          line-height: 34px;
          span {
            display: inline-block;
            background: #ff9c58;
            height: 14px;
          }
          .five {
            width: 94px;
          }
          .four {
            width: 48px;
          }
          .three {
            width: 32px;
          }
        }
      }
    }
  }
}
</style>

