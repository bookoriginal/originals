<template>
    <div class="book-details">
      <div class="book-contain">
          <div class="detail-tit">
              <p><span>我的书架 > </span><span>我正在看的书籍 > </span><span class="gray">宠妃无度</span></p>
          </div>
          <div class="detail-contain">
              <div class="book-img">
                  <img src="" alt="">
              </div>
              <div class="book-msg">
                  <h3>宠妃无度</h3>
                  <p><span>作者：哈哈哈</span><span>类型：哈哈哈</span></p>
                  <p><span>状态：哈哈哈</span><span>版权：哈哈哈</span></p>
                  <p class="book-int">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈</p>
                  <div class="book-button">
                      <button class="book-read"> <router-link to='/bookcontent'>开始阅读</router-link></button>
                      <button class="book-col"> <router-link to='/bookcontent'>收藏本书</router-link></button>
                  </div>                  
              </div>
          </div>
          <div class="detail-list">
              <div class="book-list">
                 <div class="list-tit">目录</div>
                 <div class="list" >
                     <!-- <li v-for="(item,index) of showList" :class="{on:index%2==0,off:index%2!=0}" :key=index>{{item.num}}{{item.title}}</li> -->
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
                             <img src='' alt="">
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
export default {
    data(){
        return {
             totalproblemList:[
                {num:'1',title:'时光小酒馆'},
                {num:'2',title:'时光小酒馆'},
                {num:'3',title:'时光小酒馆'},
                {num:'4',title:'时光小酒馆'},
                {num:'5',title:'时光小酒馆'},
                {num:'9',title:'时光小酒馆'},
                {num:'2',title:'时光小酒馆'},
                {num:'3',title:'时光小酒馆'},
                {num:'9',title:'时光小酒馆'},
                {num:'8',title:'时光小酒馆'},
                {num:'1',title:'时光小酒馆'},
                {num:'0',title:'时光小酒馆'},
                {num:'3',title:'时光小酒馆'},
                {num:'6',title:'时光小酒馆'},
                {num:'5',title:'时光小酒馆'}
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
            //  background: #f10;
             height: 80px;
             line-height: 80px;
             font-size: 20px;
             padding-left:20px;
             p{
                 .gray{
                     color: gray;
                 }
             }
         }
         .detail-contain{
             height: 350px;
            //  background: #fff;
             .book-img{
                width: 250px;
                height: 350px;
                background: rgb(159, 247, 46);
                float: left;
             }
             .book-msg{
                 float: right;
                 width: 950px;
                 height: 350px;
                //  background:yellow;
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
                         
                         font-size: 18px;
                         a{
                          color: orange;
                         }
                         
                     }
                    .book-read{
                            
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
                //  background: orange;
                 float:left;
                 margin-right:10px;
                 border-right: 1px solid #eee;
                 position: relative;
                 .list-tit{
                     height: 50px;
                    //  background: red;
                     line-height: 50px;
                     font-size: 18px;                   
                 }
                 .list{
                     width:1000px;
                     height: 540px;
                     font-size:16px;
                    //      li{
                    //       width:500px;  
                    //       background: yellow; 
                    //       height: 64px; 
                    //       line-height: 64px;
                    //       white-space: nowrap;
                    //       float:left;
                    //  }
                    //  .on{
                    //      background: #eee;
                    //  }
                    //  .off{
                    //      background: #fff;
                    //  }
                    .list-left{
                        width: 500px;
                        float:left;
                        // background: yellow;
                        p{
                          height: 64px;
                          line-height: 64px;
                          background: #fff;
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
                          line-height: 64px;
                          background: #fff;
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
                    //  background:orange;
                     line-height: 50px;
                     font-size: 16px;                      
                 }
                 .recommend-list{
                         height: 540px;
                        //  background: yellow;
                         .list-com{
                             height: 64px;
                             margin-bottom: 16px;
                            //  background: greenyellow;
                            .com-img{
                                height: 64px;
                                width: 45px;
                                background: red;
                                float: left;
                                margin-right: 10px;
                            }
                         }
                     }
             }
         }
     }
}
</style>


