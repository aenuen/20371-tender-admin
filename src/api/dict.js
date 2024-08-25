import request from '@/libs/axios/request'
import qs from 'qs'

export const dictApi = {
  // get
  list: (params) => request({ url: '/dict/list?' + qs.stringify(params), method: 'get' }) // 列表
  // post
}
