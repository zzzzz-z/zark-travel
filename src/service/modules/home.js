import zarkRequest from '@/service/request'

export function GetHomehotSuggests() {
  return zarkRequest.get({
    url: "/home/hotSuggests"
  })
}

export function GetHomeCategories() {
  return zarkRequest.get({
    url: "home/categories"
  })
}

export function GetHomeHoselist( currentPage) {
  return zarkRequest.get({
    url: "home/houselist",
    params: {
      page:currentPage
    }
  })
}