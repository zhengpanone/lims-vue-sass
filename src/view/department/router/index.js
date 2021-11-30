import Layout from '@/view/dashboard/pages/layout.vue'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/department', // 父路径
    component: Layout,
    redirect: 'noredirect',
    name: 'department',
    meta: {
      title: '组织架构',
      icon: 'component'
    },
    children: [
      {
        path: 'index', // 请求地址   -- /saas-cliens/index
        component: _import('department/pages/index'), // 跳转的vue视图
        name: 'department-index',
        meta: { title: 'SAAS组织架构', icon: 'component', noCache: true }
      },
      {
        path: 'details/:id',
        component: _import('department/pages/detail'), // 跳转的vue视图
        name: 'department-detail',
        meta: { title: 'SAAS组织架构', icon: 'component', noCache: true }
      }
    ]
  }
]
