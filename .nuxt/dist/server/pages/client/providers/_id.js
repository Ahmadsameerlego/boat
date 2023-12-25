exports.ids = [59,24,35];
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

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/providers/providerBoats.vue?vue&type=template&id=c705c8e2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "trips section-pad"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"flex-groupme\"><h5 class=\"main-title color-main font600 mb-4\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('serviceProviderss')) + " ") + "</h5></div> <div class=\"flex-groupme mb-3\"><img" + _vm._ssrAttr("src", _vm.store.avatar) + " alt class=\"img-prof\"></div> <div class=\"mb-3 text-center\">" + _vm._ssrEscape(" " + _vm._s(_vm.store.name) + " ") + "</div> <div class=\"flex-rairing gap-book gray-col mt-3 mb-4 font14\"><div class=\"book-nums\">" + _vm._ssrEscape("عدد الحجوزات : " + _vm._s(_vm.store.num_orders) + " حجز") + "</div> <div class=\"book-loc\"><i class=\"fa-solid fa-location-dot\"></i> <div class=\"book-loc-real\">" + _vm._ssrEscape(" " + _vm._s(_vm.store.address) + " ") + "</div></div> <div class=\"nationality-me\">" + _vm._ssrEscape(" " + _vm._s(_vm.store.nationality) + " ") + "</div></div> "), _vm._ssrNode("<div class=\"flex-rairing mt-3 mb-4 font14\">", "</div>", [_vm._ssrNode("<div class=\"light-box\">", "</div>", [_c('font-awesome-icon', {
    staticClass: "star-yellow",
    attrs: {
      "icon": ['fas', 'star']
    }
  }), _vm._ssrNode(_vm._ssrEscape("\n          " + _vm._s(_vm.store.rate) + "\n        "))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"light-box\">", "</div>", [_c('font-awesome-icon', {
    staticClass: "color-main",
    attrs: {
      "icon": ['fas', 'paper-plane']
    }
  }), _vm._ssrNode(_vm._ssrEscape("\n          " + _vm._s(_vm.store.distance) + "\n        "))], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.products, function (product) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-12 mb-4\">", "</div>", [_vm._ssrNode("<div class=\"main-box-sh\">", "</div>", [_vm._ssrNode("<div class=\"flex-groupme\"><img" + _vm._ssrAttr("src", product.image) + " alt class=\"person-im\"></div> <div class=\"text-center mt-3 mb-3\">" + _vm._ssrEscape(" " + _vm._s(product.name) + " ") + "</div> <div class=\"text-center gray-col font14\">" + _vm._ssrEscape("\n              سعة القارب : " + _vm._s(product.capacity) + " فرد\n              ") + "</div> "), _vm._ssrNode("<div class=\"flex-rairing mt-3 mb-4\">", "</div>", [_vm._ssrNode("<div class=\"light-box\">", "</div>", [_c('font-awesome-icon', {
      staticClass: "star-yellow",
      attrs: {
        "icon": ['fas', 'star']
      }
    }), _vm._ssrNode(_vm._ssrEscape("\n                  " + _vm._s(product.rate) + "\n              "))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"light-box\">", "</div>", [_c('font-awesome-icon', {
      staticClass: "color-main",
      attrs: {
        "icon": ['fas', 'paper-plane']
      }
    }), _vm._ssrNode(_vm._ssrEscape("\n                  " + _vm._s(product.address) + "\n              "))], 2), _vm._ssrNode(" <div class=\"light-box\">" + _vm._ssrEscape(" " + _vm._s(product.display_price) + "  ر.س / ساعة") + "</div>")], 2), _vm._ssrNode(" "), _c('nuxt-link', {
      staticClass: "btn-main up big-100",
      attrs: {
        "to": '/client/boats/' + product.id
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t('boatDetails')) + "\n              ")])], 2)]);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/providers/providerBoats.vue?vue&type=template&id=c705c8e2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/providers/providerBoats.vue?vue&type=script&lang=js&
/* harmony default export */ var providerBoatsvue_type_script_lang_js_ = ({
  data() {
    return {
      // for paginataion 
      currentPage: 1,
      store: {},
      products: []
    };
  },
  methods: {
    // get provider info 
    async getProviderInfo() {
      await this.$axios.$get(`/single-provider?provider_id=${this.$route.params.id}&page=${this.currentPage}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.store = res.data.store;
          this.products = res.data.store.products;
        }
      }).catch(err => console.error(err));
    }
  },
  mounted() {
    this.getProviderInfo();
  }
});
// CONCATENATED MODULE: ./components/providers/providerBoats.vue?vue&type=script&lang=js&
 /* harmony default export */ var providers_providerBoatsvue_type_script_lang_js_ = (providerBoatsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/providers/providerBoats.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  providers_providerBoatsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "70888b8a"
  
)

/* harmony default export */ var providerBoats = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/providers/_id.vue?vue&type=template&id=6a875baa&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_c('homeHeader'), _vm._ssrNode(" "), _c('provider-boats'), _vm._ssrNode(" "), _c('HomeDownloadApp'), _vm._ssrNode(" "), _c('homeFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/client/providers/_id.vue?vue&type=template&id=6a875baa&

// EXTERNAL MODULE: ./components/providers/providerBoats.vue + 4 modules
var providerBoats = __webpack_require__(260);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/providers/_id.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    providerBoats: providerBoats["default"]
  }
});
// CONCATENATED MODULE: ./pages/client/providers/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var providers_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/client/providers/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  providers_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0e91053c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeDownloadApp: __webpack_require__(135).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map