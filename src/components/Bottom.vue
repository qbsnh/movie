<template>
    <div class="base">
        <ul>
            <li @click="tab(1)">
                <router-link to='/' :class="sign==1?lactive:''">           
                    <i class="iconfont icon-zhuye" :class="sign==1?iactive:''"></i>
                </router-link>
            </li>
            <li @click="tab(2)">
                <router-link to='/Hot'  :class="sign==2?lactive:''">
                    <i class="iconfont icon-remen" :class="sign==2?iactive:''"></i>
                </router-link>
            </li>
            <li @click="tab(3)">
               <router-link to='/Center' :class="sign==3?lactive:''">
                    <i class="iconfont icon-huangguan" :class="sign==3?iactive:''"></i>
                </router-link>
            </li>
            <li  @click="tab(4)">
                <router-link to='/Find'  :class="sign==4?lactive:''">
                    <i class="iconfont icon-faxianjihuo" :class="sign==4?iactive:''"></i>
                </router-link>
            </li>
            <li  @click="tab(5)">
                 <router-link to='/Personal'  :class="sign==5?lactive:''">
                    <i class="iconfont icon-wode1" :class="sign==5?iactive:''"></i>
                </router-link>
            </li>
        </ul>
       
    </div>
</template>

<script>
export default {
    name:'Bottom',
    data(){
        return{
            lactive:'active',
            iactive:'iactive',
            a:'',
            b:'',
            sign:1
        }
    },
    methods:{
        tab(i){
            this.sign=i;
        }
    }
}
</script>
<style lang="less">
@basecolor:white;
@lihover:#F9BC01;
@icolor:#CFCFCF;
@icolor2:#131717;
.base{
     position:fixed;
    bottom: 0;
    width: 100%;
    height: 4rem;
    background: @basecolor;
        z-index: 999;
    ul{
        width: 100%;
        height: 100%;
        list-style: none;
        display: flex;
         justify-content: space-around;
        //  align-items: center;
        li{
            width: 20%;
            height: 100%;
            text-align: center;
            line-height:4rem;
            .active{
                background: @lihover;
            }
            a{
                display: block;
                width: 100%;
                height: 100%;
                i{
                color: @icolor;
                font-size: 2.2rem;
                }
                .iactive{
                   color:@icolor2
                }
            }
           
        }
    }
}
</style>

