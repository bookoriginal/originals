<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">1
                    <!-- <img src='../../../common/img/1.jpg' alt=""> -->3
                </div>
                <div class="swiper-slide">2
                    <!-- <img src='../../../common/img/2.jpg' alt=""> -->
                </div>
                <div class="swiper-slide">3
                    <!-- <img src='../../../common/img/3.jpg' alt=""> -->
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="book-recommend">
            <div class="book-in">
                <h3>热门小说推荐</h3>
                <p>读书伴我成长</p>
                <div class="book-list">
                    <div class="list" v-for="(item,index) in hot" :key="index">
                        <div :class="index===1?'two':'one'">
                            <i :class="['iconfont',item.icon]"></i>
                            <p>
                                <span>
                                   {{item.tit}}
                                </span>
                            </p>
                        </div>
                        <router-link v-for="(item,index) in 8"  to="/news/newsdetail" :key="index">
                            <i class="fa fa-dot-circle-o" aria-hidden="true"></i><span>{{item}}</span>
                        </router-link>
                    </div>
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
            imgList:[
                
                // '../../../common/img/2.jpg',
                // '../../../common/img/3.jpg',
            ],
            hot:[
                {
                    icon:'iconicon-1',
                    tit:'排行榜',
                    bookData:[]
                },
                {
                    icon:'iconjingcaishunjian',
                    tit:'精彩专题',
                    bookData:[]
                },
                {
                    icon:'iconjingpin',
                    tit:'精品图书',
                    bookData:[]
                }
            ]
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
           
        }
    },
    created(){
        this.initSwiper();
        this.initData();
    }
}
</script>
<style lang="less" scoped>
@import '../../../../node_modules/swiper/dist/css/swiper.min.css';
.banner{
    height: 755px;
    background: #ddd;
    .swiper-container{
        width: 100%;
        height: 550px;
        box-shadow: 0 0 5px #000;
        .swiper-slide{
            // background: #f66;
            img{
                width: 100%;
            }
        }
    }
    .book-recommend{
        width: 1200px;
        position: relative;
        margin:0 auto;
        .book-in{
            width: 1200px;
            height: 400px;
            position: absolute;
            background: #fff;
            box-shadow: 0 0 5px 0;
            border-radius: 5px;
            z-index: 999;
            top:-200px;
            left:0;
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
                    div{
                        width: 299px;
                        height: 80px;
                        margin-bottom:30px; 
                        background: skyblue;
                        border-radius:40px; 
                        text-align: start;
                        // padding: 10px 0;
                        box-shadow: 10px 10px 30px skyblue; 
                        i{
                            font-size: 50px;
                            margin-left: 30px;
                            color: #fff;
                        }
                        p{
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
}
</style>
