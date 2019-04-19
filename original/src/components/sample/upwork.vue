<template>  
<div class="wrapper">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="100">
    <!-- <Form :label-width="100" ref='formCustom' :model='formCustom' :rules="formCustom"> -->
        <FormItem label="书名" prop="bookname">
            <Input type="text" v-model="formCustom.bookname" style="width:200px"></Input>
        </FormItem>
         <FormItem label="类名" prop="bookname">
            <Select v-model="model8" clearable style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="作品首个字母" prop="letter">
            <Input type="text" v-model="formCustom.letter"></Input>
        </FormItem>
         <FormItem label="上传封面" prop="">
           <!-- <Upload
                multiple
                type="drag" style="width:200px"
                action="http://localhost:8080" >
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <img src="" alt="" srcset="">
                    <p>封面</p>
                </div>
            </Upload> -->
            <div>
                <p>只能上传规格240*320像素的小于100K的JPG图片</p>
            </div>
           
        </FormItem> 
          <FormItem label="添加标签" prop="" >
            <Tag checkable color="primary" fade>标签一</Tag>
            <Tag checkable color="success" fade>标签二</Tag>
            <Tag checkable color="error" fade>标签三</Tag>
            <Tag checkable color="warning" fade>标签四</Tag>
        </FormItem>
        <FormItem label="内容介绍" prop="desc1" >
            <Input v-model="formCustom.desc1" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="Enter something..."></Input>
            <span><i>{{this.fontNum1}}</i>/400</span>
        </FormItem>
        <FormItem label="作者寄语" prop="desc2" ref="desc2">
            <Input class="desc2" v-model="formCustom.desc2" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="">
            </Input>
            <span><i>{{this.fontNum2}}</i>/20</span>
        </FormItem> 
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">添加</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</div>    
</template>
<script>
    import Vue from 'vue'
    import {Form,FormItem,Button,Input,Select,Option,Upload,Tag,Icon} from 'iview'
    import 'iview/dist/styles/iview.css';
    Vue.use(Form,FormItem,Button,Input,Select,Option,Upload,Tag,Icon)
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
               let reg = /^[\u4E00-\u9FA5]{1,12}$/
            //    console.log(reg.test(value))
               if (!reg.test(value)) {
                 
                   callback(new Error('请输入1-12位正确字符'));
                } else {
                    //   console.log(456);
                    callback();
                }
            };
            const validateLetter = (rule, value, callback) => {
               let reg = /^[a-zA-Z]{1}$/
               if (!reg.test(value)) {
                   callback(new Error('请书名首字母'));
                } else {
                    console.log(this.formCustom.bookname);
                    
                    // if(this.bookname === ''){
                    //     callback(new Error('请输入书名'));
                    // }
                    callback();
                }
            };
            //内容介绍
            const validateDesc1 = (rule, value, callback) => {
               
               this.fontNum1 = this.formCustom.desc1.length; 
               if (this.formCustom.desc1.length>400) {
                   callback(new Error('输入字数超过400'));
                } else {
                    // console.log(this.formCustom.bookname);
                    callback();
                }
            };
            //作者寄语
            const validateDesc2 = (rule, value, callback) => {
               
               this.fontNum2 = this.formCustom.desc2.length; 
               if (this.formCustom.desc2.length>20) {
                   callback(new Error('输入字数超过20'));
                } else {
                    // console.log(this.formCustom.bookname);
                    callback();
                }
            };
            return {
                formCustom: {
                    bookname: '',
                    letter:'',//首个字母
                    desc1:'',
                    desc2:'',
                },
                ruleCustom: {
                    bookname: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    letter: [
                        { validator: validateLetter, trigger: 'blur' }
                    ],
                    desc1:[//内容介绍
                        { validator: validateDesc1, trigger: 'blur change' }
                    ],
                     desc2:[//内容介绍
                        { validator: validateDesc2, trigger: 'blur change' }
                    ],
                },
                cityList: [
                    {
                        value: '文学史',
                        label: '文学史'
                    },
                    {
                        value: '科幻小说',
                        label: '科幻小说'
                    },
                    {
                        value: '言情小说',
                        label: '言情小说'
                    },
                    {
                        value: '武侠小说',
                        label: '武侠小说'
                    },
                    {
                        value: '艺术理论',
                        label: '艺术理论'
                    },
                    {
                        value: '人物传记',
                        label: '人物传记'
                    }
                ],
                model8: '',
                fontNum1:0,
                fontNum2:0,
            }
        },
        components:{
            Form,FormItem,Button,Input,Select,Option,Upload,Tag,Icon
        },
        methods: {
           handleSubmit (name) {
               console.log( this.$refs[name]);
              
                this.$refs[name].validate((valid) => {
                    
                    if (valid) {
                        // this.$axios.get('/api/user/add_book/?b_name=123&b_author=456&b_content=789&b_synopsis=012')
                        // this.$axios.get(`/api/user/add_book/?b_name=${this.formCustom.bookname}&b_author=${this.formCustom.letter}&b_content=${this.formCustom.desc1}&b_synopsis=${this.formCustom.desc2}`)
                        let params ={
                            b_name:this.formCustom.bookname,     
                            b_author:this.formCustom.letter,    
                            b_content:this.formCustom.desc1, 
                            b_synopsis:this.formCustom.desc2 ,
                        }
                        let param = this.$qs.stringify(params)
                        this.$axios.post('/api/user/add_book/',param)
                        .then(data=>{
                            console.log(data);
                            
                        })
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
           
        }
    }
</script>
<style lang="less" scoped>
.wrapper{
    width: 1200px;
    margin: 0 auto;
    .desc2{
        position: relative;
    }
    span{
            position: absolute;
            bottom: 10px;
            right: 6px;
            height: 16px;
    }
    .desc2 /deep/.ivu-input{
            // background: blue;
            // height: 115px;
        }
}
</style>

