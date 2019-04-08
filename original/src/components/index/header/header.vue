<template>
    <div class='header-wrap'>
        <div class="header">
            <div class="header-top">
                <div class="header-input">
                    <div class="input">
                        <div>
                            作者
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                        <input type="text">
                    </div>
                    <span><i class="fa fa-search" aria-hidden="true"></i>搜索</span>
                </div>
                <ul class="header-login">
                    <li>
                        <i class="fa fa-gift" aria-hidden="true"></i>
                        <span>注册有礼</span>
                    </li>
                    <router-link tag='li' to="/login">
                        登录
                    </router-link>
                    <li class="user">
                        <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
            <div class="header-bottom">
                <ul class="header-nav">
                    <router-link tag="li"  v-for="(item,index) in arr" :to="item.path" :key="index">
                        <span>{{item.name}} <i :class="[item.icon,'iconfont']"></i></span>
                        
                    </router-link>
                </ul>
                <ul class="header-gz">
                    <li>
                        <i class="fa fa-mobile" aria-hidden="true"></i>
                        <span>APP下载</span>
                    </li>
                    <li>
                        <i class="fa fa-qrcode" aria-hidden="true"></i>
                        <span>官方微信</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {name:'首页',path:'/index',icon:''},
                {name:'新闻',path:'/index',icon:''},
                {name:'读书会',path:'/index',icon:''},
                {name:'我的书架',path:'/index',icon:'iconeen'},
                {name:'我的创作',path:'/index',icon:'iconeen'},
                {name:'我的书评',path:'/index',icon:''},
                {name:'个人中心',path:'/index',icon:''}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css';
    .header-wrap{
        width: 100%;
        height:100px;
        background: #fff;
        .header{
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            .header-top{
                width: 1200px;
                height: 50px;
                position: relative;
                .header-input{
                    float: left;
                    width: 325px;
                    height: 32px;
                    border-radius: 15px;
                    position: absolute;
                    left: 300px;
                    bottom: 0;
                    .input{
                        width: 265px;
                        height:30px;
                        border: 1px solid #ddd;
                        border-radius:15px 0 0 15px; 
                        border-right: 0;
                        float: left;
                        div{
                            width: 60px;
                            height: 30px;
                            float: left;
                            text-align: center;
                            line-height: 30px;
                            float: left;
                        }
                        input{
                            width: 200px;
                            height: 28px;
                            float: left;
                            border: 0;
                            outline:none;
                        }
                    }
                    span{
                        width: 60px;
                        height: 30px;
                        display: inline-block;
                        text-align: center;
                        line-height: 30px;
                        background: skyblue;
                        color: #fff;
                        border-radius:0 15px 15px 0;
                        cursor:pointer;
                    }
                }
                .header-login{
                    float: right;
                    margin-top:20px; 
                    li{
                        height: 30px;
                        float: left;
                        border: 1px solid #ddd;
                        border-radius: 15px;
                        margin:0 5px;
                        padding:0 15px;
                        line-height: 30px;
                        cursor:pointer;
                    }
                    .user{
                        border: 0;
                    }
                }
            }
            .header-bottom{
                width: 1200px;
                height: 50px;
                .header-nav{
                    float: left;
                    li{
                        float: left;
                        padding: 12px 20px 11px;
                        font-size: 18px;
                        cursor:pointer;
                        span{
                            height: 22px;
                        }
                        i{
                            height: 22px;
                            width: 20px;
                            background: #f66;
                        }
                    }
                }
                .header-gz{
                    float: right;
                    li{
                        float: left;
                        padding: 16px;
                        cursor:pointer;
                    }
                }
            }
        }
    }
</style>
