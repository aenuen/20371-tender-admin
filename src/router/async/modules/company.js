import Layout from '@/components/Layout'

const companyRouter = {
  path: '/company', name: 'company', component: Layout, redirect: '/company/list',
  meta: {
    title: '公司管理',
    icon: 'peoples',
    roles: ['company']
  },
  children: [
    {
      path: 'list', name: 'companyList', component: () => import('@/views/company/list'),
      meta: {
        title: '公司列表',
        roles: ['company']
      }
    },
    {
      path: 'create', name: 'companyCreate', component: () => import('@/views/company/create'),
      meta: {
        title: '新增公司',
        roles: ['company']
      }
    },
    {
      path: 'update/:id', name: 'companyUpdate', component: () => import('@/views/company/update'),
      meta: {
        title: '公司编辑',
        roles: ['company'],
        activeMenu: '/company/list'
      },
      hidden: true
    }
  ]
}

export default companyRouter
