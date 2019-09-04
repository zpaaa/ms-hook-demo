import request from '../utils/request'
/* 读取所有播放列表 */
export function getLists (skip=0, limit=20) {
  return request({
    url: 'doctors',
    params: {
        limit,
        skip,
        user_key: '2d90accf45edb19e93e1b50a009d5a62'
    },
    method: 'get'
  })
}