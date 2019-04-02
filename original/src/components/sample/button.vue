<template>
    <div class="btn">
        <router-link 
            teg='div'
            to="/wei"
            active-class='sel'
        >
            微型作品
        </router-link>

        <router-link 
            teg='div'
            to="/shi"
            active-class='sel'
        >
            诗歌作品
        </router-link>
        
        <router-link 
            teg='div'
            to="/sui"
            active-class='sel'
        >
            随笔作品
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>
   .btn{
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    color: hsla(0,0%,100%,.5);
    div{
        border-bottom: 2px solid red;
        
    }
    .sel{
         border-bottom: 2px solid red;
          color: #FFCD32;
       
    }
} 

</style>


