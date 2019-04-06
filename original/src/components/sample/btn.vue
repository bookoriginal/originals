<template>
   <div class="wapper">
       <div class="contain">
           <!-- <headers></headers> -->
              <!-- <div class="nav"></div> -->
        <Row class="left">
        <Col span="8">
            <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        作品集
                    </template>

                    <router-link 
                        teg='div'
                        to="/creation/btn/wei"
                        active-class='sel'
                    >
                    <MenuItem name="1-1">微型小说</MenuItem>
                    </router-link>

                     <router-link 
                        teg='div'
                        to="/creation/btn/shi"
                        active-class='sel'
                    >
                    <MenuItem name="1-2">诗歌词赋</MenuItem>
                    </router-link>

                    <router-link 
                        teg='div'
                        to="/creation/btn/sui"
                        active-class='sel'
                    >
                    <MenuItem name="1-3">随笔记录</MenuItem>
                     </router-link>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
    </Row>
    <div class="right">
        <router-view></router-view>
    </div>
    </div>
    </div>
</template>

<script>
    import headers  from '../index/header/header'
    export default {
        data () {
            return {
                theme2: 'light'
            }
        },
        components: {
            headers
        }
    }
</script>
<style lang="less" scoped>
@import '../../common/style/all.css';
.wapper{
    width:100%;
    // height: 100%;
     position: absolute;
    //   top: 150px;
    top: 260px;
      bottom: 0;
    overflow: hidden;
        .contain{
            width: 1200px;
            height: 100%;
            margin:auto;
            // overflow: hidden;
            position: absolute;
            top: 0px;
            bottom: 0;
            left: 50%;
            transform: translateX(-600px);
        //    .nav{
        //         height: 80px;
        //         width: 100%;
        //         background: red;
        //     }
            .left{
                // min-height: 600px;
                // float: left;
                // div{
                    position: absolute;
                    // overflow: hidden;
                    top:0px;
                    bottom: 0;
                    // height: 100%;   
                // }
                div{
                    height: 100%;
                    ul{
                        height: 100%;    
                    }
                }
            }
            .right{
                background: blue;
                position: absolute;
                left: 240px;
                width: 960px;
                top:0px;
                bottom: 0;
                overflow: hidden;
            }
            &:after{
                content:"";
                display:block;
                clear :both ;
                overflow : hidden;
                visibility : hidden;
                height : 0;
            }
        }
}
</style>
