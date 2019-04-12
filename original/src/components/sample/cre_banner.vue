<template>
<div>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel" style="height:200px;background:red">1sfasfasdf</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"  style="height:200px;background:red">2asdfasdfas</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"  style="height:200px;background:red">3asdfasdfasf
            </div>
        </CarouselItem>
    </Carousel>
</div>    
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
