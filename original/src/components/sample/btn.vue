<template>
   <div class="qqq">
       <div class="aaa">
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
                    </Menu>
                </Col>
            </Row>
            <div class="right">
                <!-- <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
 
    // import {Row,Col,Menu,Submenu,template,Icon} from 'iview'
    // Vue.use(Row,Col,Menu,Submenu,template,Icon)
    export default {
        data () {
            return {
                theme2: 'light'
            }
        },
        components: {
            // Row,Col,Menu,Submenu,template,Icon
        }
    }
</script>
<style lang="less" scoped>
@import '../../common/style/all.css';
.qqq{
    width:100%;
    height: 100%;
    position: absolute; 
    top: 460px;
    bottom: 0;
        .aaa{
            width: 1200px;
            height: 200px;
            margin: 0 auto;
            position: absolute;
            top: 0px;
            bottom: 0;
            left: 50%;
            transform: translateX(-600px);
     
            .left{
                    position: absolute;
                    top:0px;
                    bottom: 0;
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
           
        }
}
</style>
