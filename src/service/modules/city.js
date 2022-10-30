import zarkRequest from '@/service/request'

export function getCityAll() {
  return zarkRequest.get({
    url: 'city/all'
  })
}