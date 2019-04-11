<template>
    <div class="selected">
        <dir class="selected-all">
            <div class="selected-tit">
                <h3>动态新闻</h3>
                <router-link to="/index">
                    <span>更多
                        <i class="iconfont">&#xe60c;</i>
                    </span>
                </router-link>
            </div>
            <div class="selected-list">
                <div class="selected-img">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                    <div class="btn">
                        <Button type="primary">查看更多 ></Button>
                    </div>
                    <div class="tit">
                        <h2>动态新闻</h2>
                        <span></span>
                        <p>行业聚焦与新闻动态</p>
                    </div>
                </div>
                <div class="selected-news">
                    <ul class="title">
                        <li @click="changeNews()">
                           <i class="icondiqiu iconfont"></i>
                           <h3>新闻资讯</h3>
                        </li>
                        <li @click="changeDynamic()" class="dt">
                            <i class="icontubiaozhexiantu iconfont"></i>
                            <h3>行业动态</h3>
                        </li>
                    </ul>
                    <div class="news bottom" v-show="newsShow" >
                        <ul>
                            <li v-for="(item,index) in data">
                                <div class="time">
                                    <div class="year">
                                        {{item.year}}
                                    </div>
                                    <div class="day">
                                        {{item.day}}
                                    </div>
                                </div> 
                                <div class="all-news">
                                    <router-link to='/news'>{{item.tit}}</router-link>
                                    <p>{{item.article}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="dynamic bottom" v-show="!newsShow" >
                        <ul>
                            <li v-for="(item,index) in data">
                                <div class="time">
                                    <div class="year">
                                        {{item.year}}
                                    </div>
                                    <div class="day">
                                        {{item.day}}
                                    </div>
                                </div> 
                                <div class="all-news">
                                    <router-link to='/news'>{{item.tit}}</router-link>
                                    <p>{{item.article}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </dir>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newsShow:true,
            data:[
                {
                    year:'2019-4',
                    day:'09',
                    tit:'读一本好书，会使你升华',
                    article:'简介简介军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军'
                },
                {
                    year:'2019-4',
                    day:'09',
                    tit:'读一本好书，会使你升华',
                    article:'简介简介军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军'
                },
                {
                    year:'2019-4',
                    day:'09',
                    tit:'读一本好书，会使你升华',
                    article:'简介简介军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军'
                },
                {
                    year:'2019-4',
                    day:'09',
                    tit:'读一本好书，会使你升华',
                    article:'简介简介军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军军'
                }
            ]
        }
    },
    methods:{
        // initData(){
        //     let url = '';
        //     this.axios.get(url)
        //     .then((data)=>{
        //         this.data = data
        //     })
        // },
        changeNews(){
            this.newsShow = true;
        },
        changeDynamic(){
            this.newsShow = false;
        }
    },
    created(){
        // this.initData()
    }
}
</script>
<style lang="less" scoped>
.selected{
    width: 100%;
    height: 600px;
    background: #ddd;
    .selected-all{
        width:1200px;
        height: 100%;
        margin: 0 auto;
        .selected-tit{
            width: 100%;
            height:50px;
            line-height: 60px;
            overflow: hidden;
            h3{
                float: left;
            }
            a{
                float: right;
            }
        }
        .selected-list{
            width: 100%;
            height: 550px;
            background: #fff;
            .selected-img{
                width: 300px;
                height: 100%;
                float: left;
                background: skyblue;
                position: relative;
                color: #fff;
                .img{
                    width: 100%;
                    height: 100%;
                }
                .btn{
                    position: absolute;
                    bottom: 60px;
                    left: 20px;
                }
                .tit{
                    position: absolute;
                    top:30px;
                    left: 20px;
                    h2{
                        font-size: 40px;
                    }
                    span{
                        display: block;
                        width: 40px;
                        height: 5px;
                        background: #fff;
                        margin:10px 0 ;
                    }
                }
            }
            .selected-news{
                width: 900px;
                height: 100%;
                float: left;
                padding-left:50px; 
                .title{
                    width: 100%;
                    height: 150px;
                    padding-top: 35px;
                    li{
                        width: 250px;
                        height: 80px;
                        background: skyblue;
                        float: left;
                        border-radius: 20px;
                        text-align: center;
                        line-height: 80px;
                        font-size: 20px;
                        padding-left: 50px;
                        color:#fff;
                        margin-right:10px; 
                        i{
                            display:block;
                            float: left;
                            font-size: 40px;
                            margin-right: 20px; 
                        }
                        h3{
                            float: left;
                        }
                    }
                    .dt{
                        background:orange;
                    }
                }
                .bottom{
                    width: 100%;
                    height: 400px;
                    position: absolute;
                    ul{
                        width: 100%;
                        height: 400px;
                        li{
                            width: 100%;
                            height: 80px;
                            margin-bottom: 20px;
                            .time{
                                float: left;
                                width: 80px;
                                height: 80px;
                                border: 1px solid #ddd;
                                margin-right: 20px;
                                .year{
                                    // padding: 5px;
                                    border-bottom: 1px solid #ddd;
                                    text-align: center;
                                    line-height: 30px;
                                }
                                .day{
                                    line-height: 50px;
                                    text-align: center;
                                    font-size: 40px;
                                }
                            }
                            .all-news{
                                width: 750px;
                                height: 80px;
                                float: left;
                                a{
                                    margin-bottom: 10px;
                                    line-height: 30px;
                                    font-size: 20px;
                                    display: block;
                                    color: #999;
                                }
                                p{
                                    line-height: 20px;
                                }
                            }
                        }
                    }
                }
            }

        }
    }
    
}
</style>
