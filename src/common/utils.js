const setStorage = (key, data) => {
  return new Promise((resolve, reject) => {
    uni.setStorage({
      key,
      data,
      success: () => {
        resolve()
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

const setStorageSync = (key, data) => {
  uni.setStorageSync(key, data)
}

const getStorageSync = (key) => {
  return uni.getStorageSync(key)
}

const useToast = (title, otherConfig) => {
  uni.showToast({
    title,
    duration: 2000,
    ...otherConfig
  })
}

export default { setStorage,setStorageSync, getStorageSync, useToast }
