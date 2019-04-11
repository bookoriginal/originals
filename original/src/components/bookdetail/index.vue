<template>
    <div id="bookdetail">
       
       <detail></detail>
       
    </div>
</template>
<script>
import headers from '../index/header/header.vue';
import detail from './detail.vue';
import footers from '../index/footer/footer.vue';
export default {
    components:{
        headers,
         detail,
         footers
    }
    // headers,
   
}
</script>
<style lang="less" scoped>

</style>
