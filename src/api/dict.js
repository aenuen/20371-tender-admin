import request from '@/libs/axios/request'
import qs from 'qs'

export const dictApi = {
  // get
  list: (params) => request({ url: '/dict/list?' + qs.stringify(params), method: 'get' }), // 列表
  detail: (params) => request({ url: '/dict/detail?' + qs.stringify(params), method: 'get' }), // 列表
  // post
  remove: (data) => request({ url: '/dict/remove', method: 'post', data }), // 列表
  create: (data) => request({ url: '/dict/create', method: 'post', data }) // 创建
}
