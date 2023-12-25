exports.ids = [29];
exports.modules = {

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 82427.0deeba0.png";

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("03f4b1d3", content, true, context)
};

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_travelTypes_vue_vue_type_style_index_0_id_4cabe523_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(252);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_travelTypes_vue_vue_type_style_index_0_id_4cabe523_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_travelTypes_vue_vue_type_style_index_0_id_4cabe523_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_travelTypes_vue_vue_type_style_index_0_id_4cabe523_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_travelTypes_vue_vue_type_style_index_0_id_4cabe523_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".notFound{background:#a1a1a1;border-radius:3px;height:50px;padding:10px 7px;width:100%}.notFound p,.notFound svg{color:#fff;margin:0 10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/travelTypes.vue?vue&type=template&id=4cabe523&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "trips section-pad"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"flex-groupme\"><h5 class=\"main-title color-main font600 mb-5\">" + _vm._ssrEscape(_vm._s(_vm.$t('travelTrips')) + " ") + "</h5></div> "), _vm._ssrNode("<div class=\"col-md-10 col-12 margin-auto\">", "</div>", [_vm.trip_types.length > 0 ? _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.trip_types, function (type) {
    return _vm._ssrNode("<div class=\"col-md-6 col-12 mb-4\">", "</div>", [_c('nuxt-link', {
      staticClass: "trip-box rela-p",
      attrs: {
        "to": '/client/travels/' + type.id
      }
    }, [_c('img', {
      attrs: {
        "src": type.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "abs-text"
    }, [_vm._v(" " + _vm._s(type.name) + " ")])])], 1);
  }), 0) : _vm._ssrNode("<div class=\"notFound d-flex align-items-center\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'circle-info']
    }
  }), _vm._ssrNode(" <p>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('noTravel'))) + "</p>")], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/travelTypes.vue?vue&type=template&id=4cabe523&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/travelTypes.vue?vue&type=script&lang=js&
/* harmony default export */ var travelTypesvue_type_script_lang_js_ = ({
  data() {
    return {
      src1: __webpack_require__(174),
      src2: __webpack_require__(174),
      src3: __webpack_require__(174)
    };
  },
  props: {
    trip_types: Array
  }
});
// CONCATENATED MODULE: ./components/home/travelTypes.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_travelTypesvue_type_script_lang_js_ = (travelTypesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/travelTypes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(311)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_travelTypesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "57770baa"
  
)

/* harmony default export */ var travelTypes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-travel-types.js.map