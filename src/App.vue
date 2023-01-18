<script>
import dayjs from "dayjs"

export default {
  created() {
    this.$store.commit('initGradeOptions')
    this.$store.dispatch('getMyInfo')
  },
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {

  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/common/common.scss";
</style>
