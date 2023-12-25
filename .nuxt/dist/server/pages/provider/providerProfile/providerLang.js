exports.ids = [87];
exports.modules = {

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/saudi.5ebdc2b.png";

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/united_states.2b1ef97.png";

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/providerProfile/providerLang.vue?vue&type=template&id=492101b4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-card', {
    attrs: {
      "no-body": ""
    }
  }, [_c('div', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-8",
      modifiers: {
        "accordion-8": true
      }
    }],
    staticClass: "flex-bet all-qestion m-1",
    attrs: {
      "role": "tab"
    }
  }, [_c('div', {
    staticClass: "flex-qet-me"
  }, [_c('div', {
    staticClass: "icon-faq color-main"
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'repeat']
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "full-q"
  }, [_vm._v(" " + _vm._s(_vm.$t('webLang')) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "dafeult-faq-icon"
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-left']
    }
  })], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-8",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "parent-profile"
  }, [_c('h5', {
    staticClass: "mb-2"
  }, [_vm._v(" " + _vm._s(_vm.$t('welcome')) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "gray-col font14"
  }, [_vm._v(" " + _vm._s(_vm.$t('chooseLang')) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "flex-groupme yes-wrap mt-3"
  }, [_c('button', {
    staticClass: "lang-box",
    class: {
      active: _vm.activeArLang
    },
    on: {
      "click": function ($event) {
        return _vm.setArabic();
      }
    }
  }, [_c('div', {
    staticClass: "lang-flag"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(159),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "lang-text"
  }, [_vm._v(" " + _vm._s(_vm.$t('arabic')) + " ")])]), _vm._v(" "), _c('button', {
    staticClass: "lang-box",
    class: {
      active: _vm.activeEnLang
    },
    on: {
      "click": function ($event) {
        return _vm.setEnglish();
      }
    }
  }, [_c('div', {
    staticClass: "lang-flag"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(160),
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "lang-text"
  }, [_vm._v(" " + _vm._s(_vm.$t('english')) + " ")])])])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/provider/providerProfile/providerLang.vue?vue&type=template&id=492101b4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/providerProfile/providerLang.vue?vue&type=script&lang=js&
/* harmony default export */ var providerLangvue_type_script_lang_js_ = ({
  data() {
    return {
      activeArLang: true,
      activeEnLang: false
    };
  },
  methods: {
    // change language and local
    setArabic() {
      this.activeArLang = true;
      this.activeEnLang = false;
      localStorage.setItem("locale", "ar");
      this.$i18n.locale = "ar";
      location.reload();
    },
    setEnglish() {
      this.activeArLang = false;
      this.activeEnLang = true;
      localStorage.setItem("locale", "en");
      this.$i18n.locale = "en";
      location.reload();
    }
  },
  updated() {
    console.log(this.$i18n.locale);
  },
  mounted() {
    if (localStorage.getItem('locale') == 'en') {
      this.activeArLang = false;
      this.activeEnLang = true;
    } else {
      this.activeArLang = true;
      this.activeEnLang = false;
    }
    this.$i18n.locale = localStorage.getItem('locale');
  }
});
// CONCATENATED MODULE: ./pages/provider/providerProfile/providerLang.vue?vue&type=script&lang=js&
 /* harmony default export */ var providerProfile_providerLangvue_type_script_lang_js_ = (providerLangvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/provider/providerProfile/providerLang.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  providerProfile_providerLangvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "79f6900b"
  
)

/* harmony default export */ var providerLang = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=providerLang.js.map