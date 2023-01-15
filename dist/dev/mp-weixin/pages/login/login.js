"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
const common_utils = require("../../common/utils.js");
require("../../common/request.js");
require("../../common/constant.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _easycom_my_big_button2 = common_vendor.resolveComponent("my-big-button");
  (_component_van_field + _component_van_cell_group + _easycom_my_big_button2)();
}
const _easycom_my_big_button = () => "../../components/my-big-button/my-big-button.js";
if (!Math) {
  _easycom_my_big_button();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const form = common_vendor.reactive({
      phone: "13312345678",
      password: "12345678"
    });
    const login = () => {
      let params = { ...form, phone: parseInt(form.phone) };
      console.log(params);
      common_api.api.commonApi.login(params).then((res) => {
        common_utils.utils.setStorage("userId", res.id);
        common_vendor.index.switchTab({
          url: "/pages/index/index",
          success: () => {
            common_utils.utils.useToast("\u767B\u5F55\u6210\u529F", { icon: "success" });
          }
        });
      }).catch((err) => {
        console.log("err", err);
      });
    };
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => form.phone = $event.detail),
        b: common_vendor.p({
          value: form.phone,
          label: "\u8D26\u53F7",
          leftIcon: "/static/icon-account.png",
          placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7",
          border: false,
          titleWidth: "2rem"
        }),
        c: common_vendor.o(($event) => form.password = $event.detail),
        d: common_vendor.p({
          value: form.password,
          type: "password",
          label: "\u5BC6\u7801",
          leftIcon: "/static/icon-pw.png",
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
          border: false,
          titleWidth: "2rem"
        }),
        e: common_vendor.o(login),
        f: common_vendor.p({
          ["bg-color"]: "#FF5733"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cdfe2409"], ["__file", "D:/CODE/dongli/address-book/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
