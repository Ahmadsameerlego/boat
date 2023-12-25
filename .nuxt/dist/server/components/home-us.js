exports.ids = [30];
exports.modules = {

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 30525.34135fb.png";

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 30477.83f3a8b.png";

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 30564.30f931d.png";

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Us.vue?vue&type=template&id=b542820c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"who us section-pad\"><div class=\"container\"><div class=\"col-md-10 col-12 margin-auto\"><p class=\"text-center whous-p mt-4\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.whous) + "\n      ") + "</p> <div class=\"row align-items-center mt-5\"><div class=\"col-md-6 mb-4 mt-4\"><div class=\"col-box\"><img" + _vm._ssrAttr("src", __webpack_require__(304)) + " alt></div></div> <div class=\"col-md-6 mb-3 mt-4\"><div class=\"col-box\"><h2 class=\"text-center font-bold mb-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('enjoy')) + " ") + "</h2></div></div> <div class=\"d-flex justify-content-between w-100\"><p class=\"col-box-p\">" + _vm._ssrEscape("  " + _vm._s(_vm.$t('reserve')) + "  ") + "</p> <p class=\"col-box-p\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('providerUS')) + " ") + "</p> <p class=\"col-box-p\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('vacation')) + " ") + "</p></div> <div class=\"col-md-6 mb-3 mt-4\"><div class=\"col-box\"><h2 class=\"text-center font-bold mb-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('providerUS')) + " ") + "</h2></div></div> <div class=\"col-md-6 mb-4 mt-4\"><div class=\"col-box\"><img" + _vm._ssrAttr("src", __webpack_require__(305)) + " alt></div></div> <div class=\"col-md-6 mb-4 mt-4\"><div class=\"col-box\"><img" + _vm._ssrAttr("src", __webpack_require__(306)) + " alt></div></div> <div class=\"col-md-6 mb-3 mt-4\"><div class=\"col-box\"><h2 class=\"text-center mb-3 font-bold\">" + _vm._ssrEscape(_vm._s(_vm.$t('enjoy'))) + "</h2></div></div></div></div></div></div> "), _c('homeDownloadApp')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/Us.vue?vue&type=template&id=b542820c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Us.vue?vue&type=script&lang=js&
/* harmony default export */ var Usvue_type_script_lang_js_ = ({
  data() {
    return {
      whous: ''
    };
  },
  methods: {
    async getWhoUs() {
      await this.$axios.$get('/whous').then(res => {
        this.whous = res.data.whous;
      });
    }
  },
  mounted() {
    this.getWhoUs();
  }
});
// CONCATENATED MODULE: ./components/home/Us.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Usvue_type_script_lang_js_ = (Usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/Us.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "238275e3"
  
)

/* harmony default export */ var Us = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-us.js.map