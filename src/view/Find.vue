<template>
    <div class="find">
        <img src="static/img/12.png" alt="">
        <p>Scinece fiction film coming domestic gear on january 20,surely!</p>
        <div class="comment">
            <ul>
                <li>
                    <div>
                        <p> have tears that are not only chest but warm like a fire. If I go back to the first moment, I will come back and everything will be different.</p>
                        <span>2018-11.11</span>
                        <span>Reandig1111</span>
                    </div>
                    <span class="pic">
                        <img src="static/img/13.png" alt="">
                    </span>
                </li>
                <li>
                    <div>
                        <p>The flow of life, how to bypass the suffering, lost to the bones of Cassie, can not bypass the suffering.</p>
                        <span>2018-11.20</span>
                        <span>Reandig2564</span>
                    </div>
                    <span class="pic">
                        <img src="static/img/16.png" alt="">
                    </span>
                </li>
                <li>
                    <div>
                        <p> "The real heroes were all over there." If you know what you want to be, if you know what you want to be, you are invincible. This is faith.</p>
                        <span>2018-11.18</span>
                        <span>Reandig5555</span>
                    </div>
                    <span class="pic">
                        <img src="static/img/17.png" alt="">
                    </span>
                </li>
                <li>
                    <div>
                        <p>The lover is gone, and the husband is referring to it. The lover is back, and the abyss; the marriage is a gorgeous robe, this is the face.</p>
                        <span>2018-11.30</span>
                        <span>Reandig1587</span>
                    </div>
                    <span class="pic">
                        <img src="static/img/18.png" alt="">
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Find',
    data(){
        return{
            
        }
    }
}
</script>
<style lang="less">
.find{
    width: 100%;
    position: relative;
    >img{
        display: block;
        width: 100%;
        height: 16rem;
    }
    >p{
       position: absolute;
    display: block;
    width: 100%;
    
    top: 12rem;
    font-size: 1.7rem;
    color: #f1f1f1;
    padding: 0 3rem;
    box-sizing: border-box;
    }
    .comment{
        width: 100%;
        ul{
            width: 96%;
            margin: auto;
            li{
                width: 100%;
                display: flex;
                    height: 8.5rem;
                padding-top: 2rem;

                div{
                    flex: 6;
                        padding: 0 0.4rem;
                    position: relative;
                    height: 100%;
                    p{
                        display: block;
                        width: 100%;
                        font-size: 1.4rem;
                        color: rgb(31,34,34)
                    }
                    span{
                        position: absolute;
                         bottom: 0;
                         color: rgb(179,178,178);

                    }
                    span:nth-of-type(1){                   
                        left: 0.4rem;
                    }
                    span:nth-of-type(2){
                        right: 0.4rem;
                    }
                    
                }
                .pic{
                    display: block;
                    flex: 4;
                    height: 100%;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

}
</style>

