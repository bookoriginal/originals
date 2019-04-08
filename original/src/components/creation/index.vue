<template>
    <div class="waapper">
        <headers></headers>
        <Banner></Banner>
        <div class="contain">
            <router-link 
               
                to="/creation/btn"
                active-class='sel'
            >
                作品集
            </router-link>

             <router-link 
                
                to="/creation/upwork"
                active-class='sel'
            >
                写新小说
            </router-link>

            <!-- <div class="btn">创作中的作品</div> -->
            <router-link 
               
                to="/creation/creatbook"
                active-class='sel'
            >
                创作中的作品
            </router-link>
        </div>
        <router-view></router-view>>
        <Footer></Footer>
        <!-- <Up></Up> -->
    </div>
</template>

<script>
import headers  from '../index/header/header'
import Footer  from '../index/footer/footer'
import Banner from '../sample/cre_banner'
// import Up from './up.vue'
export default {
    data () {
        return {        }    
    },
    components: {
        headers,
        Footer,
        Banner,
        // Up
    }
}
</script>
<style lang="less" scoped>
.waapper{
    background: #fff;
    .contain{
        width: 1200px;
        margin: 0 auto;
        height: 80px;
        display: flex;
        // background:red;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top:80px;
        margin-bottom: 80px;
        a{
            display:inline-block;
            height: 80px;
            width:300px;
            background: #1bb9f6;
            border-radius: 10px;
            text-align: center;
            line-height: 80px;
            font-size: 20px;
            color:#fff;
        }
        div{
            
            background: blue;
            height: 50px;
            line-height: 50px;
        }
    }
    #xian{
        width: 1200px;
        margin: 0 auto;
    }
}
</style>



