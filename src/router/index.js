import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about'
import Home from '@/components/home'
import Contact from '@/components/contact'
import Chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/home', component: Home },
    { path: '/content1', component: Contact },
    { path: '/content2', component: Chat }
  ]
})
