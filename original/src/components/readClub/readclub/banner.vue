<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">{{item}}</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        
    </div>
</template>
<script>
import Swiper from 'swiper' 
export default {
    data(){
        return{
            imgList:[1,2,3,4]
        }
    },
    methods:{
        initSwiper(){
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay:true,
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
            })        
        },
        initData(){
            this.$nextTick(()=>{
                this.initSwiper()
            })
        }
    },
    created(){
        this.initData();
    }
}
</script>
<style lang="less" scoped>
@import '../../../../node_modules/swiper/dist/css/swiper.min.css';
.banner{
    height: 550px;
    background: #ddd;
    .swiper-container{
        width: 100%;
        height: 550px;
        box-shadow: 0 0 5px #000;
        .swiper-slide{
            background: #f66;
        }
    }
    
}
</style>
