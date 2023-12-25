exports.ids = [67];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Group 70332.9444af4.png";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 30488.a6683be.png";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/185644495_1667380803456791_1968050560740665054_n.9bd80cd.jpg";

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      src: __webpack_require__(124),
      bg: __webpack_require__(128),
      person: __webpack_require__(134),
      cities: [],
      regionQuery: "",
      showList1: false,
      city_id: "",
      dialog: false,
      locations: {
        lat: 0,
        lng: 0
      },
      currentLocation: {},
      address: "",
      edit_avatar: __webpack_require__(124),
      country_key: "00966",
      countries: [],
      dropdownVisible: false,
      defaultImage: "https://backend.bookaboat.app/assets/uploads/flags/96198928-39e5-4349-a8b1-35a036882ac2.png",
      device_type: "android",
      disabled: false,
      disabled2: true,
      termsCondition: false,
      phone: "",
      email: "",
      email: ""
    };
  },
  watch: {
    regionQuery() {
      if (this.regionQuery == "") {
        this.showList1 = false;
      }
    },
    termsCondition() {
      if (this.termsCondition == true) {
        this.disabled2 = false;
      } else {
        this.disabled2 = true;
      }
    }
  },
  computed: {
    filteredRegions() {
      if (!Array.isArray(this.cities)) {
        console.error("this.cities is not an array");
        return [];
      }
      return this.cities.filter(region => {
        return region.name.toLowerCase().includes(this.regionQuery.toLowerCase());
      });
    }
  },
  methods: {
    async register() {
      this.disabled = true;
      this.disabled2 = true;
      const fd = new FormData(this.$refs.regForm);
      fd.append("city_id", this.city_id);
      // fd.append('avatar', this.edit_avatar);
      fd.append("lat", this.locations.lat);
      fd.append("long", this.locations.lng);
      fd.append("address", this.address);
      fd.append("device_type", this.device_type);
      fd.append("device_id", localStorage.getItem("device_id"));
      fd.append("country_key", this.country_key);
      await this.$axios.$post("/register", fd).then(res => {
        if (res.key == "success") {
          this.$swal("", `تم تسجيل حسابك بنجاح`, "success");
          localStorage.setItem("token", res.data.token);
          let user = JSON.stringify(res.data.user);
          localStorage.setItem("user", user);
          localStorage.setItem("phone", this.phone);
          setTimeout(() => {
            this.$router.push("/clientActiveCode");
          }, 2000);
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
        this.disabled = false;
        this.disabled2 = false;
      });
    },
    // uploadImage
    uploadImage(e) {
      const file = e.target.files[0];
      this.edit_avatar = URL.createObjectURL(file);

      // const file = e.target.files[0];
      // this.edit_avatar = URL.createObjectURL(file);
      // const image = e.target.files[0];
      // if(image){
      //     const reader = new FileReader();
      //     reader.readAsDataURL(image);
      //     reader.onload = e =>{
      //         this.edit_avatar = e.target.result;
      //     };
      // }
    },

    // get current location
    geolocation() {
      navigator.geolocation.getCurrentPosition(position => {
        this.locations = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    // get new value after dragged
    onMarkerDragEnd(event) {
      // get new lat lang value
      const newLat = event.event.latLng.lat();
      const newLng = event.event.latLng.lng();
      this.locations = {
        lat: newLat,
        lng: newLng
      };

      // get format_address
      const latLng = event.event.latLng;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({
        location: latLng
      }, (results, status) => {
        if (status === "OK") {
          this.address = results[0].formatted_address;
        } else {
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    },
    // filter city
    setNewValueForRegion(value1, id) {
      this.regionQuery = value1;
      this.city_id = id;
      if (this.regionQuery == value1) {
        this.showList1 = false;
      }
    },
    // get cities
    async getCity() {
      await this.$axios.$get("/cities").then(res => {
        this.cities = res.data.cities;
      });
    },
    // get country key
    async getCounrtyKey() {
      await this.$axios.$get("countries").then(res => {
        this.countries = res.data.countries;
      });
    },
    async getCities() {
      this.showList1 = true;
    },
    // show list of cities
    showList() {
      this.showList1 = true;
    },
    // show google map
    showMapDialog() {
      this.dialog = true;
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
    }
  },
  mounted() {
    this.getCity();
    this.geolocation();
    this.getCounrtyKey();

    // get random device_id
    fetch("https://api.ipify.org?format=json").then(response => response.json()).then(data => localStorage.setItem("device_id", data.ip)).catch(error => console.error(error));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)["URL"]))

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(263);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("2f04541b", content, true, context)
};

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clientRegister_vue_vue_type_style_index_0_id_aa751582_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clientRegister_vue_vue_type_style_index_0_id_aa751582_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clientRegister_vue_vue_type_style_index_0_id_aa751582_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clientRegister_vue_vue_type_style_index_0_id_aa751582_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clientRegister_vue_vue_type_style_index_0_id_aa751582_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".selected-option{align-items:center;border:1px solid #ccc;border-radius:5px;cursor:pointer;display:flex;padding:12px}.selected-option img{height:24px;margin-right:8px;width:24px}.options-container{background-color:#fff;border:1px solid #ccc;box-shadow:0 2px 4px rgba(0,0,0,.2);cursor:pointer;left:0;max-height:200px;overflow-y:auto;position:absolute;top:100%;width:100%;z-index:1}.option{align-items:center;display:flex;padding:8px}.option img{height:24px;margin-right:8px;width:24px}.option:hover{background-color:#f5f5f5}.country_select{height:51px;left:0;position:absolute;top:0;width:100px!important}.spinner-border{height:1.5rem!important;vertical-align:-.5em!important;width:1.5rem!important}.main-btn:disabled{cursor:not-allowed;opacity:.4}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/clientRegister.vue?vue&type=template&id=aa751582&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"img-background\"><img" + _vm._ssrAttr("src", _vm.bg) + " alt></div> "), _vm._ssrNode("<div class=\"login\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"col-md-6 col-12 margin-auto p-0\">", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"login-box mt-3\">", "</div>", [_vm._ssrNode("<div class=\"login-img text-center mt-2\"><img" + _vm._ssrAttr("src", _vm.src) + " alt></div> <div class=\"title-login text-center mt-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('newAccount'))) + "</div> <div class=\"under-title mb-3 text-center mt-2\">" + _vm._ssrEscape("\n               " + _vm._s(_vm.$t('fillDataNewLogin')) + "\n            ") + "</div> "), _vm._ssrNode("<div class=\"img-regester-cont mb-3 mt-3\">", "</div>", [_vm._ssrNode("<label for=\"img-up\" class=\"img-edit\">", "</label>", [_vm._ssrNode("<input name=\"avatar\" type=\"file\" id=\"img-up\" hidden=\"hidden\" accept=\"image/*\"> "), _vm._ssrNode("<span class=\"icon\">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'pen-to-square']
    }
  })], 1)], 2), _vm._ssrNode(" <img id=\"change-profile\"" + _vm._ssrAttr("src", _vm.edit_avatar) + " alt>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-9 col-12 margin-auto\">", "</div>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('userName')) + "\n                  ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('fillUserName')) + " name=\"name\"" + _vm._ssrAttr("value", _vm.name) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'user']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('phoneNumber')) + "\n                  ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"number\" id=\"telephone\"" + _vm._ssrAttr("placeholder", _vm.$t('fillPhoneNumber')) + " name=\"phone\"" + _vm._ssrAttr("value", _vm.phone) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'mobile-screen-button']
    }
  })], 1), _vm._ssrNode(" <div class=\"country_select\"><div class=\"selected-option\"><img" + _vm._ssrAttr("src", _vm.defaultImage) + " alt=\"Option Image\"> <span>" + _vm._ssrEscape(_vm._s(_vm.country_key)) + "</span></div> " + (_vm.dropdownVisible ? "<div class=\"options-container\">" + _vm._ssrList(_vm.countries, function (option) {
    return "<div class=\"option\"><img" + _vm._ssrAttr("src", option.flag) + " alt=\"Option Image\"> <span>" + _vm._ssrEscape(_vm._s(option.calling_code)) + "</span></div>";
  }) + "</div>" : "<!---->") + "</div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape("\n                    " + _vm._s(_vm.$t('email')) + "\n                  ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('fillEmail')) + " name=\"email\"" + _vm._ssrAttr("value", _vm.email) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'envelope']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape(_vm._s(_vm.$t('country'))) + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<div class=\"position-relative w-100\"><input type=\"text\" name=\"query\"" + _vm._ssrAttr("placeholder", _vm.$t('searchCountries')) + _vm._ssrAttr("value", _vm.regionQuery) + " class=\"inp-spe-tele\"> " + (_vm.showList1 ? "<div style=\"\\n                          position: absolute;\\n                          width: 100%;\\n                          height: 200px;\\n                          overflow-y: auto;\\n                          top: 50px;\\n                          z-index: 999;\\n                        \">" + (_vm.filteredRegions.length > 0 ? "<ul class=\"list-group\" style=\"z-index: 9999\">" + _vm._ssrList(_vm.filteredRegions, function (item, index) {
    return "<li class=\"list-group-item\"><span style=\"cursor: pointer\">" + _vm._ssrEscape("\n                              " + _vm._s(index + 1) + "." + _vm._s(item.name) + "\n                            ") + "</span></li>";
  }) + "</ul>" : "<ul class=\"list-group\"><li class=\"list-group-item\">" + _vm._ssrEscape("\n                          " + _vm._s(_vm.$t('noCountry')) + "\n                          ") + "</li></ul>") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'location-dot']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('chooseLocation')) + "\n                  ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_c('input', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.modal-1",
      modifiers: {
        "modal-1": true
      }
    }],
    staticClass: "inp-spe-tele",
    attrs: {
      "type": "text",
      "name": "",
      "placeholder": _vm.$t('chooseLocation')
    },
    domProps: {
      "value": _vm.address
    },
    on: {
      "focus": _vm.showMapDialog
    }
  }, []), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'location-dot']
    }
  })], 1), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": "modal-1"
    }
  }, [_c('GMap', {
    ref: "map",
    attrs: {
      "language": "en",
      "center": _vm.locations,
      "zoom": 10
    }
  }, [_c('GMapMarker', {
    attrs: {
      "clickable": true,
      "position": _vm.locations,
      "options": {
        draggable: true
      }
    },
    on: {
      "mouseover": function ($event) {
        return _vm.onMarkerDragEnd($event);
      }
    }
  })], 1)], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('gender')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<select name=\"gender\" id class=\"main-select form-select\"><option value selected=\"selected\" hidden=\"hidden\" disabled=\"disabled\">" + _vm._ssrEscape("\n                                " + _vm._s(_vm.$t('chooseType')) + "\n                            ") + "</option> <option value=\"male\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('male')) + " ") + "</option> <option value=\"female\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('female')) + " ") + "</option></select> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'venus-mars']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"mb-3 main-inp-cont\"><h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape("\n                        " + _vm._s(_vm.$t('birthday')) + "\n                    ") + "</h6> <div class=\"relative-co\"><input type=\"date\"" + _vm._ssrAttr("placeholder", _vm.$t('chooseBirth')) + " name=\"birthdate\" class=\"inp-spe-tele\" style=\"padding-right: 8px;padding-left: 10px;\"></div></div> <div class=\"flex-bet\"><label for=\"agree\" class=\"agree-label\">" + _vm._ssrEscape("         \n                    " + _vm._s(_vm.$t('TermsAndConditions')) + "\n                    ") + "</label> <input type=\"checkbox\" id=\"agree\"" + _vm._ssrAttr("checked", Array.isArray(_vm.termsCondition) ? _vm._i(_vm.termsCondition, null) > -1 : _vm.termsCondition) + " class=\"agree-me\"></div> <div class=\"mt-4\"><button" + _vm._ssrAttr("disabled", _vm.disabled2) + " class=\"main-btn up mb-2\">" + _vm._ssrEscape("\n                   \n                    " + _vm._s(_vm.$t('accountRegistration')) + "\n                    ") + (_vm.disabled ? "<div role=\"status\" class=\"spinner-border\"></div>" : "<!---->") + "</button></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"dont-have\">", "</div>", [_vm._ssrNode(_vm._ssrEscape("\n             \n              " + _vm._s(_vm.$t('haveAccount')) + "\n              ")), _c('nuxt-link', {
    attrs: {
      "to": "clientLogin"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('logIn')))])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"forget-login mb-4\">", "</div>", [_c('nuxt-link', {
    staticClass: "decore-me font14 color-main",
    attrs: {
      "to": "/client/HomePage"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('visitorLogin')))])], 1)], 2)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/clientRegister.vue?vue&type=template&id=aa751582&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/clientRegister.vue?vue&type=script&lang=js&
var clientRegistervue_type_script_lang_js_ = __webpack_require__(204);

// CONCATENATED MODULE: ./pages/clientRegister.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_clientRegistervue_type_script_lang_js_ = (clientRegistervue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/clientRegister.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(262)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_clientRegistervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "109643a7"
  
)

/* harmony default export */ var clientRegister = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=clientRegister.js.map