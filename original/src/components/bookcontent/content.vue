<template>
    <div class="book-content">
       <div class="content-msg">

       </div>
       <ul class="content-float">
           <li class="menu"><i class="fa fa-list-ul" aria-hidden="true"></i> </li>
           <li><i class="fa fa-chevron-up" aria-hidden="true"></i> </li>
           <li><i class="fa fa-chevron-down" aria-hidden="true"></i> </li>
       </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.book-content{
    width: 100%;
    height: 1000px;
    background: pink;
    padding-top: 50px;
    position: relative;
    .content-msg{
        width: 1000px;
        height: 950px;
        margin: 0 auto;
        background: rgba(255, 255, 255, .8);
    }
    .content-float{
        position: fixed;
        top: 200px;
        right:124px;
        font-size: 20px;
        li{
            width: 50px;
            height: 80px;
            line-height:80px;
            text-align: center;
            background:rgba(255, 255, 255, .7);
            margin-bottom: 10px;
            
        }
        .menu{
            height: 50px;
            line-height:50px;
            margin-bottom: 40px;
        }
    }
}
</style>

