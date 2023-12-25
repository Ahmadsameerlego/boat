exports.ids = [90];
exports.modules = {

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/providerProfile/providerWallet.vue?vue&type=template&id=17e2772a&
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
      rawName: "v-b-toggle.accordion-6",
      modifiers: {
        "accordion-6": true
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
      "icon": ['fas', 'wallet']
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "full-q"
  }, [_vm._v(" " + _vm._s(_vm.$t('wallet')) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "dafeult-faq-icon"
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-left']
    }
  })], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-6",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "parent-profile text-center"
  }, [_c('div', {
    staticClass: "flex-groupme mb-3"
  }, [_c('img', {
    staticClass: "wallet-img",
    attrs: {
      "src": "imgs/43.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "gray-col mb-1"
  }, [_vm._v(" " + _vm._s(_vm.$t('current_wallet')) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "fontbolder28 mb-1"
  }, [_vm._v(_vm._s(_vm.wallet))]), _vm._v(" "), _c('div', {
    staticClass: "mb-1"
  }, [_vm._v("ريال سعودي")]), _vm._v(" "), _c('div', {
    staticClass: "flex-groupme mt-3"
  }, [_c('button', {
    staticClass: "btn-main up",
    attrs: {
      "type": "button"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('chargeWallet')) + " ")]), _vm._v(" "), _c('button', {
    staticClass: "btn-main up light-b",
    attrs: {
      "type": "button"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('returnWallet')) + " ")])])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/provider/providerProfile/providerWallet.vue?vue&type=template&id=17e2772a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/providerProfile/providerWallet.vue?vue&type=script&lang=js&
/* harmony default export */ var providerWalletvue_type_script_lang_js_ = ({
  data() {
    return {
      wallet: ""
    };
  },
  methods: {
    async getWallet() {
      await this.$axios.$get("/wallet", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res => {
        this.wallet = res.data.wallet;
        // console.log(res);
      });
    }
  },

  mounted() {
    this.getWallet();
  }
});
// CONCATENATED MODULE: ./pages/provider/providerProfile/providerWallet.vue?vue&type=script&lang=js&
 /* harmony default export */ var providerProfile_providerWalletvue_type_script_lang_js_ = (providerWalletvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/provider/providerProfile/providerWallet.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  providerProfile_providerWalletvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "27d47154"
  
)

/* harmony default export */ var providerWallet = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=providerWallet.js.map