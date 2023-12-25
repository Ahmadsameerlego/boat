exports.ids = [51];
exports.modules = {

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/clientProfile/terms.vue?vue&type=template&id=0a911b8d&
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
      rawName: "v-b-toggle.accordion-3",
      modifiers: {
        "accordion-3": true
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
      "icon": ['fas', 'file']
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "full-q"
  }, [_vm._v(" " + _vm._s(_vm.$t('Brief')) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "dafeult-faq-icon"
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-left']
    }
  })], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-3",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "parent-profile"
  }, [_c('p', {
    staticClass: "text-center p-3 font20 line-h",
    domProps: {
      "innerHTML": _vm._s(_vm.terms)
    }
  })])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/client/clientProfile/terms.vue?vue&type=template&id=0a911b8d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/clientProfile/terms.vue?vue&type=script&lang=js&
/* harmony default export */ var termsvue_type_script_lang_js_ = ({
  data() {
    return {
      terms: ""
    };
  },
  methods: {
    // get whous 
    async getTerms() {
      await this.$axios.$get('/terms-web').then(res => {
        this.terms = res.data.terms;
      });
    }
  },
  mounted() {
    this.getTerms();
  }
});
// CONCATENATED MODULE: ./pages/client/clientProfile/terms.vue?vue&type=script&lang=js&
 /* harmony default export */ var clientProfile_termsvue_type_script_lang_js_ = (termsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/client/clientProfile/terms.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  clientProfile_termsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "21ac282a"
  
)

/* harmony default export */ var terms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=terms.js.map