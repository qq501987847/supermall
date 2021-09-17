import { request } from './request'

export function getDetail(iid) {
  return request({
    url: `/detail?iid=${iid}`
  })
}

export function getDetailRecommend() {
  return request({
    url: `/recommend`
  })
}