exports.ids = [68];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 70332.9444af4.png";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 30488.a6683be.png";

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2619bd1a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"img-background\"><img" + _vm._ssrAttr("src", _vm.bg) + " alt></div> "), _vm._ssrNode("<div class=\"login\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"col-md-5 col-12 margin-auto p-0\">", "</div>", [_vm._ssrNode("<div class=\"login-box mt-3\">", "</div>", [_vm._ssrNode("<div class=\"login-img text-center mt-2\"><img" + _vm._ssrAttr("src", _vm.src) + " alt></div> <div class=\"title-login text-center mt-3\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('chooseLogin')) + "\n          ") + "</div> <div class=\"under-title mb-3 text-center mt-2\">" + _vm._ssrEscape("\n          \n            " + _vm._s(_vm.$t('chooseLoginComplete')) + "\n          ") + "</div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-7 col-12 margin-auto\">", "</div>", [_vm._ssrNode("<div class=\"mt-3\">", "</div>", [_c('nuxt-link', {
    staticClass: "main-btn up mb-4",
    attrs: {
      "to": "/clientLogin"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t('clientLogin')) + "\n                ")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "main-btn light-bg mb-4",
    attrs: {
      "to": "/providerLogin"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('providerLogin')) + "\n                  ")])], 2)])])], 2)])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2619bd1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  data() {
    return {
      src: __webpack_require__(124),
      bg: __webpack_require__(128),
      loader: true
    };
  },
  mounted() {
    this.loader = false;
    if (typeof localStorage !== 'undefined') {
      const providerLoggedIn = localStorage.getItem('delegateLoggedIn');
      if (providerLoggedIn === 'true') {
        console.log('Value exists:', providerLoggedIn);
        this.$router.push('/provider/HomePage');
      }
      const userLoggedIn = localStorage.getItem('userLoggedIn');
      if (userLoggedIn === 'true') {
        console.log('Value exists:', userLoggedIn);
        this.$router.push('/client/HomePage');
      }
    } else {
      console.log('localStorage is not defined');
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "72db3e6e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map