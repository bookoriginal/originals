<template>  
<div class="wrapper">
    <!-- <Form ref="formCustom" :model:model="formCustom" :rules="ruleCustom" :label-width="100"> -->
    <Form :label-width="100" ref='formCustom' :model='formCustom' :rules="formCustom">
        <FormItem label="书名" prop="bookname">
            <Input type="text" v-model="formCustom.bookname" style="width:200px"></Input>
        </FormItem>
         <!-- <FormItem label="类名" prop="bookname">
            <Select v-model="model8" clearable style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="作品首个字母" prop="letter">
            <Input type="text" v-model="formCustom.letter"></Input>
        </FormItem> -->
        <!-- <FormItem label="上传封面" prop="">
           <Upload
                multiple
                type="drag" style="width:200px"
                action="http://localhost:8080" >
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <img src="" alt="" srcset="">
                    <p>封面</p>
                </div>
            </Upload>
            <div>
                <p>只能上传规格240*320像素的小于100K的JPG图片</p>
            </div>
           
        </FormItem> -->
         <!-- <FormItem label="添加标签" prop="" >
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
        </FormItem> -->
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</div>    
</template>
<script>
    import iView from 'iview'
    import 'iview/dist/styles/iview.css';
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
               let reg = /^[0-9a-zA-Z\u4E00-\u9FA5]{1,12}$/
               if (!reg.test(value)) {
                   console.log(123);
                   callback(new Error('请输入1-12位正确字符'));
                } else {
                    callback();
                }
            };
            // const validateLetter = (rule, value, callback) => {
            //    let reg = /^[a-zA-Z]{1}$/
            //    if (!reg.test(value)) {
            //        callback(new Error('请书名首字母'));
            //     } else {
            //         console.log(this.formCustom.bookname);
                    
            //         // if(this.bookname === ''){
            //         //     callback(new Error('请输入书名'));
            //         // }
            //         callback();
            //     }
            // };
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
                    // letter:'',//首个字母
                    // desc1:'',
                    // desc2:'',
                },
                ruleCustom: {
                    bookname: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    // letter: [
                    //     { validator: validateLetter, trigger: 'blur' }
                    // ],
                    // desc1:[//内容介绍
                    //     { validator: validateDesc1, trigger: 'blur change' }
                    // ],
                    //  desc2:[//内容介绍
                    //     { validator: validateDesc2, trigger: 'blur change' }
                    // ],
                },
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
                model8: '',
                fontNum1:0,
                fontNum2:0,
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登录成功!');
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

