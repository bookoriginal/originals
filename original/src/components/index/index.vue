<template>
    <div id="index">
        <!-- <headers></headers> -->
        <banner></banner>
        <selected></selected>
        <guess></guess>
        <recommend></recommend>
        <!-- <footers></footers> -->
    </div>
</template>
<script>
import banner from './banner/banner.vue';
import selected from './selected/selected.vue';
import guess from './guess/guess.vue';
import recommend from './recommend/recommend.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        banner,
        selected,
        guess,
        recommend,
    },
    mounted () {
        
    }
}
</script>
<style lang="less" scoped>
</style>
