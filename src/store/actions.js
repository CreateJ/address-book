import api from "@/common/api"
import utils from "@/common/utils"

export default {
  getMyInfo: ({ commit }) => {
    const userId = utils.getStorageSync('userId')
    if (userId) {
      api.commonApi.getUser(userId)().then(res => {
        console.log(res)
        commit('setMyInfo', res)
      })
    }
  }
}
