exports.ids = [56];
exports.modules = {

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/notifications.vue?vue&type=template&id=7bd2bb7a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_c('homeHeader', {
    attrs: {
      "headerTitle": _vm.$t('notificationsTitle')
    }
  }), _vm._ssrNode(" "), _c('notsNotifications'), _vm._ssrNode(" "), _c('homeDownloadApp'), _vm._ssrNode(" "), _c('homeFooter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/client/notifications.vue?vue&type=template&id=7bd2bb7a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client/notifications.vue?vue&type=script&lang=js&
/* harmony default export */ var notificationsvue_type_script_lang_js_ = ({
  // middleware : ['userAuth'],
  beforeMount() {
    let user = localStorage.getItem('user');
    if (!user) {
      this.$router.push('/client/HomePage');
    }
  }
});
// CONCATENATED MODULE: ./pages/client/notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var client_notificationsvue_type_script_lang_js_ = (notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/client/notifications.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  client_notificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "690125fd"
  
)

/* harmony default export */ var notifications = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=notifications.js.map