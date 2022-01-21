import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/pages/Home'
import AllPost from '@/components/pages/blog/post/AllPost'
import BlogIndex from '@/components/pages/blog/BlogIndex'
import Category from '@/components/pages/blog/category/Category'
import PostDetail from '@/components/pages/blog/post/PostDetail'
import Company from '@/components/pages/company/Company'
import Service from '@/components/pages/services/Service'
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
    path: '/blog/',
    name: "blog",
    component: BlogIndex,
    children: [
      {
        path: '/blog/',
        component: AllPost,
      },
      {
        path: '/category/:id',
        name: 'Category',
        component: Category
      },
      {
        path: '/post/:id',
        name: 'post',
        component: PostDetail
      },
    ]
  },
  {
    path: '/contact/',
    name: "contact",
    component: Contact,
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
