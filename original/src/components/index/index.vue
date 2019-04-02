<template>
    <div id="index">
        <headers></headers>
        <banner></banner>
        <selected></selected>
        <guess></guess>
        <recommend></recommend>
        <footers></footers>
    </div>
</template>
<script>
import headers from '@/common/header/header.vue';
import banner from './banner/banner.vue';
import selected from './selected/selected.vue';
import guess from './guess/guess.vue';
import recommend from './recommend/recommend.vue';
import footers from '@/common/footer/footer';
export default {
    data(){
        return{

        }
    },
    components:{
        headers,
        banner,
        selected,
        guess,
        recommend,
        footers
    }
}
</script>
<style lang="less" scoped>
</style>
