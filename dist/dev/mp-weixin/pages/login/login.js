"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  (_component_van_field + _component_van_cell_group)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const form = common_vendor.reactive({
      account: "",
      password: ""
    });
    common_vendor.watch(form, (val) => {
      console.log(form.account);
      console.log(form.password);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => form.account = $event.detail),
        b: common_vendor.p({
          value: form.account,
          label: "\u8D26\u53F7",
          leftIcon: "user-circle-o",
          placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
          border: false
        }),
        c: common_vendor.o(($event) => form.password = $event.detail),
        d: common_vendor.p({
          value: form.password,
          type: "password",
          label: "\u5BC6\u7801",
          leftIcon: "closed-eye",
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cdfe2409"], ["__file", "D:/CODE/dongli/address-book/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
