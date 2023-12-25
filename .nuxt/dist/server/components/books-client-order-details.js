exports.ids = [10];
exports.modules = {

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("92102d60", content, true, context)
};

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientOrderDetails_vue_vue_type_style_index_0_id_1b209d2e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientOrderDetails_vue_vue_type_style_index_0_id_1b209d2e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientOrderDetails_vue_vue_type_style_index_0_id_1b209d2e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientOrderDetails_vue_vue_type_style_index_0_id_1b209d2e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientOrderDetails_vue_vue_type_style_index_0_id_1b209d2e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-main:disabled{cursor:not-allowed;opacity:.4}.payment_radio{height:25px;margin-left:20px;width:25px}.payment_image{height:28px;width:28px}.btn-danger{background-color:#bd1212}.pill{align-items:center;border-radius:4px;color:#fff;display:flex;float:left;font-size:14px;height:36px;justify-content:center;margin-left:12px;margin-top:-29px;width:193px}.checkStep{color:#fff;left:29%;position:absolute;top:12px}.real-circle{position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/books/ClientOrderDetails.vue?vue&type=template&id=1b209d2e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "book-trip section-pad"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode((_vm.order.status == 'inprogress' && _vm.order.payment_status === false ? "<div class=\"text-done-me\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('orderAccept')) + " ") + "</div>" : "<!---->") + " <div class=\"flex-groupme\"><h5 class=\"main-title color-main font600 mb-5\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('OrderDetails')) + " ") + "</h5></div> "), _vm._ssrNode("<div class=\"row justify-content-center mt-2 mb-5\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"flex-all-new\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("circle-spe text-center position-relative", {
    'main-cir': _vm.order.status == 'pending' || _vm.order.status == 'finished' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress'
  }) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("real-circle", {
    'cir-active': _vm.order.status == 'pending' || _vm.order.status == 'finished' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress'
  }) + ">", "</div>", [_vm.order.status == 'pending' || _vm.order.status == 'finished' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress' ? _c('font-awesome-icon', {
    staticClass: "checkStep",
    attrs: {
      "icon": ['fas', 'check']
    }
  }) : _vm._e()], 1), _vm._ssrNode(" <div class=\"circle-text mt-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('new')) + " ") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("circle-spe text-center position-relative", {
    'main-cir': _vm.order.status == 'finished' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress'
  }) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("real-circle", {
    'cir-active': _vm.order.status == 'finished' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress'
  }) + ">", "</div>", [_vm.order.status == 'finished' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress' ? _c('font-awesome-icon', {
    staticClass: "checkStep",
    attrs: {
      "icon": ['fas', 'check']
    }
  }) : _vm._e()], 1), _vm._ssrNode(" <div class=\"circle-text mt-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('paymentWait')) + " ") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("circle-spe text-center position-relative", {
    'main-cir': _vm.order.status == 'intransit' && _vm.order.payment_status == true || _vm.order.status == 'inprogress' && _vm.order.payment_status == true || _vm.order.status == 'finished'
  }) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("real-circle", {
    'cir-active': _vm.order.status == 'intransit' && _vm.order.payment_status == true || _vm.order.status == 'inprogress' && _vm.order.payment_status == true || _vm.order.status == 'finished'
  }) + ">", "</div>", [_vm.order.status == 'intransit' && _vm.order.payment_status == true || _vm.order.status == 'inprogress' && _vm.order.payment_status == true || _vm.order.status == 'finished' ? _c('font-awesome-icon', {
    staticClass: "checkStep",
    attrs: {
      "icon": ['fas', 'check']
    }
  }) : _vm._e()], 1), _vm._ssrNode(" <div class=\"circle-text mt-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('active')) + " ") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("circle-spe text-center position-relative", {
    'main-cir': _vm.order.status == 'finished'
  }) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("real-circle", {
    'cir-active': _vm.order.status == 'finished'
  }) + ">", "</div>", [_vm.order.status == 'finished' ? _c('font-awesome-icon', {
    staticClass: "checkStep",
    attrs: {
      "icon": ['fas', 'check']
    }
  }) : _vm._e()], 1), _vm._ssrNode(" <div class=\"circle-text mt-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('finished')) + " ") + "</div>")], 2)], 2)])]), _vm._ssrNode(" <div class=\"card-white card-pad\"><div class=\"row\"><div class=\"col-md-6 col-12\"><div class=\"card-right text-center\"><div class=\"card-t\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('goDate')) + " ") + "</div> <div class=\"card-f\"><div class=\"card-f-text color-main\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.go_date) + " ") + "</div></div></div></div> <div class=\"col-md-6 col-12\"><div class=\"card-right text-center\"><div class=\"card-t\">" + _vm._ssrEscape(_vm._s(_vm.$t('returnDate'))) + "</div> <div class=\"card-f\"><div class=\"card-f-text color-main\">" + _vm._ssrEscape(_vm._s(_vm.order.return_date)) + "</div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"card-white mt-5\">", "</div>", [_vm._ssrNode("<div class=\"card-title text-center\">", "</div>", [_vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('OrderDetails')) + "\n\n          ") + " "), _vm.order.status == 'inprogress' && _vm.order.payment_status == true ? _vm._ssrNode("<div>", "</div>", [_c('nuxt-link', {
    staticClass: "all-price-ma pill",
    attrs: {
      "to": '/client/pill/' + this.$route.params.id
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('orderPill')) + " ")])], 1) : _vm._e()], 2), _vm._ssrNode(" <div class=\"card-white-body p-speee\"><div class=\"col-md-6 col-12 margin-auto mb-3\"><div class=\"table-offer\"><table id=\"myTable\" class=\"table\"><thead><tr><th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('numHours')) + " ") + "</th> <th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('gooDate')) + " ") + "</th></tr></thead> <tbody><tr><td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.hours) + " ساعة") + "</span></td> <td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.go_time) + " ") + "</span></td></tr></tbody></table></div></div> <div class=\"col-md-8 col-12 margin-auto mb-3\"><div class=\"row mt-3\"><div class=\"col-md-6 mb-3 pl-md-5\"><h5 class=\"mb-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('freeAdditivs')) + " ") + "</h5> " + (_vm.free_additives.length > 0 ? "<section>" + _vm._ssrList(_vm.free_additives, function (free) {
    return "<div class=\"flex-bet yes-rap gray-col\"><div class=\"bet-right mb-3\">" + _vm._ssrEscape(" " + _vm._s(free.name) + " ") + "</div> <div class=\"bet-right mb-3\">" + _vm._ssrEscape(" " + _vm._s(free.qty) + " ") + "</div></div>";
  }) + "</section>" : "<section><p class=\"text-center\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('noFree')) + " ") + "</p></section>") + "</div> <div class=\"col-md-6 mb-3 pl-md-5\"><h5 class=\"mb-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('paidFeatures')) + " ") + "</h5> " + (_vm.additives.length > 0 ? "<section>" + _vm._ssrList(_vm.additives, function (free) {
    return "<div class=\"flex-bet yes-rap gray-col\"><div class=\"bet-right mb-3\">" + _vm._ssrEscape(" " + _vm._s(free.name) + " ") + "</div> <div class=\"bet-right mb-3\">" + _vm._ssrEscape(" " + _vm._s(free.qty) + " ") + "</div></div>";
  }) + "</section>" : "<section><p class=\"text-center\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('noPaid')) + " ") + "</p></section>") + "</div></div> <h5 class=\"mb-3\">" + _vm._ssrEscape(_vm._s(_vm.$t('notes')) + ":") + "</h5> <p class=\"para-w\">" + _vm._ssrEscape("\n              " + _vm._s(_vm.order.description) + "\n            ") + "</p> " + (_vm.is_delegate_refused ? "<div><h5 class=\"mb-3\"> سبب رفض الرحلة:</h5> <p class=\"para-w\">" + _vm._ssrEscape("\n                " + _vm._s(_vm.delegate_refused_reason) + "\n              ") + "</p></div>" : "<!---->") + " " + (_vm.is_user_canceled ? "<div><h5 class=\"mb-3\"> سبب الغاء الرحلة:</h5> <p class=\"para-w\">" + _vm._ssrEscape("\n                " + _vm._s(_vm.user_refused_reason) + "\n              ") + "</p></div>" : "<!---->") + "</div> <div class=\"col-md-6 col-12 margin-auto\"><div class=\"table-offer\"><table id=\"myTable\" class=\"table\"><thead><tr><th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('reserveCount')) + " ") + "</th> <th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('additivesMoney')) + " ") + "</th></tr></thead> <tbody><tr><td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.price) + " ر.س") + "</span></td> <td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.additives_price) + " ر.س ") + "</span></td></tr></tbody></table></div></div> <div class=\"col-md-6 col-12 margin-auto mb-4\"><div class=\"table-offer spe-table-o\"><table id=\"myTable\" class=\"table\"><thead><tr><th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('discountAmount')) + " ") + "</th> <th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('additiveValue')) + " ") + "</th></tr></thead> <tbody><tr><td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.discount) + " ر.س ") + "</span></td> <td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.added_value) + " ر.س ") + "</span></td></tr></tbody></table></div> <div class=\"flex-bet all-price-ma\"><div class=\"right-all\">" + _vm._ssrEscape(_vm._s(_vm.$t('total')) + " :") + "</div> <div class=\"right-all\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.total_price) + " ر.س") + "</div></div></div></div>")], 2), _vm._ssrNode(" "), _vm.order.status == 'inprogress' && _vm.order.payment_status == false ? _vm._ssrNode("<div class=\"flex-groupme\">", "</div>", [_c('button', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.modal-19",
      modifiers: {
        "modal-19": true
      }
    }],
    staticClass: "btn-main up mt-4 lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._ssrNode(_vm._ssrEscape("\n          " + _vm._s(_vm.$t('pay')) + "\n        "))]), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": "modal-19"
    }
  }, [_c('section', {
    staticClass: "payment_method"
  }, [_c('h5', {
    staticClass: "text-center"
  }, [_vm._v(" " + _vm._s(_vm.$t('payPlace')) + "  ")]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "d-flex align-items-center mt-4"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pay_method,
      expression: "pay_method"
    }],
    staticClass: "payment_radio",
    attrs: {
      "type": "radio",
      "name": "pay_method",
      "id": "payment"
    },
    domProps: {
      "checked": _vm._q(_vm.pay_method, null)
    },
    on: {
      "change": function ($event) {
        _vm.pay_method = null;
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "d-flex",
    attrs: {
      "for": "payment"
    }
  }, [_c('img', {
    staticClass: "payment_image",
    attrs: {
      "src": _vm.order.payment_method.image,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', [_c('h6', {
    staticClass: "color-main"
  }, [_vm._v(" " + _vm._s(_vm.order.payment_method.name) + " ")]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(" " + _vm._s(_vm.order.payment_method.desc) + " ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "flex-groupme mb-4 mt-4"
  }, [_vm.order.payment_method.key == 'wallet' ? _c('button', {
    staticClass: "btn-main up lg",
    attrs: {
      "type": "button",
      "disabled": _vm.payment_disabled
    },
    on: {
      "click": _vm.paymentWithWallet
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('pay')) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.order.payment_method.key == 'online' ? _c('a', {
    staticClass: "btn-main up lg",
    attrs: {
      "disabled": _vm.payment_disabled,
      "href": 'https://backend.bookaboat.app/pay-invoice/' + _vm.order.id,
      "target": "_blank"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('pay')) + "\n              ")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn-main up lg light-b",
    staticStyle: {
      "color": "#111b5a !important"
    },
    on: {
      "click": _vm.closePayment
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('return')) + " ")])])])])])], 2) : _vm._e(), _vm._ssrNode(" "), _c('b-modal', {
    attrs: {
      "id": "modal-chooseMethod"
    }
  }, [_c('section', {
    staticClass: "payment_method"
  }, [_c('h5', {
    staticClass: "text-center"
  }, [_vm._v(" اختر وسيلة الدفع  ")]), _vm._v(" "), _c('form', [_vm._l(_vm.brands, function (brand) {
    return _c('div', {
      key: brand.id,
      staticClass: "d-flex align-items-center mt-4"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.brand_type,
        expression: "brand_type"
      }],
      staticClass: "payment_radio",
      attrs: {
        "type": "radio",
        "name": "brand_type"
      },
      domProps: {
        "value": brand.brand,
        "checked": _vm._q(_vm.brand_type, brand.brand)
      },
      on: {
        "change": function ($event) {
          _vm.brand_type = brand.brand;
        }
      }
    }), _vm._v(" "), _c('label', {
      staticClass: "d-flex",
      attrs: {
        "for": "payment"
      }
    }, [_c('img', {
      staticClass: "payment_image",
      attrs: {
        "src": brand.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', [_c('h6', {
      staticClass: "color-main"
    }, [_vm._v(" " + _vm._s(brand.name) + " ")]), _vm._v(" "), _c('p', {
      staticClass: "text-muted"
    }, [_vm._v(" " + _vm._s(brand.brand) + " ")])])])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "flex-groupme mb-4 mt-4"
  }, [_c('button', {
    staticClass: "btn-main up lg",
    attrs: {
      "type": "button",
      "brand_disabled": _vm.brand_disabled
    },
    on: {
      "click": _vm.paymentOnline
    }
  }, [_vm._v(" \n                  استمرار\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn-main up lg light-b",
    staticStyle: {
      "color": "#111b5a !important"
    },
    on: {
      "click": _vm.closeBrands
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('return')) + " ")])])], 2)])]), _vm._ssrNode(" " + ((_vm.order.status == 'inprogress' || _vm.order.status == 'pending') && _vm.order.payment_status == false ? "<div class=\"flex-groupme\"><button type=\"button\" class=\"btn-main btn-danger up mt-4 lg\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('cancelTrip')) + "\n        ") + "</button></div>" : "<!---->") + " " + (_vm.order.status == 'intransit' && _vm.order.payment_status == true || _vm.order.status == 'inprogress' && _vm.order.payment_status == true ? "<div class=\"flex-groupme\"><button type=\"button\" class=\"btn-main up mt-4 lg\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('finishTrip')) + "\n        ") + "</button></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modalOverLay\"" + _vm._ssrStyle(null, null, {
    display: _vm.showRate ? '' : 'none'
  }) + ">", "</div>", [_c('booksRate', {
    attrs: {
      "delegate_name": _vm.delegate_name,
      "delegate_id": _vm.delegate_id,
      "delegate_avatar": _vm.delegate_avatar,
      "user_name": _vm.user_name,
      "user_avatar": _vm.user_avatar,
      "user_id": _vm.user_id
    },
    on: {
      "closeRate": _vm.closeRate
    }
  })], 1), _vm._ssrNode(" " + (_vm.showCancel ? "<div class=\"modalOverLay\"><section class=\"modal_body d-flex flex-column\"><div class=\"flex-groupme mb-2\"></div> <h5 class=\"text-center mb-3 font-bold\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('cancelReason')) + "\n          ") + "</h5> <div>" + _vm._ssrList(_vm.reasons, function (item) {
    return "<div class=\"d-flex mb-3 px-4\"><input type=\"radio\" name=\"reason\"" + _vm._ssrAttr("id", 'reasnonItem' + item.id) + _vm._ssrAttr("value", item.reason) + _vm._ssrAttr("checked", _vm._q(_vm.reason, item.reason)) + " style=\"margin:0 10px\"> <label" + _vm._ssrAttr("for", 'reasnonItem' + item.id) + ">" + _vm._ssrEscape(" " + _vm._s(item.reason) + " ") + "</label></div>";
  }) + "</div> <div class=\"flex-groupme mb-4\"><button class=\"btn-danger btn-main up lg\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('cancel')) + " ") + "</button> <button class=\"btn-main up lg light-b\" style=\"color:#111b5a !important\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('return')) + " ") + "</button></div></section></div>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/books/ClientOrderDetails.vue?vue&type=template&id=1b209d2e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/books/ClientOrderDetails.vue?vue&type=script&lang=js&
/* harmony default export */ var ClientOrderDetailsvue_type_script_lang_js_ = ({
  data() {
    return {
      order: {},
      additives: [],
      free_additives: [],
      showAccept: false,
      order_id: '',
      showCancel: false,
      reasons: [],
      reason: false,
      showRate: false,
      user_id: '',
      user_name: '',
      user_avatar: '',
      delegate_id: '',
      delegate_avatar: '',
      delegate_name: '',
      payment_disabled: true,
      pay_method: '',
      delegate_refused_reason: '',
      is_delegate_refused: null,
      user_refused_reason: '',
      is_user_canceled: null,
      brands: [],
      brand_type: null,
      brand_disabled: true,
      brand_name: ''
    };
  },
  watch: {
    reason() {
      console.log(this.reason);
    },
    pay_method() {
      if (this.pay_method !== '') {
        this.payment_disabled = false;
      }
    },
    brand_type() {
      console.log(this.brand_type);
      if (this.brand_type !== null) {
        this.brand_disabled = false;
      }
    }
  },
  methods: {
    // get payment brands
    async getBrands() {
      await this.$axios.$get('/hyperpay-brands', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.brands = res.data.hyperpay_brands;
      });
    },
    // pay online  
    async paymentOnline() {
      await this.$axios.$post();
    },
    // get cancel orders 
    async getRefuseReasons() {
      await this.$axios.$get('/cancel-reasons', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.reasons = res.data.reasons;
      });
    },
    closeRate() {
      this.showRate = false;
      this.getDelegateOrders();
    },
    async getDelegateOrders() {
      await this.$axios.$get(`/user-single-order?order_id=${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.order = res.data.order;
        this.additives = res.data.order.additives;
        this.free_additives = res.data.order.free_additives;
        this.user_id = res.data.order.user_id;
        this.user_avatar = res.data.order.user_avatar;
        this.user_name = res.data.order.user_name;
        this.delegate_name = res.data.order.delegate_name;
        this.delegate_id = res.data.order.delegate_id;
        this.delegate_avatar = res.data.order.delegate_avatar;
        this.delegate_refused_reason = res.data.order.delegate_refused_reason;
        this.is_delegate_refused = res.data.order.is_delegate_refused;
        this.is_user_canceled = res.data.order.is_user_canceled;
        this.user_refused_reason = res.data.order.user_refused_reason;
      });
    },
    closePayment() {
      document.getElementById('modal-19').style.display = 'none';
      document.getElementById('modal-19___BV_modal_backdrop_').style.display = 'none';
    },
    closeBrands() {
      document.getElementById('modal-chooseMethod').style.display = 'none';
      document.getElementById('modal-chooseMethod___BV_modal_backdrop_').style.display = 'none';
    },
    // cancel order 
    async endTrip() {
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id);
      fd.append('delivery_status', 'inprogress');
      await this.$axios.$post('/user-finish-order', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.showRate = true;
          }, 2000);
        } else {
          this.$swal('', `${res.msg}`, "error");
        }
      });
    },
    cancelOrder() {
      this.showCancel = true;
    },
    closeRefuse() {
      this.showCancel = false;
    },
    // refresh order after accept order => متابعة القارب
    refreshOrder() {
      this.showAccept = false;
      this.getDelegateOrders();
    },
    // payment with wallet 
    async paymentWithWallet() {
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id);
      await this.$axios.$post(`/pay-order-with-wallet`, fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.showCancel = false;
            this.getDelegateOrders();
          }, 2000);
        } else {
          this.$swal('', `${res.msg}`, "error");
        }
      });
    },
    // refuse order 
    async refuseOrder() {
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id);
      fd.append('reason', this.reason);
      await this.$axios.$post('/cancel-order', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.$router.push('/client/books/MyBooks');
          }, 2000);
        } else {
          this.$swal('', `${res.msg}`, "success");
        }
      });
    },
    // delegate start trip 
    async startTrip() {
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id);
      fd.append('delivery_status', 'delivering');
      await this.$axios.$post('/delegate-start-order', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.getDelegateOrders();
        } else {
          this.$swal('', `${res.msg}`, "error");
        }
      });
    }
  },
  mounted() {
    this.getDelegateOrders();
    this.getRefuseReasons();
    this.getBrands();
    this.order_id = this.$route.params.id;
  }
});
// CONCATENATED MODULE: ./components/books/ClientOrderDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var books_ClientOrderDetailsvue_type_script_lang_js_ = (ClientOrderDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/books/ClientOrderDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(292)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  books_ClientOrderDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "66fc47ff"
  
)

/* harmony default export */ var ClientOrderDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=books-client-order-details.js.map