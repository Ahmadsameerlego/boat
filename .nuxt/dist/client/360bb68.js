(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{513:function(t,o,e){t.exports=e.p+"img/marcin-ciszewski-Zexjl0v3MRU-unsplash.29cbba7.png"},528:function(t,o,e){var content=e(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(68).default)("609a3fe7",content,!0,{sourceMap:!1})},611:function(t,o,e){"use strict";e(528)},612:function(t,o,e){var c=e(67)((function(i){return i[1]}));c.push([t.i,".owl-item{height:110px;margin:0 10px;width:140px}.owl-item img{height:100%;width:100%}",""]),c.locals={},t.exports=c},715:function(t,o,e){"use strict";e.r(o);e(23);var c=e(16),r=(e(53),{data:function(){return{src:e(513),product:{},provider:{},images:[],special_prices:[],offers:[],options:{loop:!0,perPage:4,paginationEnabled:!0,autoplay:!0,speed:5e3}}},methods:{getSingleProduct:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$axios.$get("/single-product?product_id=".concat(t.$route.params.id)).then((function(o){t.product=o.data.product,t.provider=o.data.product.provider,t.images=o.data.product.images,t.special_prices=o.data.product.special_prices,t.offers=o.data.product.offers}));case 2:case"end":return o.stop()}}),o)})))()}},mounted:function(){this.getSingleProduct()}}),l=(e(611),e(46)),component=Object(l.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"trips section-pad"},[o("div",{staticClass:"container"},[o("div",{staticClass:"flex-groupme"},[o("h5",{staticClass:"main-title color-main font600 mb-4"},[t._v(" "+t._s(t.$t("boat"))+" ")])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 col-12 p-0"},[o("div",{staticClass:"boat-box"},[o("div",{staticClass:"flex-groupme mb-3"},[o("img",{staticClass:"img-prof",attrs:{src:t.provider.avatar,alt:""}})]),t._v(" "),o("div",{staticClass:"mb-3 text-center"},[t._v(" "+t._s(t.provider.name)+" ")]),t._v(" "),o("div",{staticClass:"flex-rairing gap-book gray-col mt-3 mb-4 font14"},[o("div",{staticClass:"book-nums"},[t._v(t._s(t.$t("resNumbers"))+" : "+t._s(t.provider.num_orders)+" "+t._s(t.$t("res")))]),t._v(" "),o("div",{staticClass:"book-loc"},[o("font-awesome-icon",{attrs:{icon:["fas","location-dot"]}}),t._v(" "),o("div",{staticClass:"book-loc-real"},[t._v("  "+t._s(t.provider.address)+" ")])],1),t._v(" "),o("div",{staticClass:"nationality-me"},[t._v(" "+t._s(t.provider.nationality)+" ")])]),t._v(" "),o("div",{staticClass:"flex-rairing mt-3 mb-4 font14"},[o("div",{staticClass:"light-box"},[o("font-awesome-icon",{staticClass:"star-yellow",attrs:{icon:["fas","star"]}}),t._v("\n              "+t._s(t.provider.rate)+"\n            ")],1),t._v(" "),o("div",{staticClass:"light-box"},[o("font-awesome-icon",{staticClass:"color-main",attrs:{icon:["fas","paper-plane"]}}),t._v("\n              "+t._s(t.provider.distance)+"\n            ")],1)])])]),t._v(" "),o("div",{staticClass:"col-md-6 col-12 p-0"},[o("div",{staticClass:"boat-box no-left-border"},[o("div",{staticClass:"gray-col font14 text-up"},[t._v(" "+t._s(t.product.category)+" ")]),t._v(" "),o("div",{staticClass:"flex-groupme mb-3"},[o("img",{staticClass:"img-prof",attrs:{src:t.product.image,alt:""}})]),t._v(" "),o("div",{staticClass:"mb-3 text-center"},[t._v(" "+t._s(t.product.name)+" ")]),t._v(" "),o("div",{staticClass:"flex-rairing gap-book gray-col mt-3 mb-4 font14"},[o("div",{staticClass:"book-nums"},[t._v(" "+t._s(t.$t("boatNumber"))+" : "+t._s(t.product.number)+" ")]),t._v(" "),o("div",{staticClass:"book-loc"},[o("font-awesome-icon",{attrs:{icon:["fas","location-dot"]}}),t._v(" "),o("div",{staticClass:"book-loc-real"},[t._v(" "+t._s(t.product.address)+" ")])],1),t._v(" "),o("div",{staticClass:"nationality-me"},[t._v(" "+t._s(t.$t("capacity"))+" : "+t._s(t.product.capacity))])]),t._v(" "),o("div",{staticClass:"flex-rairing mt-3 mb-4 font14"},[o("div",{staticClass:"light-box"},[o("font-awesome-icon",{staticClass:"star-yellow",attrs:{icon:["fas","star"]}}),t._v("\n              "+t._s(t.product.rate)+"\n            ")],1),t._v(" "),o("div",{staticClass:"light-box"},[o("font-awesome-icon",{staticClass:"color-main",attrs:{icon:["fas","paper-plane"]}}),t._v("\n              "+t._s(t.product.distance)+"\n            ")],1)])])]),t._v(" "),o("div",{staticClass:"col-md-6 col-12 p-0"},[o("div",{staticClass:"boat-box"},[o("h6",{staticClass:"mb-3"},[t._v(" "+t._s(t.$t("desc"))+" ")]),t._v(" "),o("p",{staticClass:"mb-2 gray-col",domProps:{innerHTML:t._s(t.product.desc)}})])]),t._v(" "),o("div",{staticClass:"col-md-6 col-12 p-0"},[o("div",{staticClass:"boat-box no-left-border"},[o("h6",{staticClass:"mb-3"},[t._v(" "+t._s(t.$t("price"))+" ")]),t._v(" "),o("div",{staticClass:"flex-bet font14 mb-3"},[o("div",{staticClass:"color-main"},[t._v(t._s(t.product.display_price)+" ر.س")]),t._v(" "),o("div",{staticClass:"color-main"},[t._v(t._s(t.$t("hour")))])]),t._v(" "),o("h6",{staticClass:"mb-3"},[t._v(" "+t._s(t.$t("specialPrices"))+" ")]),t._v(" "),t.special_prices.length>0?o("section",t._l(t.special_prices,(function(e){return o("div",{key:e.id,staticClass:"flex-bet font14 mb-3"},[o("div",{staticClass:"color-main"},[t._v(" "+t._s(e.price)+" ر.س")]),t._v(" "),o("div",{staticClass:"color-main"},[t._v(" "+t._s(e.name)+"  ")])])})),0):o("section",[o("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("noSpecial"))+" ")])]),t._v(" "),o("h6",{staticClass:"mb-3"},[t._v(" "+t._s(t.$t("offers"))+" ")]),t._v(" "),t.offers.length>0?o("div",{staticClass:"table-offer"},[o("table",{staticClass:"table",attrs:{id:"myTable"}},[o("thead",[o("tr",[o("th",[t._v(" "+t._s(t.$t("tripType"))+" ")]),t._v(" "),o("th",[t._v(" "+t._s(t.$t("price"))+" ")]),t._v(" "),o("th",[t._v(" "+t._s(t.$t("offerEnd"))+" ")])])]),t._v(" "),o("tbody",t._l(t.offers,(function(e){return o("tr",{key:e.id},[o("td",[o("span",{staticClass:"gray-col"},[t._v(" "+t._s(e.trip_type)+" ")])]),t._v(" "),o("td",[o("span",{staticClass:"gray-col"},[t._v(" "+t._s(e.price)+"ر.س / ساعة")])]),t._v(" "),o("td",{staticClass:"gray-col"},[t._v(" "+t._s(e.finish_date)+" ")])])})),0)])]):o("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$t("noOffers"))+" ")])])])]),t._v(" "),o("h6",{staticClass:"mb-3 mt-3 font600"},[t._v(" "+t._s(t.$t("boatImgs"))+" ")]),t._v(" "),o("div",{staticClass:"slider3"},[o("carousel",t._b({},"carousel",t.options,!1),t._l(t.images,(function(image){return o("slide",{key:image.id,staticClass:"owl-item",attrs:{index:image.id}},[o("img",{attrs:{src:image.url,alt:""}})])})),1)],1),t._v(" "),o("div",{staticClass:"flex-groupme mt-4"},[o("nuxt-link",{staticClass:"btn-main up lg",attrs:{to:"/client/creatOrder/"+t.product.id}},[t._v(" "+t._s(t.$t("reserve2"))+" ")])],1)])])}),[],!1,null,null,null);o.default=component.exports}}]);