<template>
    <div class="personal">
        <div class="system">
            <ul>
                <li>
                    <i class="i1 iconfont icon-emaxcitygerenxinxitubiaoji03"></i>
                    <span>My order</span>
                    <i class="i2 iconfont icon-youjiantou"></i>
                </li>
                <li>
                    <i class="i1 iconfont icon-wallet"></i>
                    <span>My wallet</span>
                    <i class="i2 iconfont icon-youjiantou"></i>
                </li>
                <li>
                    <i class="i1 iconfont icon-icon--"></i>
                    <span>Feedback</span>
                    <i class="i2 iconfont icon-youjiantou"></i>
                </li>
                <li>
                    <i class="i1 iconfont icon-weibiaoti-"></i>
                    <span>Customer service</span>
                    <i class="i2 iconfont icon-youjiantou"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Personal',
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less">
.personal{
    width: 100%;
    .system{
        width: 100%;

        ul{
            width: 100%;
            li{
                width: 100%;
                height: 6rem;
                position: relative;
                border-bottom: 0.1rem solid rgb(246, 246, 246);
                display: flex;
                 align-items: center;
                 i{
                         text-align: center;
                 }
                .i1{
                    flex: 1;
                    
                }
                .i2{
                    flex: 1;
                }
                span{
                    flex: 8;
                    font-size: 1.4rem;
                }
            }
        }
    }
}
</style>

