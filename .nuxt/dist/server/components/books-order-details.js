exports.ids = [14];
exports.modules = {

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/91068-message-sent-successfully-plane.6d67390.gif";

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("500ee5be", content, true, context)
};

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_style_index_0_id_3ed9ccdf_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(246);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_style_index_0_id_3ed9ccdf_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_style_index_0_id_3ed9ccdf_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_style_index_0_id_3ed9ccdf_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderDetails_vue_vue_type_style_index_0_id_3ed9ccdf_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn-danger{background-color:#bd1212}.pill{align-items:center;border-radius:4px;color:#fff;display:flex;float:left;font-size:14px;height:36px;justify-content:center;margin-left:12px;margin-top:-29px;width:193px}.checkStep{color:#fff;left:29%;position:absolute;top:12px}.real-circle{position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/books/orderDetails.vue?vue&type=template&id=3ed9ccdf&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "book-trip section-pad"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode((_vm.order.status == 'inprogress' && _vm.order.payment_status === false ? "<div class=\"text-done-me\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('orderAccept')) + " ") + "</div>" : "<!---->") + " " + (_vm.order.status == 'inprogress' && _vm.order.payment_status === true ? "<div class=\"text-done-me\"> تم الدفع من قبل العميل </div>" : "<!---->") + " <div class=\"flex-groupme\"><h5 class=\"main-title color-main font600 mb-5\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('OrderDetails')) + " ") + "</h5></div> "), _vm._ssrNode("<div class=\"row justify-content-center mt-2 mb-5\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-12\">", "</div>", [_vm._ssrNode("<div class=\"flex-all-new\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("circle-spe text-center position-relative", {
    'main-cir': _vm.order.status == 'pending' || _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress'
  }) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("real-circle", {
    'cir-active': _vm.order.status == 'pending' || _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress'
  }) + ">", "</div>", [_vm.order.status == 'pending' || _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress' ? _c('font-awesome-icon', {
    staticClass: "checkStep",
    attrs: {
      "icon": ['fas', 'check']
    }
  }) : _vm._e()], 1), _vm._ssrNode(" <div class=\"circle-text mt-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('new')) + " ") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("circle-spe text-center position-relative", {
    'main-cir': _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress'
  }) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("real-circle", {
    'cir-active': _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress'
  }) + ">", "</div>", [_vm.order.status == 'finished' || _vm.order.status == 'finished_from_user' || _vm.order.status == 'intransit' || _vm.order.status == 'inprogress' ? _c('font-awesome-icon', {
    staticClass: "checkStep",
    attrs: {
      "icon": ['fas', 'check']
    }
  }) : _vm._e()], 1), _vm._ssrNode(" <div class=\"circle-text mt-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('paymentWait')) + " ") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("circle-spe text-center position-relative", {
    'main-cir': _vm.order.status == 'intransit' || _vm.order.status == 'inprogress' && _vm.order.payment_status == true || _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user'
  }) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("real-circle", {
    'cir-active': _vm.order.status == 'intransit' || _vm.order.status == 'inprogress' && _vm.order.payment_status == true || _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user'
  }) + ">", "</div>", [_vm.order.status == 'intransit' || _vm.order.status == 'inprogress' && _vm.order.payment_status == true || _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user' ? _c('font-awesome-icon', {
    staticClass: "checkStep",
    attrs: {
      "icon": ['fas', 'check']
    }
  }) : _vm._e()], 1), _vm._ssrNode(" <div class=\"circle-text mt-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('active')) + " ") + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("circle-spe text-center position-relative", {
    'main-cir': _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user'
  }) + ">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("real-circle", {
    'cir-active': _vm.order.status == 'finished' || _vm.order.status == 'finished_from_user'
  }) + ">", "</div>", [_vm.order.status == 'finished' || _vm.order.status == 'finished_from_user' ? _c('font-awesome-icon', {
    staticClass: "checkStep",
    attrs: {
      "icon": ['fas', 'check']
    }
  }) : _vm._e()], 1), _vm._ssrNode(" <div class=\"circle-text mt-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('finished')) + " ") + "</div>")], 2)], 2)])]), _vm._ssrNode(" <div class=\"card-white card-pad\"><div class=\"row\"><div class=\"col-md-6 col-12\"><div class=\"card-right text-center\"><div class=\"card-t\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('goDate')) + " ") + "</div> <div class=\"card-f\"><div class=\"card-f-text color-main\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.go_date) + " ") + "</div></div></div></div> <div class=\"col-md-6 col-12\"><div class=\"card-right text-center\"><div class=\"card-t\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('date')) + " " + _vm._s(_vm.$t('return'))) + "</div> <div class=\"card-f\"><div class=\"card-f-text color-main\">" + _vm._ssrEscape(_vm._s(_vm.order.return_date)) + "</div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"card-white mt-5\">", "</div>", [_vm._ssrNode("<div class=\"card-title text-center\">", "</div>", [_vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('OrderDetails')) + "\n\n          ") + " "), _vm.order.status == 'intransit' ? _vm._ssrNode("<div>", "</div>", [_c('nuxt-link', {
    staticClass: "all-price-ma pill",
    attrs: {
      "to": '/provider/pill/' + this.$route.params.id
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('orderPill')) + " ")])], 1) : _vm._e()], 2), _vm._ssrNode(" <div class=\"card-white-body p-speee\"><div class=\"col-md-6 col-12 margin-auto mb-3\"><div class=\"table-offer\"><table id=\"myTable\" class=\"table\"><thead><tr><th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('numHours')) + " ") + "</th> <th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('gooDate')) + " ") + "</th></tr></thead> <tbody><tr><td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.hours) + " " + _vm._s(_vm.$t('hour')) + " ") + "</span></td> <td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.go_time) + " ") + "</span></td></tr></tbody></table></div></div> <div class=\"col-md-8 col-12 margin-auto mb-3\"><div class=\"row mt-3\"><div class=\"col-md-6 mb-3 pl-md-5\"><h5 class=\"mb-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('freeAdditivs')) + " ") + "</h5> " + (_vm.free_additives.length > 0 ? "<section>" + _vm._ssrList(_vm.free_additives, function (free) {
    return "<div class=\"flex-bet yes-rap gray-col\"><div class=\"bet-right mb-3\">" + _vm._ssrEscape(" " + _vm._s(free.name) + " ") + "</div> <div class=\"bet-right mb-3\">" + _vm._ssrEscape(" " + _vm._s(free.qty) + " ") + "</div></div>";
  }) + "</section>" : "<section><p class=\"text-center\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('noFree')) + " ") + "</p></section>") + "</div> <div class=\"col-md-6 mb-3 pl-md-5\"><h5 class=\"mb-2\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('paidFeatures')) + " ") + "</h5> " + (_vm.additives.length > 0 ? "<section>" + _vm._ssrList(_vm.additives, function (free) {
    return "<div class=\"flex-bet yes-rap gray-col\"><div class=\"bet-right mb-3\">" + _vm._ssrEscape(" " + _vm._s(free.name) + " ") + "</div> <div class=\"bet-right mb-3\">" + _vm._ssrEscape(" " + _vm._s(free.qty) + " ") + "</div></div>";
  }) + "</section>" : "<section><p class=\"text-center\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('noPaid')) + " ") + "</p></section>") + "</div></div> <h5 class=\"mb-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('notes')) + " :") + "</h5> <p class=\"para-w\">" + _vm._ssrEscape("\n              " + _vm._s(_vm.order.description) + "\n            ") + "</p> " + (_vm.is_delegate_refused ? "<div><h5 class=\"mb-3\"> سبب رفض الرحلة:</h5> <p class=\"para-w\">" + _vm._ssrEscape("\n                " + _vm._s(_vm.delegate_refused_reason) + "\n              ") + "</p></div>" : "<!---->") + " " + (_vm.is_user_canceled ? "<div><h5 class=\"mb-3\"> سبب الغاء الرحلة:</h5> <p class=\"para-w\">" + _vm._ssrEscape("\n                " + _vm._s(_vm.user_refused_reason) + "\n              ") + "</p></div>" : "<!---->") + "</div> <div class=\"col-md-6 col-12 margin-auto\"><div class=\"table-offer\"><table id=\"myTable\" class=\"table\"><thead><tr><th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('reserveCount')) + " ") + "</th> <th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('additivesMoney')) + " ") + "</th></tr></thead> <tbody><tr><td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.price) + " ر.س") + "</span></td> <td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.additives_price) + " ر.س ") + "</span></td></tr></tbody></table></div></div> <div class=\"col-md-6 col-12 margin-auto mb-4\"><div class=\"table-offer spe-table-o\"><table id=\"myTable\" class=\"table\"><thead><tr><th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('discountAmount')) + " ") + "</th> <th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('additiveValue')) + " ") + "</th></tr></thead> <tbody><tr><td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.discount) + " ر.س ") + "</span></td> <td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.added_value) + " ر.س ") + "</span></td></tr></tbody></table></div> <div class=\"table-offer spe-table-o\"><table id=\"myTable\" class=\"table\"><thead><tr><th> عمولة التطبيق </th></tr></thead> <tbody><tr><td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.app_percentage) + " ر.س ") + "</span></td></tr></tbody></table></div> <div class=\"flex-bet all-price-ma\"><div class=\"right-all\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('total')) + " :") + "</div> <div class=\"right-all\">" + _vm._ssrEscape(" " + _vm._s(_vm.order.total_price) + " ر.س") + "</div></div></div></div>")], 2), _vm._ssrNode(" " + (_vm.order.status == 'pending' ? "<div class=\"flex-groupme\"><button type=\"button\" class=\"btn-main up mt-4 lg\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('accOrder')) + "\n        ") + "</button> <button type=\"button\" class=\"btn-main btn-danger up mt-4 lg\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('refuse_order')) + "\n        ") + "</button></div>" : "<!---->") + " " + (_vm.order.status == 'inprogress' && _vm.order.payment_status === true ? "<div class=\"flex-groupme\"><button type=\"button\" class=\"btn-main up mt-4 lg\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('start_trip')) + "\n        ") + "</button></div>" : "<!---->") + " " + (_vm.order.status == 'intransit' ? "<div class=\"flex-groupme\"><button type=\"button\" class=\"btn-main up mt-4 lg\">" + _vm._ssrEscape("\n          " + _vm._s(_vm.$t('finishTrip')) + "\n        ") + "</button></div>" : "<!---->"))], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"modalOverLay\"" + _vm._ssrStyle(null, null, {
    display: _vm.showAccept ? '' : 'none'
  }) + ">", "</div>", [_vm._ssrNode("<section class=\"modal_body d-flex flex-column justify-content-center align-items-center\">", "</section>", [_vm._ssrNode("<div class=\"flex-groupme mb-2\"><img" + _vm._ssrAttr("src", __webpack_require__(173)) + " alt class=\"modal-img-m\"></div> <h5 class=\"text-center mb-3 font-bold\">\n              تهانينا تم ارسال الطلب في انتظار الدفع من العميل\n            </h5> <div class=\"text-center mb-4 font14 gray-col\">\n              يمكنك متابعة الطلب من خلال صفحة حجوزاتي\n            </div> "), _vm._ssrNode("<div class=\"flex-groupme mb-4\">", "</div>", [_vm._ssrNode("<button class=\"btn-main up lg\">متابعة الطلب</button> "), _c('nuxt-link', {
    staticClass: "btn-main up lg light-b",
    staticStyle: {
      "color": "#111b5a !important"
    },
    attrs: {
      "to": "/provider/HomePage"
    }
  }, [_vm._v("الرئيسية")])], 2)], 2)]), _vm._ssrNode(" <div class=\"modalOverLay\"" + _vm._ssrStyle(null, null, {
    display: _vm.showRefuse ? '' : 'none'
  }) + "><section class=\"modal_body d-flex flex-column\"><div class=\"flex-groupme mb-2\"></div> <h5 class=\"text-center mb-3 font-bold\">" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('refuseOrder')) + "\n            ") + "</h5> <div>" + _vm._ssrList(_vm.reasons, function (item) {
    return "<div class=\"d-flex mb-3 px-4\"><input type=\"radio\" name=\"reason\"" + _vm._ssrAttr("id", 'reasnonItem' + item.id) + _vm._ssrAttr("value", item.reason) + _vm._ssrAttr("checked", _vm._q(_vm.reason, item.reason)) + " style=\"margin:0 10px\"> <label" + _vm._ssrAttr("for", 'reasnonItem' + item.id) + ">" + _vm._ssrEscape(" " + _vm._s(item.reason) + " ") + "</label></div>";
  }) + "</div> <div class=\"flex-groupme mb-4\"><button class=\"btn-danger btn-main up lg\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('cancel')) + " ") + "</button> <button class=\"btn-main up lg light-b\" style=\"color:#111b5a !important\">" + _vm._ssrEscape(_vm._s(_vm.$t('return'))) + "</button></div></section></div> "), _vm._ssrNode("<div class=\"modalOverLay\"" + _vm._ssrStyle(null, null, {
    display: _vm.showRate ? '' : 'none'
  }) + ">", "</div>", [_c('booksRate', {
    attrs: {
      "user_name": _vm.user_name,
      "user_avatar": _vm.user_avatar,
      "user_id": _vm.user_id
    },
    on: {
      "closeRate": _vm.closeRate
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/books/orderDetails.vue?vue&type=template&id=3ed9ccdf&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/books/orderDetails.vue?vue&type=script&lang=js&
/* harmony default export */ var orderDetailsvue_type_script_lang_js_ = ({
  data() {
    return {
      order: {},
      additives: [],
      free_additives: [],
      showAccept: false,
      order_id: '',
      showRefuse: false,
      reasons: [],
      reason: false,
      showRate: false,
      user_id: '',
      user_name: '',
      user_avatar: '',
      delegate_refused_reason: '',
      is_delegate_refused: null,
      user_refused_reason: '',
      is_user_canceled: null
    };
  },
  watch: {
    reason() {
      console.log(this.reason);
    }
  },
  methods: {
    closeRate() {
      this.showRate = false;
    },
    async getDelegateOrders() {
      await this.$axios.$get(`/delegate-single-order?order_id=${this.$route.params.id}`, {
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
        this.delegate_refused_reason = res.data.order.delegate_refused_reason;
        this.is_delegate_refused = res.data.order.is_delegate_refused;
        this.is_user_canceled = res.data.order.is_user_canceled;
        this.user_refused_reason = res.data.order.user_refused_reason;
      });
    },
    // accept order 
    async acceptOrder() {
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id);
      await this.$axios.$post('/delegate-accept-order', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.showAccept = true;
          this.getDelegateOrders();
        } else {
          this.$swal('', `${res.msg}`, "error");
        }
      });
    },
    // get refuse orders 
    async getRefuseReasons() {
      await this.$axios.$get('/refuse-reasons', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.reasons = res.data.reasons;
      });
    },
    // refuse order 
    async refuseOrder() {
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id);
      fd.append('reason', this.reason);
      await this.$axios.$post('/delegate-refuse-order', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal('', `${res.msg}`, "success");
          setTimeout(() => {
            this.$router.push('/provider/books/MyBooks');
          }, 2000);
        } else {
          this.$swal('', `${res.msg}`, "success");
        }
      });
    },
    // cancel order 
    async endTrip() {
      const fd = new FormData();
      fd.append('order_id', this.$route.params.id);
      fd.append('delivery_status', 'delivering');
      await this.$axios.$post('/finish-order', fd, {
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
    showRefuseModal() {
      this.showRefuse = true;
    },
    closeRefuse() {
      this.showRefuse = false;
    },
    // refresh order after accept order => متابعة القارب
    refreshOrder() {
      this.showAccept = false;
      this.getDelegateOrders();
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
    this.order_id = this.$route.params.id;
  }
});
// CONCATENATED MODULE: ./components/books/orderDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var books_orderDetailsvue_type_script_lang_js_ = (orderDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/books/orderDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(296)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  books_orderDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e31ea018"
  
)

/* harmony default export */ var orderDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=books-order-details.js.map