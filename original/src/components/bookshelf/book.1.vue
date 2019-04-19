<template>
    <div class="detail">
      <div class="detail-img">
            <img src="@/assets/book.jpg" alt="">
      </div>
      <div class="detail-contain" >
          
        <div class="detail-title" >
            <h5 >我的书架</h5>            
        </div>
        <div class="content">
            <div  v-for="(item,index) of showList" :key="index" :class="['book',(index+1)%4==0?'active':'']">
               <div class="book-img"><img :src="item.img" alt=""  /> </div>
               <div class="book-content">
                   <h4>{{item.title}}</h4>
                   <h3>{{item.author}}</h3>
                   <p>{{item.msg}}</p>
                   <router-link to='/bookdetail'>阅读</router-link>
               </div>               
            </div>
        </div>
        <div class="fenye">
                <Page class="page" :total="totalproblemList.length" :page-size= 'pagesize' @on-change="method" />
        </div>            
      </div>
    </div>
</template>
<script>
import jsonp from '@/utils/jsonp.js';
import Vue from 'vue'
import { Page } from 'iview'
Vue.component ('Page' , Page)
export default {
    data(){
        return {
            pageSize:1,
            page:1,
            count:0,
            nowPage:1,
            showList:[],
            datacount:12,
            pagesize:12,
            totalproblemList:[
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品' },
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品信息作品信息作品信息'},
                {img:'@/assets/error.jpg',title:'《时光小酒馆》',author:'by：张三',msg:'作品信息作品信息作品信息作品信息作品' },
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
    .detail-img{
        border-bottom: 8px solid #010;
    }
    .detail-contain{
        width:1200px;
        margin:0 auto;
        color:#010;
        margin-top: 50px;
        .detail-title{
            width: 100%;
            height:50px;           
            h5{
                padding-left:5px;
                height: 30px;
                line-height: 30px;
                font-size: 30px;
                border-left: 5px solid skyblue;
                font-weight:normal;
            }            
        }
        .content{
            width: 1200px;
            height: 1400px;
            overflow: hidden;
             .book{
               width: 260px;
               float: left;
               margin-right: 53px;
               border-radius: 7px;
               border:1px solid #eee;
               margin-bottom: 80px;
               .book-img{
                   width: 100%;
                   height: 150px;
               }
               .book-content{
                   height: 240px;
                   padding-left: 7px;
                   padding-right: 7px;
                   padding-top: 10px; 
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
             .active{
                 margin-right: 0;
             }
        }
        .fenye{
                padding-left: 500px;                
                button{
                    background: #fff;
                    display: inline-block;
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
}
</style>
