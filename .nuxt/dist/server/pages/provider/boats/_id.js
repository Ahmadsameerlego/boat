exports.ids = [71,24,25];
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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/facebook (7).4ed230e.png";

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram (6).12eef2b.png";

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Footer.vue?vue&type=template&id=23e956ee&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "footer"
  }, [_vm._ssrNode("<div class=\"main-footer\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-6 col-12 mb-3\">", "</div>", [_vm._ssrNode("<div class=\"footer-colomn-me\">", "</div>", [_vm._ssrNode("<h6 class=\"main-title color-main font600\">" + _vm._ssrEscape(_vm._s(_vm.$t('knowUs'))) + "</h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm.client ? _c('nuxt-link', {
    attrs: {
      "to": "/client/whoUS"
    }
  }, [_c('div', {
    staticClass: "my-l"
  }, [_vm._v("\n                     " + _vm._s(_vm.$t('writingStore')) + "\n                    ")])]) : _vm._e(), _vm._ssrNode(" "), _vm.provider ? _c('nuxt-link', {
    attrs: {
      "to": "/provider/whoUS"
    }
  }, [_c('div', {
    staticClass: "my-l"
  }, [_vm._v("\n                     " + _vm._s(_vm.$t('writingStore')) + "\n                    ")])]) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm.client ? _c('nuxt-link', {
    attrs: {
      "to": "/client/terms"
    }
  }, [_c('div', {
    staticClass: "my-l"
  }, [_vm._v(_vm._s(_vm.$t('Brief')))])]) : _vm.provider ? _c('nuxt-link', {
    attrs: {
      "to": "/provider/terms"
    }
  }, [_c('div', {
    staticClass: "my-l"
  }, [_vm._v(_vm._s(_vm.$t('Brief')))])]) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm.client ? _c('nuxt-link', {
    attrs: {
      "to": "/client/qommonQuestions"
    }
  }, [_c('div', {
    staticClass: "my-l"
  }, [_vm._v(_vm._s(_vm.$t('commandQuestions')))])]) : _vm.provider ? _c('nuxt-link', {
    attrs: {
      "to": "/provider/qommonQuestions"
    }
  }, [_c('div', {
    staticClass: "my-l"
  }, [_vm._v(_vm._s(_vm.$t('commandQuestions')))])]) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm.client ? _c('nuxt-link', {
    attrs: {
      "to": "/client/contactUs"
    }
  }, [_c('div', {
    staticClass: "my-l"
  }, [_vm._v(" " + _vm._s(_vm.$t('terms')))])]) : _vm.provider ? _c('nuxt-link', {
    attrs: {
      "to": "/provider/contactUs"
    }
  }, [_c('div', {
    staticClass: "my-l"
  }, [_vm._v(" " + _vm._s(_vm.$t('terms')))])]) : _vm._e()], 1)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-12 mb-3\">", "</div>", [_vm._ssrNode("<div class=\"footer-colomn-me\">", "</div>", [_vm._ssrNode("<h6 class=\"main-title color-main font600\">" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('contactUs')) + "\n              ") + "</h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li><a" + _vm._ssrAttr("href", 'mailto:' + _vm.email) + " target=\"_blank\"><div class=\"dot-foot-icon\"><i class=\"fa-solid fa-location-dot\"></i></div> <div class=\"my-l\">" + _vm._ssrEscape(" " + _vm._s(_vm.email) + " ") + "</div></a></li> <li><a" + _vm._ssrAttr("href", 'tel:' + _vm.phone) + " target=\"_blank\"><div class=\"dot-foot-icon\"><i class=\"fa-solid fa-phone\"></i></div> <div class=\"my-l\">" + _vm._ssrEscape(" " + _vm._s(_vm.phone) + " ") + "</div></a></li> <li><div><div class=\"dot-foot-icon\"><i class=\"fa-solid fa-envelope\"></i></div> <div class=\"my-l\">" + _vm._ssrEscape(" " + _vm._s(_vm.address) + " ") + "</div></div></li> <div class=\"flex-socials\">" + _vm._ssrList(_vm.socials, function (social) {
    return "<a" + _vm._ssrAttr("href", social.link) + " target=\"_blank\"><img" + _vm._ssrAttr("src", social.image) + _vm._ssrAttr("alt", social.name) + "></a>";
  }) + "</div> "), _vm._ssrNode("<section class=\"mx-3\">", "</section>", [_vm.client ? _vm._ssrNode("<div class=\"d-flex mt-3\">", "</div>", [_c('nuxt-link', {
    staticClass: "btn-main up",
    attrs: {
      "to": "/providerLogin"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('joinAsProvider')) + "\n                  ")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.provider ? _vm._ssrNode("<div class=\"d-flex mt-3\">", "</div>", [_c('nuxt-link', {
    staticClass: "btn-main up",
    attrs: {
      "to": "/clientLogin"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('joinAsClient')) + "\n                  ")])], 1) : _vm._e()], 2)], 2)], 2)]), _vm._ssrNode(" <div class=\"col-lg-5 col-md-6 col-12 mb-3\"><div class=\"footer-colomn-me\"><h6 class=\"main-title color-main font600\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('email')) + " ") + "</h6> <p class=\"gray-col mt-2 font14\">" + _vm._ssrEscape(_vm._s(_vm.$t('linkBetweenUs'))) + "</p> <form><div class=\"mt-3 mb-3\"><input type=\"email\" name=\"subEmail\"" + _vm._ssrAttr("placeholder", _vm.$t('email')) + _vm._ssrAttr("value", _vm.subEmail) + " class=\"footer-m-i\"></div> <button type=\"submit\" class=\"btn-main up\">" + _vm._ssrEscape(_vm._s(_vm.$t('subscripe'))) + "</button></form></div></div>")], 2), _vm._ssrNode(" <section class=\"d-flex align-items-center\"><section><div class=\"down-app mb-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('clientApp')) + " ") + "</div> <div class=\"downloads mb-2\"><a" + _vm._ssrAttr("href", _vm.ios_link) + " target=\"_blank\"><img" + _vm._ssrAttr("src", _vm.src1) + " alt></a> <a" + _vm._ssrAttr("href", _vm.android_link) + " target=\"_blank\"><img" + _vm._ssrAttr("src", _vm.src2) + " alt></a></div> <div class=\"down-app mb-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('providerApp')) + " ") + "</div> <div class=\"downloads mb-2\"><a" + _vm._ssrAttr("href", _vm.provider_ios_link) + " target=\"_blank\"><img" + _vm._ssrAttr("src", _vm.src1) + " alt></a> <a" + _vm._ssrAttr("href", _vm.provider_android_link) + " target=\"_blank\"><img" + _vm._ssrAttr("src", _vm.src2) + " alt></a></div></section></section>")], 2)]), _vm._ssrNode(" <div class=\"down-footer\"><div class=\"container\"><div class=\"down-footer-r font14\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('Rights')) + "\n        ") + "</div> <div class=\"down-footer-l font14\"><a href=\"https://aait.sa/\" target=\"_blank\">" + _vm._ssrEscape(_vm._s(_vm.$t('awamer'))) + "</a></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/Footer.vue?vue&type=template&id=23e956ee&

// EXTERNAL MODULE: external "@chenfengyuan/vue-qrcode"
var vue_qrcode_ = __webpack_require__(113);
var vue_qrcode_default = /*#__PURE__*/__webpack_require__.n(vue_qrcode_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/Footer.vue?vue&type=script&lang=js&

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      face: __webpack_require__(170),
      insta: __webpack_require__(171),
      src1: __webpack_require__(131),
      src2: __webpack_require__(132),
      email: '',
      phone: '',
      address: '',
      socials: [],
      ios_link: null,
      ios_link1: 'https://www.buffalowildwings.com/en/food/',
      android_link: null,
      client: false,
      provider: false,
      subEmail: '',
      provider_android_link: '',
      provider_ios_link: ''
    };
  },
  methods: {
    async getAboutData() {
      await this.$axios.$get('/general-data').then(res => {
        this.email = res.data.email;
        this.phone = res.data.phone;
        this.address = res.data.address;
        this.socials = res.data.socials;
        this.ios_link = res.data.ios_link;
        this.android_link = res.data.android_link;
        this.provider_android_link = res.data.provider_android_link;
        this.provider_ios_link = res.data.provider_ios_link;
      });
    },
    async subscribeEmail() {
      const fd = new FormData();
      fd.append('email', this.subEmail);
      await this.$axios.$post('/subscribe', fd).then(res => {
        if (res.key == 'success') {
          this.$swal("", `${res.msg}`, "success");
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
      });
    }
  },
  mounted() {
    this.getAboutData();
    if (this.$route.fullPath.includes('client')) {
      this.client = true;
    } else if (this.$route.fullPath.includes('provider')) {
      this.provider = true;
    }
  },
  components: {
    qrcode: vue_qrcode_default.a
  }
});
// CONCATENATED MODULE: ./components/home/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/Footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4a3fb7e0"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/boats/_id.vue?vue&type=template&id=516155a6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_c('homeHeader'), _vm._ssrNode(" "), _c('providersSingleBoat'), _vm._ssrNode(" "), _c('HomeDownloadApp'), _vm._ssrNode(" "), _c('HomeFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/provider/boats/_id.vue?vue&type=template&id=516155a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/boats/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  // // middleware : ['auth']
});
// CONCATENATED MODULE: ./pages/provider/boats/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var boats_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/provider/boats/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  boats_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e138b64e"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HomeDownloadApp: __webpack_require__(135).default,HomeFooter: __webpack_require__(178).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map