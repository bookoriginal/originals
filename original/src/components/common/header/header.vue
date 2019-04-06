<template>
    <div class='header-wrap'>
        <div class="header">
            <div class="header-top">
                <div class="header-input">
                    <div class="input">
                        <div class="input-left">
                            <div  @click="writerChange()">
                                作者
                                <i :class="['iconfont',show?'iconeen1':'iconeen']" aria-hidden="true"></i>
                            </div>
                            <transition 
                                enter-active-class='fadeIn animated'
                            >
                                <ul v-show="show">
                                    <router-link tag = 'li' v-for="(item,index) in writerArr" to='/index' :key="index" >
                                        <b>{{item}}</b>
                                    </router-link>
                                </ul>
                            </transition>
                        </div>
                        <div class="input-right">
                            <input type="text" v-model="msg" placeholder='请输入书名、作者' autocomplete="off">
                            <transition 
                            enter-active-class='fadeIn animated'
                            >
                            <ul v-show="inputShow">
                                <li v-for="(item,index) in sousuo">
                                    <i>{{index+1}}</i>
                                    {{item}}
                                </li>
                            </ul>
                            </transition>
                        </div>
                    </div>
                    <span><i class="fa fa-search" aria-hidden="true"></i>搜索</span>
                </div>
                <ul class="header-login" >
                    <router-link tag='li' to="/register">
                        <i class="fa fa-gift" aria-hidden="true"></i>
                        <span>注册有礼</span>
                    </router-link>
                    <router-link tag='li' to="/login">
                        登录
                    </router-link>
                    <li class="user">
                        <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
            <div :class="['header-bottom',navBarFixed?'navBarWrap':'']" >
                <div class="bottom-wrap">
                    <ul class="header-nav">
                        <router-link tag="li"  v-for="(item,index) in arr" :to="item.path" :key="index" class="header-li"
                            @click.native="borderChenge(index)"
                            @mouseenter.native="changeTwoList(index)"
                            @mouseleave.native="changeTwoLists()"
                        >
                            <span 
                                :class="borderNum===index?'borderShow':''"
                            >{{item.name}} <i :class="[twolistnum===index?item.icon2:item.icon,'iconfont']"></i></span>
                            <transition 
                                enter-active-class='fadeIn animated'
                            >
                                <ul  v-if="item.two" v-show='twolistnum===index'>
                                    <li v-for="(item2,index) in item.twolist">
                                        {{item2.tit}}
                                    </li>
                                </ul>
                            </transition>
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
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {name:'首页',path:'/index',icon:'',icon2:'',two:false},
                {name:'新闻',path:'/news',icon:'',icon2:'',two:false},
                {name:'读书会',path:'/index',icon:'',icon2:'',two:false},
                {name:'我的书架',path:'/index',icon:'iconeen',icon2:'iconeen1',two:true,
                twolist:[{
                    tit:'我的书架'
                }]},
                {name:'我的创作',path:'/index',icon:'iconeen',icon2:'iconeen1',two:true,
                twolist:[{
                    tit:'我的创作'
                }]},
                {name:'我的书评',path:'/index',icon:'',icon2:'',two:false},
                {name:'个人中心',path:'/index',icon:'',icon2:'',two:false}
            ],
            writerArr:['天蚕土豆','haha','hehe','lala','erer'],
            show:false,
            inputShow:false,
            sousuo:['斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹','斗破苍穹'],
            msg:'',
            twolistnum:0,
            borderNum:0,
            navBarFixed:false
        }
    },
    methods:{
        writerChange(){
            console.log('haha1')
            this.show = !this.show;
        },
        borderChenge(index){
            this.borderNum = index;
        },
        changeTwoLists(){
            this.twolistnum=0;
        },
        changeTwoList(index){
            console.log(index)
            this.twolistnum = index;
        },
        bookData(){
            if(this.msg===''){
                this.inputShow=false;
            }else{
                this.inputShow=true;
            }
        },
        watchScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            //  当滚动超过 50 时，实现吸顶效果
            if (scrollTop > 49) {
            this.navBarFixed = true
            } else {
            this.navBarFixed = false
            }
        }
    },
    watch:{
        msg:function(){
            this.bookData();
        }
    },
    mounted (){
        window.addEventListener('scroll', this.watchScroll)
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
            width: 100%;
            height: 100%;
            .header-top{
                width: 1200px;
                height: 50px;
                position: relative;
                margin: 0 auto;
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
                        .input-left{
                            width: 60px;
                            height: 30px;
                            float: left;
                            text-align: center;
                            line-height: 30px;
                            float: left;
                            position: relative;
                            cursor:pointer;
                            i{
                                font-size: 12px;
                            }
                            ul{
                                width: 60px;
                                height: 80px;
                                position: absolute;
                                left: 0;
                                top:30px;
                                z-index: 9;
                                background: rgba(255,255,255,.5);
                                overflow: hidden;
                                li{
                                    width: 60px;
                                    line-height: 20px;
                                }
                            }
                            
                        }
                        .input-right{
                            input{
                                width: 200px;
                                height: 28px;
                                float: left;
                                border: 0;
                                outline:none;
                                position: relative;
                            }
                            ul{
                                width: 200px;
                                max-height :300px;
                                background: rgba(255,255,255,.5);
                                overflow: hidden;
                                z-index: 9;
                                position: absolute;
                                top: 30px;
                                left: 60px;
                                li{
                                    width: 200px;
                                    line-height: 30px;
                                }   
                            }
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
                width: 100%;
                height: 50px;
                background: #fff;
                
                .bottom-wrap{
                    width: 1200px;
                    height: 50px;
                    margin:0 auto;
                    .header-nav{
                        float: left;
                        .header-li{
                            float: left;
                            padding: 8px 20px 7px;
                            font-size: 18px;
                            cursor:pointer;
                            position: relative;
                            span{
                                display: block;
                                line-height: 30px;
                            }
                            i{
                                height: 22px;
                                width: 20px;
                            }
                            .borderShow{
                                color:skyblue;
                                border-bottom:3px solid skyblue; 
                            }
                            ul{
                                position: absolute;
                                top: 40px;
                                left: 0;
                                z-index: 9;
                                background: rgba(255,255,255,.5);
                                width:200px;
                                height: 150px;
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
            .navBarWrap{
                box-shadow: 0 0 5px #333;
                position:fixed;
                top:0;
                z-index:9999;
            }
        }
    }
</style>
