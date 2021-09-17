import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from 'views/home/Home'

const category = () => import('views/category/category.vue')
const shopcart = () => import('views/shopcart/shopcart.vue')
const profile = () => import('views/profile/profile.vue')
const detail = () => import('views/detail/Detail')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      isDetail: false
    },
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    meta: {
      isDetail: false
    },
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart,
    meta: {
      isDetail: false
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: {
      isDetail: false
    },
  },
  {
    path: '/detail-:id',
    name: 'detail',
    component: detail,
    meta: {
      isDetail: true
    },
    // beforeEnter: (to, from, next) => {
    //   console.log(to,from)
    //   if(to.name === 'detail') {
    //     to.meta.isDetail = true;
    //   }
    //   next()
    // }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach

export default router
