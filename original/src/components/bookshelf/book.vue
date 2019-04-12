<template>
    <div class="detail">
      <div class="detail-contain" v-for="(item,index) of stating" :key='index'>
        <div class="detail-title" >
            <h5 >{{item}}</h5>
            <div class="fenye">
                <!-- <ul>
                    <li v-if='cur>1' onClick='(cur--,pageJump)'><</li>
                </ul> -->
                <!-- <button class="prev" onClick='jumpPage(prev)'><</button>
                <button class="num" onClick='jumpPage(jump)'>1</button>
                <button class="num" onClick='jumpPage(jump)'>2</button>
                <button class="num" onClick='jumpPage(jump)'>3</button>
                <button class="num" onClick='jumpPage(jump)'>4</button>
                <button class="num" onClick='jumpPage(jump)'>5</button>
                <button class="next" onClick='jumpPage(next)'>></button> -->
                <Page class="page" :total="totalproblemList.length" :page-size= 'pagesize' @on-change="method" />
            </div>            
        </div>
        <div class="content">
            <div class="book" v-for="(item,index) of showList" :key="index">
               <div class="book-img"><img :src="item.img" alt=""  /> </div>
               <div class="book-content">
                   <h4>{{item.title}}</h4>
                   <h3>{{item.author}}</h3>
                   <p>{{item.msg}}</p>
                   <router-link to='/bookdetail'>阅读</router-link>
               </div>               
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import jsonp from '@/utils/jsonp.js';
export default {
    data(){
        return {
            pageSize:1,
            page:1,
            count:0,
            nowPage:1,
            showList:[],
            datacount:5,
            pagesize:5,
            stating:['我正在看的书籍','我收藏的书籍','我购买的书籍'],
            totalproblemList:[
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品' },
            ],
            
        }
    },
    mounted(){
        console.log(this.totalproblemList)
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
.detail{
    width: 100%;
    height: 100%;
    background: #fff;
    .detail-contain{
        width:1200px;
        margin:0 auto;
        // background: red;
        color:#010;
        margin-top: 50px;
        .detail-title{
            width: 100%;
            height:50px;
            // padding-top:10px;
            // background: green;
            
            font-size: 24px;
           
            h5{
                // margin-top:10px;
                padding-left:5px;
                height: 30px;
                line-height: 30px;
                border-left: 5px solid skyblue;
                float: left;
                font-weight:normal;
            }
            .fenye{
                float: right;
                button{
                    background: #fff;
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    border:none;
                }
                .prev,.next{
                    background: skyblue;
                    color: #fff;
                }
                .active{
                    background: skyblue;
                    color: #fff;
                    border:none;
                }
            }
        }
        .content{
            width: 1200px;
            height: 395px;
            // background: yellow;
            overflow: hidden;
             .book{
               width: 260px;
               height: 395px;
            //    background: red;
               float: left;
               margin-right: 53px;
               border-radius: 7px;
               border:1px solid #eee;
               .book-img{
                   width: 100%;
                   height: 150px;
               }
               .book-content{
                   height: 240px;
                   padding-left: 7px;
                   padding-right: 7px;
                   padding-top: 10px;
                //    background: rgb(73, 243, 73); 
                   h4{
                       height: 50px;
                       line-height: 50px;
                       font-size: 24px;
                   }
                   h3{
                       height: 40px;
                       line-height: 40px;
                       font-size: 20px;
                   }
                   p{
                       font-size: 18px;
                       padding-top: 10px;
                       padding-bottom: 5px;
                   }
                   a{
                       font-size: 18px;
                       color: skyblue;
                   }
               }
             }
             .book:nth-child(4){
                 margin-right: 0;
             }
        }
 }
}
</style>
