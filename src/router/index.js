import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about'
import Home from '@/components/home'
import Contact from '@/components/contact'
import Chat from '@/components/chat'

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
=======
  // mode: 'history',
>>>>>>> bb80ab84e1f1e01beecbd86a27077b6ded959836
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/home', component: Home },
    { path: '/content1', component: Contact },
    { path: '/content2', component: Chat }
  ]
})
