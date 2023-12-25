exports.ids = [17];
exports.modules = {

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(287);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("5a39379a", content, true, context)
};

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactForm_vue_vue_type_style_index_0_id_6229eaa7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactForm_vue_vue_type_style_index_0_id_6229eaa7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactForm_vue_vue_type_style_index_0_id_6229eaa7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactForm_vue_vue_type_style_index_0_id_6229eaa7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactForm_vue_vue_type_style_index_0_id_6229eaa7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".selected-option[data-v-6229eaa7]{align-items:center;border:1px solid #ccc;border-radius:5px;cursor:pointer;display:flex;padding:12px}.selected-option img[data-v-6229eaa7]{height:24px;margin-right:8px;width:24px}.options-container[data-v-6229eaa7]{background-color:#fff;border:1px solid #ccc;box-shadow:0 2px 4px rgba(0,0,0,.2);cursor:pointer;left:0;max-height:200px;overflow-y:auto;position:absolute;top:100%;width:100%;z-index:1}.option[data-v-6229eaa7]{align-items:center;display:flex;padding:8px}.option img[data-v-6229eaa7]{height:24px;margin-right:8px;width:24px}.option[data-v-6229eaa7]:hover{background-color:#f5f5f5}.country_select[data-v-6229eaa7]{height:51px;left:0!important;position:absolute;top:0!important;width:100px!important}.main-btn[data-v-6229eaa7]:disabled{cursor:not-allowed;opacity:.4}body.ltr .country_select[data-v-6229eaa7]{left:auto!important;right:0!important;top:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/contactForm.vue?vue&type=template&id=6229eaa7&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contact-us section-pad mt-3"
  }, [_vm._ssrNode("<div class=\"container\" data-v-6229eaa7><div class=\"col-md-10 col-12 margin-auto\" data-v-6229eaa7><div class=\"row\" data-v-6229eaa7><div class=\"col-lg-10 col-12 margin-auto\" data-v-6229eaa7><form data-v-6229eaa7><div class=\"row\" data-v-6229eaa7><div class=\"col-12\" data-v-6229eaa7><div class=\"mb-3 main-inp-cont\" data-v-6229eaa7><div class=\"form__label\" data-v-6229eaa7><input type=\"text\" required=\"required\"" + _vm._ssrAttr("placeholder", _vm.$t('firstName')) + " name=\"name\"" + _vm._ssrAttr("value", _vm.name) + " class=\"default_inputme\" data-v-6229eaa7></div></div></div> <div class=\"col-lg-6 col-12\" data-v-6229eaa7><div class=\"mb-3 main-inp-cont\" data-v-6229eaa7><div class=\"form__label position-relative\" data-v-6229eaa7><input type=\"number\" required=\"required\" name=\"phone\"" + _vm._ssrAttr("placeholder", _vm.$t('phoneNumber')) + _vm._ssrAttr("value", _vm.phone) + " class=\"default_inputme\" data-v-6229eaa7> <div class=\"country_select\" data-v-6229eaa7><div class=\"selected-option\" data-v-6229eaa7><img" + _vm._ssrAttr("src", _vm.defaultImage) + " alt=\"Option Image\" data-v-6229eaa7> <span data-v-6229eaa7>" + _vm._ssrEscape(_vm._s(_vm.country_key)) + "</span></div> " + (_vm.dropdownVisible ? "<div class=\"options-container\" data-v-6229eaa7>" + _vm._ssrList(_vm.countries, function (option) {
    return "<div class=\"option\" data-v-6229eaa7><img" + _vm._ssrAttr("src", option.flag) + " alt=\"Option Image\" data-v-6229eaa7> <span data-v-6229eaa7>" + _vm._ssrEscape(_vm._s(option.calling_code)) + "</span></div>";
  }) + "</div>" : "<!---->") + "</div></div></div></div> <div class=\"col-lg-6 col-12\" data-v-6229eaa7><div class=\"mb-3 main-inp-cont\" data-v-6229eaa7><div class=\"form__label\" data-v-6229eaa7><input type=\"text\" required=\"required\" name=\"city\"" + _vm._ssrAttr("placeholder", _vm.$t('City')) + _vm._ssrAttr("value", _vm.city) + " class=\"default_inputme\" data-v-6229eaa7></div></div></div> <div class=\"col-12\" data-v-6229eaa7><div class=\"mb-3 main-inp-cont\" data-v-6229eaa7><div class=\"form__label\" data-v-6229eaa7><input type=\"email\" required=\"required\" name=\"email\"" + _vm._ssrAttr("placeholder", _vm.$t('email')) + _vm._ssrAttr("value", _vm.email) + " class=\"default_inputme\" data-v-6229eaa7></div></div></div> <div class=\"col-12\" data-v-6229eaa7><div class=\"mb-3 main-inp-cont\" data-v-6229eaa7><div class=\"form__label\" data-v-6229eaa7><input type=\"text\" required=\"required\"" + _vm._ssrAttr("placeholder", _vm.$t('subject')) + " name=\"subject\"" + _vm._ssrAttr("value", _vm.subject) + " class=\"default_inputme\" data-v-6229eaa7></div></div></div> <div class=\"col-12\" data-v-6229eaa7><div class=\"mb-3 main-inp-cont\" data-v-6229eaa7><div class=\"form__label\" data-v-6229eaa7><textarea rows=\"5\" type=\"text\" required=\"required\"" + _vm._ssrAttr("placeholder", _vm.$t('message')) + " name=\"message\" class=\"textarea-spe-me default_input5\" data-v-6229eaa7>" + _vm._ssrEscape(_vm._s(_vm.message)) + "</textarea> <label for class=\"float__label\" data-v-6229eaa7></label></div></div></div> <div class=\"flex-groupme w-100\" data-v-6229eaa7><button" + _vm._ssrAttr("disabled", _vm.disabled) + " class=\"btn-main up mt-3 mega-lg form-btn\" data-v-6229eaa7>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('Send')) + "\n                  ") + (_vm.disabled ? "<div role=\"status\" class=\"spinner-border\" data-v-6229eaa7></div>" : "<!---->") + "</button></div></div></form></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/common/contactForm.vue?vue&type=template&id=6229eaa7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/common/contactForm.vue?vue&type=script&lang=js&
/* harmony default export */ var contactFormvue_type_script_lang_js_ = ({
  data() {
    return {
      country_key: '00966',
      countries: [],
      dropdownVisible: false,
      defaultImage: 'https://backend.bookaboat.app/assets/uploads/flags/96198928-39e5-4349-a8b1-35a036882ac2.png',
      disabled: false,
      phone: '',
      name: '',
      email: '',
      subject: '',
      city: '',
      message: ''
    };
  },
  methods: {
    // send contact us 
    async contactUs() {
      const fd = new FormData(this.$refs.contactForm);
      fd.append('country_key', this.country_key);
      this.disabled = true;
      await this.$axios.$post('/contact-us', fd).then(res => {
        if (res.key == 'success') {
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.phone = '';
            this.name = '';
            this.message = '';
            this.subject = '';
            this.city = '';
            this.email = '';
          }, 2000);
        } else {
          this.$swal('', `${res.msg}`, "error");
        }
        this.disabled = false;
      });
    },
    // get country key 
    async getCounrtyKey() {
      await this.$axios.$get('countries').then(res => {
        this.countries = res.data.countries;
      });
    },
    // toggle country select 
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    // choose option and close dropdown 
    selectOption(option) {
      this.country_key = option.calling_code;
      this.defaultImage = option.flag;
      this.dropdownVisible = !this.dropdownVisible;
    },
    // toggle country select 
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    // choose option and close dropdown 
    selectOption(option) {
      this.country_key = option.calling_code;
      this.defaultImage = option.flag;
      this.dropdownVisible = !this.dropdownVisible;
    }
  },
  mounted() {
    this.getCounrtyKey();
  }
});
// CONCATENATED MODULE: ./components/common/contactForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_contactFormvue_type_script_lang_js_ = (contactFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/common/contactForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(286)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_contactFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6229eaa7",
  "6ea4a4fb"
  
)

/* harmony default export */ var contactForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-contact-form.js.map