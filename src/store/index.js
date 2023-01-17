import { createStore } from 'vuex'
import actions from "./actions";
import mutations from "./mutations";

const initState = {
  gradeOptions: [],
  myInfo: null
}

const store = createStore({
  actions,
  mutations,
  state: initState
})

export default store
