import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 固定加载
import { http, auth } from './modules/redirect'
import { p401, p404 } from './modules/error'
import { home } from './modules/home'
import { login } from './modules/login'

export const constantRoutes = [
  http, // 网址重定向
  auth, // 身份重定向
  p401, // 401页面
  p404, // 404页面
  login, // 登录
  home // 首页
]

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由
}

export default router
