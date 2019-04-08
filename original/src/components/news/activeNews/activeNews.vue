<template>
  <div class="aNews">
    <div class="a_title">
      <span></span>
      <p>动态新闻</p>
    </div>
    <div class="aNewList">
      <div class="modelWrapper">
        <div class="newsModel">
          <div class="title">
            <p>最新动态</p>
          </div>
          <div class="aContent">
            <div class="aTime">
              <p>03</p>
              <span>2017-03</span>
            </div>
            <div class="aImg"></div>
          </div>
          <ul class="aNewslist">
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
          </ul>
        </div>
        <div class="newsModel">
          <div class="title">
            <p>最新动态</p>
          </div>
          <div class="aContent">
            <div class="aTime">
              <p>03</p>
              <span>2017-03</span>
            </div>
            <div class="aImg"></div>
          </div>
          <ul class="aNewslist">
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
          </ul>
        </div>
        <div class="newsModel">
          <div class="title">
            <p>最新动态</p>
          </div>
          <div class="aContent">
            <div class="aTime">
              <p>03</p>
              <span>2017-03</span>
            </div>
            <div class="aImg"></div>
          </div>
          <ul class="aNewslist">
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
            <li>
              <span class="icon">></span>
              <div>
                <p>热烈庆祝XXXXXXXXXX健康管理机构</p>
              </div>
              <span class="time">03-03</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
