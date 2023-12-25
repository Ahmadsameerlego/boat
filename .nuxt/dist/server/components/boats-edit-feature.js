exports.ids = [5];
exports.modules = {

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(283);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("2c34ff22", content, true, context)
};

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editFeature_vue_vue_type_style_index_0_id_16c33ddd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editFeature_vue_vue_type_style_index_0_id_16c33ddd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editFeature_vue_vue_type_style_index_0_id_16c33ddd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editFeature_vue_vue_type_style_index_0_id_16c33ddd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editFeature_vue_vue_type_style_index_0_id_16c33ddd_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-footer[data-v-16c33ddd]{display:none!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/boats/editFeature.vue?vue&type=template&id=16c33ddd&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm.freeAdds ? _vm._ssrNode("<section data-v-16c33ddd>", "</section>", [_vm._ssrNode("<h5 class=\"mt-4 text-center\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('editFeat2')) + " ") + "</h5> "), _vm._ssrNode("<div class=\"p-4\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<form data-v-16c33ddd>", "</form>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('featureArabic')) + "\n                ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('arabicPlace')) + " name=\"name_ar\" required=\"required\"" + _vm._ssrAttr("value", _vm.name_ar) + " class=\"inp-spe-tele\" data-v-16c33ddd> "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('featureEn')) + "\n                ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('enPlace')) + " name=\"name_en\" required=\"required\"" + _vm._ssrAttr("value", _vm.name_en) + " class=\"inp-spe-tele\" data-v-16c33ddd> "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"right-just-flex mt-3 d-flex justify-content-end\" data-v-16c33ddd><button class=\"btn-main up lg\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addFeat')) + " ") + "</button></div> "), _vm._ssrNode("<div class=\"attrs mt-3\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<div class=\"attrs-head\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeats')) + " ") + "</div> "), _vm.free.length > 0 ? _vm._ssrNode("<section data-v-16c33ddd>", "</section>", _vm._l(_vm.free, function (add) {
    return _vm._ssrNode("<div class=\"attr-loop d-flex justify-content-between align-items-center\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<div class=\"attr-name\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(add.name_ar) + " ") + "</div> "), _vm._ssrNode("<button type=\"button\" class=\"attr-remove text-danger\" data-v-16c33ddd>", "</button>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1)], 2);
  }), 0) : _vm._ssrNode("<section data-v-16c33ddd><div class=\"d-flex justify-content-center align-items-center\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addFeatureShow')) + " ") + "</div></section>")], 2), _vm._ssrNode(" <div class=\"flex-groupme\" data-v-16c33ddd><button type=\"button\" class=\"main-btn up mt-4 wid-85\" data-v-16c33ddd>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('next')) + "\n                ") + "</button></div>")], 2)])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.paidAdds ? _vm._ssrNode("<section data-v-16c33ddd>", "</section>", [_vm._ssrNode("<h5 class=\"mt-4 text-center\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('editFeat3')) + " ") + "</h5> "), _vm._ssrNode("<div class=\"p-4\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<form data-v-16c33ddd>", "</form>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('featureArabic')) + "\n                ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('arabicPlace')) + " name=\"paid_name_ar\" required=\"required\"" + _vm._ssrAttr("value", _vm.paid_name_ar) + " class=\"inp-spe-tele\" data-v-16c33ddd> "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('featureEn')) + "\n                ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('enPlace')) + " name=\"paid_name_en\" required=\"required\"" + _vm._ssrAttr("value", _vm.paid_name_en) + " class=\"inp-spe-tele\" data-v-16c33ddd> "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('featurePrice')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('pricePlace1')) + " name=\"price\" required=\"required\"" + _vm._ssrAttr("value", _vm.price) + " class=\"inp-spe-tele\" data-v-16c33ddd> "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"right-just-flex mt-3 d-flex justify-content-end\" data-v-16c33ddd><button class=\"btn-main up lg\" data-v-16c33ddd>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('addFeat')) + "\n                ") + "</button></div> "), _vm._ssrNode("<div class=\"attrs mt-3\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<div class=\"attrs-head\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeats')) + " ") + "</div> "), _vm.paids.length > 0 ? _vm._ssrNode("<section data-v-16c33ddd>", "</section>", _vm._l(_vm.paids, function (paid) {
    return _vm._ssrNode("<div class=\"attr-loop d-flex justify-content-between align-items\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<div class=\"attr-name\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(paid.name_ar) + " ") + "</div> <div class=\"attr-price color-main\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(paid.price) + " ر.س ") + "</div> "), _vm._ssrNode("<button type=\"button\" class=\"attr-remove text-danger\" data-v-16c33ddd>", "</button>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1)], 2);
  }), 0) : _vm._ssrNode("<section data-v-16c33ddd><div class=\"attr-name d-flex justify-content-center\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addFeatureShow')) + " ") + "</div></section>")], 2), _vm._ssrNode(" <div class=\"flex-groupme\" data-v-16c33ddd><button type=\"button\"" + _vm._ssrAttr("disabled", _vm.disabled2) + " class=\"main-btn up mt-4 wid-85\" data-v-16c33ddd>" + _vm._ssrEscape("\n                  " + _vm._s(_vm.$t('next')) + "\n                ") + "</button></div>")], 2)])], 2) : _vm._e(), _vm._ssrNode(" "), _vm.offers ? _vm._ssrNode("<section data-v-16c33ddd>", "</section>", [_vm._ssrNode("<h5 class=\"mt-4 text-center\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('editPrices')) + " ") + "</h5> "), _vm._ssrNode("<div class=\"p-4\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('hourPrice')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('hourPlace')) + " name=\"price\" required=\"required\"" + _vm._ssrAttr("value", _vm.price) + " class=\"inp-spe-tele\" data-v-16c33ddd> "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<form data-v-16c33ddd>", "</form>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('duration')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.duration,
      expression: "duration"
    }],
    staticClass: "main-select",
    attrs: {
      "name": "duration",
      "id": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.duration = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "hidden": "",
      "disabled": ""
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('durationPlace')) + "\n                ")]), _vm._v(" "), _vm._l(_vm.durations, function (duration) {
    return _c('option', {
      key: duration.id,
      domProps: {
        "value": duration.id
      }
    }, [_vm._v(" " + _vm._s(_vm.$t('from')) + " " + _vm._s(duration.start) + " " + _vm._s(_vm.$t('to')) + " " + _vm._s(duration.end) + " ")]);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'location-dot']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('price')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('durationPrice')) + " name=\"duration_price\" required=\"required\"" + _vm._ssrAttr("value", _vm.duration_price) + " class=\"inp-spe-tele\" data-v-16c33ddd> "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"right-just-flex mt-3 d-flex justify-content-end\" data-v-16c33ddd><button class=\"btn-main up lg\" data-v-16c33ddd>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('addDuration')) + "\n            ") + "</button></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"times-box mt-4 mb-4\" data-v-16c33ddd>", "</div>", [_vm.clientDurations.length > 0 ? _vm._ssrNode("<section data-v-16c33ddd>", "</section>", [_vm._ssrNode("<h6 data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeats2')) + " ") + "</h6> "), _vm._l(_vm.clientDurations, function (duration) {
    return _vm._ssrNode("<div class=\"times-row-loop color-main d-flex justify-content-between\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<div class=\"time-price\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(duration.price) + " ر.س") + "</div> <div class=\"time-price\" data-v-16c33ddd>" + _vm._ssrEscape("  " + _vm._s(duration.duration) + "  ") + "</div> "), _vm._ssrNode("<button type=\"button\" class=\"attr-remove text-danger\" data-v-16c33ddd>", "</button>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1)], 2);
  })], 2) : _vm._ssrNode("<section data-v-16c33ddd><p class=\"text-center\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeaEdi')) + " ") + "</p></section>")]), _vm._ssrNode(" "), _vm._ssrNode("<form data-v-16c33ddd>", "</form>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('tripType')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trip_type,
      expression: "trip_type"
    }],
    staticClass: "main-select",
    attrs: {
      "name": "trip_type",
      "id": ""
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.trip_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "hidden": "",
      "disabled": ""
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t('DatePlace')) + "\n                ")]), _vm._v(" "), _vm._l(_vm.trips_types, function (trip) {
    return _c('option', {
      key: trip.id,
      domProps: {
        "value": trip.id
      }
    }, [_vm._v(" " + _vm._s(trip.name) + " ")]);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'location-dot']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('price')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('pricePlace')) + " name=\"offer_price\" required=\"required\"" + _vm._ssrAttr("value", _vm.offer_price) + " class=\"inp-spe-tele\" data-v-16c33ddd> "), _vm._ssrNode("<div class=\"icon-float\" data-v-16c33ddd>", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"mb-3 main-inp-cont\" data-v-16c33ddd><h6 class=\"fontBold mainColor font14 font600\" data-v-16c33ddd>" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('offerEnd')) + "\n            ") + "</h6> <div class=\"relative-co\" data-v-16c33ddd><input type=\"date\"" + _vm._ssrAttr("placeholder", _vm.$t('offerEnd')) + " name=\"finish_date\" required=\"required\"" + _vm._ssrAttr("value", _vm.finish_date) + " class=\"inp-spe-tele\" data-v-16c33ddd></div></div> <div class=\"right-just-flex mt-3 d-flex justify-content-end\" data-v-16c33ddd><button class=\"btn-main up lg\" data-v-16c33ddd>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('addOffer')) + "\n          ") + "</button></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"times-box mt-4 mb-4\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<section data-v-16c33ddd>", "</section>", [_vm._ssrNode("<h6 data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeats2')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"table-offer table-offer2 font13\" data-v-16c33ddd>", "</div>", [_vm._ssrNode("<table id=\"myTable\" class=\"table\" data-v-16c33ddd>", "</table>", [_vm._ssrNode("<thead data-v-16c33ddd><tr data-v-16c33ddd><th data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('tripType')) + " ") + "</th> <th data-v-16c33ddd>" + _vm._ssrEscape(_vm._s(_vm.$t('price')) + "  ") + "</th> <th data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('offerEnd')) + " ") + "</th> <th data-v-16c33ddd></th></tr></thead> "), _vm.clientOffers.length > 0 ? _vm._ssrNode("<tbody data-v-16c33ddd>", "</tbody>", _vm._l(_vm.clientOffers, function (offer) {
    return _vm._ssrNode("<tr data-v-16c33ddd>", "</tr>", [_vm._ssrNode("<td data-v-16c33ddd><span class=\"gray-col\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(offer.trip_type) + " ") + "</span></td> <td data-v-16c33ddd><span class=\"gray-col\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(offer.price) + " ر.س / ساعة") + "</span></td> <td class=\"gray-col\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(offer.finish_date) + " ") + "</td> "), _vm._ssrNode("<td class=\"red-col\" data-v-16c33ddd>", "</td>", [_vm._ssrNode("<button type=\"button\" class=\"attr-remove text-danger\" data-v-16c33ddd>", "</button>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1)])], 2);
  }), 0) : _vm._ssrNode("<div class=\"d-flex justify-content-center\" data-v-16c33ddd><p class=\"text-center\" data-v-16c33ddd>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('offerEdi')) + " ") + "</p></div>")], 2)])], 2)]), _vm._ssrNode(" <div class=\"flex-groupme\" data-v-16c33ddd><button" + _vm._ssrAttr("disabled", _vm.disabled5) + " class=\"main-btn up mt-4 wid-85\" data-v-16c33ddd>" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('certain')) + "\n          ") + "</button></div>")], 2)], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/boats/editFeature.vue?vue&type=template&id=16c33ddd&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/boats/editFeature.vue?vue&type=script&lang=js&
/* harmony default export */ var editFeaturevue_type_script_lang_js_ = ({
  data() {
    return {
      name_ar: '',
      name_en: '',
      paid_name_ar: '',
      paid_name_en: '',
      free_additives: [],
      free: [],
      paids: [],
      // default => false 
      paidAdds: false,
      // default => true 
      freeAdds: true,
      // default => false 
      offers: false,
      price: null,
      disabled2: false,
      disabled5: false,
      disabled: false,
      durations: [],
      price: null,
      duration: '',
      duration_price: null,
      // looped duations 
      clientDurations: [],
      // looped offers 
      clientOffers: [],
      trips_types: [],
      trip_type: '',
      offer_price: null,
      finish_date: null,
      sendedDurations: [],
      sendedOffers: [],
      durationId: '',
      selectedDuration: {},
      selectedOffer: {},
      disabled: false
    };
  },
  watch: {
    duration() {
      this.selectedDuration = this.durations.filter(item => item.id == this.duration);
    },
    trip_type() {
      this.selectedOffer = this.trips_types.filter(item => item.id == this.trip_type);
    }
  },
  methods: {
    // get durations 
    async getDurations() {
      await this.$axios.$get('/durations').then(res => {
        this.durations = res.data.durations;
      });
    },
    // get trips types 
    async getTripsTypes() {
      await this.$axios.$get('/trip-types').then(res => {
        this.trips_types = res.data.trip_types;
      });
    },
    // add durations 
    addDuration() {
      this.clientDurations.push({
        "duration_id": this.duration,
        "duration": this.selectedDuration[0].time,
        "price": this.duration_price
      });
      // this.sendedDurations.push({"id":this.duration , "price":this.duration_price})
      this.duration = null;
      this.duration_price = '';
    },
    // remove duration 
    removeDuration(price) {
      this.clientDurations = this.clientDurations.filter(item => item.price !== price);
    },
    // add offers 
    addOffer() {
      this.clientOffers.push({
        "trip_type_id": this.trip_type,
        "trip_type": this.selectedOffer[0].name,
        "price": this.offer_price,
        "finish_date": this.finish_date
      });
      // this.sendedOffers.push({"id":this.trip_type,"price":this.offer_price,"finish_date":this.finish_date});
      this.trip_type = null;
      this.offer_price = null;
      this.finish_date = null;
      console.log(this.clientOffers);
      // console.log(this.sendedOffers)
    },

    // remove offer 
    removeOffer(price) {
      this.clientOffers = this.clientOffers.filter(item => item.price !== price);
    },
    // add features 
    AppendFeatures() {
      this.free.push({
        "name_ar": this.name_ar,
        "name_en": this.name_en
      });
      this.name_ar = "";
      this.name_en = "";
    },
    AppendPaidFeatures() {
      this.paids.push({
        "name_ar": this.paid_name_ar,
        "name_en": this.paid_name_en,
        "price": this.price
      });
      this.paid_name_ar = "";
      this.paid_name_en = "";
      this.price = null;
    },
    // remove feature 
    removeItem(name) {
      this.free = this.free.filter(item => item.name_ar !== name);
    },
    removePaidItem(price) {
      this.paids = this.paids.filter(item => item.price !== price);
    },
    // send feature 
    async addFreeFeature() {
      // this.disabled = true ;

      const fd = new FormData();
      fd.append('product_id', this.$route.params.id);
      if (this.free.length == 0) {
        fd.append('additives', JSON.stringify(this.freeAdditives));
      } else {
        fd.append('additives', JSON.stringify(this.free));
      }
      await this.$axios.$post('/post-free-additives', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal("", `${res.msg}`, "success");
          this.name_ar = '';
          this.name_en = '';

          // document.getElementById('modal-2').style.display = 'none';
          // // document.getElementById('modal-3').style.display = 'block';
          // document.getElementById('modal-2___BV_modal_backdrop_').style.display = 'none';

          setTimeout(() => {
            this.$emit('updateFeature');
          }, 2000);
          this.paidAdds = true;
          this.freeAdds = false;
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
        // this.disabled =/ false ;
      });
    },

    // send paid feature
    async addPaifFreeFeature() {
      this.disabled2 = true;
      const fd = new FormData();
      fd.append('product_id', this.$route.params.id);
      if (this.paids.length == 0) {
        fd.append('additives', JSON.stringify(this.additives));
      } else {
        fd.append('additives', JSON.stringify(this.paids));
      }
      await this.$axios.$post('/post-additives', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal("", `${res.msg}`, "success");
          this.name_ar = '';
          this.name_en = '';

          // document.getElementById('modal-2').style.display = 'none';
          // // document.getElementById('modal-3').style.display = 'block';
          // document.getElementById('modal-2___BV_modal_backdrop_').style.display = 'none';

          setTimeout(() => {
            this.$emit('updateFeature');
          }, 2000);
          this.paidAdds = false;
          this.offers = true;
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
        this.disabled2 = false;
      });
    },
    // send offers 
    async sendOffer() {
      this.disabled5 = true;
      const fd = new FormData();
      fd.append('product_id', this.$route.params.id);
      fd.append('price', this.price);

      // append durations 
      for (let i = 0; i < this.clientDurations.length; i++) {
        this.sendedDurations.push({
          "id": this.clientDurations[i].duration_id,
          "price": this.clientDurations[i].price
        });
      }
      fd.append('durations', JSON.stringify(this.sendedDurations));

      // // append offers 
      // if( this.sendedOffers.length == 0 ){
      //   fd.append('offers',JSON.stringify(this.offers2));
      // }else{

      //   fd.append('offers',JSON.stringify(this.sendedOffers.concat(this.offers2)));
      // }

      // append durations 
      for (let i = 0; i < this.clientOffers.length; i++) {
        this.sendedOffers.push({
          "id": this.clientOffers[i].trip_type_id,
          "price": this.clientOffers[i].price,
          "finish_date": this.clientOffers[i].finish_date
        });
      }
      fd.append('offers', JSON.stringify(this.sendedOffers));
      await this.$axios.$post('/post-offers', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal("", `${res.msg}`, "success");

          // document.getElementById('modal-6').style.display = 'none';
          // // document.getElementById('modal-3').style.display = 'block';
          // document.getElementById('modal-6___BV_modal_backdrop_').style.display = 'none';    

          this.$emit('closeModal');
          setTimeout(() => {
            location.reload();
          }, 2000);

          // this.paidAdds = true ;
          // this.freeAdds = false ;
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
        this.disabled5 = false;
      });
    }

    // // get single product 
    // async getSingleProduct(){
    //     await this.$axios.$get(`/single-product?product_id=${this.$route.params.id}`)
    //     .then( (res)=>{
    //         this.free_additives = res.data.product.free_additives  ;
    //         // console.log(this.free_additives)
    //     } )
    // }
  },

  props: {
    freeAdditives: Array,
    specialOffers: Array,
    offers2: Array,
    additives: Array
  },
  mounted() {
    this.free = this.freeAdditives;
    this.paids = this.additives;
    this.clientDurations = this.specialOffers;
    this.clientOffers = this.offers2;
    console.log(this.sendedDurations);
  },
  beforeMount() {
    this.getDurations();
    this.getTripsTypes();
  }
});
// CONCATENATED MODULE: ./components/boats/editFeature.vue?vue&type=script&lang=js&
 /* harmony default export */ var boats_editFeaturevue_type_script_lang_js_ = (editFeaturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/boats/editFeature.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(282)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  boats_editFeaturevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "16c33ddd",
  "61064b65"
  
)

/* harmony default export */ var editFeature = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=boats-edit-feature.js.map