exports.ids = [1];
exports.modules = {

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(279);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("54f313b2", content, true, context)
};

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addFeature_vue_vue_type_style_index_0_id_1cfa7be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addFeature_vue_vue_type_style_index_0_id_1cfa7be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addFeature_vue_vue_type_style_index_0_id_1cfa7be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addFeature_vue_vue_type_style_index_0_id_1cfa7be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addFeature_vue_vue_type_style_index_0_id_1cfa7be0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-footer[data-v-1cfa7be0]{display:none!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/boats/addFeature.vue?vue&type=template&id=1cfa7be0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm.freeAdds ? _vm._ssrNode("<section data-v-1cfa7be0>", "</section>", [_vm._ssrNode("<h5 class=\"mt-4 text-center\" data-v-1cfa7be0>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addFreeFeature')) + " ") + "</h5> "), _vm._ssrNode("<div class=\"p-4\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<form data-v-1cfa7be0>", "</form>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-1cfa7be0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('featureArabic')) + "\n                ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('arabicPlace')) + " name=\"name_ar\" required=\"required\"" + _vm._ssrAttr("value", _vm.name_ar) + " class=\"inp-spe-tele\" data-v-1cfa7be0> "), _vm._ssrNode("<div class=\"icon-float\" data-v-1cfa7be0>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-1cfa7be0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('featureEn')) + "\n                ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('enPlace')) + " name=\"name_en\" required=\"required\"" + _vm._ssrAttr("value", _vm.name_en) + " class=\"inp-spe-tele\" data-v-1cfa7be0> "), _vm._ssrNode("<div class=\"icon-float\" data-v-1cfa7be0>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"right-just-flex mt-3 d-flex justify-content-end\" data-v-1cfa7be0><button class=\"btn-main up lg\" data-v-1cfa7be0>" + _vm._ssrEscape(_vm._s(_vm.$t('addFeat'))) + "</button></div> "), _vm._ssrNode("<div class=\"attrs mt-3\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<div class=\"attrs-head\" data-v-1cfa7be0>" + _vm._ssrEscape(_vm._s(_vm.$t('addedFeats'))) + "</div> "), _vm.free.length > 0 ? _vm._ssrNode("<section data-v-1cfa7be0>", "</section>", _vm._l(_vm.free, function (add) {
    return _vm._ssrNode("<div class=\"attr-loop d-flex justify-content-between align-items-center\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<div class=\"attr-name\" data-v-1cfa7be0>" + _vm._ssrEscape(" " + _vm._s(add.name_ar) + " ") + "</div> "), _vm._ssrNode("<button type=\"button\" class=\"attr-remove text-danger\" data-v-1cfa7be0>", "</button>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1)], 2);
  }), 0) : _vm._ssrNode("<section data-v-1cfa7be0><div class=\"d-flex justify-content-center align-items-center\" data-v-1cfa7be0>" + _vm._ssrEscape("  " + _vm._s(_vm.$t('addFeatureShow')) + " ") + "</div></section>")], 2), _vm._ssrNode(" <div class=\"flex-groupme\" data-v-1cfa7be0><button type=\"button\" class=\"main-btn up mt-4 wid-85\" data-v-1cfa7be0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('next')) + "\n                ") + "</button></div>")], 2)])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.paidAdds ? _vm._ssrNode("<section data-v-1cfa7be0>", "</section>", [_vm._ssrNode("<h5 class=\"mt-4 text-center\" data-v-1cfa7be0>" + _vm._ssrEscape(_vm._s(_vm.$t('addPayFeat'))) + "</h5> "), _vm._ssrNode("<div class=\"p-4\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<form data-v-1cfa7be0>", "</form>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-1cfa7be0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('featureArabic')) + "\n                ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('arabicPlace')) + " name=\"paid_name_ar\" required=\"required\"" + _vm._ssrAttr("value", _vm.paid_name_ar) + " class=\"inp-spe-tele\" data-v-1cfa7be0> "), _vm._ssrNode("<div class=\"icon-float\" data-v-1cfa7be0>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-1cfa7be0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('featureEn')) + "\n                ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('enPlace')) + " name=\"paid_name_en\" required=\"required\"" + _vm._ssrAttr("value", _vm.paid_name_en) + " class=\"inp-spe-tele\" data-v-1cfa7be0> "), _vm._ssrNode("<div class=\"icon-float\" data-v-1cfa7be0>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-1cfa7be0>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('featurePrice')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('pricePlace1')) + " name=\"price\" required=\"required\"" + _vm._ssrAttr("value", _vm.price) + " class=\"inp-spe-tele\" data-v-1cfa7be0> "), _vm._ssrNode("<div class=\"icon-float\" data-v-1cfa7be0>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"right-just-flex mt-3 d-flex justify-content-end\" data-v-1cfa7be0><button class=\"btn-main up lg\" data-v-1cfa7be0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('addFeat')) + "\n                ") + "</button></div> "), _vm._ssrNode("<div class=\"attrs mt-3\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<div class=\"attrs-head\" data-v-1cfa7be0>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeats')) + " ") + "</div> "), _vm.paids.length > 0 ? _vm._ssrNode("<section data-v-1cfa7be0>", "</section>", _vm._l(_vm.paids, function (paid) {
    return _vm._ssrNode("<div class=\"attr-loop d-flex justify-content-between align-items\" data-v-1cfa7be0>", "</div>", [_vm._ssrNode("<div class=\"attr-name\" data-v-1cfa7be0>" + _vm._ssrEscape(" " + _vm._s(paid.name_ar) + " ") + "</div> <div class=\"attr-price color-main\" data-v-1cfa7be0>" + _vm._ssrEscape(" " + _vm._s(paid.price) + " ر.س ") + "</div> "), _vm._ssrNode("<button type=\"button\" class=\"attr-remove text-danger\" data-v-1cfa7be0>", "</button>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1)], 2);
  }), 0) : _vm._ssrNode("<section data-v-1cfa7be0><div class=\"attr-name d-flex justify-content-center\" data-v-1cfa7be0>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addFeatureShow')) + " ") + "</div></section>")], 2), _vm._ssrNode(" <div class=\"flex-groupme\" data-v-1cfa7be0><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.disabled2) + " class=\"main-btn up mt-4 wid-85\" data-v-1cfa7be0>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('next')) + "\n                ") + "</button></div>")], 2)])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.offers ? _vm._ssrNode("<section data-v-1cfa7be0>", "</section>", [_c('boatsOffers')], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/boats/addFeature.vue?vue&type=template&id=1cfa7be0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/boats/addFeature.vue?vue&type=script&lang=js&
/* harmony default export */ var addFeaturevue_type_script_lang_js_ = ({
  data() {
    return {
      name_ar: '',
      name_en: '',
      paid_name_ar: '',
      paid_name_en: '',
      free_additives: [],
      free: [],
      paids: [],
      // default => false 
      paidAdds: false,
      // default => true 
      freeAdds: true,
      // default => false 
      offers: false,
      price: null,
      disabled2: false,
      disabled: false
    };
  },
  watch: {},
  methods: {
    // add features 
    AppendFeatures() {
      this.free.push({
        "name_ar": this.name_ar,
        "name_en": this.name_en
      });
      this.name_ar = "";
      this.name_en = "";
    },
    AppendPaidFeatures() {
      this.paids.push({
        "name_ar": this.paid_name_ar,
        "name_en": this.paid_name_en,
        "price": this.price
      });
      this.paid_name_ar = "";
      this.paid_name_en = "";
      this.price = null;
    },
    // remove feature 
    removeItem(name) {
      this.free = this.free.filter(item => item.name_ar !== name);
    },
    removePaidItem(price) {
      this.paids = this.paids.filter(item => item.price !== price);
    },
    // send feature 
    async addFreeFeature() {
      this.disabled = true;
      const fd = new FormData();
      fd.append('product_id', this.$route.params.id);
      fd.append('additives', JSON.stringify(this.free));
      await this.$axios.$post('/post-free-additives', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal("", `${res.msg}`, "success");
          this.name_ar = '';
          this.name_en = '';

          // document.getElementById('modal-2').style.display = 'none';
          // // document.getElementById('modal-3').style.display = 'block';
          // document.getElementById('modal-2___BV_modal_backdrop_').style.display = 'none';

          setTimeout(() => {
            this.$emit('getProduct');
          }, 2000);
          this.paidAdds = true;
          this.freeAdds = false;
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
        this.disabled = false;
      });
    },
    // send paid feature
    async addPaifFreeFeature() {
      this.disabled = true;
      const fd = new FormData();
      fd.append('product_id', this.$route.params.id);
      fd.append('additives', JSON.stringify(this.paids));
      await this.$axios.$post('/post-additives', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal("", `${res.msg}`, "success");
          this.name_ar = '';
          this.name_en = '';

          // document.getElementById('modal-2').style.display = 'none';
          // // document.getElementById('modal-3').style.display = 'block';
          // document.getElementById('modal-2___BV_modal_backdrop_').style.display = 'none';

          setTimeout(() => {
            this.$emit('getProduct');
          }, 2000);
          this.paidAdds = false;
          this.offers = true;
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
        this.disabled2 = false;
      });
    },
    // get single product 
    async getSingleProduct() {
      await this.$axios.$get(`/single-product?product_id=${this.$route.params.id}`).then(res => {
        this.free_additives = res.data.product.free_additives;
        console.log(this.free_additives);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/boats/addFeature.vue?vue&type=script&lang=js&
 /* harmony default export */ var boats_addFeaturevue_type_script_lang_js_ = (addFeaturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/boats/addFeature.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(278)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  boats_addFeaturevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1cfa7be0",
  "48feadcc"
  
)

/* harmony default export */ var addFeature = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=boats-add-feature.js.map