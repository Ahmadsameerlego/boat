exports.ids = [20];
exports.modules = {

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/terms.vue?vue&type=template&id=f3e9b412&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "mt-4 mb-4 mx-5"
  }, [_vm._ssrNode("<h5 class=\"main-title color-main font600\">" + _vm._ssrEscape(_vm._s(_vm.$t('Brief')) + " ") + "</h5> <p>" + _vm._s(_vm.terms) + "</p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/terms.vue?vue&type=template&id=f3e9b412&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/terms.vue?vue&type=script&lang=js&
/* harmony default export */ var termsvue_type_script_lang_js_ = ({
  data() {
    return {
      terms: ''
    };
  },
  methods: {
    // get whous 
    async getTerms() {
      await this.$axios.$get('/terms-web').then(res => {
        this.terms = res.data.terms;
      });
    }
  },
  mounted() {
    this.getTerms();
  }
});
// CONCATENATED MODULE: ./components/common/terms.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_termsvue_type_script_lang_js_ = (termsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/common/terms.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_termsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "bc8fd984"
  
)

/* harmony default export */ var terms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-terms.js.map