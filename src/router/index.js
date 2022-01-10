import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/pages/Home'
import Category from '@/components/pages/category/Category'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:slug',
    name: 'Category',
    component: Category
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
