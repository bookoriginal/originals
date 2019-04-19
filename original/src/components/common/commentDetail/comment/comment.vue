<template>
  <div class="comments">
    <div class="title">
      <span></span>
      <p>读者评论</p>
    </div>
    <div class="commentTitle">短评&nbsp;&nbsp;(全部{{this.len}}条)</div>
    <div class="commentList" v-for="(item,index) in comment" :key="index">
      <img class="userimg" src="@/common/img/photography.jpg" alt>
      <div class="commentDesc">
        <div class="textDesc">
          <div class="textTitle">
            <p>{{item.common_title}}</p>
            <div class="zan">
              <span @click="dianzan(index)">
                <Icon ref="zan" type="md-heart-outline"/>
              </span>
              赞
            </div>
          </div>
          <div class="commentator">
            <span class="cname">评论人:&nbsp;{{item.common_author}}</span>
            <span class="ctime">评论时间:&nbsp;{{item.add_time}}</span>
          </div>
          <div class="contents">
            <p>{{item.content}}</p>
          </div>
        </div>
        <div class="reply">
          <p class="re">回复:</p>
          <Input
            v-model="reply"
            class="reply-defined-textarea"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 4}"
            placeholder="Enter send(发送)..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Input } from "iview";
export default {
  props: ["comment"],
  data() {
    return {
      reply: "",
      zan: false,
      rateTime: "2019-04-15T16:05:28.434000+08:00",
      com:{},
      len:''
    };
  },
  mounted() {},
  methods: {
    dianzan(index) {
      this.zan = !this.zan;
      console.log(this.$refs.zan);
      if (this.zan) {
        this.$refs.zan[index].color = "#ff9c58";
        this.$refs.zan[index].type = "md-heart";
      } else {
        this.$refs.zan[index].color = "#999";
        this.$refs.zan[index].type = "md-heart-outline";
      }
    }
  },
  components: {
    Icon,
    Input
  },
   watch: {
    comment(val) {
      this.com = val;
      this.len = val.length
      console.log(val);
    }
  }
};
</script>

<style lang="less" scoped>
.comments {
  width: 1200px;
  margin: 0 auto;
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
  .commentTitle {
    height: 108px;
    font-size: 25px;
    line-height: 108px;
    color: #999999;
  }
  .commentList {
    padding-top: 28px;
    padding-bottom: 49px;
    border-top: 2px solid #eeeeee;
    display: flex;
    .userimg {
      width: 142px;
      height: 142px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .commentDesc {
      display: flex;
      flex-direction: column;
      .textDesc {
        flex: 1;
        display: flex;
        flex-direction: column;
        .textTitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 25px;
          font-weight: 600;
          color: #333;
          width: 100%;
          height: 52px;
          .zan {
            font-size: 29px;
            color: #999;
          }
        }
        .commentator {
          font-weight: 500;
          font-size: 18px;
          color: #b5b5b5;
          height: 42px;
          line-height: 42px;
          span {
            display: inline-block;
          }
          .cname {
            width: 240px;
          }
        }
        .contents {
          margin: 18px 0;
          width: 1000px;
          line-height: 28px;
          font-size: 18px;
          color: #656565;
        }
      }
      .reply {
        height: 142px;
        width: 100%;
        border: 3px solid #dcdcdc;
        border-radius: 10px;
        display: flex;
        padding: 10px 20px;
        .re {
          font-size: 20px;
          color: #999;
          width: 65px;
        }
      }
    }
  }
}
</style>
<style lang="less">
.reply-defined-textarea {
  textarea.ivu-input {
    border: none;
    outline: medium;
    box-shadow: 0 0;
    font-size: 20px;
    padding: 0;
    resize: none;
  }
}
</style>

