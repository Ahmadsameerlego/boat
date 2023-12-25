exports.ids = [38];
exports.modules = {

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/HomePage.vue?vue&type=template&id=7c98e2a2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_c('homeHeader'), _vm._ssrNode(" "), _c('homeWhoUs'), _vm._ssrNode(" "), _c('homeTravelTypes', {
    attrs: {
      "trip_types": _vm.trip_types
    }
  }), _vm._ssrNode(" "), _c('homeTopRated'), _vm._ssrNode(" "), _c('homeAbout'), _vm._ssrNode(" "), _c('homeDownloadApp'), _vm._ssrNode(" "), _c('homeFooter'), _vm._ssrNode(" "), _vm.loader ? _c('commonLoader') : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/client/HomePage.vue?vue&type=template&id=7c98e2a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/HomePage.vue?vue&type=script&lang=js&
/* harmony default export */ var HomePagevue_type_script_lang_js_ = ({
  data() {
    return {
      ads: [],
      trip_types: [],
      loader: true
    };
  },
  methods: {
    async getHome() {
      await this.$axios.$get('/home', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        console.log(res.data);
        this.ads = res.data[0].ads;
        this.trip_types = res.data[1].trip_types;
        this.loader = false;
      });
    }
  },
  mounted() {
    this.getHome();
  }
});
// CONCATENATED MODULE: ./pages/client/HomePage.vue?vue&type=script&lang=js&
 /* harmony default export */ var client_HomePagevue_type_script_lang_js_ = (HomePagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/client/HomePage.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  client_HomePagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6493a729"
  
)

/* harmony default export */ var HomePage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=HomePage.js.map