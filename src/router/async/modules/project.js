import Layout from '@/components/Layout'

export const project = {
  path: '/project',
  name: 'project',
  component: Layout,
  redirect: '/project/list',
  meta: {
    title: '项目管理',
    icon: 'project',
    roles: ['admin']
  },
  children: [
    {
      path: 'list',
      name: 'projectList',
      component: () => import('@/views/project/list'),
      meta: {
        title: '项目列表',
        roles: ['admin']
      }
    },
    {
      path: 'create',
      name: 'projectCreate',
      component: () => import('@/views/project/create'),
      meta: {
        title: '项目添加',
        roles: ['admin']
      }
    },
    {
      path: 'update/:id',
      name: 'projectUpdate',
      component: () => import('@/views/project/update'),
      meta: {
        title: '项目编辑',
        roles: ['admin'],
        activeMenu: '/project/list'
      },
      hidden: true
    }
  ]
}
