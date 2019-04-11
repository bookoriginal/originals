<template>
    <div class="register-wrap">
        <div class="register-bg">

        </div>
        <div class="register">
            <h3>
                手机号注册
            </h3>
            <div class="input">
                <Input v-model="phone" prefix="ios-phone-portrait" type="tel" 
                placeholder="请输入手机号" 
                style="width: 220px" 
                />
            </div>
            <div class="warning">
                <Alert type="error" show-icon style="border:0" v-show="phoneShow">请输入正确的手机号</Alert>
            </div>
            <div class="input">
                <Input v-model="password" prefix="md-lock" type="password" placeholder="请输入密码" style="width: 220px" />
            </div>
            <div class="warning">
                <Alert type="error" show-icon style="border:0" v-show="passwordShow">请输入8-16位字母、数字</Alert>
            </div>
            <div class="input">
                <Input v-model="picCode" type="text" placeholder="图片验证码" style="width: 124.5px" />
                <span class="pic-code"></span>
            </div>
            <div class="warning">
                <Alert type="error" show-icon style="border:0" v-show="picCodeShow">验证码错误</Alert>
            </div>
            <div class="input">
                <Input v-model="Code" type="text" placeholder="手机验证码" style="width: 124.5px" />
                <Button>获取验证码</Button>
            </div>
            <div class="warning">
                <Alert type="error" show-icon style="border:0" v-show="codeShow">验证码错误</Alert>
            </div>
            <div>
                <Checkbox v-model="disabledSingle">
                    我已阅读并同意<router-link to='/index'>《书途阅读服务使用协议》</router-link>
                </Checkbox>
            </div>
            <div class="warning">
                <Alert type="error" show-icon style="border:0" v-show="disabledSingleShow">请勾选协议</Alert>
            </div>
            <div>
                <Button type="error" style="width: 220px"  ref = 'reg' @click="btn()">注册</Button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone:'',
            password:'',
            picCode:'',
            Code:'',
            disabledSingle:'',
            phoneShow:false,
            passwordShow:false,
            picCodeShow:false,
            codeShow:false,
            disabledSingleShow:false,
        }
    },
    methods:{
        btn(){
            console.log(this.$refs)
            
            if(!this.phoneShow&&!this.passwordShow&&!this.picCodeShow&&!this.codeShow&&!this.disabledSingleShow){
                
            }else{
                return false;
            }
        },
        disabledSingleWarning(newdis){
            if(newdis || this.disabledSingle===''){
                this.disabledSingleShow=false;
            } else {
                this.disabledSingleShow=true;
            }
        },
        phoneWarning(newNum){
            let teg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if(teg.test(newNum) || newNum===''){
                this.phoneShow=false;
            }else{
                this.phoneShow = true;
            }
        },
        passwordWarning(newPas){
            let pasteg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
            if(pasteg.test(newPas) || newPas===''){
                this.passwordShow=false;
            }else{
                this.passwordShow = true;
            }
        },
        picCodeWarning(newPic){
            let pic = 1997;
            if(Number(newPic)===pic||newPic===''){
                this.picCodeShow=false;
            }else{
                this.picCodeShow = true;
            }
        },
        codeWarning(newCode){
            let code = 123456;
             if(Number(newCode)===code||newCode===''){
                this.codeShow=false;
            }else{
                this.codeShow = true;
            }
        }
    },
    watch:{
        phone:function(newNum){
            this.phoneWarning(newNum)
        },
        password:function(newPas){
            this.passwordWarning(newPas)
        },
        picCode:function(newPic){
            this.picCodeWarning(newPic)
        },
        Code:function(newCode){
            this.codeWarning(newCode)
        },
        disabledSingle(newdis){
            this.disabledSingleWarning(newdis)
        },
    },
    computed:{
        
    },
    mounted(){
    }
}
</script>
<style lang="less" scoped>
.register-wrap{
    width: 100%;
    height: 500px;
    background: #f66;
    position: relative;
    .register-bg{
        width: 100%;
        height: 100%;
    }
    .register{
        width: 300px;
        height: 400px;
        position: absolute;
        top:40px;
        right:20%;
        background: #fff;
        border-radius: 10px;
        padding-left:30px; 
        h3{
            width: 240px;
            height: 50px;
            text-align: center;
            line-height: 40px;
        }
        .input{
            width: 220px;
            span{
                width: 92px;
                height: 33px;
                border: 1px solid #dcdee2;
                border-radius: 5px;
                float: right;
            }
        }
        .warning{
            width:220px;
            height: 32px;
        }
    }
}
</style>