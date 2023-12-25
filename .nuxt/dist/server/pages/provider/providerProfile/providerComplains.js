exports.ids = [83];
exports.modules = {

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/providerProfile/providerComplains.vue?vue&type=template&id=5e54f444&
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
      rawName: "v-b-toggle.accordion-4",
      modifiers: {
        "accordion-4": true
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
  }, [_vm._v(" " + _vm._s(_vm.$t('complaints')) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "dafeult-faq-icon"
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-left']
    }
  })], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-4",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "parent-profile"
  }, [_vm.complains.length > 0 ? _c('div', _vm._l(_vm.complains, function (complain) {
    return _c('div', {
      key: complain.id,
      staticClass: "sh-report mb-3 mt-3"
    }, [_c('div', {
      staticClass: "flex-bet2 wrab-sm"
    }, [_c('div', {
      staticClass: "flex-defi-report wrab-db-sm"
    }, [_c('div', {
      staticClass: "right-report shrink-no"
    }, [_c('img', {
      attrs: {
        "src": complain.order.image,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "left-report"
    }, [_c('h6', [_vm._v("رقم الشكوى : " + _vm._s(complain.id))]), _vm._v(" "), _c('p', {
      staticClass: "underline-p gray-col font14"
    }, [_vm._v("\n                  " + _vm._s(complain.text) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "all-condition color-main mt-2"
    }, [_c('span', {
      staticClass: "gray-col"
    }, [_vm._v("الحالة :")]), _vm._v(" " + _vm._s(complain.status) + "\n                ")])])]), _vm._v(" "), _c('div', {
      staticClass: "gray-col font14 shrink-no"
    }, [_vm._v("\n              " + _vm._s(complain.created_at) + "\n            ")])])]);
  }), 0) : _c('div', {
    staticClass: "not-f text-center text-danger"
  }, [_vm._v(" " + _vm._s(_vm.$t('noComplaints')) + " ")])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/provider/providerProfile/providerComplains.vue?vue&type=template&id=5e54f444&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/provider/providerProfile/providerComplains.vue?vue&type=script&lang=js&
/* harmony default export */ var providerComplainsvue_type_script_lang_js_ = ({
  data() {
    return {
      complains: []
    };
  },
  methods: {
    async getComplains() {
      await this.$axios.$get("/get-tickets", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res => {
        this.complains = res.data.tickets;
      });
    }
  },
  mounted() {
    this.getComplains();
  }
});
// CONCATENATED MODULE: ./pages/provider/providerProfile/providerComplains.vue?vue&type=script&lang=js&
 /* harmony default export */ var providerProfile_providerComplainsvue_type_script_lang_js_ = (providerComplainsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/provider/providerProfile/providerComplains.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  providerProfile_providerComplainsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "254b22dd"
  
)

/* harmony default export */ var providerComplains = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=providerComplains.js.map