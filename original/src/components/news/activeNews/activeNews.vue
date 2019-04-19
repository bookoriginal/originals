<template>
  <div class="aNews">
    <div class="a_title">
      <span></span>
      <p>动态新闻</p>
    </div>
    <div class="aNewList" v-if="lists.new.con.length">
      <div class="modelWrapper">
        <div class="newsModel" v-for="(type,index) in lists">
          <div class="title">
            <p>{{type.type}}</p>
          </div>
          <div class="aContent" @click="goDetail(type.con[0])">
            <div class="aTime">
              <p>{{type.con[0].time | formatDate("dd")}}</p>
              <span>{{type.con[0].time | formatDate("yyyy-MM")}}</span>
            </div>
            <div class="aImg">
              <img :src="type.con[0].img" alt="">
            </div>
          </div>
          <ul class="aNewslist">
            <li v-for="(item,index) in type.con" v-if="!index==0" @click="goDetail(item)">
              <span class="icon">></span>
              <div>
                <p>{{item.title}}</p>
                <!-- <img :src="item.img" alt=""> -->
              </div>
              <span class="time">{{item.time | formatDate("MM-dd")}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["newslist"],
  data() {
    return {
      lists: {
        new: { type: "最新动态", con: [] },
        zx: { type: "新闻资讯", con: [] },
        dt: { type: "行业动态", con: [] }
      }
    };
  },
  methods: {
    goDetail(item) {
      console.log(item.id);
      this.$router.push(`/news/newsdetail/${item.id}`);
    },
    initActionNews() {
      this.newslist.map((item, index) => {
        switch (item.type) {
          case "最新动态":
            if (this.lists.new.con.length < 6) {
              this.lists.new.con.push(item);
            }
            break;
          case "新闻资讯":
            if (this.lists.zx.con.length < 6) {
              this.lists.zx.con.push(item);
            }
            break;
          case "行业动态":
            if (this.lists.dt.con.length < 6) {
              this.lists.dt.con.push(item);
            }
            break;
          default:
            break;
        }
      });
      // console.log(this.lists);
    }
  },
  watch: {
    newslist(val) {
      // this.lists = val.slice(0, this.pagesize);
      // console.log(val);
      this.initActionNews();
    }
  }
};
</script>

<style lang="less" scoped>
.aNews {
  width: 100%;
  margin-bottom: 78px;
  .a_title {
    width: 1200px;
    margin: 50px auto 40px;
    display: flex;
    span {
      display: inline-block;
      width: 4px;
      height: 30px;
      background: #1fbffb;
      border-radius: 5px;
      margin-right: 10px;
    }
    p {
      height: 30px;
      font-size: 24px;
      line-height: 30px;
    }
  }
  .aNewList {
    width: 100%;
    height: 380px;
    background: #eeeeee;
    .modelWrapper {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .newsModel {
        width: 358px;
        background: #fff;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        .title {
          height: 60px;
          font-size: 18px;
          line-height: 60px;
          display: flex;
          justify-content: space-between;
          span {
            font-size: 13px;
            color: #999999;
          }
        }
        .aContent {
          width: 100%;
          height: 98px;
          display: flex;
          .aTime {
            width: 99px;
            height: 98px;
            background: #1ebefc;
            padding: 23px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            p {
              font-size: 23px;
              height: 23px;
              line-height: 23px;
            }
            span {
              font-size: 12px;
              height: 12px;
              line-height: 12px;
            }
          }
          .aImg {
            flex: 1;
            background: #85bcda;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .aNewslist {
          flex: 1;
          padding: 21px 0 17px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          li {
            font-size: 13px;
            height: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .icon {
              display: inline-block;
              color: #27c0fc;
              padding-left: 1px;
              font-weight: 500;
              width: 17px;
            }
            div {
              height: 12px;
              line-height: 12px;
              flex: 1;
              p {
                width: 210px;
                overflow: hidden; /*超出部分隐藏*/
                white-space: nowrap; /*不换行*/
                text-overflow: ellipsis; /*超出部分文字以...显示*/
              }
            }
          }
        }
      }
      .newsModel:hover {
        box-shadow: 0 4px 10px darkgrey;
      }
    }
  }
}
</style>
