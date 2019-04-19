<template>

    <!-- <Carousel autoplay v-model="value2" loop>
        <CarouselItem> -->
            <div class="demo-carousel" style="height:450px;width:100%">
                <img  style="height:100%;width:100%" src="../../common/img/20190419193007.jpg">
            </div>
        <!-- </CarouselItem> -->
        <!-- <CarouselItem>
            <div class="demo-carousel"  style="height:450px;">
                <img src="../../common/img/20190419193037.jpg" alt="" srcset="">
            </div>
        </CarouselItem> -->
        <!--<CarouselItem>
            <div class="demo-carousel"  style="height:450px;">
                <img src="../../common/img/20190419193037.jpg" alt="" srcset="">
            </div>
        </CarouselItem> -->
    <!-- </Carousel> -->

</template>
<script>
import Vue from 'vue'
import {Carousel,CarouselItem} from 'iview'
Vue.use(Carousel,CarouselItem)
    export default {
        data () {
            return {
                value2: 0
            }
        },
        components:{
            Carousel,
            CarouselItem
        }
    }
</script>
