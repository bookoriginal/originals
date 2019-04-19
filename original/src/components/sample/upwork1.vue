<template>
<div class="form-data">
     <Divider orientation='left' style="font-size:24px">作品信息</Divider>
    <div>
        <span>书名:</span>
        <Input v-model="bookname.bookname" placeholder="请输入要创建的书" style="width: 300px"
        @on-blur='bname'
         />
         <div style="height:38px;">
             <Alert type="error" show-icon v-if="this.bookname.state">请输入1-12个字符</Alert>
         </div>
    </div>

     <div>
        <span>类名:</span>
        <Select v-model="model8"  style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.value }}</Option>
        </Select>
        <div style="height:38px;">
             <Alert type="error" show-icon v-if="this.typename.state"></Alert>
         </div>
    </div>
    <!-- 作品首个字母 -->
    <div>
        <span>作品首个字母:</span>
        <Input v-model="firstname.firstname" placeholder="作品首字母" style="width: 300px"
        @on-blur='fname'
         />
         <div style="height:30px;">
             <Alert type="error" show-icon v-if="this.firstname.state">1位字母a-zA-Z</Alert>
         </div>
    </div>

    <!-- 内容介绍 -->
    <div class="D_place">
        <span>内容简介:</span>

        <Input v-model="desc.desc1" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="请在此输入作品简介"
            @on-change='firstdesc'
        ></Input>

        <span class="num"><i>{{this.desc.num1}}</i>/400</span>
        <div style="height:30px;">
            <Alert type="error" show-icon v-if="this.desc.state">字数不能超过400</Alert>
        </div>
    </div>

     <!-- 作者寄语-->
    <div class="D_place">
        <span>作者寄语:</span>

        <Input style="" v-model="s_desc.desc1" type="textarea" :autosize="{minRows: 3,maxRows: 3}" placeholder="请在此输入作品寄语"
            @on-change='seconddesc'
        ></Input>

        <span class="num"><i>{{this.s_desc.num1}}</i>/20</span>
        <div style="height:30px;">
            <Alert type="error" show-icon v-if="this.s_desc.state">字数不能超过20</Alert>
        </div>
    </div>
    <Button type="primary" @click="handleSubmit">上传内容</Button>
    <Button @click="handleReset('formCustom')" style="margin-left: 8px">添加到作品集</Button>
    <Alert type="success" v-show="this.success.state" show-icon>上传成功</Alert>
</div>
</template>
<script>
// import Vue from 'vue'
// import iView from 'iview';
// Vue.use(iView)
    export default {
        data () {
            return {
              success:{
                  state:false
              },
                bookname:{
                    state:false,
                    bookname: ''
                },
                typename:{
                    state:false,
                    typename: ''
                },
                firstname:{
                    state:false,
                    firstname: ''
                },
                desc:{
                    state:false,
                    desc1: '',
                    num1:0,
                },
                s_desc:{
                    state:false,
                    desc1: '',
                    num1:0,
                },
                model8: '',
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
              
            }
        },

        methods: {
            bname(){//书名
                let reg = /^[0-9a-zA-Z\u4E00-\u9FA5]{1,12}$/
               if (reg.test(this.bookname.bookname)) {
                  this.bookname.state = false;
                } else {
                   this.bookname.state = true;
                }
            },
            fname(){//书名
               let reg = /^[a-zA-Z]{1}$/
               if (reg.test(this.firstname.firstname)) {
                  this.firstname.state = false;
                } else {
                    this.firstname.state = true;
                }
            },
            firstdesc(){
                 this.desc.num1 = this.desc.desc1.length; 
               if (this.desc.num1>400) {
                    this.desc.state = true;
                } else {
                    this.desc.num1 = this.desc.desc1.length;
                    this.desc.state = false;
                }
            },
            seconddesc(){
                 this.s_desc.num1 = this.s_desc.desc1.length; 
               if (this.s_desc.num1>20) {
                    this.s_desc.state = true;
                } else {
                    this.s_desc.num1 = this.s_desc.desc1.length;
                    this.s_desc.state = false;
                }
            },
            handleSubmit(){
                if(this.bookname.state === false & this.firstname.state === false & this.desc.state === false & this.s_desc.state === false & this.bookname.bookname !== ''){
                    console.log('成功');
                    // this.$axios.get('/api/user/add_book/?b_name='+bookname.bookname+''+).then(data=>{
                    // })
                    this.success.state = true;
                }
            }
        },
    }
</script>
<style lang="less" scoped>
.form-data{
    width: 1200px;
    margin: 0 auto;
    div{
        span{
            width: 120px;
            height: 26px;
            line-height: 26px;
            font-size: 18px;
            display: inline-block;
            text-align: right;
            margin-right: 16px;
        }
    }
    .D_place{
        position: relative;
        .num{
            position: absolute;
            right: 12px;
            bottom: 30px;
        }
    }
}
</style>
