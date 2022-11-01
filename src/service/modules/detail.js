import zarkRequest from '@/service/request'

export function getDatailInfos(houseId) {
  return zarkRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}