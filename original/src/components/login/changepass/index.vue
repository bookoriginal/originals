<template>
    <div>
        <div class="phonenum">
            <Input v-model="phonenum" prefix="ios-phone-portrait" type="tel" 
                placeholder="请输入手机号" 
                style="width: 240px" 
                />
        </div> 
        <div>
            <Input v-model="numbers" prefix="ios-phone-portrait" type="tel" 
                placeholder="手机验证码" 
                style="width: 240px" 
                />
            <Button type="error" style="width: 240px"  ref = 'reg' @click="getyzm()">登录</Button>
        </div>
        <div>
            <Button  type="error" style="width: 240px" @click="changepsw()">修改密码</Button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Input, Button } from 'iview'
Vue.component('Button',Button);
Vue.component('Input',Input);
export default {
    data(){
        return{
            phonenum:'',
            numbers:''
        }
    },
    methods: {
        getyzm(){
            console.log(this.phonenum)
            this.$axios.post('/reg/ycusers/forget/',{
                phone: this.phonenum
            }).then( data => {
                console.log(data)
            })
        }
    },
    watch: {

    }
}
</script>
<style lang="less" scoped>

</style>

