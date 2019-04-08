<template>
  <div class="newsList">
    <ul class="list">
      <li class="newsItem" @click="goDetail">
        <div class="itemLeft"></div>
        <div class="itemRight">
          <div class="addTime">
            <p class="year">2018</p>
            <div class="data">
              <span class="day">20</span>
              <span class="cut"></span>
              <span class="month">&nbsp;&nbsp;8</span>
            </div>
          </div>
          <div class="contents">
            <p class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
            <p
              class="con"
            >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          </div>
        </div>
      </li>
      <li class="newsItem">
        <div class="itemLeft"></div>
        <div class="itemRight">
          <div class="addTime">
            <p class="year">2018</p>
            <div class="data">
              <span class="day">20</span>
              <span class="cut"></span>
              <span class="month">&nbsp;&nbsp;8</span>
            </div>
          </div>
          <div class="contents">
            <p class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
            <p
              class="con"
            >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          </div>
        </div>
      </li>
      <li class="newsItem">
        <div class="itemLeft"></div>
        <div class="itemRight">
          <div class="addTime">
            <p class="year">2018</p>
            <div class="data">
              <span class="day">20</span>
              <span class="cut"></span>
              <span class="month">&nbsp;&nbsp;8</span>
            </div>
          </div>
          <div class="contents">
            <p class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
            <p
              class="con"
            >内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- <div class="pages">
      <span class="prev">
        <Icon type="ios-arrow-back"/>
      </span>
      <span class="num">1</span>
      <span class="next">
        <Icon type="ios-arrow-forward" />
      </span>
    </div>-->
    <Page :total="100"/>
  </div>
</template>

<script>
export default {
  methods: {
    goDetail(){
      this.$router.push('/news/newsdetail')
    }
  }
};
</script>

<style lang="less" scoped>
.newsList {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .list {
    width: 1200px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
    .newsItem {
      margin-top: 64px;
      height: 150px;
      display: flex;
      .itemLeft {
        width: 260px;
        height: 150px;
        background: #f33;
      }
      .itemRight {
        width: 900px;
        height: 150px;
        border-bottom: 1px solid #ccc;
        margin: 0 35px 0 2px;
        display: flex;
        .addTime {
          width: 165px;
          height: 89px;
          margin: 24px 0 36px;
          border-right: 1px solid #ccc;
          padding: 0 51px 0 63px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          .year {
            font-size: 20px;
          }
          .data {
            width: 50px;
            height: 50px;
            background: #1fbdfc;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              display: inline-block;
              font-size: 16px;
              color: #fff;
            }
            .day {
              align-self: flex-start;
            }
            .cut {
              width: 4px;
              height: 45px;
              background: #fff;
              transform: rotate(45deg);
              border-radius: 3px;
            }
            .month {
              align-self: flex-end;
            }
          }
        }
        .contents {
          flex: 1;
          height: 150px;
          padding-left: 59px;
          .title {
            font-size: 22px;
            height: 60px;
            color: #333;
            line-height: 60px;
            width: 675px;
            white-space: nowrap; //强制一行显示
            text-overflow: ellipsis; //溢出文本时显示省略标记
            overflow: hidden;
          }
          .con {
            font-size: 16px;
            line-height: 32px;
            color: #4c4c4c;
            width: 675px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* 可以显示的行数，超出部分用...表示*/
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .newsItem:hover {
      .itemRight {
        .contents {
          .title {
            color: #1dbdfb;
          }
        }
      }
    }
  }
  .pages {
    display: flex;
    span {
      display: inline-block;
      width: 36px;
      height: 36px;
      font-size: 18px;
      margin: 0 2px;
      text-align: center;
      line-height: 36px;
    }
    .prev,
    .next {
      background: #1dbdfb;
      color: #fff;
    }
    .num {
      border: 1px solid #cccccc;
    }
    .num:hover {
      background: #1dbdfb;
      color: #fff;
    }
  }
}
</style>

