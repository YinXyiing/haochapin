import Service from '../util/http.js'
export function getConfigsByProductId(productId) {
  return Service({
    url: '/manager/getConfigsByProductId',
    params: {
      productId: productId
    }
  })
}
export function getAllAndroidPlugins() {
  return Service.post("logList")
}
export function addNewAndroidPlugin(data) {
  return Service({
    url: '/logList',
    data: JSON.stringify(data)
  })
}
