(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{463:function(t,e,r){t.exports=r.p+"img/185644495_1667380803456791_1968050560740665054_n.9bd80cd.jpg"},545:function(t,e,r){var content=r(652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("cd13bda0",content,!0,{sourceMap:!1})},651:function(t,e,r){"use strict";r(545)},652:function(t,e,r){var o=r(67)((function(i){return i[1]}));o.push([t.i,".main-box-sh{margin:0 10px}.VueCarousel-dot.VueCarousel-dot--active{background-color:#111b5a!important}.VueCarousel-dot,.VueCarousel-dot.VueCarousel-dot--active{height:15px!important;width:15px!important}.slide{height:100%;width:100%}.VueCarousel-inner{direction:ltr}.VueCarousel-slide{flex-basis:auto!important}",""]),o.locals={},t.exports=o},740:function(t,e,r){"use strict";r.r(e);r(23);var o=r(16),n=(r(53),r(12),{data:function(){return{src1:r(463),products:[],lat:"",lng:"",options:{perPage:4,paginationEnabled:!0,autoplay:!0,speed:2200,autoplayDirection:"backward",centerMode:!0}}},methods:{getAllProducts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/all-products?lat=".concat(t.lat,"&long=").concat(t.lng),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.products=e.data.products}));case 2:case"end":return e.stop()}}),e)})))()},notLoggedGetAllProducts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/all-products").then((function(e){t.products=e.data.products}));case 2:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){if(localStorage.getItem("user")){var t=localStorage.getItem("user");this.lat=JSON.parse(t).lat,this.lng=JSON.parse(t).long}},mounted:function(){localStorage.getItem("user")?this.getAllProducts():this.notLoggedGetAllProducts()}}),l=(r(651),r(46)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("client-only",[e("div",{staticClass:"best-sells section-pad"},[e("div",{},[e("h5",{staticClass:"main-title color-main mb-4 font600",staticStyle:{margin:"0 100px"}},[t._v(t._s(t.$t("topRated"))+"\n      ")]),t._v(" "),e("div",{staticClass:"slider2"},[e("client-only",[e("carousel",t._b({},"carousel",t.options,!1),t._l(t.products,(function(r){return e("slide",{key:r.id,staticClass:"img-wrapper"},[e("div",{staticClass:"slide item"},[e("div",{staticClass:"main-box-sh"},[e("div",{staticClass:"flex-groupme"},[e("img",{staticClass:"person-im",attrs:{src:r.image,alt:""}})]),t._v(" "),e("div",{staticClass:"text-center mt-3 mb-3"},[t._v(" "+t._s(r.name)+" ")]),t._v(" "),e("div",{staticClass:"flex-rairing mt-3 mb-4"},[e("div",{staticClass:"light-box"},[e("i",{staticClass:"fa-solid fa-star star-yellow"}),t._v("\n                              "+t._s(r.rate)+"\n                          ")]),t._v(" "),e("div",{staticClass:"light-box"},[e("i",{staticClass:"fa-solid fa-paper-plane color-main"}),t._v("\n                              "+t._s(r.address)+"\n                          ")]),t._v(" "),e("div",{staticClass:"light-box"},[t._v(" "+t._s(r.display_price)+" "+t._s(t.$t("priceUnit")))])]),t._v(" "),e("nuxt-link",{staticClass:"btn-main up big-100",attrs:{to:"/client/providers/"+r.provider_id}},[t._v(" "+t._s(t.$t("servicesProvider")))])],1)])])})),1)],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);