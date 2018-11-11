<template>
  <div class="center">
    <el-carousel :interval="4000" type="card" height="200px" :autoplay='true'>
      <el-carousel-item v-for="item in url" :key="item">
        <h3><img :src="item" alt=""></h3>
      
      </el-carousel-item>
    </el-carousel>

    <div class="lis">
      
      <ul>
        <li>  
          <img src="static/img/8.png" alt="">
          <div>
            <h1>Titanic</h1>
            <p>Director : James Cameron</p>
            <p>Starring : Leonardo DiCaprio / Kate Winslet / Billy Zane / Casey Bates / </p>
          </div>
        </li>
        <li>  
          <img src="static/img/9.png" alt="">
          <div>
            <h1>Pirates of Dream Space Inception</h1>
            <p>Director : Christopher Nolan</p>
            <p>Starring : Leonardo DiCaprio / Joseph Gordon Levitt / Allen Peggy / Tom Hardy / </p>
          </div>
        </li>
        <li>  
          <img src="static/img/10.png" alt="">
          <div>
            <h1>Robot Story WALL·E</h1>
            <p>Director : Andrew Stanton</p>
            <p>Starring : Ben Belt / Eliza Knight / Jeff Gerling / Fred Willat / Sigourney Weaver / </p>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
  
</template>




<script>
export default {
  name: "Center",
  data() {
    return {
      url:["static/img/1.png",'static/img/2.png','static/img/3.png']
        
      
    };
  }
};
</script>

<style lang="less">
.center {
  width: 100%;
  background: rgb(248, 248, 248);
  .lis {
    width: 100%;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 12rem;
            margin: 1rem auto;
        position: relative;
        img {
          width: 25%;
          position: absolute;
              height: 100%;
          z-index: 1;
        }
        div {
             background: #fff;
    width: 100%;
    height: 80%;
    position: absolute;
    bottom: 1rem;
    padding-left: 28%;
    box-sizing: border-box;
         h2{
           font-size: 1.6rem;
         }
         p{
            font-size: 1.4rem;
         }
        }
      }
    }
  }
}
.el-carousel__container {
  height: 12rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
      width: 100%;
    height: 100%;
    img{
          display: block;
    height: 100%;
    width: 100%;
    }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item--card {
  width: 80%;
}
.el-carousel__item,
.el-carousel__mask {
  left: -4.5rem;
}
</style>








