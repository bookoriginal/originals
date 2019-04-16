<template>
<div>
    <div class="wapper">
        <Table :columns="columns7" :data="showList"></Table>

        <Page class="page" :total="this.totalproblemList.length" :page-size= 'this.pagesize' @on-change="method"
         />
    </div>
    <router-view></router-view>
</div>    
</template>


<script>
import axios from 'axios'
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '章节名',
                        key: 'name',
                    },
                    {
                        title: '字数',
                        key: 'fontNum',
                    },
                    {
                        title: '级别',
                        key: 'type',
                    },
                    {
                        title: '保存类型',
                        key: 'save'
                    },
                    {
                        title: '保存时间',
                        key: 'time'
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
                                        click: () => {
                                            // this.show(params.index)
                                            this.$router.push({path: '/creation/bianji',params:{}});
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
                    {
                        name: '风一样的女子',
                        fontNum:5000,
                        type: '免费',
                        save: '手动保存',
                        time:'2019-4-5'
                    },
                     {
                        name: '风一样的女子',
                        fontNum:5000,
                        type: '免费',
                        save: '手动保存',
                        time:'2019-4-5'
                    },
                   
                    {
                        name: '风一样的女子',
                        fontNum:5000,
                        type: '免费',
                        save: '手动保存',
                        time:'2019-4-5'
                    },
                     {
                        name: '风一样的女子',
                        fontNum:5000,
                        type: '免费',
                        save: '手动保存',
                        time:'2019-4-5'
                    },
                     {
                        name: '风一样的女子',
                        fontNum:5000,
                        type: '免费',
                        save: '手动保存',
                        time:'2019-4-5'
                    },
                      {
                        name: '风一样的女子',
                        fontNum:5000,
                        type: '免费',
                        save: '手动保存',
                        time:'2019-4-5'
                    },
                   
                   
                ],
                showList:[],
                datacount:5,
                pagesize:5,

            }
        },
        created() {
        
                this.$axios.get('/api/user/showown_book/')
                .then(data=>{
                    console.log(data.data)
                    this.totalproblemList =  data.data
                })
         
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
.wapper{
    width:1200px;
    margin: 0 auto;
    .page{
        margin: 20px auto;
        text-align: center;
        
    }

}
</style>
