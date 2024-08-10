import request from '@/libs/axios/request'
import qs from 'qs'

export const companyApi = {
  // get
  detail: params => request({ url: '/company/detail?' + qs.stringify(params), method: 'get' }), // 详情
  list: params => request({ url: '/company/list?' + qs.stringify(params), method: 'get' }), // 列表
  // post
  create: data => request({ url: '/company/create', method: 'post', data }), // 新增
  update: data => request({ url: '/company/update', method: 'post', data }) // 编辑
}
