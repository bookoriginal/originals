<template>
    <div class="recommend-wrap">
        <div class="recommend">
            <div class="recommend-tit">
                <h3>作者推荐</h3>
            </div>
            <div class="recommend-list">
                <!-- <ul class="guess"> -->
                    <router-link v-for="(item,index) in guessArr" :key="index" to="/index" 
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
            guessArr:[
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'},
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'},
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'},
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'},
                {img:'',tit:"斗破苍穹",introduce:"好看的小说",writer:'天蚕土豆',fabulous:255,read:899,time:'1天前'}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .recommend-wrap{
        width: 100%;
        // height: 400px;
        background: #efefef;
        padding-bottom: 30px;
        .recommend{
            width:1200px;
            height: 100%;
            margin: 0 auto;
            .recommend-tit{
                width: 100%;
                height:80px;
                line-height: 90px;
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
            .recommend-list{
                width: 1200px;
                height: 350px;
                // background: #fff;
                a{
                    width: 216px;
                    height: 350px;
                    background: #fff;
                    border-radius: 10px;
                    // display: inline-block;
                    // display: block;
                    float: left;
                    margin-right: 30px;
                    color: #333;
                }
                a:nth-child(5){
                    margin-right: 0;
                }
                .active{
                    box-shadow: 0 0 5px #000;
                }
            }
        }
        
    }
</style>
