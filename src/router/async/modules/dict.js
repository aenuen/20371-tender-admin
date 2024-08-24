import Layout from '@/components/Layout'

export const dict = {
  path: '/dict',
  name: 'dict',
  component: Layout,
  redirect: '/dict/list',
  meta: {
    title: '字典管理',
    icon: 'dict',
    roles: ['admin']
  },
  children: [
    {
      path: 'list',
      name: 'dictList',
      component: () => import('@/views/dict/list'),
      meta: {
        title: '字典列表',
        roles: ['admin']
      }
    },
    {
      path: 'create',
      name: 'dictCreate',
      component: () => import('@/views/dict/create'),
      meta: {
        title: '新增字典',
        roles: ['admin']
      }
    },
    {
      path: 'update/:id',
      name: 'dictUpdate',
      component: () => import('@/views/dict/update'),
      meta: {
        title: '字典编辑',
        roles: ['admin'],
        activeMenu: '/dict/list'
      },
      hidden: true
    }
  ]
}
