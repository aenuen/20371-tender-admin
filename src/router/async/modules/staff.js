import Layout from '@/components/Layout'

const staffRouter = {
  path: '/staff', name: 'staff', component: Layout, redirect: '/staff/list',
  meta: {
    title: '员工管理',
    icon: 'peoples',
    roles: ['staff']
  },
  children: [
    {
      path: 'list', name: 'staffList', component: () => import('@/views/staff/list'),
      meta: {
        title: '员工列表',
        roles: ['staff']
      }
    },
    {
      path: 'create', name: 'staffCreate', component: () => import('@/views/staff/create'),
      meta: {
        title: '新增员工',
        roles: ['staff']
      }
    },
    {
      path: 'update/:id', name: 'staffUpdate', component: () => import('@/views/staff/update'),
      meta: {
        title: '员工编辑',
        roles: ['staff'],
        activeMenu: '/staff/list'
      },
      hidden: true
    }
  ]
}

export default staffRouter
