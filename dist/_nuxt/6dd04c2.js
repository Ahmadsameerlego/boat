(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{480:function(e,t,r){e.exports=r.p+"img/91068-message-sent-successfully-plane.6d67390.gif"},541:function(e,t,r){var content=r(641);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("542b0e85",content,!0,{sourceMap:!1})},640:function(e,t,r){"use strict";r(541)},641:function(e,t,r){var n=r(67)((function(i){return i[1]}));n.push([e.i,".btn-danger{background-color:#bd1212}.pill{align-items:center;border-radius:4px;color:#fff;display:flex;float:left;font-size:14px;height:36px;justify-content:center;margin-left:12px;margin-top:-29px;width:193px}",""]),n.locals={},e.exports=n},734:function(e,t,r){"use strict";r.r(t);var n=r(16),o=(r(43),r(53),{data:function(){return{order:{},additives:[],free_additives:[],showAccept:!1,order_id:"",showRefuse:!1,reasons:[],reason:!1}},watch:{reason:function(){console.log(this.reason)}},methods:{getDelegateOrders:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/delegate-single-order?order_id=".concat(e.$route.params.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.order=t.data.order,e.additives=t.data.order.additives,e.free_additives=t.data.order.free_additives}));case 2:case"end":return t.stop()}}),t)})))()},acceptOrder:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("order_id",e.$route.params.id),t.next=4,e.$axios.$post("/delegate-accept-order",r,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){"success"==t.key?(e.showAccept=!0,e.getDelegateOrders()):e.$swal("","".concat(t.msg),"error")}));case 4:case"end":return t.stop()}}),t)})))()},getRefuseReasons:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/refuse-reasons",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.reasons=t.data.reasons}));case 2:case"end":return t.stop()}}),t)})))()},refuseOrder:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("order_id",e.$route.params.id),r.append("reason",e.reason),t.next=5,e.$axios.$post("/delegate-refuse-order",r,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){"success"==t.key?(e.$swal("","".concat(t.msg),"success"),setTimeout((function(){e.$router.push("/provider/books/MyBooks")}),2e3)):e.$swal("","".concat(t.msg),"success")}));case 5:case"end":return t.stop()}}),t)})))()},showRefuseModal:function(){this.showRefuse=!0},closeRefuse:function(){this.showRefuse=!1},refreshOrder:function(){this.showAccept=!1,this.getDelegateOrders()},startTrip:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("order_id",e.$route.params.id),r.append("delivery_status","delivering"),t.next=5,e.$axios.$post("/delegate-start-order",r,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){"success"==t.key?e.getDelegateOrders():e.$swal("","".concat(t.msg),"error")}));case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getDelegateOrders(),this.getRefuseReasons(),this.order_id=this.$route.params.id}}),c=(r(640),r(46)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"book-trip section-pad"},[t("div",{staticClass:"container"},[t("div",{staticClass:"card-white mt-5"},[t("div",{staticClass:"card-title text-center"},[e._v(e._s(e.$t("orderPill"))+"\n        ")]),e._v(" "),t("div",{staticClass:"card-white-body p-speee"},[t("div",{staticClass:"col-md-6 col-12 margin-auto"},[t("div",{staticClass:"table-offer"},[t("table",{staticClass:"table",attrs:{id:"myTable"}},[t("thead",[t("tr",[t("th",[e._v(e._s(e.$t("reserveCount")))]),e._v(" "),t("th",[e._v(e._s(e.$t("additivesMoney")))])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("span",{staticClass:"gray-col"},[e._v(" "+e._s(e.order.price)+" ر.س")])]),e._v(" "),t("td",[t("span",{staticClass:"gray-col"},[e._v(" "+e._s(e.order.additives_price)+" ر.س ")])])])])])])]),e._v(" "),t("div",{staticClass:"col-md-6 col-12 margin-auto mb-4"},[t("div",{staticClass:"table-offer spe-table-o"},[t("table",{staticClass:"table",attrs:{id:"myTable"}},[t("thead",[t("tr",[t("th",[e._v(e._s(e.$t("discountAmount"))+" ")]),e._v(" "),t("th",[e._v(e._s(e.$t("additiveValue")))])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("span",{staticClass:"gray-col"},[e._v(" "+e._s(e.order.discount)+" ر.س ")])]),e._v(" "),t("td",[t("span",{staticClass:"gray-col"},[e._v(" "+e._s(e.order.added_value)+" ر.س ")])])])])])]),e._v(" "),t("div",{staticClass:"flex-bet all-price-ma"},[t("div",{staticClass:"right-all"},[e._v(e._s(e.$t("total"))+" :")]),e._v(" "),t("div",{staticClass:"right-all"},[e._v(" "+e._s(e.order.total_price)+" ر.س")])])])])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showAccept,expression:"showAccept"}],staticClass:"modalOverLay"},[t("section",{staticClass:"modal_body d-flex flex-column justify-content-center align-items-center"},[t("div",{staticClass:"flex-groupme mb-2"},[t("img",{staticClass:"modal-img-m",attrs:{src:r(480),alt:""}})]),e._v(" "),t("h5",{staticClass:"text-center mb-3 font-bold"},[e._v("\n              تهانينا تم ارسال الطلب في انتظار الدفع من العميل\n            ")]),e._v(" "),t("div",{staticClass:"text-center mb-4 font14 gray-col"},[e._v("\n              يمكنك متابعة الطلب من خلال صفحة حجوزاتي\n            ")]),e._v(" "),t("div",{staticClass:"flex-groupme mb-4"},[t("button",{staticClass:"btn-main up lg",on:{click:e.refreshOrder}},[e._v("متابعة الطلب")]),e._v(" "),t("nuxt-link",{staticClass:"btn-main up lg light-b",staticStyle:{color:"#111b5a !important"},attrs:{to:"/provider/HomePage"}},[e._v("الرئيسية")])],1)])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showRefuse,expression:"showRefuse"}],staticClass:"modalOverLay"},[t("section",{staticClass:"modal_body d-flex flex-column"},[t("div",{staticClass:"flex-groupme mb-2"}),e._v(" "),t("h5",{staticClass:"text-center mb-3 font-bold"},[t("h5",{staticClass:"text-center mb-3 font-bold"},[e._v("\n              "+e._s(e.$t("refuseOrder"))+"\n            ")])]),e._v(" "),t("div",e._l(e.reasons,(function(r){return t("div",{key:r.id,staticClass:"d-flex mb-3 px-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reason,expression:"reason"}],staticStyle:{margin:"0 10px"},attrs:{type:"radio",name:"reason",id:"reasnonItem"+r.id},domProps:{value:r.reason,checked:e._q(e.reason,r.reason)},on:{change:function(t){e.reason=r.reason}}}),e._v(" "),t("label",{attrs:{for:"reasnonItem"+r.id}},[e._v(" "+e._s(r.reason)+" ")])])})),0),e._v(" "),t("div",{staticClass:"flex-groupme mb-4"},[t("button",{staticClass:"btn-danger btn-main up lg",on:{click:e.refuseOrder}},[e._v(" "+e._s(e.$t("cancel"))+" ")]),e._v(" "),t("button",{staticClass:"btn-main up lg light-b",staticStyle:{color:"#111b5a !important"},on:{click:e.closeRefuse}},[e._v("العودة")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);