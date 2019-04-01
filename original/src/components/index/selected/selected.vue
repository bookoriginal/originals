<template>
    <div class="selected">
        <dir class="selected-all">
            <div class="selected-tit">
                <h3>精选</h3>
                <router-link to="/index">
                    <span>更多
                        <i class="iconfont">&#xe60c;</i>
                    </span>
                </router-link>
            </div>
            <div class="selected-list">

            </div>
        </dir>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.selected{
    width: 100%;
    height: 400px;
    background: #ddd;
    .selected-all{
        width:1200px;
        height: 100%;
        margin: 0 auto;
        .selected-tit{
            width: 100%;
            height:50px;
            line-height: 60px;
            h3{
                float: left;
            }
            a{
                float: right;
            }
        }
        .selected-list{
            width: 100%;
            height: 350px;
            background: #fff;
        }
    }
    
}
</style>
