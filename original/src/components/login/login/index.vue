<template>
    <div class="login-wrap">
        <div class="login-bg">

        </div>
        <div class="login">
            <h3>
                <span>用户登录</span>
                <router-link to='/register'>免费注册></router-link>
            </h3>
            <div class="input">
                <Input v-model="phone" prefix="ios-phone-portrait" type="tel" 
                placeholder="请输入手机号" 
                style="width: 240px" 
                />
            </div>
            <div class="warning">
                
            </div>
            <div class="input">
                <Input v-model="password" prefix="md-lock" type="password" placeholder="请输入密码" style="width: 240px" />
            </div>
            <div class="warning">
                
            </div>
            <div class="warning">
                <router-link to='/index'>忘记密码？</router-link>
            </div>
            <div class="warning">
                
            </div>
            <div>
                <Button type="error" style="width: 240px"  ref = 'reg' @click="login()">登录</Button>
            </div>
            <div class="warning">
                
            </div>
            <div class="jump-three">
                <router-link to='/index' v-for="(item,index) in data" class="picture" :key="index">
                    <img :src="item.img" alt="">
                </router-link>
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
            data:[
                {
                    img:''
                },
                {
                    img:''
                },
                {
                    img:''
                },
                {
                    img:''
                }
            ]
        }
    },
    methods:{
        login(){

        }
    }

}
</script>
<style lang="less" scoped>
.login-wrap{
    width: 100%;
    height: 500px;
    position: relative;
    background: skyblue;
    .login-bg{
        width: 100%;
        height: 100%;
    }
    .login{
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
            line-height: 40px;
            span{
                float: left;
            }
            a{
                float: right;
                font-size: 10px;
                color:red;
            }
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
        .jump-three{
            width: 240px;
            height: 50px;
            a{
                width: 50px;
                height: 50px;
                display: inline-block;
                margin:0 5px;
                background: #f66;
            }
            
        }
    }
}
</style>