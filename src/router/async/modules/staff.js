import Layout from '@/components/Layout'

export const staff = {
  path: '/staff',
  name: 'staff',
  component: Layout,
  redirect: '/staff/list',
  meta: {
    title: '员工管理',
    icon: 'peoples',
    roles: ['company']
  },
  children: [
    {
      path: 'list',
      name: 'staffList',
      component: () => import('@/views/staff/list'),
      meta: {
        title: '员工列表',
        roles: ['company']
      }
    },
    {
      path: 'create',
      name: 'staffCreate',
      component: () => import('@/views/staff/create'),
      meta: {
        title: '新增员工',
        roles: ['company']
      }
    },
    {
      path: 'update/:id',
      name: 'staffUpdate',
      component: () => import('@/views/staff/update'),
      meta: {
        title: '员工编辑',
        roles: ['company'],
        activeMenu: '/staff/list'
      },
      hidden: true
    }
  ]
}
