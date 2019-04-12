<template>
    <div id="bookshelf">
       <headers></headers>
       <!-- <banner></banner> -->
       <book></book>
       <footers></footers>
    </div>
</template>
<script>
import headers from '../index/header/header.vue';
import banner from '../index/banner/banner.vue';
import book from './book.vue';
import footers from '../index/footer/footer.vue';
export default {
    components:{
        headers,
        banner,
        book,
        footers
    }
}
</script>
<style>

</style>
