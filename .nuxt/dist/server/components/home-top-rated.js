exports.ids = [28];
exports.modules = {

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/185644495_1667380803456791_1968050560740665054_n.9bd80cd.jpg";

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("cd13bda0", content, true, context)
};

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topRated_vue_vue_type_style_index_0_id_7dca3134_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topRated_vue_vue_type_style_index_0_id_7dca3134_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topRated_vue_vue_type_style_index_0_id_7dca3134_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topRated_vue_vue_type_style_index_0_id_7dca3134_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topRated_vue_vue_type_style_index_0_id_7dca3134_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-box-sh{margin:0 10px}.VueCarousel-dot.VueCarousel-dot--active{background-color:#111b5a!important}.VueCarousel-dot,.VueCarousel-dot.VueCarousel-dot--active{height:15px!important;width:15px!important}.slide{height:100%;width:100%}.VueCarousel-inner{direction:ltr}.VueCarousel-slide{flex-basis:auto!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/topRated.vue?vue&type=template&id=7dca3134&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c('div', {
    staticClass: "best-sells section-pad"
  }, [_c('div', {}, [_c('h5', {
    staticClass: "main-title color-main mb-4 font600",
    staticStyle: {
      "margin": "0 100px"
    }
  }, [_vm._v(_vm._s(_vm.$t('topRated')) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "slider2"
  }, [_c('client-only', [_c('carousel', _vm._b({}, 'carousel', _vm.options, false), _vm._l(_vm.products, function (product) {
    return _c('slide', {
      key: product.id,
      staticClass: "img-wrapper"
    }, [_c('div', {
      staticClass: "slide item"
    }, [_c('div', {
      staticClass: "main-box-sh"
    }, [_c('div', {
      staticClass: "flex-groupme"
    }, [_c('img', {
      staticClass: "person-im",
      attrs: {
        "src": product.image,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "text-center mt-3 mb-3"
    }, [_vm._v(" " + _vm._s(product.name) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "flex-rairing mt-3 mb-4"
    }, [_c('div', {
      staticClass: "light-box"
    }, [_c('i', {
      staticClass: "fa-solid fa-star star-yellow"
    }), _vm._v("\n                              " + _vm._s(product.rate) + "\n                          ")]), _vm._v(" "), _c('div', {
      staticClass: "light-box"
    }, [_c('i', {
      staticClass: "fa-solid fa-paper-plane color-main"
    }), _vm._v("\n                              " + _vm._s(product.address) + "\n                          ")]), _vm._v(" "), _c('div', {
      staticClass: "light-box"
    }, [_vm._v(" " + _vm._s(product.display_price) + " " + _vm._s(_vm.$t('priceUnit')))])]), _vm._v(" "), _c('nuxt-link', {
      staticClass: "btn-main up big-100",
      attrs: {
        "to": '/client/providers/' + product.provider_id
      }
    }, [_vm._v(" " + _vm._s(_vm.$t('servicesProvider')))])], 1)])]);
  }), 1)], 1)], 1)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/topRated.vue?vue&type=template&id=7dca3134&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/topRated.vue?vue&type=script&lang=js&
/* harmony default export */ var topRatedvue_type_script_lang_js_ = ({
  data() {
    return {
      src1: __webpack_require__(134),
      products: [],
      lat: '',
      lng: '',
      options: {
        perPage: 4,
        paginationEnabled: true,
        autoplay: true,
        speed: 2200,
        autoplayDirection: 'backward',
        centerMode: true
      }
    };
  },
  methods: {
    async getAllProducts() {
      await this.$axios.$get(`/all-products?lat=${this.lat}&long=${this.lng}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.products = res.data.products;
      });
    },
    async notLoggedGetAllProducts() {
      await this.$axios.$get(`/all-products`).then(res => {
        this.products = res.data.products;
      });
    }
  },
  beforeMount() {
    if (localStorage.getItem('user')) {
      let user = localStorage.getItem('user');
      this.lat = JSON.parse(user).lat;
      this.lng = JSON.parse(user).long;
    }
  },
  mounted() {
    if (localStorage.getItem('user')) {
      this.getAllProducts();
    } else {
      this.notLoggedGetAllProducts();
    }
  }
});
// CONCATENATED MODULE: ./components/home/topRated.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_topRatedvue_type_script_lang_js_ = (topRatedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/topRated.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(309)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_topRatedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f5574fd8"
  
)

/* harmony default export */ var topRated = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-top-rated.js.map