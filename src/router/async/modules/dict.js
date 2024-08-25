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
        title: '字典管理',
        roles: ['admin']
      }
    }
  ]
}
