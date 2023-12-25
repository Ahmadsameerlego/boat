exports.ids = [31];
exports.modules = {

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 82425.65fa4c5.png";

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/whoUs.vue?vue&type=template&id=48885b42&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "who-us section-pad"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6 col-12 mb-3\">", "</div>", [_vm._ssrNode("<div class=\"who-us-right\">", "</div>", [_vm._ssrNode("<h5 class=\"main-title color-main font600\">" + _vm._ssrEscape(_vm._s(_vm.$t('whoArewe')) + " ") + "</h5> <p class=\"mt-3\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.whous) + "\n          ") + "</p> <div class=\"row\">" + _vm._ssrList(_vm.intros, function (intro) {
    return "<div class=\"col-md-6 col-12 mb-2\"><div class=\"who-box mt-4\"><img" + _vm._ssrAttr("src", intro.image) + " alt class=\"who-box-img\"> <h6 class=\"color-main mt-2 mb-2\">" + _vm._ssrEscape("\n                  " + _vm._s(intro.title) + "\n                ") + "</h6> <p>" + _vm._ssrEscape(" " + _vm._s(intro.desc) + " ") + "</p></div></div>";
  }) + "</div> "), _vm.client ? _c('nuxt-link', {
    staticClass: "btn-main mt-4 up",
    attrs: {
      "to": "/client/whous"
    }
  }, [_vm._v(_vm._s(_vm.$t('more')))]) : _vm.provider ? _c('nuxt-link', {
    staticClass: "btn-main mt-4 up",
    attrs: {
      "to": "/provider/whous"
    }
  }, [_vm._v(_vm._s(_vm.$t('more')))]) : _vm._e()], 2)]), _vm._ssrNode(" <div class=\"col-md-6 col-12\"><div class=\"who-us-left rela-p\"><img" + _vm._ssrAttr("src", _vm.image) + " alt class=\"left-img-who\"> <div class=\"abs-photo\"><div class=\"rela-p\"><img" + _vm._ssrAttr("src", _vm.image) + " alt class=\"world-img\"> <a" + _vm._ssrAttr("href", _vm.video) + " data-fancybox=\"gallery\" class=\"aps-pho-play\"><img" + _vm._ssrAttr("src", _vm.src7) + " alt></a></div></div></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/whoUs.vue?vue&type=template&id=48885b42&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/whoUs.vue?vue&type=script&lang=js&
/* harmony default export */ var whoUsvue_type_script_lang_js_ = ({
  data() {
    return {
      intros: [],
      image: '',
      video: '',
      whous: '',
      client: false,
      provider: false,
      src7: __webpack_require__(313)
    };
  },
  methods: {
    // get intro 
    async getIntro() {
      await this.$axios.$get('/intro').then(res => {
        this.intros = res.data.intros;
        this.image = res.data.image;
        this.video = res.data.video;
      });
    },
    // get whous 
    async getWhoUs() {
      await this.$axios.$get('/whous').then(res => {
        this.whous = res.data.whous;
      });
    }
  },
  mounted() {
    this.getIntro();
    this.getWhoUs();

    // client show 
    if (this.$route.fullPath.includes('client')) {
      this.client = true;
    } else if (this.$route.fullPath.includes('provider')) {
      this.provider = true;
    }
  }
});
// CONCATENATED MODULE: ./components/home/whoUs.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_whoUsvue_type_script_lang_js_ = (whoUsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/whoUs.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_whoUsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "899fb632"
  
)

/* harmony default export */ var whoUs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-who-us.js.map