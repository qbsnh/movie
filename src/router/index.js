import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/view/HomePage'
import Hot from '@/view/Hot'
import Center from '@/view/Center'
import Personal from '@/view/Personal'
import Find from '@/view/Find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HomePage',
      component:HomePage,
    },
    {
      path:'/Hot',
      name:'Hot',
      component:Hot,
    },
    {
      path:'/Center',
      name:'Center',
      component:Center,
    },
    {
      path:'/Personal',
      name:'Personal',
      component:Personal,
    },
    {
      path:'/Find',
      name:'Find',
      component:Find,
    }
  ]
})