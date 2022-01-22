import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPost from '@/components/pages/blog/post/AllPost'
import BlogIndex from '@/components/pages/blog/BlogIndex'
import Category from '@/components/pages/blog/category/Category'
import PostDetail from '@/components/pages/blog/post/PostDetail'


Vue.use(VueRouter)

const routes = [
  
  
  {
    path: '/',
    name: "blog",
    component: BlogIndex,
    children: [
      {
        path: '/',
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
