exports.ids = [72,24];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/device.0d65006.png";

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 4460.9cd2763.png";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 4461.6bb21dd.png";

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/downloadApp.vue?vue&type=template&id=9adcaea4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "app section-pad"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"flex-groupme\"><h5 class=\"main-title color-main font600 mb-5\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('app'))) + "</h5></div> <div class=\"landing mb-3 mt-3\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-6 col-12\"><div class=\"landing-right\"><h4 class=\"line-under mb-3 font600\">" + _vm._ssrEscape("\n                    " + _vm._s(_vm.site_title) + "\n                ") + "</h4> <h2 class=\"landing-join font-bold\">Book A Boat</h2> <p>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.site_secription) + "\n                ") + "</p> <div class=\"downloads\"><img" + _vm._ssrAttr("src", _vm.src1) + " alt> <img" + _vm._ssrAttr("src", _vm.src2) + " alt></div></div></div> <div class=\"col-md-6 col-12\"><div class=\"landing-left text-center\"><img" + _vm._ssrAttr("src", __webpack_require__(123)) + " alt></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/downloadApp.vue?vue&type=template&id=9adcaea4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/downloadApp.vue?vue&type=script&lang=js&
/* harmony default export */ var downloadAppvue_type_script_lang_js_ = ({
  data() {
    return {
      src1: __webpack_require__(131),
      src2: __webpack_require__(132),
      src3: __webpack_require__(123),
      site_image: '',
      site_secription: '',
      site_title: ''
    };
  },
  methods: {
    async getAboutData() {
      await this.$axios.$get('/general-data').then(res => {
        this.site_image = res.data.site_image;
        this.site_secription = res.data.site_secription;
        this.site_title = res.data.site_title;
      });
    }
  },
  mounted() {
    this.getAboutData();
  }
});
// CONCATENATED MODULE: ./components/home/downloadApp.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_downloadAppvue_type_script_lang_js_ = (downloadAppvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/downloadApp.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_downloadAppvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b95e7cb8"
  
)

/* harmony default export */ var downloadApp = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/books/MyBooks.vue?vue&type=template&id=888e0654&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_c('homeHeader', {
    attrs: {
      "headerTitle": _vm.$t('newBooks')
    }
  }), _vm._ssrNode(" "), _c('booksNew'), _vm._ssrNode(" "), _c('HomeDownloadApp'), _vm._ssrNode(" "), _c('homeFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/provider/books/MyBooks.vue?vue&type=template&id=888e0654&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/books/MyBooks.vue?vue&type=script&lang=js&
/* harmony default export */ var MyBooksvue_type_script_lang_js_ = ({
  // middleware : ['auth']
});
// CONCATENATED MODULE: ./pages/provider/books/MyBooks.vue?vue&type=script&lang=js&
 /* harmony default export */ var books_MyBooksvue_type_script_lang_js_ = (MyBooksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/provider/books/MyBooks.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  books_MyBooksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2b2f56d4"
  
)

/* harmony default export */ var MyBooks = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeDownloadApp: __webpack_require__(135).default})


/***/ })

};;
//# sourceMappingURL=MyBooks.js.map