// 异步加载
import companyRouter from './modules/company'
import lotteryRouter from './modules/lottery'
import iconsRouter from './modules/icons'
const asyncRoutes = [
  companyRouter,
  lotteryRouter,
  iconsRouter,
  { path: '*', redirect: '/404', hidden: true } // 无页面=404页面
]

export default asyncRoutes
