"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const common_api = require("../../common/api.js");
require("../../common/request.js");
require("../../common/constant.js");
require("../../common/utils.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_picker = common_vendor.resolveComponent("van-picker");
  (_component_van_field + _component_van_picker)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    console.log("store", store);
    const table = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      this.$store.dispatch("getMyInfo");
    });
    common_vendor.onShow(() => {
      reset();
    });
    const reset = () => {
      params.page = 0;
      table.value = [];
      query();
    };
    const params = {
      enter_year: 2014,
      page: 0,
      page_size: 10,
      name: ""
    };
    const query = () => {
      params.page++;
      common_api.api.commonApi.getUserList(params).then((res) => {
        if (res.user_list && res.user_list.length) {
          table.value.push(...res.user_list);
        }
      });
    };
    const changeYear = (e) => {
      params.enter_year = parseInt(e.detail.value);
      reset();
    };
    const changeSearchText = (e) => {
      params.name = e.detail;
      reset();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeSearchText),
        b: common_vendor.p({
          titleWidth: "40",
          label: "\u641C\u7D22",
          value: params.name,
          placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u59D3\u540D",
          clearable: true
        }),
        c: common_vendor.o(changeYear),
        d: common_vendor.p({
          visibleItemCount: 3,
          columns: common_vendor.unref(store).state.gradeOptions
        }),
        e: common_vendor.f(table.value, (user, k0, i0) => {
          return {
            a: common_vendor.t(user.name),
            b: user.id
          };
        }),
        f: common_assets._imports_0,
        g: common_vendor.o(query)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "D:/CODE/dongli/address-book/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
