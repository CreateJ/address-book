"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_picker = common_vendor.resolveComponent("van-picker");
  (_component_van_field + _component_van_picker)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const name = common_vendor.ref("");
    common_vendor.onLoad(() => {
      console.log("onload");
    });
    const changeSearchText = (e) => {
      getList(e);
    };
    const getList = common_vendor.lodash.exports.debounce((e) => {
      console.log("\u83B7\u53D6list", "name", e.detail);
    }, 500);
    const numberList = "\u5341\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D".split("");
    const transNumber = (year) => {
      if (year <= 2013)
        return "";
      const left = year - 2013;
      let res = "";
      if (left < 10) {
        res = numberList[left];
      } else if (left === 10) {
        res = numberList[0];
      } else if (left % 10 === 0) {
        res = numberList[left / 10] + numberList[0];
      } else if (left < 20) {
        const tempArr = (left + "").split("");
        res = `${numberList[0]}${numberList[tempArr[1]]}`;
      } else {
        const tempArr = (left + "").split("");
        res = `${numberList[tempArr[0]]}${numberList[0]}${numberList[tempArr[1]]}`;
      }
      return res;
    };
    let gradeOptions = [];
    const generateGradeOptions = () => {
      console.log(common_vendor.dayjs().year());
      const currentYear = common_vendor.dayjs().year();
      for (let i = 2014; i <= currentYear; i++) {
        gradeOptions.push(`${i}\u5E74\u7B2C${transNumber(i)}\u5C4A`);
      }
      console.log(gradeOptions);
    };
    generateGradeOptions();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeSearchText),
        b: common_vendor.p({
          titleWidth: "40",
          label: "\u641C\u7D22",
          value: name.value,
          placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u59D3\u540D"
        }),
        c: common_vendor.p({
          visibleItemCount: 3,
          columns: common_vendor.unref(gradeOptions)
        }),
        d: common_vendor.f(20, (user, keyIndex, i0) => {
          return {
            a: keyIndex
          };
        }),
        e: common_assets._imports_0
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "D:/CODE/dongli/address-book/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
