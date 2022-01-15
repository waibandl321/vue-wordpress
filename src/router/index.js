import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/pages/Home'
import Category from '@/components/pages/category/Category'
import Post from '@/components/pages/post/Post'
import Company from '@/components/pages/Company'
import Service from '@/components/pages/Service'
import Contact from '@/components/pages/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: "ホーム"}
  },
  {
    path: '/company/',
    name: "company",
    component: Company,
  },
  {
    path: '/service/',
    name: "service",
    component: Service,
  },
  {
    path: '/contact/',
    name: "contact",
    component: Contact,
  },
  {
    path: '/category/:slug',
    name: 'Category',
    component: Category
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
