exports.ids = [7];
exports.modules = {

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/boats/offers.vue?vue&type=template&id=16d4c512&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm._ssrNode("<h5 class=\"mt-4 text-center\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addPrices')) + " ") + "</h5> "), _vm._ssrNode("<div class=\"p-4\">", "</div>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('hourPrice')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('hourPlace')) + " name=\"price\" required=\"required\"" + _vm._ssrAttr("value", _vm.price) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('duration')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_c('select', {
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
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'location-dot']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('price')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('durationPrice')) + " name=\"duration_price\" required=\"required\"" + _vm._ssrAttr("value", _vm.duration_price) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"right-just-flex mt-3 d-flex justify-content-end\"><button class=\"btn-main up lg\">" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('addDuration')) + "\n            ") + "</button></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"times-box mt-4 mb-4\">", "</div>", [_vm.clientDurations.length > 0 ? _vm._ssrNode("<section>", "</section>", [_vm._ssrNode("<h6>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeats2')) + " ") + "</h6> "), _vm._l(_vm.clientDurations, function (duration) {
    return _vm._ssrNode("<div class=\"times-row-loop color-main d-flex justify-content-between\">", "</div>", [_vm._ssrNode("<div class=\"time-price\">" + _vm._ssrEscape(" " + _vm._s(duration.price) + " ر.س") + "</div> <div class=\"time-price\">" + _vm._ssrEscape(" " + _vm._s(duration.duration) + " ") + "</div> "), _vm._ssrNode("<button type=\"button\" class=\"attr-remove text-danger\">", "</button>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1)], 2);
  })], 2) : _vm._ssrNode("<section><p class=\"text-center\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeaEdi')) + " ") + "</p></section>")]), _vm._ssrNode(" "), _vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('tripType')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_c('select', {
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
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'location-dot']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('price')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('hourPlace')) + " name=\"offer_price\" required=\"required\"" + _vm._ssrAttr("value", _vm.offer_price) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" <div class=\"mb-3 main-inp-cont\"><h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape("\n              " + _vm._s(_vm.$t('offerEnd')) + "\n            ") + "</h6> <div class=\"relative-co\"><input type=\"date\"" + _vm._ssrAttr("placeholder", _vm.$t('offerEnd')) + " name=\"finish_date\" required=\"required\"" + _vm._ssrAttr("value", _vm.finish_date) + " class=\"inp-spe-tele\"></div></div> <div class=\"right-just-flex mt-3 d-flex justify-content-end\"><button class=\"btn-main up lg\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('addOffer')) + "\n          ") + "</button></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"times-box mt-4 mb-4\">", "</div>", [_vm._ssrNode("<section>", "</section>", [_vm._ssrNode("<h6>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('addedFeats2')) + " ") + "</h6> "), _vm._ssrNode("<div class=\"table-offer table-offer2 font13\">", "</div>", [_vm._ssrNode("<table id=\"myTable\" class=\"table\">", "</table>", [_vm._ssrNode("<thead><tr><th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('tripType')) + " ") + "</th> <th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('price')) + " ") + "</th> <th>" + _vm._ssrEscape(" " + _vm._s(_vm.$t('offerEnd')) + " ") + "</th> <th></th></tr></thead> "), _vm.clientOffers.length > 0 ? _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.clientOffers, function (offer) {
    return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode("<td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(offer.trip_type) + " ") + "</span></td> <td><span class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(offer.price) + " ر.س / ساعة") + "</span></td> <td class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(offer.finish_date) + " ") + "</td> "), _vm._ssrNode("<td class=\"red-col\">", "</td>", [_vm._ssrNode("<button type=\"button\" class=\"attr-remove text-danger\">", "</button>", [_c('font-awesome-icon', {
      attrs: {
        "icon": ['fas', 'trash']
      }
    })], 1)])], 2);
  }), 0) : _vm._ssrNode("<div class=\"d-flex justify-content-center\"><p class=\"text-center\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('offerEdi')) + " ") + "</p></div>")], 2)])], 2)]), _vm._ssrNode(" <div class=\"flex-groupme\"><button" + _vm._ssrAttr("disabled", _vm.disabled) + " class=\"main-btn up mt-4 wid-85\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.$t('certain')) + "\n          ") + "</button></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/boats/offers.vue?vue&type=template&id=16d4c512&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/boats/offers.vue?vue&type=script&lang=js&
/* harmony default export */ var offersvue_type_script_lang_js_ = ({
  data() {
    return {
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
    async sendOffer() {
      this.disabled = true;
      const fd = new FormData();
      fd.append('product_id', this.$route.params.id);
      fd.append('price', this.price);
      fd.append('durations', JSON.stringify(this.sendedDurations));
      fd.append('offers', JSON.stringify(this.sendedOffers));
      await this.$axios.$post('/post-offers', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal("", `${res.msg}`, "success");
          document.getElementById('modal-2').style.display = 'none';
          // document.getElementById('modal-3').style.display = 'block';
          document.getElementById('modal-2___BV_modal_backdrop_').style.display = 'none';
          setTimeout(() => {
            location.reload();
          }, 2000);

          // this.paidAdds = true ;
          // this.freeAdds = false ;
        } else {
          this.$swal("", `${res.msg}`, "error");
        }
        this.disabled = false;
      });
    },
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
        "duration": this.selectedDuration[0].time,
        "price": this.duration_price
      });
      this.sendedDurations.push({
        "id": this.duration,
        "price": this.duration_price
      });
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
        "trip_type": this.selectedOffer[0].name,
        "price": this.offer_price,
        "finish_date": this.finish_date
      });
      this.sendedOffers.push({
        "id": this.trip_type,
        "price": this.offer_price,
        "finish_date": this.finish_date
      });
      this.trip_type = null;
      this.offer_price = null;
      this.finish_date = null;
    },
    // remove offer 
    removeOffer(price) {
      this.clientOffers = this.clientOffers.filter(item => item.price !== price);
    }
  },
  mounted() {
    this.getDurations();
    this.getTripsTypes();
  }
});
// CONCATENATED MODULE: ./components/boats/offers.vue?vue&type=script&lang=js&
 /* harmony default export */ var boats_offersvue_type_script_lang_js_ = (offersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/boats/offers.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  boats_offersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3da9ba64"
  
)

/* harmony default export */ var offers = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=boats-offers.js.map