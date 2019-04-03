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
        </div>
        <div class="newsModel"></div>
        <div class="newsModel"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.aNews {
  width: 100%;
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
          // line-height: 
        }
      }
      .newsModel:hover {
        box-shadow: 0 4px 10px darkgrey;
      }
    }
  }
}
</style>
