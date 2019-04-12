<template>
    <div class="guess">
        <div class="guess-all" v-for="(item,i) in 4">
            <div class="guess-tit">
                <h3>精选</h3>
                <router-link to="/index">
                    <span>更多
                        <i class="iconfont">&#xe60c;</i>
                    </span>
                </router-link>
            </div>
            <div class="guess-list">
                <!-- <ul class="guess"> -->
                    <router-link v-for="(item,index) in guessArr" :key="index" to="/index" 
                        @mouseenter.native="boxShadow(i,index)"
                        @mouseleave.native="boxShadowNo()"
                        :class="i===num&&index===num2?'active':''"
                    >
                        <div class="bookimg">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="bookname">
                            <h3>{{item.tit}}</h3>
                            <p>{{item.introduce}}</p>
                        </div>
                        <div class="bookwriter">
                            <span>{{item.writer}}</span>
                        </div>
                        <div class="readbook">
                            <span>
                                <i class="iconfont">&#xe64e;</i>
                                {{item.fabulous}}
                            </span>
                            <span>
                                <i class="iconfont">&#xe62b;</i>
                                {{item.read}}
                            </span>
                            <span>
                                <i class="iconfont">&#xe615;</i>
                                {{item.time}}
                            </span>
                        </div>
                    </router-link>
                <!-- </ul> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:0,
            num2:0,
            guessArr:[
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'},
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'},
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'},
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'},
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'}
            ]
        }
    },
    methods:{
        changeBox(index){
            console.log(1)
            this.num = true;
        },
        boxShadow(i,index){
            this.num = i;
            this.num2 = index;
        },
        boxShadowNo(){
            this.num = null;
            this.num2 = null;
        }
    }
}
</script>
<style lang="less" scoped>
.guess{
    width: 100%;
    // height: 400px;
    background: #ddd;
    padding-bottom: 30px;
    .guess-all{
        width:1200px;
        height: 100%;
        margin: 0 auto;
        .guess-tit{
            width: 100%;
            height:50px;
            line-height: 60px;
            h3{
                height:50px;
                float: left;
            }
            a{
                height:50px;
                display: block;
                float: right;
            }
        }
        .guess-list{
            width: 1200px;
            height: 350px;
            a{
                width: 216px;
                height: 350px;
                background: #f66;
                border-radius: 10px;
                float: left;
                margin-right: 30px;
                color: #333;
                padding: 10px;
                .bookimg{
                    width: 196px;
                    height: 200px;
                    img{
                        width: 100%;
                    }
                }
                .bookname{
                    line-height: 25px;
                    padding-left: 15px;
                }
                .bookwriter{
                    line-height: 30px;
                    padding-left: 15px;
                }
                .readbook{
                    margin-top:15px;
                    span{
                        margin:0 10px;
                    }
                }
            }
            a:nth-child(5){
                margin-right: 0;
            }
            .active{
                box-shadow: 0 0 5px #333;
            }
        }
    }
    
}
</style>
