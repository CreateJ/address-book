"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
const common_utils = require("../../common/utils.js");
require("../../common/request.js");
require("../../common/constant.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_cell = common_vendor.resolveComponent("van-cell");
  const _component_van_picker = common_vendor.resolveComponent("van-picker");
  const _component_van_popup = common_vendor.resolveComponent("van-popup");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _easycom_my_big_button2 = common_vendor.resolveComponent("my-big-button");
  (_component_van_field + _component_van_cell + _component_van_picker + _component_van_popup + _component_van_cell_group + _easycom_my_big_button2)();
}
const _easycom_my_big_button = () => "../../components/my-big-button/my-big-button.js";
if (!Math) {
  _easycom_my_big_button();
}
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const store = common_vendor.useStore();
    console.log("store", store);
    const form = common_vendor.reactive({
      name: "\u5F20\u65E0",
      password: "12345678",
      enter_year: "2018\u7B2C3\u5C4A",
      phone: 13312345678
    });
    const gradePickerShow = common_vendor.ref(false);
    const changeGrade = (e) => {
      form.enter_year = e.detail.value;
      gradePickerShow.value = false;
    };
    const submitRegister = () => {
      const params = {
        ...form,
        enter_year: parseInt(form.enter_year),
        phone: parseInt(form.phone)
      };
      common_api.api.commonApi.register(params).then((res) => {
        common_vendor.index.navigateBack({
          success: () => {
            common_utils.utils.useToast("\u7533\u8BF7\u6210\u529F", { icon: "success" });
          }
        });
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => form.name = $event.detail),
        b: common_vendor.p({
          value: form.name,
          label: "\u59D3\u540D",
          leftIcon: "/static/icon-account.png",
          placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
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
        e: common_vendor.o(($event) => gradePickerShow.value = true),
        f: common_vendor.p({
          value: form.enter_year !== "" ? form.enter_year : "\u8BF7\u9009\u62E9\u5E74\u7EA7",
          title: "\u5E74\u7EA7",
          icon: "/static/icon-pw.png",
          titleWidth: "2rem"
        }),
        g: common_vendor.o(changeGrade),
        h: common_vendor.o(($event) => gradePickerShow.value = false),
        i: common_vendor.p({
          showToolbar: true,
          columns: common_vendor.unref(store).state.gradeOptions
        }),
        j: common_vendor.o(($event) => gradePickerShow.value = false),
        k: common_vendor.p({
          show: gradePickerShow.value,
          position: "bottom",
          safeAreaInsetBottom: true,
          visibleItemCount: 6,
          round: true
        }),
        l: common_vendor.o(($event) => form.phone = $event.detail),
        m: common_vendor.p({
          value: form.phone,
          label: "\u7535\u8BDD",
          leftIcon: "/static/icon-pw.png",
          placeholder: "\u8BF7\u8F93\u5165\u7535\u8BDD",
          border: false,
          titleWidth: "2rem"
        }),
        n: common_vendor.o(submitRegister),
        o: common_vendor.p({
          ["bg-color"]: "#FF5733"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-97bb96ad"], ["__file", "D:/CODE/dongli/address-book/src/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
