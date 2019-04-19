<template>
<div>
    <div class="wapper">
        <Table :columns="columns7" :data="showList"  ref="demodata"  @on-row-click='goto'></Table>
        <Page class="page" :total="this.totalproblemList.length" :page-size= 'this.pagesize' @on-change="method"
         />
    </div>
    <router-view></router-view>
</div>    
</template>


<script>
import Vue from 'vue'
import {Table,Page} from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css';
Vue.use(Table,Page)

    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '书名',
                        key: 'b_name',
                    },
                    {
                        title: '首字母',
                        key: 'b_author',
                    },
                    {
                        title: '作者寄语',
                        key: 'b_synopsis',
                    },
                    {
                        title: '简介字数',
                        key: 'b_num'
                    },
                    {
                        title: '保存时间',
                        key: 'update_time'
                    },
                  
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                              
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: (index) => {   
                                        }
                                    }
                                }, '编辑'),
                              
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                           
                        }
                    }
                ],
                totalproblemList: [
                    // {
                    //     b_author: "3",
                    //     b_content: "3",
                    //     b_name: "3",
                    //     b_num: 1,
                    //     b_synopsis: "3",
                    //     id: 3,
                    //     reading_num: 0,
                    // }
                ],
                showList:[],
                datacount:5,
                pagesize:5,

            }
        },
        components:{Table,Page,},
        created() {
           this.getdata()
         
        },
        mounted(){
             
        },
        methods: {
            goto(index){
                console.log(index);
                
                this.$router.push({name: 'bianji',params:{
                    b_name:index.b_name,
                    b_author:index.b_author,
                    // b_synopsis:index.b_name,
                    b_content:index.b_content,
                    b_synopsis:index.b_synopsis
                }});
            },
            getdata(){
                this.$axios.get('/api/user/showown_book/')
                .then(data=>{
                    console.log(data.data);
                    this.totalproblemList = data.data
                    this.showList = this.totalproblemList.slice(0,this.pagesize)
                })
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
.wapper{
    width:1200px;
    margin: 0 auto;
    .page{
        margin: 20px auto;
        text-align: center;
        
    }

}
</style>
