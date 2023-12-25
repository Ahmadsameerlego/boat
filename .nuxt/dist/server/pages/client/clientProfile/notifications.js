exports.ids = [47];
exports.modules = {

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/clientProfile/notifications.vue?vue&type=template&id=7e3085c2&
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
      rawName: "v-b-toggle.accordion-7",
      modifiers: {
        "accordion-7": true
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
      "icon": ['fas', 'bell']
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "full-q"
  }, [_vm._v(" " + _vm._s(_vm.$t('settingsAlerts')) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "dafeult-faq-icon"
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-left']
    }
  })], 1)]), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-7",
      "accordion": "my-accordion",
      "role": "tabpanel"
    }
  }, [_c('div', {
    staticClass: "parent-profile"
  }, [_c('div', {
    staticClass: "flex-row-sett"
  }, [_c('div', {
    staticClass: "sett-right"
  }, [_c('h5', [_vm._v(" " + _vm._s(_vm.$t('Adss')) + " ")]), _vm._v(" "), _c('div', {
    staticClass: "under-h5 gray-col"
  }, [_vm._v(" " + _vm._s(_vm.$t('adsDEtails')) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "sett-left"
  }, [_c('div', {
    staticClass: "switch-con"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.offers_notify,
      expression: "offers_notify"
    }],
    attrs: {
      "type": "checkbox",
      "hidden": "",
      "name": "offers_notify",
      "id": "switch"
    },
    domProps: {
      "checked": Array.isArray(_vm.offers_notify) ? _vm._i(_vm.offers_notify, null) > -1 : _vm.offers_notify
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.offers_notify,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.offers_notify = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.offers_notify = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.offers_notify = $$c;
        }
      }, _vm.changeNoti]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "switch",
    attrs: {
      "for": "switch"
    }
  }, [_c('div', {
    staticClass: "main-div"
  }, [_c('span')])])])])]), _vm._v(" "), _c('div', {
    staticClass: "flex-row-sett"
  }, [_c('div', {
    staticClass: "sett-right"
  }, [_c('h5', [_vm._v(" " + _vm._s(_vm.$t('newOrders')) + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "sett-left"
  }, [_c('div', {
    staticClass: "switch-con"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.offers_notify2,
      expression: "offers_notify2"
    }],
    attrs: {
      "type": "checkbox",
      "hidden": "",
      "name": "new_orders_notify",
      "id": "switch2"
    },
    domProps: {
      "checked": Array.isArray(_vm.offers_notify2) ? _vm._i(_vm.offers_notify2, null) > -1 : _vm.offers_notify2
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.offers_notify2,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.offers_notify2 = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.offers_notify2 = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.offers_notify2 = $$c;
        }
      }, _vm.changeNoti2]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "switch",
    attrs: {
      "for": "switch2"
    }
  }, [_c('div', {
    staticClass: "main-div"
  }, [_c('span')])])])])])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/client/clientProfile/notifications.vue?vue&type=template&id=7e3085c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/clientProfile/notifications.vue?vue&type=script&lang=js&
/* harmony default export */ var notificationsvue_type_script_lang_js_ = ({
  data() {
    return {
      offers_notify: null,
      offers_notify2: null
    };
  },
  methods: {
    // changeNoti() {
    //   this.offers_notify = !this.offers_notify;
    //   console.log(this.offers_notify);
    // },

    // resend code

    async getNoti() {
      await this.$axios.$get("/profile/show", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res => {
        this.offers_notify = res.data.user.offers_notify;
        this.offers_notify2 = res.data.user.new_orders_notify;
        // console.log(res.data);
      });
    },

    async changeNoti() {
      const fd = new FormData();
      fd.append('offers_notify', this.offers_notify);
      await this.$axios.$post("/control-notification", fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res => {
        if (res.key == "success") {
          this.$swal("", `${res.msg}`, "success");
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
      });
    },
    async changeNoti2() {
      const fd = new FormData();
      fd.append('new_orders_notify', this.offers_notify2);
      await this.$axios.$post("/control-notification", fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res => {
        if (res.key == "success") {
          this.$swal("", `${res.msg}`, "success");
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
      });
    }
  },
  mounted() {
    this.getNoti();
  }
});
// CONCATENATED MODULE: ./pages/client/clientProfile/notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var clientProfile_notificationsvue_type_script_lang_js_ = (notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/client/clientProfile/notifications.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  clientProfile_notificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3ebd92cc"
  
)

/* harmony default export */ var notifications = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=notifications.js.map