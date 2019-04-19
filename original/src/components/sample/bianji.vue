<template>
<div>
<div class='layout'>
   <Row>
        <Col span="2" style="text-align:center">所在分卷</Col>
        <Col span="5"> {{getdata.b_name}}</Col>
    </Row>
    <br>
    <Row>
        <Col span="2" style="text-align:center">第一章</Col>
        <Col span="8"> {{getdata.b_name}}</Col>
    </Row>
    <br>
    <Row>
        <Col span="24">作品简介</Col>
    </Row>
     <Row class="text1">
        <Col span="24"> {{getdata.b_synopsis}}</Col>
    </Row>
    <br>
    <Row>
        <Col span="24">正文内容</Col>
    </Row>
     <Row class="text1">
        <Col span="24">{{getdata.b_content}}</Col>
    </Row>
    <br>
     <Button size="large" :type="type">Primary</Button>
     <Button size="large" :type="type1" @click="going">编辑</Button>
</div>
    <router-link ></router-link>
</div>
</template>
<script>
    import Vue from 'vue'
    import {Row,Col} from 'iview'
    // import 'iview/dist/styles/iview.css';
    Vue.use(Row,Col)
    export default {
        data () {
            return {
                cityList: [
                ],
                type:"primary",
                type1:"default",
               
            }
        },
        components:{
            Row,Col
        },
        methods: {
            going(){
               this.$router.push({name: 'bianjiing',params:{
                   b_name:this.$route.params.b_name,
                   b_content:this.$route.params.b_content
               }}); 
            }
        },
        computed: {
            getdata(params){
                this.$router.params
                console.log( this.$route.params);
                
                return {
                    b_name:this.$route.params.b_name,
                    b_synopsis:this.$route.params.b_name,
                    b_content:this.$route.params.b_content,
                    b_synopsis:this.$route.params.b_synopsis
                }
            }
        },

    }
</script>
<style lang="less" scoped>
.layout{
    width: 1200px;
    margin: 0 auto;
    padding-left: 60px;
    .ivu-row/deep/.ivu-col{
        height: 50px;
        line-height: 50px;
        border: 1px solid #333333;
    }
    .ivu-row:nth-of-type(4)/deep/.ivu-col{
        height: 100px;
    }
    .ivu-row:nth-of-type(6)/deep/.ivu-col{
        height: 150px;
    }
}


</style>

