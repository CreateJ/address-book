import { HEADER_URL } from "./constant.js"
import utils from "@/common/utils"

const request = (method, url) => {
  return (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      uni.request({
        url: HEADER_URL + url,
        data,
        method,
        header: {
          Authorization: utils.getStorageSync('token')
        },
        success: (res) => {
          if(res.data.code === 1) {
            utils.useToast(res.data.message, {icon: 'none'})
            reject(res.data)
          } else {
            utils.setStorageSync('token', res.data.data.token)
            resolve(res.data.data)
          }
        },
        fail: (err) => {
          // TODO:这里自动跳转到登录页面
          // uni.navigateTo({
          //   url: '/pages/login/login'
          // })
          reject(err)
        }
      })
    })
  }
}

export default request

