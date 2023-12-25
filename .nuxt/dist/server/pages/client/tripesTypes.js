exports.ids = [63];
exports.modules = {

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/tripesTypes.vue?vue&type=template&id=a5021d74&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_c('homeHeader', {
    attrs: {
      "headerTitle": _vm.$t('bookTrip')
    }
  }), _vm._ssrNode(" "), _c('commonTravelTypes', {
    attrs: {
      "trip_types": _vm.trip_types
    }
  }), _vm._ssrNode(" "), _c('homeDownloadApp'), _vm._ssrNode(" "), _c('homeFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/client/tripesTypes.vue?vue&type=template&id=a5021d74&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/tripesTypes.vue?vue&type=script&lang=js&
/* harmony default export */ var tripesTypesvue_type_script_lang_js_ = ({
  // middleware : ['userAuth'],
  data() {
    return {
      trip_types: []
    };
  },
  methods: {
    async getTravelTypes() {
      await this.$axios.$get('/trip-types').then(res => {
        this.trip_types = res.data.trip_types;
        // console.log(res.data.trip-types)
      });
    }
  },

  mounted() {
    this.getTravelTypes();
  }
  //  beforeRouteEnter(to, from, next) {
  //     this.$i18n.locale = localStorage.getItem('locale')
  //     console.log('before route')
  //     next()
  // }
});
// CONCATENATED MODULE: ./pages/client/tripesTypes.vue?vue&type=script&lang=js&
 /* harmony default export */ var client_tripesTypesvue_type_script_lang_js_ = (tripesTypesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/client/tripesTypes.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  client_tripesTypesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "19f6c40a"
  
)

/* harmony default export */ var tripesTypes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tripesTypes.js.map