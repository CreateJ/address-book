"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
require("./store/actions.js");
require("./common/api.js");
require("./common/request.js");
require("./common/constant.js");
require("./common/utils.js");
require("./store/mutations.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./pages/register/register.js";
  "./pages/more/more.js";
}
const _sfc_main = {
  created() {
    this.$store.commit("initGradeOptions");
  },
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  methods: {}
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/CODE/dongli/address-book/src/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
