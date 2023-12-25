exports.ids = [4];
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

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      src: __webpack_require__(124),
      bg: __webpack_require__(128),
      person: __webpack_require__(134),
      cities: [],
      regionQuery: '',
      showList1: false,
      city_id: '',
      dialog: false,
      locations: {
        lat: 0,
        lng: 0
      },
      address: '',
      edit_avatar: __webpack_require__(124),
      disabled: false,
      categories: [],
      paths: [],
      adsImages: [],
      adsImagesName: [],
      adsImages2: [],
      adsImagesName2: [],
      order_type: null,
      path_id: '',
      name_ar: '',
      name_en: '',
      desc_ar: '',
      desc_en: '',
      capacity: '',
      category_id: '',
      number: '',
      name: '',
      product: {},
      documents: [],
      images: [],
      images2: [],
      changed_images_id: null,
      changed_images_ids: [],
      changed_images_id2: null,
      changed_images_ids2: [],
      disabled3: false,
      boat_image_count: null
    };
  },
  watch: {
    regionQuery() {
      if (this.regionQuery == '') {
        this.showList1 = false;
      }
    },
    order_type() {
      console.log(this.order_type);
    }
  },
  updated() {
    if (this.adsImages2.length > this.boat_image_count) {
      this.disabled3 = true;
    } else if (this.adsImages2.length < this.boat_image_count) {
      this.disabled3 = false;
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
    // get boat info 
    async getBoatInfo() {
      await this.$axios.$get(`/single-product?product_id=${this.$route.params.id}`).then(res => {
        this.product = res.data.product;
        this.images2 = res.data.product.images;
        console.log(this.images2);
        // this.changed_images_ids.slice(i , 1);
        this.images = res.data.product.documents;

        // console.log(this.adsImages2)
        // console.log(this.adsImages)
        this.order_type = res.data.product.order_type;
        this.path_id = res.data.product.path_id;
        this.desc_en = res.data.product.desc_en;
        this.desc_ar = res.data.product.desc_ar;
        this.capacity = res.data.product.capacity;
        this.regionQuery = res.data.product.city;
        this.city_id = res.data.product.city_id;
        this.category_id = res.data.product.category_id;
        this.number = res.data.product.number;
        this.name_en = res.data.product.name_en;
        this.name_ar = res.data.product.name_ar;
        this.name = res.data.product.name;
        this.edit_avatar = res.data.product.image;
        this.address = res.data.product.address;
      });
    },
    // get boats length 
    async getBoatLength() {
      await this.$axios.$get('/general-data').then(res => {
        this.boat_image_count = res.data.boat_image_count;
      });
    },
    async register() {
      this.disabled = true;
      const fd = new FormData(this.$refs.regForm);
      fd.append('city_id', this.city_id);
      // fd.append('avatar', this.edit_avatar);
      fd.append('lat', this.locations.lat);
      fd.append('lng', this.locations.lng);
      fd.append('address', this.address);
      fd.append('product_id', this.$route.params.id);
      fd.append('boatImagesIds', this.changed_images_ids2.toString());
      fd.append('certificatesIds', this.changed_images_ids.toString());
      await this.$axios.$post('/update-product', fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.$swal('', `${res.msg}`, "success");
          this.$emit('updateBoat');
          setTimeout(() => {
            // document.getElementById('modal-12').style.display = 'block';
          }, 2000);
        } else {
          this.$swal('', `${res.msg}`, "error");
        }
        this.disabled = false;
      });
    },
    // image preview 
    uploadAdImages(file) {
      // preview operation 
      let selectedImages = file.files;
      for (let i = 0; i < selectedImages.length; i++) {
        this.adsImages.push(selectedImages[i]);
        this.adsImagesName.push(selectedImages[i].name);
      }
      this.applyImage();
    },
    // remvoe image 
    removeImage(image, key) {
      this.adsImages.splice(key, 1);
      this.applyImage();
    },
    // remvoe image 
    removeImageuploaded(image, key, i) {
      this.images.splice(i, 1);
      this.$refs.uploadedDocuments.splice(i, 1);
      console.log(this.$refs.uploadedDocuments);
      this.changed_images_id = key;
      console.log(this.changed_images_id);
      // changed images ids 
      this.changed_images_ids.push(key);
      // this.changed_images_ids.slice(key , 1);
      console.log(this.changed_images_ids);
      this.applyImage();
    },
    // remvoe image 
    removeImageuploaded2(image, key, i) {
      this.images2.splice(i, 1);
      this.$refs.uploadedBoats.splice(i, 1);
      this.changed_images_id2 = key;
      console.log(this.changed_images_id2);
      // changed images ids 
      this.changed_images_ids2.push(key);
      // this.changed_images_ids2.slice(key , 1);
      console.log(this.changed_images_ids2);
      this.applyImage();
    },
    applyImage() {
      for (let i = 0; i < this.adsImages.length; i++) {
        let reader = new FileReader();
        reader.onload = () => {
          this.$refs.image[i].src = reader.result;
        };
        reader.readAsDataURL(this.adsImages[i]);
      }
    },
    // image preview 
    uploadAdImages2(file) {
      // preview operation 
      let selectedImages2 = file.files;
      for (let i = 0; i < selectedImages2.length; i++) {
        this.adsImages2.push(selectedImages2[i]);
        this.adsImagesName2.push(selectedImages2[i].name);
      }
      if (this.adsImages2.length >= this.boat_image_count + 1) {
        this.disabled3 = true;
        this.adsImages2 = [];
      } else if (this.adsImages2.length < this.boat_image_count) {
        this.disabled3 = false;
      }
      this.applyImage1();
    },
    // remvoe image 
    removeImage2(image, key) {
      this.adsImages2.splice(key, 1);
      this.applyImage1();
    },
    applyImage1() {
      for (let i = 0; i < this.adsImages2.length; i++) {
        let reader = new FileReader();
        reader.onload = () => {
          this.$refs.image1[i].src = reader.result;
        };
        reader.readAsDataURL(this.adsImages2[i]);
      }
    },
    // get categories 
    async getCategories() {
      await this.$axios.$get('/categories').then(res => {
        this.categories = res.data.categories;
      });
    },
    // get paths 
    async getPaths() {
      await this.$axios.$get('/paths').then(res => {
        this.paths = res.data.paths;
      });
    },
    // uploadImage 
    uploadImage(e) {
      const file = e.target.files[0];
      this.edit_avatar = URL.createObjectURL(file);
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
        if (status === 'OK') {
          this.address = results[0].formatted_address;
        } else {
          console.error('Geocode was not successful for the following reason: ' + status);
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
      await this.$axios.$get('/cities').then(res => {
        this.cities = res.data.cities;
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
    }
  },
  mounted() {
    this.getCity();
    this.geolocation();
    this.getCategories();
    this.getPaths();
    this.getBoatInfo();
    this.getBoatLength();

    // get random device_id 
    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => localStorage.setItem('device_id', data.ip)).catch(error => console.error(error));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)["URL"]))

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(275);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("95533240", content, true, context)
};

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBoat_vue_vue_type_style_index_0_id_38ddf93e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBoat_vue_vue_type_style_index_0_id_38ddf93e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBoat_vue_vue_type_style_index_0_id_38ddf93e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBoat_vue_vue_type_style_index_0_id_38ddf93e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBoat_vue_vue_type_style_index_0_id_38ddf93e_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".selected-option{align-items:center;border:1px solid #ccc;border-radius:5px;cursor:pointer;display:flex;padding:12px}.selected-option img{height:24px;margin-right:8px;width:24px}.options-container{background-color:#fff;border:1px solid #ccc;box-shadow:0 2px 4px rgba(0,0,0,.2);cursor:pointer;left:0;max-height:200px;overflow-y:auto;position:absolute;top:100%;width:100%;z-index:1}.option{align-items:center;display:flex;padding:8px}.option img{height:24px;margin-right:8px;width:24px}.option:hover{background-color:#f5f5f5}.country_select{height:51px;left:0;position:absolute;top:0;width:100px!important}.spinner-border{height:1.5rem!important;vertical-align:-.5em!important;width:1.5rem!important}.main-btn:disabled{cursor:not-allowed;opacity:.4}.img-thumbnail{height:100px;width:100px}.remove-img{align-items:center;background:red;border-radius:50%;display:flex;height:18px;justify-content:center;left:2px;position:absolute;width:18px}.hiddenInput{height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.astrik{color:#df1d1d;font-size:12px;margin:0 5px}.order_type{accent-color:#111b5a;height:17px;width:17px}.editUpload{color:#111b5a;left:10px;position:absolute;top:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/boats/EditBoat.vue?vue&type=template&id=38ddf93e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "login pt-0"
  }, [_vm._ssrNode("<div class=\"w-100\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"login-img text-center mt-2\"><img" + _vm._ssrAttr("src", _vm.src) + " alt></div> <div class=\"title-login text-center mt-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('editBoat')) + " ") + "</div> <div class=\"under-title mb-3 text-center mt-2\">" + _vm._ssrEscape("\n                          " + _vm._s(_vm.$t('plsFillEdit')) + "\n                      ") + "</div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-9 col-12 margin-auto\">", "</div>", [_vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">" + _vm._ssrEscape("\n                                      " + _vm._s(_vm.$t('userName')) + "\n                                  ") + "</h6> "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('fillUserName')) + " name=\"name\"" + _vm._ssrAttr("value", _vm.name) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'user']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape("\n                                      " + _vm._s(_vm.$t('boatNameAr')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('fillBoatName')) + " name=\"name_ar\"" + _vm._ssrAttr("value", _vm.name_ar) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape("\n                                      " + _vm._s(_vm.$t('boatName')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"text\"" + _vm._ssrAttr("placeholder", _vm.$t('pleasefillBoatNameEN')) + " name=\"name_en\"" + _vm._ssrAttr("value", _vm.name_en) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape("\n                                      " + _vm._s(_vm.$t('boatNumber')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('fillBoatNumber')) + " name=\"number\"" + _vm._ssrAttr("value", _vm.number) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'list-ol']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.$t('boatCategory')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.category_id,
      expression: "category_id"
    }],
    staticClass: "main-select",
    attrs: {
      "name": "category_id",
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
        _vm.category_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "hidden": "",
      "disabled": ""
    }
  }, [_vm._v("\n                                              \n                                              " + _vm._s(_vm.$t('fillBoatCategory')) + "\n                                              "), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 1), _vm._v(" "), _vm._l(_vm.categories, function (cat) {
    return _c('option', {
      key: cat.id,
      domProps: {
        "value": cat.id
      }
    }, [_vm._v(" " + _vm._s(cat.name) + " ")]);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape("\n                                      " + _vm._s(_vm.$t('locationOfBoat')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<div class=\"position-relative w-100\"><input type=\"text\" name=\"query\"" + _vm._ssrAttr("placeholder", _vm.$t('cityPlace')) + _vm._ssrAttr("value", _vm.regionQuery) + " class=\"inp-spe-tele\"> " + (_vm.showList1 ? "<div style=\"position:absolute;width:100%;height:200px;overflow-y:auto;top:50px;z-index:999\">" + (_vm.filteredRegions.length > 0 ? "<ul class=\"list-group\" style=\"z-index:9999\">" + _vm._ssrList(_vm.filteredRegions, function (item, index) {
    return "<li class=\"list-group-item\"><span style=\"cursor:pointer\">" + _vm._ssrEscape("\n                                                          " + _vm._s(index + 1) + "." + _vm._s(item.name) + "\n                                                      ") + "</span></li>";
  }) + "</ul>" : "<ul class=\"list-group\"><li class=\"list-group-item\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('noCountry')) + " ") + "</li></ul>") + "</div>" : "<!---->") + "</div> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'location-dot']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('locationOfBoatOnMap')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_c('input', {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal.modal-233",
      modifiers: {
        "modal-233": true
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
      "id": "modal-233"
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
  })], 1)], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"fontBold mainColor font14 font600\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape("\n                                      " + _vm._s(_vm.$t('boatCapacity')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<input type=\"number\"" + _vm._ssrAttr("placeholder", _vm.$t('selectBoatCapacity')) + " name=\"capacity\"" + _vm._ssrAttr("value", _vm.capacity) + " class=\"inp-spe-tele\"> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'users']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.$t('boatDescriptionAr')) + "\n                                  ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<textarea name=\"desc_ar\" id" + _vm._ssrAttr("placeholder", _vm.$t('explaindescripeBoatAr')) + " rows=\"3\" class=\"main-textarea\">" + _vm._ssrEscape(_vm._s(_vm.desc_ar)) + "</textarea> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'note-sticky']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('boatDescriptionEn')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_vm._ssrNode("<textarea name=\"desc_en\" id" + _vm._ssrAttr("placeholder", _vm.$t('explaindescripeBoatEn')) + " rows=\"3\" class=\"main-textarea\">" + _vm._ssrEscape(_vm._s(_vm.desc_en)) + "</textarea> "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'note-sticky']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mb-3 main-inp-cont\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('boatTrack')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"relative-co\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.path_id,
      expression: "path_id"
    }],
    staticClass: "main-select",
    attrs: {
      "name": "path_id",
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
        _vm.path_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "hidden": "",
      "disabled": ""
    }
  }, [_vm._v("\n                                              " + _vm._s(_vm.$t('selectBoatTrack')) + "\n                                          ")]), _vm._v(" "), _vm._l(_vm.paths, function (path) {
    return _c('option', {
      key: path.id,
      domProps: {
        "value": path.id
      }
    }, [_vm._v(" " + _vm._s(path.name) + " ")]);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'sailboat']
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"icon-float2\">", "</div>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'chevron-down']
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"photo-permition mb-3\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('boatProperty')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex-upload-imgs\">", "</div>", [_vm._ssrNode("<label for=\"filesNext_input\" class=\"upload-main position-relative\">", "</label>", [_vm._ssrNode("<input type=\"file\" accept=\"image/*\" multiple=\"multiple\" name=\"certificates[]\" id=\"imgUpload\" class=\"hiddenInput\"> "), _c('font-awesome-icon', {
    staticStyle: {
      "color": "#111b5a",
      "font-size": "22px"
    },
    attrs: {
      "icon": ['fas', 'cloud-arrow-down']
    }
  }), _vm._ssrNode(" <div class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('attachPhotos')) + " ") + "</div>")], 2), _vm._ssrNode(" <div class=\"img-upload-show mt-4\"><div class=\"d-flex\"><div class=\"hidden-img d-flex\" style=\"flex-wrap:wrap\">" + _vm._ssrList(_vm.adsImages, function (image, key) {
    return "<div class=\"position-relative\"><button type=\"button\" class=\"remove-img text-white\">\n                                                  ×\n                                                  </button> <img class=\"preview img-thumbnail\"></div>";
  }) + "</div></div></div> <div class=\"img-upload-show mt-4\"><div class=\"d-flex\"><div class=\"hidden-img d-flex\" style=\"flex-wrap:wrap\">" + _vm._ssrList(_vm.images, function (imgUp, i) {
    return "<div class=\"position-relative\"><button type=\"button\" class=\"remove-img text-white\">\n                                                  ×\n                                                  </button> <img" + _vm._ssrAttr("src", imgUp.url) + " class=\"preview img-thumbnail\"></div>";
  }) + "</div></div></div>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"photo-permition mb-3\">", "</div>", [_vm._ssrNode("<h6 class=\"font-bold\">", "</h6>", [_vm._ssrNode(_vm._ssrEscape(" " + _vm._s(_vm.$t('boatPhotos')) + "\n                                      ")), _c('font-awesome-icon', {
    staticClass: "astrik",
    attrs: {
      "icon": ['fas', 'asterisk']
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex-upload-imgs\">", "</div>", [_vm._ssrNode("<label for=\"filesNext2_input\" class=\"upload-main position-relative\">", "</label>", [_vm._ssrNode("<input type=\"file\" accept=\"image/*\" multiple=\"multiple\" name=\"boatImages[]\" id=\"imgUploades1\" class=\"hiddenInput\"> "), _c('font-awesome-icon', {
    staticStyle: {
      "color": "#111b5a",
      "font-size": "22px"
    },
    attrs: {
      "icon": ['fas', 'cloud-arrow-down']
    }
  }), _vm._ssrNode(" <div class=\"gray-col\">" + _vm._ssrEscape(" " + _vm._s(_vm.$t('attachPhotos')) + " ") + "</div>")], 2), _vm._ssrNode(" <div class=\"img-upload-show mt-4\"><div class=\"d-flex\"><div class=\"hidden-img d-flex\" style=\"flex-wrap:wrap\">" + _vm._ssrList(_vm.adsImages2, function (image, key) {
    return "<div class=\"position-relative\"><button type=\"button\" class=\"remove-img text-white\">\n                                                  ×\n                                                  </button> <img class=\"preview img-thumbnail\"></div>";
  }) + "</div></div></div> <div class=\"img-upload-show mt-4\"><div class=\"d-flex\"><div class=\"hidden-img d-flex\" style=\"flex-wrap:wrap\">" + _vm._ssrList(_vm.images2, function (imgUp, i) {
    return "<div class=\"position-relative\"><button type=\"button\" class=\"remove-img text-white\">\n                                                  ×\n                                                  </button> <img" + _vm._ssrAttr("src", imgUp.url) + " class=\"preview img-thumbnail\"></div>";
  }) + "</div></div></div>")], 2)], 2), _vm._ssrNode(" <div class=\"mt-4\"><button" + _vm._ssrAttr("disabled", _vm.disabled) + " class=\"main-btn up mb-2\">" + _vm._ssrEscape("\n                                      " + _vm._s(_vm.$t('saveChanges')) + "\n                                      ") + (_vm.disabled ? "<div role=\"status\" class=\"spinner-border\"></div>" : "<!---->") + "</button></div>")], 2)])], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/boats/EditBoat.vue?vue&type=template&id=38ddf93e&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/boats/EditBoat.vue?vue&type=script&lang=js&
var EditBoatvue_type_script_lang_js_ = __webpack_require__(226);

// CONCATENATED MODULE: ./components/boats/EditBoat.vue?vue&type=script&lang=js&
 /* harmony default export */ var boats_EditBoatvue_type_script_lang_js_ = (EditBoatvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/boats/EditBoat.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(274)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  boats_EditBoatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6bd79e81"
  
)

/* harmony default export */ var EditBoat = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=boats-edit-boat.js.map