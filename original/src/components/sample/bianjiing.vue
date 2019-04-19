<template>
<div>
<div class='layout'>
   <Row>
        <Col span="2" style="text-align:center">所在分卷</Col>
        <Col span="5"> {{getdata.b_name}}</Col>
    </Row>
     <Row>
        <Col span="24">正文</Col>
    </Row>
    <Input v-model="V_value" :value="V_value" type="textarea" :autosize="{minRows: 3,maxRows: 100}" placeholder="Enter something..." />
    <br>
     <Button size="large" :type="type">保存</Button>
     <!-- <Button size="large" :type="type1" @click="going">保存</Button> -->
</div>
    
</div>
</template>
<script>
import Vue from 'vue'
    import {Row,Col,Button,Input} from 'iview'
    // import 'iview/dist/styles/iview.css';
    Vue.use(Row,Col,Button)
    export default {
        data () {
            return {
                cityList: [
                ],
                type:"primary",
                type1:"default",
                V_value:''
               
            }
        },
        components:{
            Row,Col,Button,Input
        },
        methods: {
            going(){
                    console.log(123);
                    
            //    this.$router.push({path: '/creation/bianjiing',params:{}}); 
                    this.V_value = this.getdata.b_content  
            }
        },
        computed: {
            getdata(params) {
             
               this.value = this.$route.params.b_synopsis;
                
                return {
                   b_name:this.$route.params.b_name,
                   b_content:this.$route.params.b_content
                //    b_synopsis:this.$route.params.b_synopsis,
                }
            },   
        },
       
        mounted() {
              this.going()
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
        border: 1px solid #DCDEE2;
    }
    .ivu-row:nth-of-type(4)/deep/.ivu-col{
        height: 100px;
    }
    .ivu-row:nth-of-type(6)/deep/.ivu-col{
        height: 150px;
    }
}


</style>

