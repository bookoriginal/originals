<template>
  <div class="commentC">
    <ul class="wraper">
      <li v-for="(type,index) in comData" :key="index">
        <div class="title">
          <span></span>
          <p>{{type.type}}</p>
        </div>
        <ul>
          <li class="box" v-for="(item,index) in type.con" :key="index" @click="godetail(item)">
            <div class="left">
              <div class="head">
                <span>[书籍]</span>
                <span>{{item.title}}</span>
              </div>
              <div class="middle">
                <Rate disabled allow-half v-model="valueDisabled"/>
                <span>{{item.rate}}</span>
                <span>{{item.author}}/{{item.fy}}/{{item.publishinghouse}}/{{item.year}}</span>
              </div>
              <div class="bottom">
                <div>读者评论</div>
                <span>{{item.common[0].common_author}}:</span>
                <span class="cont">{{item.common[0].content}}</span>
              </div>
              <div class="more">查看更多书评>></div>
            </div>
            <div class="right">
              <img src="../../../common/img/img_com.jpg" alt>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { Rate } from "iview";
export default {
  data() {
    return {
      valueDisabled: 4.4,
      comData: {
        hot: { type: "热门书籍", con: [] },
        other: { type: "其他", con: [] }
      }
    };
  },
  methods: {
    godetail(item) {
      this.$router.push(`/comment/commentDetail/${item.id}`);
    },
    initCommentData() {
      this.$axios.get("/commentlists").then(data => {
        // console.log(data);
        data.map((item, index) => {
          // console.log(item);
          if (item.hot < 1000) {
            this.comData.other.con.push(item);
          } else {
            this.comData.hot.con.push(item);
          }
        });
        // this.comData = data;
        // console.log(this.comData);
      });
      // console.log(this.comData);
    }
  },
  created() {
    this.initCommentData();
  },
  components: {
    Rate
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


