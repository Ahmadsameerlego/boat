exports.ids = [66];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 70332.9444af4.png";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 30488.a6683be.png";

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/clientLogin.vue?vue&type=template&id=32184ad2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"img-background\"><img" + _vm._ssrAttr("src", _vm.bg) + " alt></div> "), _vm._ssrNode("<div class=\"login\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6 col-12 margin-auto p-0\">", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"login-box mt-3\">", "</div>", [_vm._ssrNode("<div class=\"login-img text-center mt-2\"><img" + _vm._ssrAttr("src", _vm.src) + " alt></div> <div class=\"title-login text-center mt-3\">" + _vm._ssrEscape("\n           " + _vm._s(_vm.$t('logIn')) + "\n            ") + "</div> <div class=\"under-title mb-3 text-center mt-2\">" + _vm._ssrEscape("\n               " + _vm._s(_vm.$t('fillData')) + "\n            ") + "</div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-9 col-12 margin-auto\">", "</div>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('phoneNumber')) + "\n                    ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"tel\" id=\"telephone\"" + _vm._ssrAttr("placeholder", _vm.$t('fillPhoneNumber')) + " name=\"phone\"" + _vm._ssrAttr("value", _vm.phone) + " class=\"inp-spe-tele\" style=\"direction:rtl\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'mobile-screen-button']
    }
  })], 1), _vm._ssrNode(" <div class=\"country_select\"><div class=\"selected-option\"><img" + _vm._ssrAttr("src", _vm.defaultImage) + " alt=\"Option Image\"> <span>" + _vm._ssrEscape(_vm._s(_vm.country_key)) + "</span></div> " + (_vm.dropdownVisible ? "<div class=\"options-container\">" + _vm._ssrList(_vm.countries, function (option) {
    return "<div class=\"option\"><img" + _vm._ssrAttr("src", option.flag) + " alt=\"Option Image\"> <span>" + _vm._ssrEscape(_vm._s(option.calling_code)) + "</span></div>";
  }) + "</div>" : "<!---->") + "</div>")], 2)], 2), _vm._ssrNode(" <div class=\"mt-4\"><button" + _vm._ssrAttr("disabled", _vm.disabled) + " class=\"main-btn up mb-2\">" + _vm._ssrEscape("\n                        " + _vm._s(_vm.$t('logIn')) + "\n                        ") + (_vm.disabled ? "<div role=\"status\" class=\"spinner-border\"></div>" : "<!---->") + "</button></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"dont-have\">", "</div>", [_vm._ssrNode(_vm._ssrEscape("\n                " + _vm._s(_vm.$t('noAccount')) + "\n                ")), _c('nuxt-link', {
    attrs: {
      "to": "/clientRegister"
    }
  }, [_vm._v(" / " + _vm._s(_vm.$t('newLogIn')) + " ")])], 2), _vm._ssrNode(" <div class=\"forget-login mb-4\"><button type=\"button\" class=\"decore-me font14 color-main\">" + _vm._ssrEscape("\n                " + _vm._s(_vm.$t('visitorLogin')) + "\n                ") + "</button></div>")], 2)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/clientLogin.vue?vue&type=template&id=32184ad2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/clientLogin.vue?vue&type=script&lang=js&
/* harmony default export */ var clientLoginvue_type_script_lang_js_ = ({
  data() {
    return {
      src: __webpack_require__(124),
      bg: __webpack_require__(128),
      phone: '',
      disabled: false,
      country_key: '00966',
      countries: [],
      dropdownVisible: false,
      defaultImage: 'https://backend.bookaboat.app/assets/uploads/flags/96198928-39e5-4349-a8b1-35a036882ac2.png',
      device_type: 'android'
    };
  },
  methods: {
    setVisitor() {
      localStorage.setItem('visitor', 'true');
      // await this.$nextTick();

      this.$router.push("/client/HomePage");
    },
    async Login() {
      this.disabled = true;
      const fd = new FormData(this.$refs.regForm);
      fd.append('phone', this.phone);
      fd.append('device_type', this.device_type);
      fd.append('device_id', localStorage.getItem('fcm'));
      fd.append('country_key', this.country_key);
      fd.append('type', 'user');
      await this.$axios.$post('/mobile/login', fd).then(res => {
        if (res.key == 'success' && res.data.user.acc_type == 'user') {
          this.$swal('', `سيتم إرسال الكود على هذا الرقم`, "success");
          localStorage.setItem('token', res.data.token);
          let user = JSON.stringify(res.data.user);
          localStorage.setItem('user', user);
          localStorage.setItem('phone', this.phone);
          localStorage.removeItem('visitor');
          localStorage.setItem('userLoggedIn', true);
          setTimeout(() => {
            this.$router.push("/clientActiveCode");
          }, 2000);
        } else {
          this.$swal('', `${res.msg}`, "error");
        }
        this.disabled = false;
      });
    },
    // toggle country select 
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    // choose option and close dropdown 
    selectOption(option) {
      this.country_key = option.calling_code;
      this.defaultImage = option.flag;
      this.dropdownVisible = !this.dropdownVisible;
    },
    // toggle country select 
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    // choose option and close dropdown 
    selectOption(option) {
      this.country_key = option.calling_code;
      this.defaultImage = option.flag;
      this.dropdownVisible = !this.dropdownVisible;
    },
    // get country key 
    async getCounrtyKey() {
      await this.$axios.$get('countries').then(res => {
        this.countries = res.data.countries;
      });
    }
  },
  mounted() {
    // get random device_id 
    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => localStorage.setItem('device_id', data.ip)).catch(error => console.error(error));

    // get country key 
    this.getCounrtyKey();

    // if(localStorage.getItem('userLoggedIn') == 'true'){
    //     this.$router.push('/clientActiveCode');
    // }
  }
});
// CONCATENATED MODULE: ./pages/clientLogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_clientLoginvue_type_script_lang_js_ = (clientLoginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/clientLogin.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_clientLoginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1580c115"
  
)

/* harmony default export */ var clientLogin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=clientLogin.js.map