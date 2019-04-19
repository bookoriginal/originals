<template>
    <div id="index">
        <banner></banner>
        <selected></selected>
        <guess></guess>
        <recommend></recommend>
    </div>
</template>
<script>
import banner from './banner/banner.vue';
import selected from './selected/selected.vue';
import guess from './guess/guess.vue';
import recommend from './recommend/recommend.vue';
import vue from 'vue'
const bus = new Vue()
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
