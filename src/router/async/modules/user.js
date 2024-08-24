import Layout from '@/components/Layout'

export const user = {
  path: '/user',
  name: 'user',
  component: Layout,
  redirect: '/user/list',
  meta: {
    title: '用户管理',
    icon: 'peoples',
    roles: ['admin']
  },
  children: [
    {
      path: 'list',
      name: 'userList',
      component: () => import('@/views/user/list'),
      meta: {
        title: '用户列表',
        roles: ['admin']
      }
    },
    {
      path: 'create',
      name: 'userCreate',
      component: () => import('@/views/user/create'),
      meta: {
        title: '新建用户',
        roles: ['admin']
      }
    },
    {
      path: 'update/:id',
      name: 'userUpdate',
      component: () => import('@/views/user/update'),
      meta: {
        title: '用户编辑',
        roles: ['admin'],
        activeMenu: '/user/list'
      },
      hidden: true
    },
    {
      path: 'data',
      name: 'personalData',
      component: () => import('@/views/user/data'),
      meta: {
        title: '用户资料'
      },
      hidden: true
    }
  ]
}
