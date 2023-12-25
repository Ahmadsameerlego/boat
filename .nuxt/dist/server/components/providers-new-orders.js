exports.ids = [34];
exports.modules = {

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("c9d6bc22", content, true, context)
};

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrders_vue_vue_type_style_index_0_id_7b85d487_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrders_vue_vue_type_style_index_0_id_7b85d487_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrders_vue_vue_type_style_index_0_id_7b85d487_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrders_vue_vue_type_style_index_0_id_7b85d487_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrders_vue_vue_type_style_index_0_id_7b85d487_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".created_at[data-v-7b85d487]{font-size:14px;left:10px;position:absolute;top:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/providers/NewOrders.vue?vue&type=template&id=7b85d487&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "newOrders"
  }, [_vm._ssrNode("<div class=\"container\" data-v-7b85d487>", "</div>", [_vm._ssrNode("<h5 class=\"main-title color-main font600 mb-3\" data-v-7b85d487>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('newOrders')) + " ") + "</h5> "), _vm.products.length > 0 ? _vm._ssrNode("<div class=\"row\" data-v-7b85d487>", "</div>", _vm._l(_vm.products, function (product) {
    return _vm._ssrNode("<div class=\"col-md-4 mb-2\" data-v-7b85d487>", "</div>", [_vm._ssrNode("<div class=\"main-box-sh position-relative\" data-v-7b85d487>", "</div>", [_vm._ssrNode("<div class=\"flex-groupme\" data-v-7b85d487><img" + _vm._ssrAttr("src", product.image) + " alt class=\"person-im\" data-v-7b85d487></div> <div class=\"text-center mt-3\" data-v-7b85d487>" + _vm._ssrEscape(" " + _vm._s(product.user_name) + " ") + "</div> <h6 class=\"text-center\" data-v-7b85d487>" + _vm._ssrEscape(" رقم الطلب : # " + _vm._s(product.id) + " ") + "</h6> " + (product.status == 'pending' ? "<h6 class=\"text-center mb-3\" data-v-7b85d487> الحالة : <span class=\"color-main\" data-v-7b85d487>في انتظار قبول الطلب</span></h6>" : "<!---->") + " " + (product.status == 'inprogress' ? "<h6 class=\"text-center mb-3\" data-v-7b85d487> الحالة : <span class=\"color-main\" data-v-7b85d487>جاري العمل عليه</span></h6>" : "<!---->") + " " + (product.status == 'canceled' ? "<h6 class=\"text-center mb-3\" data-v-7b85d487> الحالة : <span class=\"color-main\" data-v-7b85d487>ملغى</span></h6>" : "<!---->") + " " + (product.status == 'finished' ? "<h6 class=\"text-center mb-3\" data-v-7b85d487> الحالة : <span class=\"color-main\" data-v-7b85d487>منتهي</span></h6>" : "<!---->") + " "), _c('nuxt-link', {
      staticClass: "btn-main up big-100",
      attrs: {
        "to": '/provider/orders/' + product.id
      }
    }, [_vm._v("الاطلاع على الطلب")]), _vm._ssrNode(" <span class=\"created_at text-muted\" data-v-7b85d487>" + _vm._ssrEscape("\n                      " + _vm._s(product.created_at) + "\n                  ") + "</span>")], 2)]);
  }), 0) : _vm._ssrNode("<div class=\"notFound d-flex align-items-center\" data-v-7b85d487>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'circle-info']
    }
  }), _vm._ssrNode(" <p data-v-7b85d487>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('noNewOrders')) + " ") + "</p>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/providers/NewOrders.vue?vue&type=template&id=7b85d487&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/providers/NewOrders.vue?vue&type=script&lang=js&
/* harmony default export */ var NewOrdersvue_type_script_lang_js_ = ({
  data() {
    return {
      products: []
    };
  },
  methods: {
    async getNewOrders() {
      await this.$axios.$get(`/delegate-near-waiting-orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.products = res.data.orders;
      });
    }
  },
  mounted() {
    this.getNewOrders();
  }
});
// CONCATENATED MODULE: ./components/providers/NewOrders.vue?vue&type=script&lang=js&
 /* harmony default export */ var providers_NewOrdersvue_type_script_lang_js_ = (NewOrdersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/providers/NewOrders.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(316)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  providers_NewOrdersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7b85d487",
  "14c33a66"
  
)

/* harmony default export */ var NewOrders = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=providers-new-orders.js.map