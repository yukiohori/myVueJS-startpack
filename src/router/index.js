import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about'
import Home from '@/components/home'
import content1 from '@/components/content1'
import content2 from '@/components/content2'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/home', component: Home },
    { path: '/content1', component: content1 },
    { path: '/content2', component: content2 }
  ]
})
