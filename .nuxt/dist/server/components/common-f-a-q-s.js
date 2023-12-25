exports.ids = [18];
exports.modules = {

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("1e261c35", content, true, context)
};

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQS_vue_vue_type_style_index_0_id_2818f9d6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQS_vue_vue_type_style_index_0_id_2818f9d6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQS_vue_vue_type_style_index_0_id_2818f9d6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQS_vue_vue_type_style_index_0_id_2818f9d6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQS_vue_vue_type_style_index_0_id_2818f9d6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-info[data-v-2818f9d6]{background-color:#111b5a;border:1px solid #111b5a;color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/FAQS.vue?vue&type=template&id=2818f9d6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "faqs"
    }
  }, [_vm._ssrNode("<div class=\"container\" data-v-2818f9d6>", "</div>", [_vm._ssrNode("<div role=\"tablist\" class=\"accordion\" data-v-2818f9d6>", "</div>", _vm._l(_vm.faqs, function (faq) {
    return _c('b-card', {
      key: faq.id,
      staticClass: "mb-1",
      attrs: {
        "no-body": ""
      }
    }, [_c('b-card-header', {
      staticClass: "p-1",
      attrs: {
        "header-tag": "header",
        "role": "tab"
      }
    }, [_c('b-button', {
      directives: [{
        name: "b-toggle",
        rawName: "v-b-toggle",
        value: `accordion-${faq.id}`,
        expression: "`accordion-${faq.id}`"
      }],
      staticClass: "text-right",
      attrs: {
        "block": "",
        "variant": "info"
      }
    }, [_vm._v(" " + _vm._s(faq.question) + " ")])], 1), _vm._v(" "), _c('b-collapse', {
      attrs: {
        "id": 'accordion-' + faq.id,
        "visible": "",
        "accordion": "my-accordion",
        "role": "tabpanel"
      }
    }, [_c('b-card-body', [_c('b-card-text', [_vm._v("\n                  " + _vm._s(faq.answer) + "\n              ")])], 1)], 1)], 1);
  }), 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/FAQS.vue?vue&type=template&id=2818f9d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/FAQS.vue?vue&type=script&lang=js&
/* harmony default export */ var FAQSvue_type_script_lang_js_ = ({
  data() {
    return {
      text: "lorem ",
      faqs: []
    };
  },
  methods: {
    async getFaqs() {
      await this.$axios.get('/faqs').then(res => {
        this.faqs = res.data.data.faqs;
        console.log(res.data.data);
      });
    }
  },
  mounted() {
    this.getFaqs();
  }
});
// CONCATENATED MODULE: ./components/common/FAQS.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_FAQSvue_type_script_lang_js_ = (FAQSvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/common/FAQS.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(284)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_FAQSvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2818f9d6",
  "6d6aac94"
  
)

/* harmony default export */ var FAQS = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-f-a-q-s.js.map