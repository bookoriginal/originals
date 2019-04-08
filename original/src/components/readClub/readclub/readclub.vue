<template>
    <div class="readclub">
        
        <div class="img_read">
            <img src="@/common/img/news.jpg">
        </div>
        <div class="book_name">
            <h2>睡前故事❤</h2>
        </div>
        <div class="read_detail">
            <p>
                请大家和我一起读书请大家和我一起读书请大家和我一起读书请大家和我一起读书请大家和我一起读书请大家和我一起读书请大家和我一起读书
                请大家和我一起读书请大家和我一起读书请大家和我一起读书请大家和我一起读书
            </p>
        </div>
        <div class="read_vip">
            <div class="user">
                会员:<span>45人</span>
            </div>
            <div class="join">
                <a>加入</a>
            </div>
        </div>
        <div class="read_list">
            <ul>
                <li v-for="(item,index) in showList" :key="index">
                    <div class="title">
                        <div class="read_img">
                            <i class="fa fa-user-circle" aria-hidden="true"></i> 
                            <div>会员{{item}}</div>
                        </div>
                        <div class="container">
                            <div class="read_name">七七</div>
                            <div class="fans">
                                关注：<span>19</span>  |  粉丝数：<span>59</span>
                                
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <Page 
        :total="pagesum" 
        :page-size="pagesize"
        show-total 
        @on-change="changepage"
        show-elevator
        ></Page>

    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            showList:[],
            pagesize:4,
            pagesum:0,
            totalProblemList:[]
        }
    },
    mounted() {
         this.showList = this.list.slice(0,this.pagesize)
         this.pagesum = this.list.length
        
         

    },
    methods: {
        changepage(index){
            console.log(index)
            var _start = (index-1) * this.pagesize;
            var _end = index * this.pagesize;
            this.showList = this.list.slice(_start,_end)
        }
        //  this.$axios.get(url)
        //  .then(function(res){
        //      console.log(res)
        //      this.totalProblemList = res.data
        //      this.pagesum = totalProblemList.length
        //      if(this.pagesum<this.pagesize){
        //          this.showList = this.totalProblemList
        //      }else{
        //          this.showList = this.totalProblemList.slice(0,this.pagesize)
        //      }
        //  })
        
    },
}
</script>
<style lang="less" scope>
    .readclub{
        width: 800px;
        margin:0 auto;
        .img_read{
            text-align: center;
            padding: 15px 0;
            img{
                height:100px;
                width: 100px;
                border-radius: 50%;
                
            }
        }
        .read_detail{
            padding: 15px 0;
        }
        .book_name{
            text-align: center;
        }
        .read_vip{
            
            .user{
                width: 500px;
                
            }
            .join{
                float: right;
                a{  
                    width: 30px;
                    border-radius: 20%;
                    background: orangered;
                    color: white;
                }
            }
        }
        .read_list{
            ul{
                li{
                    border: 1px solid #666;
                    margin-top: 10px;
                    height: 80px;
                    border-left: 5px solid skyblue;
                    .title{
                        
                        .read_img{
                            text-align: center;
                            i{  
                                width: 50px;
                                height: 50px;
                                padding-top: 3px;
                                font-size: 48px;
                                display: block;
                                margin-left: 75px;
                            }
                            float: left;
                            width: 200px;   
                        }
                        .container{
                            float: right;
                            width: 590px;  
                            .read_name{
                                padding: 15px 0;
                            }
                        }
                    }
                }
            }
        }
    }
    .ivu-page-item-active{
        background: skyblue;
        
    }
</style>
