<template>
    <div class="waapper">
      
        <div class="contain">
            <router-link    
                to=""
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
            <router-link 
                to="/creation/creatbook"
                active-class='sel'
            >
                创作中的作品
            </router-link>
        </div>
        <router-view></router-view>>
    </div>
</template>

<script>

import Footer  from '../common/footer/footer'

export default {
    data () {
        return {        }    
    },
    components: {
        Footer,
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



