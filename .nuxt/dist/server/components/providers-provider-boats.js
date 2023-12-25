exports.ids = [35];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=providers-provider-boats.js.map