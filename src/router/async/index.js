// 异步加载
import company from './modules/company'
import staff from './modules/staff'
import approval from './modules/approval'
import manager from './modules/manager'
import icons from './modules/icons'
const asyncRoutes = [
  company,
  staff,
  approval,
  manager,
  icons,
  { path: '*', redirect: '/404', hidden: true } // 无页面=404页面
]

export default asyncRoutes
