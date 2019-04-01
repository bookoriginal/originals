<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">{{item}}</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="book-recommend">
            <h3>热门小说推荐</h3>
            <p>读书伴我成长</p>
            <div class="book-list">
                <div class="list">
                    <div class="one">
                        <i class="fa fa-book fa-4x" aria-hidden="true"></i>
                        <div>
                            <span>
                                排行榜
                            </span>
                        </div>
                    </div>
                    <router-link v-for="(item,index) in 8"  to="/index" :key="index">
                        <i class="fa fa-dot-circle-o" aria-hidden="true"></i><span>{{item}}</span>
                    </router-link>
                </div>
                <div class="sx">

                </div>
                <div class="list">
                    <div class="one two">
                        <i class="fa fa-glass  fa-4x" aria-hidden="true"></i>
                        <div>
                            <span>
                                排行榜
                            </span>
                        </div>
                    </div>
                    <router-link v-for="(item,index) in 8" to="/index" :key="index">
                        <i class="fa fa-dot-circle-o" aria-hidden="true"></i><span>{{item}}</span>
                    </router-link>
                </div>
                <div class="sx">

                </div>
                <div class="list">
                    <div class="one">
                        <i class="fa fa-bullhorn  fa-4x" aria-hidden="true"></i>
                        <div>
                            <span>
                                排行榜
                            </span>
                        </div>
                    </div>
                    <router-link v-for="(item,index) in 8"  to="/index" :key="index">
                        <i class="fa fa-dot-circle-o" aria-hidden="true"></i><span>{{item}}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper' 
export default {
    data(){
        return{
            imgList:['hahah','fafasdfasdf','sdfafsdfa'],
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
    height: 755px;
    position: relative;
    background: #ddd;
    .swiper-container{
        width: 100%;
        height: 550px;
        box-shadow: 0 0 5px #000;
        .swiper-slide{
            background: #f66;
        }
    }
    .book-recommend{
        width: 1200px;
        height: 400px;
        background: #fff;
        position: absolute;
        top:350px;
        left: 10.6%;
        z-index: 999;
        box-shadow: 0 0 5px 0;
        border-radius: 5px;
        h3{
            width: 100%;
            height: 40px;
            text-align: center;
            line-height: 30px;
        }
        p{
            width: 100%;
            height: 40px;
            text-align: center;
            // line-height: 30px;
        }
        .book-list{
            overflow: hidden;
            .list{
                float: left;
                width: 399px;
                padding: 0 50px;
                span{
                    margin-left:10px;
                }
                a{
                    width: 299px;
                    height: 25px;
                    line-height: 25px;
                    display: block;
                    span{
                        color: #999;
                    }
                }
                .one{
                    width: 299px;
                    height: 80px;
                    margin-bottom:30px; 
                    background: skyblue;
                    border-radius:40px; 
                    text-align: start;
                    padding: 10px 0;
                    box-shadow: 10px 10px 30px skyblue; 
                    i{
                        margin-left: 30px;
                        color: #fff;
                    }
                    div{
                        display: inline-block;
                        width: 150px;
                        margin-left: 20px;
                        font-size: 20px;
                        color: #fff;
                    }
                }
                .two{
                    background: orange;
                    box-shadow: 10px 10px 30px orange;
                }
            }
            .sx{
                float: left;
                height: 250px;
                width:1px;
                background: #999;
                margin-top:30px; 
            }
        }
    }
}
</style>
