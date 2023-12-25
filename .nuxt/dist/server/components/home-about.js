exports.ids = [22];
exports.modules = {

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/About.vue?vue&type=template&id=2581e822&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "reach-us section-pad"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h5 class=\"main-title color-main font600 mb-4\">" + _vm._ssrEscape(_vm._s(_vm.$t('whoArewe')) + " ") + "</h5> "), _vm._ssrNode("<div class=\"flex-bet yes-rap mb-4\">", "</div>", [_vm._ssrNode("<a" + _vm._ssrAttr("href", 'mailto:' + _vm.email) + " class=\"social\">", "</a>", [_vm._ssrNode("<div class=\"icon-foot\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'envelope']
    }
  })], 1), _vm._ssrNode(" <div>" + _vm._ssrEscape(" " + _vm._s(_vm.email) + " ") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<a" + _vm._ssrAttr("href", 'tel:' + _vm.phone) + " class=\"social\">", "</a>", [_vm._ssrNode("<div class=\"icon-foot\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'phone']
    }
  })], 1), _vm._ssrNode(" <div>" + _vm._ssrEscape(" " + _vm._s(_vm.phone) + " ") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"social\">", "</div>", [_vm._ssrNode("<div class=\"icon-foot\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'location-dot']
    }
  })], 1), _vm._ssrNode(" <div>" + _vm._ssrEscape(" " + _vm._s(_vm.address) + " ") + "</div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mt-4 mb-4\">", "</div>", [_vm.load ? _c('GMap', {
    ref: "gMap",
    staticStyle: {
      "width": "100%",
      "height": "400px"
    },
    attrs: {
      "language": "en",
      "center": _vm.locations,
      "zoom": 10
    }
  }, [_c('GMapMarker', {
    attrs: {
      "position": _vm.locations
    }
  })], 1) : _vm._e()], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/About.vue?vue&type=template&id=2581e822&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/About.vue?vue&type=script&lang=js&
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  data() {
    return {
      email: '',
      phone: '',
      address: '',
      locations: {
        lat: 0,
        lng: 0
      },
      load: false
    };
  },
  methods: {
    async getAboutData() {
      await this.$axios.$get('/general-data').then(res => {
        this.email = res.data.email;
        this.phone = res.data.phone;
        this.address = res.data.address;
        this.locations = {
          lat: parseFloat(res.data.lat),
          lng: parseFloat(res.data.long)
        };
      });
    }
  },
  mounted() {
    this.getAboutData();
    setTimeout(() => {
      this.load = true;
    }, 2000);
  }
});
// CONCATENATED MODULE: ./components/home/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/About.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c22d8d8"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-about.js.map