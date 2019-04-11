<template>
<div>
<div class='layout'>
   <Row>
        <Col span="2" style="text-align:center">所在分卷</Col>
        <Col span="5"> col-6 </Col>
    </Row>
    <br>
    <Row>
        <Col span="2" style="text-align:center">第一章</Col>
        <Col span="8"> col-6 </Col>
    </Row>
    <br>
    <Row>
        <Col span="24">作品简介</Col>
    </Row>
     <Row class="text1">
        <Col span="24">简介</Col>
    </Row>
    <br>
    <Row>
        <Col span="24">正文内容</Col>
    </Row>
     <Row class="text1">
        <Col span="24">内容</Col>
    </Row>
    <br>
     <Button size="large" :type="type">Primary</Button>
     <Button size="large" :type="type1" @click="going">编辑</Button>
</div>
    <router-link ></router-link>
</div>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                ],
                type:"primary",
                type1:"default",
               
            }
        },
        methods: {
            going(){
               this.$router.push({path: '/creation/bianjiing',params:{}}); 
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
        border: 1px solid blue;
    }
    .ivu-row:nth-of-type(4)/deep/.ivu-col{
        height: 100px;
    }
    .ivu-row:nth-of-type(6)/deep/.ivu-col{
        height: 150px;
    }
}


</style>

