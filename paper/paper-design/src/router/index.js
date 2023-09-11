import Vue from 'vue'
import VueRouter from 'vue-router'
import { Books } from './Books/index'
import Search from '../views/Search.vue'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
// 重写了原型上的push方法，统一的处理了错误信息
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [

  Books,
  {
    path: '/center',
    name: 'center',
    component:()=>import('../views/Center.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../views/Error.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

var vm = new Vue();	//因为取不到this关键字，因此new一个Vue的实例取缓存
router.beforeEach((to, from, next) => {
  var auth = vm.$cookie.get('loginAuth')	//取得后端设置得缓存
  // console.log(auth)
  // console.log(to.path)  //获取路由的路径
  if (to.path == '/login') {	//判断路由
    if (auth) {	//判断缓存验证
      router.push("/books")	//存在则跳转到home页面
    } else {
      next()	//否则卡在登录路由
    }
  }
  else {	//当路由路径不等于login路由时，
      if (auth) {		//若存在登录验证
        next()		//则允许跳转
      } else {	//否则
        router.push('/login')	//跳转到登录页面
      }
  }
})

export default router
