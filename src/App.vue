<template>
  <div id="app">
    <Bottom></Bottom>
    <router-view/>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom'
export default {
  name: 'App',
  components:{
    Bottom
  }
}
</script>

<style lang="less">
    #app{
      width: 100%;      
      margin: 0 auto;
    }
  
</style>