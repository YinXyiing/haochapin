import axios from 'axios'
import qs from 'qs'
axios.defaults.withCredentials = true

export default function request (type, url, data = {}) { // 参数介绍 请求类型 请求接口 请求参数
  return new Promise((resolve, reject) => {
    if (type.toLowerCase() === 'get') {
      axios.get(url, {
        params: data
      })
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    } else {
      axios.post(url, qs.stringify(data))
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    }
  })
}
