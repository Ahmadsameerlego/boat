exports.ids = [27];
exports.modules = {

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("607e5a6c", content, true, context)
};

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchBar_vue_vue_type_style_index_0_id_6127cfb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchBar_vue_vue_type_style_index_0_id_6127cfb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchBar_vue_vue_type_style_index_0_id_6127cfb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchBar_vue_vue_type_style_index_0_id_6127cfb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchBar_vue_vue_type_style_index_0_id_6127cfb7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".filteredSearch{background:#fff;border:1px solid #ccc;border-radius:4px;margin-top:10px;padding:10px 5px}.filteredSearch li{color:#333;cursor:pointer;padding:5px 0}.filteredSearch li:not(:last-of-type){border-bottom:1px solid #dfdddd}.filteredSearch .desc{color:#0e8686;font-size:13px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/searchBar.vue?vue&type=template&id=6127cfb7&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm.client ? _vm._ssrNode("<div class=\"col-md-8 col-12 margin-auto mt-5\">", "</div>", [_vm._ssrNode("<form action>", "</form>", [_vm._ssrNode("<div class=\"header-inp-search\">", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('searchHome')) + _vm._ssrAttr("value", _vm.searchBar) + " class=\"inp-search\"> "), _vm._ssrNode("<button class=\"f-inp-icon color-main\">", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'magnifying-glass']
    }
  })], 1)], 2)]), _vm._ssrNode(" " + (_vm.showList ? "<div class=\"filteredSearch\">" + (_vm.searchItems.length > 0 ? "<ul>" + _vm._ssrList(_vm.searchItems, function (ad) {
    return "<li class=\"adName\">" + _vm._ssrEscape(" " + _vm._s(ad.name) + " ") + "</li>";
  }) + "</ul>" : "<ul><li>لا توجد رحلات</li></ul>") + "</div>" : "<!---->"))], 2) : _vm.provider ? _vm._ssrNode("<div class=\"col-md-8 col-12 margin-auto mt-5\">", "</div>", [_vm._ssrNode("<form action>", "</form>", [_vm._ssrNode("<div class=\"header-inp-search\">", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('searchProvider')) + _vm._ssrAttr("value", _vm.searchBar2) + " class=\"inp-search\"> "), _vm._ssrNode("<button class=\"f-inp-icon\">", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'magnifying-glass']
    }
  })], 1)], 2)]), _vm._ssrNode(" " + (_vm.showList2 ? "<div class=\"filteredSearch\">" + (_vm.searchItems2.length > 0 ? "<ul>" + _vm._ssrList(_vm.searchItems2, function (ad) {
    return "<li class=\"adName\">" + _vm._ssrEscape("\n                     " + _vm._s(ad.user_name) + " (" + _vm._s(ad.name) + ") \n                ") + "</li>";
  }) + "</ul>" : "<ul><li>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('noOrders')) + " ") + "</li></ul>") + "</div>" : "<!---->"))], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/searchBar.vue?vue&type=template&id=6127cfb7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/searchBar.vue?vue&type=script&lang=js&
/* harmony default export */ var searchBarvue_type_script_lang_js_ = ({
  data() {
    return {
      searchBar: null,
      searchItems: [],
      products: [],
      showList: false,
      searchBar2: null,
      searchItems2: [],
      products2: [],
      showList2: false,
      categories: {},
      provider: false,
      client: false
    };
  },
  methods: {
    // go to add 
    goToAd(id, name) {
      this.$router.push(`/client/travels/${id}`);
      this.searchBar = name;
      this.showList = false;
    },
    // go to add 
    goToAd2(id, name) {
      this.$router.push(`/provider/orders/${id}`);
      this.searchBar = name;
      this.showList = false;
    },
    // search  client
    async getProduct() {
      await this.$axios.$get(`/home?search=${this.searchBar}`).then(res => {
        if (res.key == "success") {
          if (this.searchBar != '') {
            this.showList = true;
          }
          this.searchItems = res.data[1].trip_types;
          console.log(this.searchItems);
        }
      });
    },
    // search provider 
    async getProduct2() {
      await this.$axios.$get(`/delegate-near-waiting-orders?search=${this.searchBar2}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == "success") {
          if (this.searchBar2 != '') {
            this.showList2 = true;
          }
          this.searchItems2 = res.data.orders;
          console.log(this.searchItems2);
        }
      });
    }
  },
  watch: {
    searchBar() {
      if (this.searchBar == '') {
        this.showList = false;
      }
    },
    searchBar2() {
      if (this.searchBar2 == '') {
        this.showList2 = false;
      }
    }
  },
  mounted() {
    // client show 
    if (this.$route.fullPath.includes('client')) {
      this.client = true;
    } else if (this.$route.fullPath.includes('provider')) {
      this.provider = true;
    }
  }
});
// CONCATENATED MODULE: ./components/home/searchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_searchBarvue_type_script_lang_js_ = (searchBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/searchBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(307)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_searchBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "72eafb94"
  
)

/* harmony default export */ var searchBar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-search-bar.js.map