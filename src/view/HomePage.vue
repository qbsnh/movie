<template>
    <div class="search">
        <div class="search-top">
            <mt-search v-model="value" cancel-text="取消" placeholder="Search"></mt-search>

            <div>
                <a href="javescript:;"><i class="iconfont icon-shijian"></i></a>
                <a href="javescript:;"><i class="iconfont icon-xiazai- icon-xiazai-"></i></a>
            </div>
            
        </div>
        
        <div class="search-center">
            <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="static/img/yyss.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="static/img/zlj.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="static/img/thwj.png"></mt-swipe-item>              
            </mt-swipe>
        </div>


        <div class="rmd">
            <h1>RECOMMEND</h1>
            <ul>
                <li>
                    <img src="static/img/logan.png">
                    <p>Logan</p>
                </li>
                 <li>
                    <img src="static/img/moon.png" alt="">
                    <p>Moonlight</p>
                </li>
                 <li>
                    <img src="static/img/dark.png" alt="">
                    <p>Darkest Hour</p>
                </li>
                 <li>
                    <img src="static/img/venom.png" alt="">
                    <p>Venom</p>
                </li>
                 <li>
                    <img src="static/img/dunkerque.png" alt="">
                    <p>Dunkirk</p>
                </li>
                 <li>
                    <img src="static/img/search.png" alt="">
                    <p>Searching</p>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import Vue from "vue";
import { Search } from "mint-ui";
Vue.component(Search.name, Search);

import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: "HomePage",
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style lang="less">
// .mint-search{
//    width: ;
// }
.search {
  width: 100%;
  .search-top {
    background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#79736b), to(#e6ab3e));
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .mint-search {
      margin-left: 1rem;
      flex: 7;
      height: 100%;
      border: 1px solid #d9d9d9;
      border-radius: 1rem;
      background: #fff;
      height: 60%;
      .mint-searchbar {
        border: none;
        padding: 0;
        background-color: #fff;
        .mint-searchbar-inner {
          height: 2rem;
          padding: 0;
          i {
            color: #e7e9f3;
            display: block;
            margin: 0.1rem;
            font-size: 2rem;
          }
        }
        .mint-searchbar-cancel {
          color: #b05e3d;
        }
      }
    }
    div {
      display: flex;
      justify-content: space-around;
      flex: 3;
      a {
        text-align: center;

        i {
          color: rgb(253, 250, 250);
          font-size: 2.2rem;
        }
      }
    }
  }
  .search-center {
    width: 100%;
    height: 14rem;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .rmd {
    width: 100%;
    h1 {
      text-align: center;
      font-size: 1.6rem;
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      li {
        width: 25.5%;
        height: 12rem;
        margin-bottom: 2rem;
        box-shadow: 0.2rem 0.2rem 2rem  #888888;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
        p {
          font-size: 1.2rem;
          display: block;
          margin-top: 0.5rem;
          display: block;
          height: 3rem;
        }
      }
    }
  }
}
</style>

