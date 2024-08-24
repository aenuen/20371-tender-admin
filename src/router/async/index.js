// 异步加载
import { company } from './modules/company'
import { staff } from './modules/staff'
import { project } from './modules/project'
import { user } from './modules/user'
import { dict } from './modules/dict'
import { icons } from './modules/icons'
const asyncRoutes = [
  company,
  staff,
  project,
  user,
  dict,
  icons,
  { path: '*', redirect: '/404', hidden: true } // 无页面=404页面
]

export default asyncRoutes
