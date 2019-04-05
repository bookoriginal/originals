<template>
  <div class="newsRelaxWrap">
    <div class="newsRelaxBar">
        <div class="relaxNews">相关新闻</div>
        <div class="news">
            <div class="newsLeft">
                <p>2018十大考古新发现揭晓</p>
                <p>2018十大考古新发现揭晓</p>
                <p>2018十大考古新发现揭晓</p>
                <p>2018十大考古新发现揭晓</p>
            </div>
            <div class="newsRight">
                <p>2018十大考古新发现揭晓</p>
                <p>2018十大考古新发现揭晓</p>
                <p>2018十大考古新发现揭晓</p>
                <p>2018十大考古新发现揭晓</p>
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
  height: 443px;
  width: 100%;
  .newsRelaxBar{
      height: 442px;
      border-top:1px solid #eeeeee;
      width: 1200px;
      margin: 0 auto;
     .relaxNews{
         font-size: 26px;
         margin-top: 110px;
         margin-block-end: 28px;
     }
     .news{
        display: flex;
        font-size: 16px;
        line-height: 40px;
        div{
            margin-right: 66px;
        }
     }
  }
}
</style>