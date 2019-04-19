<template>
    <div class="book-content">
        <div class="book-button">
            <button @click='back'>远来是你</button>
        </div>
       <div class="a-wrapper">         
         <div class="container">
             <h3>1  似曾相识</h3>
            <p>微弱的光线透过稀薄的云层，唤醒了浸泡在雨水中多日的城市。空气中满满的水汽裹挟在恣意的热浪里，让刚刚六月的北京变成了一只巨大的蒸笼，闷热得叫人止不住心烦气躁。</p>
            <p>宋乔睡得极不安稳，紧皱的眉头和死扣的牙关泄露了她此刻梦境的灰霾。蓦地，她睁开眼睛，困顿了几秒后摸出枕头下的手机按亮。不过才早晨六点，身上就已经出了一层黏黏腻腻的汗，只是不知是因为早早到来的盛夏，还是方才那个不愿再记起的梦境。</p>
            <p>她转头望向窗外已经大亮的天色，有些无奈地叹了口气。缓缓起身拍了拍脸，赤脚踏在素洁的地板上，沁凉的触感从脚底一直延伸到头顶。她抓起搭在一旁椅背上的浴巾，随手打开电视后进了浴室。</p>
            <p>温热的水从花洒中倾泻而下，水汽瞬间氤氲，水珠落在白瓷的地砖上，发出噼噼啪啪的声音。才将头发打湿，她便在隐约间听到熟悉的《Eyes  on  me》的旋律在客厅一遍又一遍地响个不停，本打算不予理睬，可是对方却铁了心地一遍又一遍地拨个不停。宋乔无法再装聋作哑，只得胡乱拢了头发裹着浴巾冲了出去。 </p>
            <p>才按下接听键，那边苏安诺的大嗓门就震得她一个激灵：“宋小乔！你搞什么鬼？怎么这么久才接电话？老实交代，你是不是又在春心荡漾地干坏事？”</p>
            <p>宋乔有些头疼地眯了眯眼睛，语带警告：“苏安诺！大清早的扰人清梦是要下地狱的！” </p>
            <p> “没事儿，只要没扰了你的春梦就好！”苏安诺哧哧地笑了两声后又道：“宋小乔，江湖救急！我妈今儿晚上又给我安排了饭局，你懂的。这次你无论如何也得救救我！你也知道上次她……” </p>
            
            <!-- {{title.tit}}{{title.con}} -->
            <div class="mulu" v-if="show">
                 <div class="mulu-title">目录</div>
                 <div class="wrapper">
                     <div class="content">
                        <div class="mulu-list" v-for="(item,index) of list" :key="index"><span class="mulu-num">{{item.num}}</span>{{item.title}}</div>
                     </div>
                    
                 </div>
                 
            </div>
         </div>
        
       </div>
       <ul class="content-float">
           <li class="menu"  @click="showCont"><i class="fa fa-list-ul" aria-hidden="true"></i></li>
           <!-- <li><i class="fa fa-chevron-up" aria-hidden="true"></i> </li>
           <li><i class="fa fa-chevron-down" aria-hidden="true"></i> </li> -->
       </ul> 
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
      return {
          list:[
            {num:'1',title:'似曾相识'},
            {num:'2',title:'犹恐相逢'},
            {num:'3',title:'一霎风雨'},
            {num:'4',title:'入骨相思'},
            {num:'5',title:'空欢喜'},
            {num:'6',title:'被时光掩埋的秘密'},
            {num:'7',title:'山雨欲来风满楼'},
            {num:'8',title:'陪伴'},
            {num:'9',title:'被留下的时光灰烬'},
            {num:'10',title:'重遇'},
            {num:'11',title:'晴天'},
            {num:'12',title:'永远为期'},
            {num:'13',title:'孤独心事'},
            {num:'14',title:'告白'},
            {num:'15',title:'光在，我在'}
          ],
          show:false         
      }
    },
    computed:{
        ...mapState({title:state=>state.book.title})
    },
    methods:{
        back(){
            console.log(this)
            this.$store.commit('change')
        },
        showCont:function(){
            this.show=!this.show
        },        
    },
    
}
</script>
<style lang="less" scoped>
.book-content{
    .book-button{
        button{
            width: 100px;            
            height: 30px;
            position: fixed;
            top:10px;
            left:0;
            background: #ffb6c1;
            border:none;
            font-size: 20px;
        }
    }
    width: 100%;
    height: 100%;
    // overflow: hidden;
    background: #ffb6c1;
    padding-top: 50px;
    position: absolute;
    top:0;
    z-index: 9999;
    .a-wrapper{
        width: 100%;
        height: 100%;
        overflow: hidden;
          .container{
             width: 1000px;
             height: 1000px;
             padding: 20px ;
             overflow-y:scroll;
             margin: 0 auto;
             background: rgba(255, 255, 255, .8);
             position: relative;
             h3{
                 height: 40px;
                 font-size: 30px;
                 width: 100%;
                 line-height: 40px;
                 text-align: center;
                 border-bottom: 2px solid #010;
                //  padding-bottom: 10px;
                 margin-bottom: 10px;
             }
             p{
                 font-size: 20px;
                 text-indent: 35px;
                 margin-bottom: 5px;
             }
             .mulu{
                 .mulu-title{
                    height: 80px;
                    line-height: 80px;
                    font-size: 40px;
                    text-align: center;
                    
                 }
                 .wrapper{
                     width: 1000px;
                     overflow-y: scroll;
                     height: 320px;
                     .mulu-list{
                     height: 40px;
                     line-height: 40px;
                     font-size: 22px;
                     .mulu-num{
                         width: 50px;
                         display: inline-block;
                     }
                 }
                 }
                 position: absolute;
                 top: 0;
                 left: 0;
                 z-index: 999;
                 background: #fff;
                 width: 1000px;
                 height: 400px;
                 padding-left: 50px;
                 overflow: hidden;
             }
          }
    }
    
    .content-float{
        position: fixed;
        top: 200px;
        right:133px;
        font-size: 20px;
        li{
            width: 50px;
            height: 80px;
            line-height:80px;
            text-align: center;
            background:rgba(255, 255, 255, .7);
            margin-bottom: 10px;
            
        }
        .menu{
            height: 50px;
            line-height:50px;
            margin-bottom: 40px;
        }
    }
}
</style>

