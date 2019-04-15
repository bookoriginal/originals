<template>
    <div class="book-content">
        <div class="book-button">
            <button @click='back'><</button>
        </div>
       <div class="content-msg">
          {{title.tit}}{{title.con}}

       </div>
       <ul class="content-float">
           <li class="menu"><i class="fa fa-list-ul" aria-hidden="true"></i> </li>
           <li><i class="fa fa-chevron-up" aria-hidden="true"></i> </li>
           <li><i class="fa fa-chevron-down" aria-hidden="true"></i> </li>
       </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
      return {}
    },
    computed:{
        ...mapState({title:state=>state.book.title})
    },
    methods:{
        back(){
            console.log(this)
            this.$store.commit('change')
        }
    }
}
</script>
<style lang="less" scoped>
.book-content{
    .book-button{
        button{
            width: 50px;
            height: 30px;
            position: fixed;
            top:0;
            left:0;
            background: #ffb6c1;
            border:none;
            font-size: 20px;
        }
    }
    width: 100%;
    height: 100%;
    background: #ffb6c1;
    padding-top: 50px;
    position: absolute;
    top:0;
    z-index: 9999;
    .content-msg{
        width: 1000px;
        height: 100%;
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

