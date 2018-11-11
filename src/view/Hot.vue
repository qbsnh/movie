<template>
    <div class="hot">
        <h2>HOT</h2 >
        <ul>
            <li>
                <img src="static/img/moonlight.png" alt="">
                <h1>MOONLIGHT</h1>
                <p>
                    Chiron (Ashton Sanders) mother Paula (Naomie Harris) is addicted to drug care. 
                </p>
            </li>
            <li>
                <img src="static/img/xjcy.png" alt="">
                <h1>MOONLIGHT</h1>
                <p>
                    In the near future, the earth's yellow sands are everywhere, and the basic crops such as wheat and okra are extinct due to blight.
                </p>
            </li>
            <li>
                <img src="static/img/bfx.png" alt="">
                <h1>MOONLIGHT</h1>
                <p>
                   From the shadow of witnessing the death of his parents, "Batman", after growing up, is no longer the lonely hero
                </p>
            </li>
           
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name:'Hot',
    data(){
        return{
            
        }
    }
}
</script>


<style lang="less">
.hot{
        width: 100%;
        h2{
            text-align: center;        
            display: block;
            line-height: 2rem;
            height: 2rem;
            font-size: 1.4rem;

         }
         ul{
                width: 100%;
                li{
                    width: 100%;
                    h1{
                        margin:0.8rem 0 0.5rem 0;
                        font-size: 2rem;
                        text-indent: 1rem;
                    }
                    img{
                        display: block;
                        width: 100%;
                        height: 16rem;

                    }
                    p{
                        text-indent: 1rem;
                            height: 3rem;
                                padding: 0 0.6rem;
                    }
                }
             } 
}

</style>

    


