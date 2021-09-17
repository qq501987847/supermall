import {request} from './request'

export function getCategoryNav() {
  return request({
    url: '/category'
  })
}

export function getCategoryMain(key) {
  return request({
    url: `/subcategory?maitKey=${key}`
  })
}