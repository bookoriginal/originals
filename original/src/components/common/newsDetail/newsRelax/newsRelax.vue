<template>
  <div class="newsRelaxWrap">
    <div class="newsRelaxBar">
      <div class="relaxNews">说些什么</div>
      <div class="commentList" v-for="(item,index) in 3" :key="index">
        <img class="userimg" src="@/common/img/photography.jpg" alt>
        <div class="commentDesc">
          <div class="textDesc">
            <div class="textTitle">
              <p>想象力丰富，内容紧凑</p>
            </div>
            <div class="commentator">
              <span class="cname">评论人:&nbsp;瞬间之美</span>
              <span class="ctime">评论时间:&nbsp;2019-3-2 11:46</span>
            </div>
            <div class="contents">
              <p>昨天（4月6日）晚上新民晚报记者收到网友爆料：美国联合航空公司今天下午由浦东机场飞往纽约纽瓦克机场的UA87航班由浦东机场起飞后不久返航。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      }
    }
  }
}
</style>