import dayjs from "dayjs"

export default {
  initGradeOptions(state) {
    const generateGradeOptions = () => {
      const numberList = '十一二三四五六七八九'.split('')
      const transNumber = (year) => {
        if (year <= 2013) return ''
        const left = year - 2013
        let res = ''
        if (left < 10) {
          res = numberList[left]
        } else if (left === 10) {
          res = numberList[0]
        } else if (left % 10 === 0) {
          res = numberList[left / 10] + numberList[0]
        } else if (left < 20) {
          const tempArr = (left + '').split('')
          res = `${numberList[0]}${numberList[tempArr[1]]}`
        } else {
          const tempArr = (left + '').split('')
          res = `${numberList[tempArr[0]]}${numberList[0]}${numberList[tempArr[1]]}`
        }
        return res
      }
      let gradeOptions = []
      const currentYear = dayjs().year()
      for (let i = 2014; i <= currentYear; i++) {
        gradeOptions.push(`${i}年第${transNumber(i)}届`)
      }
      return gradeOptions
    }
    state.gradeOptions = generateGradeOptions()
  },
  setMyInfo(state, data) {
    state.myInfo = data
    console.log(state.myInfo)
  }
}
