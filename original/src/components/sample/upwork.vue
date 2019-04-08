<template>
<div class="form-data">
    <div>
        <span>书名:</span>
        <Input v-model="bookname.bookname" placeholder="Enter something..." style="width: 300px"
        @on-blur='bname'
         />
         <div style="height:38px;">
             <Alert type="error" show-icon v-if="this.bookname.state">An error prompt</Alert>
         </div>
    </div>

     <div>
        <span>类名:</span>
        <Select v-model="model8"  style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        
    </div>
    <!-- 作品首个字母 -->
    <div>
        <span>作品首个字母:</span>
        <Input v-model="firstname.firstname" placeholder="Enter something..." style="width: 300px"
        @on-blur='fname'
         />
         <div style="height:30px;">
             <Alert type="error" show-icon v-if="this.firstname.state">prompt</Alert>
         </div>
    </div>
    <!-- 内容介绍 -->
    <div class="D_place">
        <span>内容介绍:</span>

        <Input v-model="desc.desc1" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="Enter something..."
            @on-change='firstdesc'
        ></Input>

        <span class="num"><i>{{this.desc.num1}}</i>/400</span>
        <div style="height:30px;">
            <Alert type="error" show-icon v-if="this.desc.state">prompt</Alert>
        </div>
    </div>

     <!-- 作者寄语-->
    <div class="D_place">
        <span>作者寄语:</span>

        <Input v-model="s_desc.desc1" type="textarea" :autosize="{minRows: 3,maxRows: 3}" placeholder="Enter something..."
            @on-change='seconddesc'
        ></Input>

        <span class="num"><i>{{this.s_desc.num1}}</i>/400</span>
        <div style="height:30px;">
            <Alert type="error" show-icon v-if="this.s_desc.state">prompt</Alert>
        </div>
    </div>
    <Button type="primary" @click="handleSubmit">上传内容</Button>
    <Button @click="handleReset('formCustom')" style="margin-left: 8px">添加到作品集</Button>

</div>
</template>
<script>
    export default {
        data () {
            return {
              
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
                    this.firstname.state = false;
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
