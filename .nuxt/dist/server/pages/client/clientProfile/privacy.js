exports.ids = [48];
exports.modules = {

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/clientProfile/privacy.vue?vue&type=template&id=5ce9950e&
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
      rawName: "v-b-toggle.accordion-2",
      modifiers: {
        "accordion-2": true
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
      "icon": ['fas', 'shield-halved']
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "full-q"
  }, [_vm._v(_vm._s(_vm.$t('ProfilePrivacy')))])]), _vm._v(" "), _c('div', {
    staticClass: "dafeult-faq-icon"
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-left']
    }
  })], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-2",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "parent-profile"
  }, [_c('p', {
    staticClass: "text-center p-3 font20 line-h",
    domProps: {
      "innerHTML": _vm._s(_vm.policy)
    }
  })])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/client/clientProfile/privacy.vue?vue&type=template&id=5ce9950e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/clientProfile/privacy.vue?vue&type=script&lang=js&
/* harmony default export */ var privacyvue_type_script_lang_js_ = ({
  data() {
    return {
      policy: ""
    };
  },
  methods: {
    // get whous 
    async getTerms() {
      await this.$axios.$get('/policy-web').then(res => {
        this.policy = res.data.policy;
      });
    }
  },
  mounted() {
    this.getTerms();
  }
});
// CONCATENATED MODULE: ./pages/client/clientProfile/privacy.vue?vue&type=script&lang=js&
 /* harmony default export */ var clientProfile_privacyvue_type_script_lang_js_ = (privacyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/client/clientProfile/privacy.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  clientProfile_privacyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "19578b28"
  
)

/* harmony default export */ var privacy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=privacy.js.map