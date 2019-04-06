<template>
    <div class="footer-all">
        <div class="footer-wrap">
            <div class="footer-top">
                <ul class="footer-in">
                    <li class="footer-top-tit">
                        <div class="why">
                            <div></div>
                            <h2>为什么选择读书？</h2>
                            <div></div>
                        </div>
                    </li>
                    <li v-for="(item,index) in footer" :key="index" class="footer-top-nr">
                        <div class="why-top">
                            <div class="icon">
                                <i :class="[item.icons.icon,'iconfont']"></i>
                            </div>
                            <div class="icon-tit">
                                <h3>{{item.icons.tit}}</h3>
                                <p>{{item.icons.tit2}}</p>
                                <p>{{item.icons.tit3}}</p>
                            </div>
                        </div>
                        <div class="why-bottom">
                            <p>
                                 {{item.icons.neirong}}   
                            </p>  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <ul class="contact-information">
                <li v-for="(item,index) in arr" :key="index">
                    <div class="icon2">
                        <i :class="['iconfont',item.iconf]"></i>
                    </div>
                    <div class="contect">
                        <p>{{item.name}}</p>
                        <span>{{item.dz}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            footer:[
                {
                    icons:{
                            icon:'iconwangluoketang',
                            tit:'网络课堂',
                            tit2:'随时随地上课',
                            tit3:'价格低',
                            neirong:'读书可以增加一个人谈吐的质量和深度。读书，可以让你掌握知识，而知识就像呼吸 一样，吐纳之间，可以见人的气质与涵养。读书，在某种程度上，可以让你获得优越感，而优越感某种程度上又是建立自信的一种方式，这是读书最明显的一个功效。也是相当一部分人想要读书的目的'
                        },
                    
                },
                {
                    icons:{
                            icon:'iconliujiaoxingxing',
                            tit:'网络课堂',
                            tit2:'随时随地上课',
                            tit3:'价格低',
                            neirong:'读书可以增加一个人谈吐的质量和深度。读书，可以让你掌握知识，而知识就像呼吸 一样，吐纳之间，可以见人的气质与涵养。读书，在某种程度上，可以让你获得优越感，而优越感某种程度上又是建立自信的一种方式，这是读书最明显的一个功效。也是相当一部分人想要读书的目的'
                        },
                    
                },
                {
                    icons:{
                            icon:'iconlaoshi',
                            tit:'网络课堂',
                            tit2:'随时随地上课',
                            tit3:'价格低',
                            neirong:'读书可以增加一个人谈吐的质量和深度。读书，可以让你掌握知识，而知识就像呼吸 一样，吐纳之间，可以见人的气质与涵养。读书，在某种程度上，可以让你获得优越感，而优越感某种程度上又是建立自信的一种方式，这是读书最明显的一个功效。也是相当一部分人想要读书的目的'
                        },
                    
                },
                {
                    icons:{
                            icon:'iconbook',
                            tit:'网络课堂',
                            tit2:'随时随地上课',
                            tit3:'价格低',
                            neirong:'读书可以增加一个人谈吐的质量和深度。读书，可以让你掌握知识，而知识就像呼吸 一样，吐纳之间，可以见人的气质与涵养。读书，在某种程度上，可以让你获得优越感，而优越感某种程度上又是建立自信的一种方式，这是读书最明显的一个功效。也是相当一部分人想要读书的目的'
                        },
                    
                }
            ],
            arr:[
                {
                    iconf:'iconiOS',
                    name:'App Store',
                    dz:'立即下载'
                },
                {
                    iconf:'iconanzhuo',
                    name:'Androd',
                    dz:'立即下载'
                },
                {
                    iconf:'iconweixin',
                    name:'官方微信',
                    dz:'立即关注'
                }

            ]
        }
    }
}
</script>
<style lang="less" scoped>
.footer-all{
    width: 100%;
    .footer-wrap{
        width: 1200px;
        margin:0 auto;
        padding-top: 30px;
        .footer-top{
            width: 1200px;
            height: 340px;
            .footer-in{
                width: 1200px;
                height: 340px; 
                .footer-top-tit{
                    width: 1200px;
                    height: 30px; 
                    text-align: center;
                    line-height: 30px;
                    .why{
                        width: 345px;
                        overflow: hidden;
                        margin-left:36%;
                        div{
                            width: 100px;
                            height: 1px;
                            background: #ddd;
                            float: left;
                            margin-top:15px; 
                        }
                        h2{
                            float: left;
                        }
                    }
                }
                .footer-top-nr{
                    width: 225px;
                    height: 300px;
                    float: left;
                    padding: 0 20px;
                    margin-right:100px;
                    box-shadow: 0 0 10px #ddd;
                    .why-top{
                        width: 195px;
                        height: 100px;
                        padding: 10px;
                        .icon{
                            width: 50px;
                            float: left;
                            height: 80px;
                            i{
                                font-size: 50px;
                                color:#f66;
                            }
                        }
                        .icon-tit{
                            padding:10px 0 0 10px ;
                            float: left;
                        }
                    }
                }
                li:nth-child(5){
                    margin-right:0;
                }
            }
        }
        
    }
    .footer-bottom{
        width: 100%;
        height: 150px;
        background: skyblue;
        ul{
            width: 1200px;
            height: 150px;
            margin: 0 auto;
            padding: 0 150px;
            li{
                width: 300px;
                height: 150px;
                float: left;
                .icon2{
                    width: 150px;
                    float: left;
                    height: 100%;
                    text-align: end;
                    line-height: 150px;
                    i{
                        font-size: 50px;
                        color: #fff;
                    }
                }
                .contect{
                    width: 150px;
                    height: 100%;
                    float: left;
                    padding-top: 35px;
                    color: #fff;
                    p{
                        font-size: 16px;
                        padding: 5px;
                        margin-bottom:10px; 
                    }
                    span{
                        margin-top:10px;
                        padding: 10px 15px;
                        border:2px solid #ffffff;
                        border-radius:20px; 
                    }
                }
            }
        }
    }
}
</style>
