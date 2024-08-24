import Layout from '@/components/Layout'

export const company = {
  path: '/company',
  name: 'company',
  component: Layout,
  redirect: '/company/list',
  meta: {
    title: '公司管理',
    icon: 'org',
    roles: ['admin']
  },
  children: [
    {
      path: 'list',
      name: 'companyList',
      component: () => import('@/views/company/list'),
      meta: {
        title: '公司列表',
        roles: ['admin']
      }
    },
    {
      path: 'create',
      name: 'companyCreate',
      component: () => import('@/views/company/create'),
      meta: {
        title: '新增公司',
        roles: ['admin']
      }
    },
    {
      path: 'update/:id',
      name: 'companyUpdate',
      component: () => import('@/views/company/update'),
      meta: {
        title: '公司编辑',
        roles: ['admin'],
        activeMenu: '/company/list'
      },
      hidden: true
    }
  ]
}
