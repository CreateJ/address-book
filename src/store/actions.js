import api from "@/common/api"
import utils from "@/common/utils"

export default {
  getMyInfo: ({ commit }) => {
    const userId = utils.getStorageSync('userId')
    if (userId) {
      api.commonApi.getUser(userId)().then(res => {
        console.log(res)
        commit('setMyInfo', res.user_info)
      }).catch(err => {
        console.log(e)
        uni.navigateTo({
          url: '/pages/login/login',
          success: () => {
            utils.useToast('登录过期，请重新登录', { icon: 'none' })
          }
        })
      })
    } else {
      uni.navigateTo({
        url: '/pages/login/login'
      })
    }
  }
}
