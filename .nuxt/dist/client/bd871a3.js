(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{480:function(t,e,n){t.exports=n.p+"img/91068-message-sent-successfully-plane.6d67390.gif"},494:function(t,e,n){"use strict";var o=n(10),r=n(99).findIndex,c=n(119),d="findIndex",l=!0;d in[]&&Array(1)[d]((function(){l=!1})),o({target:"Array",proto:!0,forced:l},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},532:function(t,e,n){var content=n(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("36ba2f0a",content,!0,{sourceMap:!1})},619:function(t,e,n){"use strict";n(532)},620:function(t,e,n){var o=n(67)((function(i){return i[1]}));o.push([t.i,"label.labelChecked{display:none;left:0;position:absolute;top:-6px}input.check-wid[type=checkbox]:checked+label.labelChecked{display:block}.modalOverLay{background-color:rgba(0,0,0,.451);bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:9}.modal_body{background:#fff;border-radius:20px;margin:auto;width:50%}@media(max-width:768px){.modal_body{width:80%}}",""]),o.locals={},t.exports=o},719:function(t,e,n){"use strict";n.r(e);n(23),n(14),n(2),n(1),n(4),n(55);var o=n(16),r=(n(53),n(43),n(494),n(54),n(75),{data:function(){return{showAdd:!1,groups:[],appendGroups:[],paidGroups:[],appendPaidGroups:[],sendedGroups:[],count_free:0,free_additives:[],additives:[],cities:[],regionQuery:"",showList1:!1,city_id:"",description:"",persons_num:"",go_time:null,hours:"",return_date:null,go_date:null,id:null,category_id:null,showCount:!1,count1:!1,showPaid:!1,paidCheck:!1,disabled:!1,categories:[],finish:[],order_id:"",payment_methods:[],payment_type:"",coupon:"",times:[]}},methods:{createOrder:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.disabled=!0,(n=new FormData).append("product_id",t.id),n.append("trip_type_id",t.trip_type_id),n.append("go_date",t.go_date),n.append("return_date",t.return_date),n.append("hours",t.hours),n.append("go_time",t.go_time),n.append("persons_num",t.persons_num),n.append("description",t.description),n.append("payment_type",t.payment_type),n.append("coupon",t.coupon),n.append("groups",JSON.stringify([{free_additives:t.groups},{additives:t.paidGroups}])),e.next=15,t.$axios.$post("/create-order",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){"success"==e.key?(t.$swal("","".concat(e.msg),"success"),t.order_id=e.data.order_id,setTimeout((function(){t.showAdd=!0}),2e3)):t.$swal("","".concat(e.msg),"error"),t.disabled=!1}));case 15:case"end":return e.stop()}}),e)})))()},getPaymentMethod:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/payment-methods",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.payment_methods=e.data.payment_methods}));case 2:case"end":return e.stop()}}),e)})))()},getTimes:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/times",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.times=e.data.times}));case 2:case"end":return e.stop()}}),e)})))()},setId:function(t){console.log(t)},increaseOrder:function(t){t.qty+=1;var e=this.groups.findIndex((function(e){return e.id===t.id}));-1===e?this.groups.push({id:t.id,qty:t.qty}):this.groups[e]=t,this.sendedGroups=this.groups,console.log(this.sendedGroups)},decreaseOrder:function(t){if(t.qty>1){t.qty-=1;var e=this.groups.findIndex((function(e){return e.id===t.id}));-1===e?this.groups.push({id:t.id,qty:t.qty}):this.groups[e]=t,this.sendedGroups=this.groups,console.log(this.sendedGroups)}},increasePaid:function(t){t.qty+=1;var e=this.paidGroups.findIndex((function(e){return e.id===t.id}));-1===e?this.paidGroups.push({id:t.id,qty:t.qty}):this.paidGroups[e]=t,console.log(this.paidGroups)},decreasePaid:function(t){if(t.qty>1){t.qty-=1;var e=this.paidGroups.findIndex((function(e){return e.id===t.id}));-1===e?this.paidGroups.push({id:t.id,qty:t.qty}):this.paidGroups[e]=t,console.log(this.paidGroups)}},getCategories:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/trip-types").then((function(e){t.categories=e.data.trip_types}));case 2:case"end":return e.stop()}}),e)})))()},setNewValueForRegion:function(t,e){this.regionQuery=t,this.city_id=e,this.regionQuery==t&&(this.showList1=!1)},getCities:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.showList1=!0;case 1:case"end":return e.stop()}}),e)})))()},showList:function(){this.showList1=!0},getCity:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/cities").then((function(e){t.cities=e.data.cities}));case 2:case"end":return e.stop()}}),e)})))()},decrement:function(t){t>1&&(t-=1)},getSingleProduct:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/single-product?product_id=".concat(t.$route.params.id)).then((function(e){t.free_additives=e.data.product.free_additives,t.additives=e.data.product.additives,t.id=e.data.product.id,t.category_id=e.data.product.category_id}));case 2:case"end":return e.stop()}}),e)})))()},addGroup:function(){}},computed:{filteredRegions:function(){var t=this;return Array.isArray(this.cities)?this.cities.filter((function(e){return e.name.toLowerCase().includes(t.regionQuery.toLowerCase())})):(console.error("this.cities is not an array"),[])}},mounted:function(){this.getSingleProduct(),this.getCity(),this.getCategories(),this.getPaymentMethod(),this.getTimes()}}),c=(n(619),n(46)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"book-trip section-pad"},[e("div",{staticClass:"container"},[e("div",{staticClass:"flex-groupme"},[e("h5",{staticClass:"main-title color-main font600 mb-5"},[t._v(" "+t._s(t.$t("bookTrip"))+" ")])]),t._v(" "),e("div",{staticClass:"col-md-8 col-12 margin-auto"},[e("form",{attrs:{action:""}},[e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col-lg-6 col-md-12 mb-4"},[e("div",{staticClass:"specials-box"},[e("h6",{staticClass:"specials-heading mb-3"},[t._v(" "+t._s(t.$t("freeAdditivs"))+" ")]),t._v(" "),t._l(t.free_additives,(function(n){return e("div",{key:n.id,staticClass:"flex-bet position-relative mb-5 mt-3"},[e("div",{staticClass:"flex-sm-bt"},[e("input",{staticClass:"check-wid",attrs:{type:"checkbox",id:"check-spec"+n.id},on:{change:function(e){return t.setId(n.id)}}}),t._v(" "),e("label",{staticClass:"labelChecked",attrs:{for:"check-spec"+n.id}},[e("div",{staticClass:"counter-main"},[e("div",{staticClass:"qty counter-div justify-content-center"},[e("button",{staticClass:"plus counter-btn unselectable",attrs:{type:"button"},on:{click:function(e){return t.increaseOrder(n)}}},[t._v("\n                            +\n                            ")]),t._v(" "),e("input",{ref:"freeCount",refInFor:!0,staticClass:"count output",attrs:{type:"text"},domProps:{value:n.qty}}),t._v(" "),e("button",{staticClass:"minus counter-btn unselectable",attrs:{type:"button"},on:{click:function(e){return t.decreaseOrder(n)}}},[t._v("\n                            -\n                            ")])])])]),t._v(" "),e("span",[t._v(t._s(n.name)+" ")])])])}))],2)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-12 mb-4"},[e("div",{staticClass:"specials-box"},[e("h6",{staticClass:"specials-heading mb-3"},[t._v(" "+t._s(t.$t("paidFeatures"))+" ")]),t._v(" "),t._l(t.additives,(function(n){return e("div",{key:n.id,staticClass:"flex-bet mb-5 mt-3 position-relative"},[e("div",{staticClass:"flex-sm-bt"},[e("input",{staticClass:"check-wid",attrs:{type:"checkbox",id:"check-spec4"+n.id}}),t._v(" "),e("label",{staticClass:"labelChecked",attrs:{for:"check-spec4"+n.id}},[e("div",{staticClass:"counter-main"},[e("div",{staticClass:"qty counter-div justify-content-center"},[e("button",{staticClass:"plus counter-btn unselectable",attrs:{type:"button"},on:{click:function(e){return t.increasePaid(n)}}},[t._v("\n                          +\n                        ")]),t._v(" "),e("input",{staticClass:"count output",attrs:{type:"text",id:"paidAdditives"},domProps:{value:n.qty}}),t._v(" "),e("button",{staticClass:"minus counter-btn unselectable",attrs:{type:"button"},on:{click:function(e){return t.decreasePaid(n)}}},[t._v("\n                          -\n                        ")])])])]),t._v(" "),e("span",[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"color-main"},[t._v(t._s(n.price)+" ر.س")])])])}))],2)])]),t._v(" "),e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col-md-6 col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v("  "+t._s(t.$t("tripType"))+" ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.trip_type_id,expression:"trip_type_id"}],staticClass:"main-select",attrs:{name:"trip_type_id",id:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.trip_type_id=e.target.multiple?n:n[0]}}},[e("option",{attrs:{value:"",selected:"",hidden:"",disabled:""}},[t._v("\n                    "+t._s(t.$t("tripTypePlac"))+"\n                  ")]),t._v(" "),t._l(t.categories,(function(n){return e("option",{key:n.id,domProps:{value:n.id}},[t._v(" "+t._s(n.name)+" ")])}))],2),t._v(" "),e("div",{staticClass:"icon-float"},[e("font-awesome-icon",{staticClass:"font15",attrs:{icon:["fas","sailboat"]}})],1),t._v(" "),e("div",{staticClass:"icon-float2"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-down"]}})],1)])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v(" "+t._s(t.$t("goDate"))+" ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.go_date,expression:"go_date"}],staticClass:"inp-spe-tele dateme",staticStyle:{padding:"15px"},attrs:{type:"date",placeholder:t.$t("goDatePlace"),name:"go_date"},domProps:{value:t.go_date},on:{input:function(e){e.target.composing||(t.go_date=e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v(" "+t._s(t.$t("returnDate"))+" ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.return_date,expression:"return_date"}],staticClass:"inp-spe-tele dateme",staticStyle:{padding:"15px"},attrs:{type:"date",placeholder:t.$t("returnDatePlace"),name:"return_date"},domProps:{value:t.return_date},on:{input:function(e){e.target.composing||(t.return_date=e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v(" "+t._s(t.$t("numHours"))+" ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.hours,expression:"hours"}],staticClass:"main-select",attrs:{name:"hours",id:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.hours=e.target.multiple?n:n[0]}}},[e("option",{attrs:{value:"",selected:"",hidden:"",disabled:""}},[t._v("\n                    "+t._s(t.$t("hoursPlace"))+"\n                  ")]),t._v(" "),t._l(t.times,(function(time){return e("option",{key:time.id,domProps:{value:time.id}},[t._v(" "+t._s(time.name)+" ")])}))],2),t._v(" "),e("div",{staticClass:"icon-float"},[e("font-awesome-icon",{staticClass:"color-main",attrs:{icon:["fas","clock"]}})],1),t._v(" "),e("div",{staticClass:"icon-float2"},[e("font-awesome-icon",{staticClass:"color-main",attrs:{icon:["fas","clock"]}})],1)])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v(" "+t._s(t.$t("gooDate"))+" ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.go_time,expression:"go_time"}],staticClass:"inp-spe-tele time-me",staticStyle:{padding:"15px"},attrs:{type:"time",placeholder:t.$t("gooDatePlace"),name:"go_time"},domProps:{value:t.go_time},on:{input:function(e){e.target.composing||(t.go_time=e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v(" "+t._s(t.$t("numPerson"))+" ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.persons_num,expression:"persons_num"}],staticClass:"inp-spe-tele",attrs:{type:"number",placeholder:t.$t("numPersonPlace"),name:"persons_num"},domProps:{value:t.persons_num},on:{input:function(e){e.target.composing||(t.persons_num=e.target.value)}}}),t._v(" "),e("div",{staticClass:"icon-float"},[e("font-awesome-icon",{staticClass:"color-main",attrs:{icon:["fas","users"]}})],1)])])]),t._v(" "),e("div",{staticClass:"col-md-12 col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v(" "+t._s(t.$t("paymentMethod"))+" ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.payment_type,expression:"payment_type"}],staticClass:"main-select",attrs:{name:"payment_type",id:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.payment_type=e.target.multiple?n:n[0]}}},[e("option",{attrs:{value:"",selected:"",hidden:"",disabled:""}},[t._v("\n                    "+t._s(t.$t("payPlace"))+"\n                  ")]),t._v(" "),t._l(t.payment_methods,(function(n){return e("option",{key:n.id,domProps:{value:n.key}},[t._v(" "+t._s(n.name)+" ")])}))],2),t._v(" "),e("div",{staticClass:"icon-float"},[e("font-awesome-icon",{staticClass:"font15",attrs:{icon:["fas","sailboat"]}})],1),t._v(" "),e("div",{staticClass:"icon-float2"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-down"]}})],1)])])]),t._v(" "),e("div",{staticClass:"col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v(" "+t._s(t.$t("copoun"))+"  ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"inp-spe-tele",attrs:{type:"text",placeholder:t.$t("enterCopoun"),name:"coupon"},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value)}}}),t._v(" "),e("div",{staticClass:"icon-float"},[e("font-awesome-icon",{staticClass:"color-main",attrs:{icon:["fas","users"]}})],1)])])]),t._v(" "),e("div",{staticClass:"col-12 mb-3"},[e("div",{staticClass:"mb-3 main-inp-cont"},[e("h6",{staticClass:"font-bold"},[t._v(" "+t._s(t.$t("notes"))+" ")]),t._v(" "),e("div",{staticClass:"relative-co"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"main-textarea",attrs:{name:"description",id:"",placeholder:t.$t("notesPlace"),rows:"4"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),e("div",{staticClass:"icon-float"},[e("font-awesome-icon",{staticClass:"color-main",attrs:{icon:["fas","object-ungroup"]}})],1)])])])]),t._v(" "),e("div",{staticClass:"flex-groupme"},[e("button",{staticClass:"main-btn up mb-2 w-50",attrs:{type:"button",disabled:t.disabled},on:{click:t.createOrder}},[t._v("\n            "+t._s(t.$t("confirm"))+"\n          ")])])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showAdd,expression:"showAdd"}],staticClass:"modalOverLay"},[e("section",{staticClass:"modal_body d-flex flex-column justify-content-center align-items-center"},[e("div",{staticClass:"flex-groupme mb-2"},[e("img",{staticClass:"modal-img-m",attrs:{src:n(480),alt:""}})]),t._v(" "),e("h5",{staticClass:"text-center mb-3 font-bold"},[t._v("\n            تهانينا تم ارسال طلبك بنجاح في انتظار قبول مقدم الخدمة\n          ")]),t._v(" "),e("div",{staticClass:"text-center mb-4 font14 gray-col"},[t._v("\n            يمكنك متابعة الطلب من خلال صفحة حجوزاتي\n          ")]),t._v(" "),e("div",{staticClass:"flex-groupme mb-4"},[e("nuxt-link",{staticClass:"btn-main up lg",attrs:{to:"/client/orders/"+t.order_id}},[t._v("متابعة الطلب")]),t._v(" "),e("nuxt-link",{staticClass:"btn-main up lg light-b",staticStyle:{color:"#111b5a !important"},attrs:{to:"/client/HomePage"}},[t._v("الرئيسية")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);