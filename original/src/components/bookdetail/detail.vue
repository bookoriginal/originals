<template>
    <div class="book-details">
      <div class="book-contain">
          <div class="detail-tit">
              <p><router-link to='/bookshelf'>我的书架 > </router-link><span class="gray">远来是你</span></p>
          </div>
          <div class="detail-contain">
              <div class="book-img">
                  <img src="@/assets/180.jpg" alt="">
              </div>
              <div class="book-msg">
                  <h3>远来是你</h3>
                  <p><span>作者：安锦年</span><span>类型：短篇小说</span></p>
                  <p><span>状态：已完结</span><span>版权：已签约</span></p>
                  <p class="book-int">得不到的永远在骚动,被偏爱的永远有恃无恐—— 对宋乔来说，许未远就是她一辈子可望而不可及的骚动与惊恐。 从第一眼的凝视，她就清楚地知道</p>
                  <div class="book-button">
                      <button class="book-read" @click='read'>开始阅读</button>
                      <button class="book-col" @click="coll"> 收藏本书</button>
                  </div>                  
              </div>
          </div>
          <div class="detail-list">
              <div class="book-list">
                 <div class="list-tit">目录</div>
                 <div class="list" >
                     <div class="list-left">
                        <p v-for="(item,index) of  showList.slice(0,5)"  :class="{on:index%2==0,off:index%2!=0}" :key=index >{{item.num}}<span>{{item.title}}</span></p>
                     </div>
                     <div class="list-right" >
                       <p v-for="(item,index) of  showList.slice(5,10)"  :class="{on:index%2==0,off:index%2!=0}" :key=index>{{item.num}}<span>{{item.title}}</span></p>
                     </div>                     
                 </div>
                <div class="list-button">
                    <Page class="page" :total="totalproblemList.length" :page-size= 'pagesize' @on-change="method" />
                </div>
              </div>
              <div class="book-recommend">
                  <div class="recommend-tit">同类热门书籍</div>
                 <div class="recommend-list">
                     <div class="list-com" v-for="(item,index) of info" :key=index>
                         <div class="com-img">
                             <img src='@/assets/shu1.jpg' alt="">
                         </div>
                         <div class="com-info">
                             <h3>{{item.title}}</h3>
                             <p>{{item.type}}</p>
                             <span>{{item.writer}}</span>
                         </div>
                     </div>
                 </div>
              </div>
          </div>
       </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Page } from 'iview'
Vue.component ('Page' , Page)
export default {
    data(){
        return {
             totalproblemList:[
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
            showList:[],
            datacount:10,
            pagesize:10,
            info:[
                {title:'时光小酒馆',type:'穿越小说',writer:'风轻'},
                {title:'时光小酒馆',type:'穿越小说',writer:'风轻'},
                {title:'时光小酒馆',type:'穿越小说',writer:'风轻'},
                {title:'时光小酒馆',type:'穿越小说',writer:'风轻'},
                {title:'时光小酒馆',type:'穿越小说',writer:'风轻'},
                {title:'时光小酒馆',type:'穿越小说',writer:'风轻'}
            ]
        }
    },
    mounted(){
            this.showList = this.totalproblemList.slice(0,this.pagesize)
    },
    methods: { 
            read(){
                console.log(this)
                this.$store.commit('get',{data:{tit:'2222',con:'345677654'}})
                this.$store.commit('change')
            } ,
            coll(){
                 alert("已收藏本书！")
            },        
            method(index){
                console.log(index);
                var _start = (index-1) * this.pagesize;
                var _end = index * this.pagesize;
                this.showList = this.totalproblemList.slice(_start,_end)                
            },
            show (index) {               
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.totalproblemList[index].name}<br>Age：${this.totalproblemList[index].fontNum}<br>Address：${this.totalproblemList[index].type}`
                })
            },
            remove (index) {
                console.log(index);                
                if(index<5){
                   this.showList.splice(index,1)
                    // this.totalproblemList.splice(index, 1);
                }
                this.totalproblemList.splice(index, 1);
            }
        }
}
</script>
<style lang="less" scoped>
.book-details{
     width: 100%;
     height: 100%;
     background: #fff;
     .book-contain{
         width: 1200px;
         margin:0 auto;
         background: #fff;
         .detail-tit{
             height: 80px;
             line-height: 80px;
             font-size: 20px;
             padding-left:20px;
             p{ 
                 a{
                  color: #515a6e;
                 }
                .gray{
                    color: gray;
                }
             }
         }
         .detail-contain{
             height: 350px;
             .book-img{
                width: 250px;
                height: 350px;
                background: rgb(159, 247, 46);
                float: left;
                img{
                    height: 100%;
                }
             }
             .book-msg{
                 float: right;
                 width: 950px;
                 height: 350px;
                 padding-left: 30px;
                 position: relative;
                 h3{
                 height: 50px;
                 line-height: 50px;
                 font-size: 22px;
                 }
                 p{
                 height: 30px;
                 line-height: 30px;
                 font-size: 16px;
                    span{
                        margin-right:20px;
                    }   
                 }
                 .book-button{
                     position: absolute;
                     bottom:30px;
                     button{
                        border-radius: 10px;
                         width: 120px;
                         height: 50px;
                         margin-right: 30px;
                         border: 2px solid orange;
                         background: #fff;
                          color: orange;
                         font-size: 18px;                         
                     }
                    .book-read{
                            color:#fff;
                            background: orange;
                            a{
                              color:#fff;
                            }
                    }
                 }
             }
         }
         .detail-list{
             height: 600px;
             .book-list{
                 width:1000px;
                 float:left;
                 margin-right:10px;
                 border-right: 1px solid #eee;
                 position: relative;
                 .list-tit{
                     height: 50px;
                     line-height: 50px;
                     font-size: 18px;                   
                 }
                 .list{
                     width:1000px;
                     height: 540px;
                     font-size:16px;
                    .list-left{
                        width: 500px;
                        float:left;
                        p{
                          height: 64px;
                          padding-left: 5px;
                          line-height: 64px;
                          background: #fff;
                          span{
                              margin-left: 5px;
                          }
                        }
                        .on{
                         background: #eee;
                        }
                        .off{
                          background: #fff;
                        }
                    }
                    .list-right{
                        p{
                          height: 64px;
                          padding-left: 5px;
                          line-height: 64px;
                          background: #fff;
                          span{
                            margin-left: 5px;
                          }
                        }
                        .on{
                         background: #eee;
                        }
                        .off{
                          background: #fff;
                        }
                    }    
                 }
                 .list-button{
                        position: absolute;
                        bottom: 20px;
                        left: 400px;
                 }
             }
             .book-recommend{
                 .recommend-tit{
                     height: 50px;
                     line-height: 50px;
                     font-size: 16px;                      
                 }
                 .recommend-list{
                         height: 540px;
                         .list-com{
                             height: 64px;
                             margin-bottom: 16px;
                            .com-img{
                                height: 64px;
                                width: 45px;
                                background: red;
                                float: left;
                                margin-right: 10px;
                                img{
                                    width: 45px;
                                    height: 100%;
                                }
                            }
                         }
                     }
             }
         }
     }
}
</style>


