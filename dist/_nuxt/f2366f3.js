(window.webpackJsonp=window.webpackJsonp||[]).push([[93,89,90,92,94,95,96,97,98],{466:function(t,e,n){t.exports=n.p+"img/saudi.5ebdc2b.png"},467:function(t,e,n){t.exports=n.p+"img/united_states.2b1ef97.png"},472:function(t,e,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("e8a466fa",content,!0,{sourceMap:!1})},473:function(t,e,n){var o=n(67)((function(i){return i[1]}));o.push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),o.locals={},t.exports=o},496:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(53),{data:function(){return{showTab1:!0,showTab2:!1,showTab3:!1,financial:[]}},methods:{showTab1Fun:function(){this.showTab1=!0,this.showTab2=!1,this.showTab3=!1},showTab2Fun:function(){this.showTab1=!1,this.showTab2=!0,this.showTab3=!1},showTab3Fun:function(){this.showTab1=!1,this.showTab2=!1,this.showTab3=!0},getFainancial:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/financial",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.financial=e.data.financial}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getFainancial()}}),c=n(46),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-12",modifiers:{"accordion-12":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","money-bill"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("financeTreates"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-12",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile p-0"},[e("div",{staticClass:"tabs-head mb-3"},[e("button",{staticClass:"tab-btn-main",class:{active:t.showTab1},on:{click:t.showTab1Fun}},[t._v("\n          "+t._s(t.$t("myPills"))+"\n        ")]),t._v(" "),e("button",{staticClass:"tab-btn-main",class:{active:t.showTab2},on:{click:t.showTab2Fun}},[t._v("\n          "+t._s(t.$t("reserveNotes"))+"\n        ")]),t._v(" "),e("button",{staticClass:"tab-btn-main",class:{active:t.showTab3},on:{click:t.showTab3Fun}},[t._v("\n          "+t._s(t.$t("winns"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"tabs-show-spe"},[t.showTab1?e("div",{staticClass:"tab-content"},[t.financial.length>0?e("div",t._l(t.financial,(function(n){return e("div",{key:n.id,staticClass:"sh-report mb-3 mt-3"},[e("div",{staticClass:"flex-bet2 end-spe wrab-sm"},[e("div",{staticClass:"flex-defi-report wrab-db-sm align-items-center"},[e("div",{staticClass:"right-report shrink-no"},[e("img",{attrs:{src:n.boat_image,alt:""}})]),t._v(" "),e("div",{staticClass:"left-report"},[e("h6",[t._v("رقم الطلب : "+t._s(n.id))]),t._v(" "),e("div",{staticClass:"all-condition color-main mt-2"},[e("span",{staticClass:"gray-col"},[t._v("اسم القارب :")]),t._v("\n                      "+t._s(n.boat_name)+"\n                    ")])])]),t._v(" "),e("NuxtLink",{staticClass:"gray-col font14 shrink-no",attrs:{to:"/provider/pill/"+n.id}},[t._v(" "+t._s(t.$t("showPill"))+"\n                  "),e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)],1)])})),0):e("div",{staticClass:"not-f text-center text-danger mb-3"},[t._v("\n            "+t._s(t.$t("noPills"))+"\n          ")])]):t._e(),t._v(" "),t.showTab2?e("div",{staticClass:"tab-content"},[t.financial.length>0?e("div",t._l(t.financial,(function(n){return e("div",{key:n.id,staticClass:"sh-report mb-3 mt-3"},[e("div",{staticClass:"flex-bet2 wrab-sm"},[e("div",{staticClass:"flex-defi-report wrab-db-sm"},[e("div",{staticClass:"right-report shrink-no"},[e("img",{attrs:{src:n.boat_image,alt:""}})]),t._v(" "),e("div",{staticClass:"left-report"},[e("h6",[t._v("رقم الطلب : "+t._s(n.id))]),t._v(" "),e("div",{staticClass:"all-condition color-main mt-2 underline-p"},[e("span",{staticClass:"gray-col"},[t._v("اسم القارب :")]),t._v("\n                      "+t._s(n.boat_name)+"\n                    ")])])]),t._v(" "),e("div",{staticClass:"flex-book-spe"},[e("p",{staticClass:"gray-col font14 shrink-no"},[t._v("\n                    "+t._s(n.created_at)+"\n                  ")]),t._v(" "),e("NuxtLink",{staticClass:"gray-col font14 shrink-no",attrs:{to:"/provider/orders/"+n.id}},[t._v(" "+t._s(t.$t("showMore"))+"\n                    "),e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)],1)])])})),0):e("div",{staticClass:"not-f text-center text-danger mb-3"},[t._v("\n            "+t._s(t.$t("noReserves"))+"\n          ")])]):t._e(),t._v(" "),t.showTab3?e("div",{staticClass:"tab-content"},[t.financial.length>0?e("div",t._l(t.financial,(function(n){return e("div",{key:n.id,staticClass:"sh-report mb-3 mt-3"},[e("div",{staticClass:"flex-bet2 wrab-sm"},[e("div",{staticClass:"flex-defi-report wrab-db-sm"},[e("div",{staticClass:"left-report"},[e("h6",[t._v("رقم الطلب : "+t._s(n.id))])])])]),t._v(" "),e("div",{staticClass:"bet-flex-book mb-3 mt-3"},[e("div",{staticClass:"order-roe-spe"},[e("div",{staticClass:"gray-col mb-1"},[t._v("قيمة الطلب")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v(t._s(n.total_price))])]),t._v(" "),e("div",{staticClass:"order-roe-spe"},[e("div",{staticClass:"gray-col mb-1"},[t._v("عمولة التطبيق")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v(t._s(n.app_percentage))])]),t._v(" "),e("div",{staticClass:"order-roe-spe"},[e("div",{staticClass:"gray-col mb-1"},[t._v("القيمة المضافة")]),t._v(" "),e("div",{staticClass:"text-center"},[t._v(t._s(n.added_value))])])]),t._v(" "),e("div",{staticClass:"flex-book-spe-end"},[e("NuxtLink",{staticClass:"gray-col font14 shrink-no",attrs:{to:"/provider/orders/"+n.id}},[t._v("عرض الطلب\n                  "),e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)],1)])})),0):e("div",{staticClass:"not-f text-center text-danger mb-3"},[t._v("\n            "+t._s(t.$t("noWinnsProfits"))+"\n          ")])]):t._e()])])])],1)}),[],!1,null,null,null);e.default=component.exports},497:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(53),{data:function(){return{policy:""}},methods:{getTerms:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/policy-web").then((function(e){t.policy=e.data.policy}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getTerms()}}),c=n(46),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","shield-halved"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("ProfilePrivacy"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile"},[e("p",{staticClass:"text-center p-3 font20 line-h",domProps:{innerHTML:t._s(t.policy)}})])])],1)}),[],!1,null,null,null);e.default=component.exports},498:function(t,e,n){"use strict";n.r(e);var o=n(504),r=n(16),c=(n(53),{data:function(){return{reviews:[]}},methods:{getComments:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/user-reviews?provider_id=2",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.reviews=e.data.reviews}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getComments()}}),l=n(46),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-5",modifiers:{"accordion-5":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","comments"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("commentsUser"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-5",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile"},[t.reviews.length>0?e("div",{staticClass:"row mt-3"},t._l(t.reviews,(function(n){return e("div",{key:n,staticClass:"col-md-4 col-12 mb-3"},[e("div",{staticClass:"flex-profile-rate"},[e("img",{staticClass:"user-co-img shrink-no",attrs:{src:n.user_avatar,alt:""}}),t._v(" "),e("div",{staticClass:"user-info-pro"},[e("div",{staticClass:"flex-bet3"},[e("h6",{staticClass:"font13"},[t._v(t._s(n.user_name))]),t._v(" "),e("div",{staticClass:"gray-col font11"},[t._v(t._s(n.created_at))])]),t._v(" "),e(o.a,{attrs:{"half-increments":"",readonly:"true",color:"#f39c12",length:"5",size:"18",marginRight:"2"},model:{value:n.rate,callback:function(e){t.$set(n,"rate",e)},expression:"review.rate"}}),t._v(" "),e("p",{staticClass:"gray-col font12"},[t._v("\n                "+t._s(n.comment)+"\n              ")])],1)])])})),0):e("div",{staticClass:"not-f text-center text-danger"},[t._v(" "+t._s(t.$t("noComments"))+" ")])])])],1)}),[],!1,null,null,null);e.default=component.exports},499:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(53),{data:function(){return{complains:[]}},methods:{getComplains:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/get-tickets",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.complains=e.data.tickets}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getComplains()}}),c=n(46),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","file"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("complaints"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-4",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile"},[t.complains.length>0?e("div",t._l(t.complains,(function(n){return e("div",{key:n.id,staticClass:"sh-report mb-3 mt-3"},[e("div",{staticClass:"flex-bet2 wrab-sm"},[e("div",{staticClass:"flex-defi-report wrab-db-sm"},[e("div",{staticClass:"right-report shrink-no"},[e("img",{attrs:{src:n.order.image,alt:""}})]),t._v(" "),e("div",{staticClass:"left-report"},[e("h6",[t._v("رقم الشكوى : "+t._s(n.id))]),t._v(" "),e("p",{staticClass:"underline-p gray-col font14"},[t._v("\n                  "+t._s(n.text)+"\n                ")]),t._v(" "),e("div",{staticClass:"all-condition color-main mt-2"},[e("span",{staticClass:"gray-col"},[t._v("الحالة :")]),t._v(" "+t._s(n.status)+"\n                ")])])]),t._v(" "),e("div",{staticClass:"gray-col font14 shrink-no"},[t._v("\n              "+t._s(n.created_at)+"\n            ")])])])})),0):e("div",{staticClass:"not-f text-center text-danger"},[t._v(" "+t._s(t.$t("noComplaints"))+" ")])])])],1)}),[],!1,null,null,null);e.default=component.exports},500:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(53),{data:function(){return{terms:""}},methods:{getTerms:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/terms-web").then((function(e){t.terms=e.data.terms}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getTerms()}}),c=n(46),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","file"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("Brief"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile"},[e("p",{staticClass:"text-center p-3 font20 line-h",domProps:{innerHTML:t._s(t.terms)}})])])],1)}),[],!1,null,null,null);e.default=component.exports},501:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(53),{data:function(){return{wallet:""}},methods:{getWallet:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/wallet",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.wallet=e.data.wallet}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getWallet()}}),c=n(46),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-6",modifiers:{"accordion-6":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","wallet"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("wallet"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-6",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile text-center"},[e("div",{staticClass:"flex-groupme mb-3"},[e("img",{staticClass:"wallet-img",attrs:{src:"imgs/43.png",alt:""}})]),t._v(" "),e("div",{staticClass:"gray-col mb-1"},[t._v(" "+t._s(t.$t("current_wallet"))+" ")]),t._v(" "),e("div",{staticClass:"fontbolder28 mb-1"},[t._v(t._s(t.wallet))]),t._v(" "),e("div",{staticClass:"mb-1"},[t._v("ريال سعودي")]),t._v(" "),e("div",{staticClass:"flex-groupme mt-3"},[e("button",{staticClass:"btn-main up",attrs:{type:"button"}},[t._v(" "+t._s(t.$t("chargeWallet"))+" ")]),t._v(" "),e("button",{staticClass:"btn-main up light-b",attrs:{type:"button"}},[t._v(" "+t._s(t.$t("returnWallet"))+" ")])])])])],1)}),[],!1,null,null,null);e.default=component.exports},502:function(t,e,n){"use strict";n.r(e);n(12),n(20);var o=n(16),r=(n(53),{data:function(){return{offers_notify:null,offers_notify2:null}},methods:{getNoti:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/profile/show",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.offers_notify=e.data.user.offers_notify,t.offers_notify2=e.data.user.new_orders_notify}));case 2:case"end":return e.stop()}}),e)})))()},changeNoti:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("offers_notify",t.offers_notify),e.next=4,t.$axios.$post("/control-notification",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(t.offers_notify),"success"==e.key?t.$swal("","".concat(e.msg),"success"):t.$swal("","".concat(e.msg),"error")}));case 4:case"end":return e.stop()}}),e)})))()},changeNoti2:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("new_orders_notify",t.offers_notify2),e.next=4,t.$axios.$post("/control-notification",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){"success"==e.key?t.$swal("","".concat(e.msg),"success"):t.$swal("","".concat(e.msg),"error")}));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getNoti()}}),c=n(46),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-7",modifiers:{"accordion-7":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","bell"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("settingsAlerts"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-7",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile"},[e("div",{staticClass:"flex-row-sett"},[e("div",{staticClass:"sett-right"},[e("h5",[t._v(" "+t._s(t.$t("adsTitle"))+" ")]),t._v(" "),e("div",{staticClass:"under-h5 gray-col"},[t._v(" "+t._s(t.$t("adsDesc"))+" ")])]),t._v(" "),e("div",{staticClass:"sett-left"},[e("div",{staticClass:"switch-con"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.offers_notify,expression:"offers_notify"}],attrs:{type:"checkbox",hidden:"",name:"offers_notify",id:"switch"},domProps:{checked:Array.isArray(t.offers_notify)?t._i(t.offers_notify,null)>-1:t.offers_notify},on:{change:[function(e){var n=t.offers_notify,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.offers_notify=n.concat([null])):c>-1&&(t.offers_notify=n.slice(0,c).concat(n.slice(c+1)))}else t.offers_notify=r},t.changeNoti]}}),t._v(" "),e("label",{staticClass:"switch",attrs:{for:"switch"}},[e("div",{staticClass:"main-div"},[e("span")])])])])]),t._v(" "),e("div",{staticClass:"flex-row-sett"},[e("div",{staticClass:"sett-right"},[e("h5",[t._v(" "+t._s(t.$t("newOrders"))+" ")])]),t._v(" "),e("div",{staticClass:"sett-left"},[e("div",{staticClass:"switch-con"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.offers_notify2,expression:"offers_notify2"}],attrs:{type:"checkbox",hidden:"",name:"new_orders_notify",id:"switch2"},domProps:{checked:Array.isArray(t.offers_notify2)?t._i(t.offers_notify2,null)>-1:t.offers_notify2},on:{change:[function(e){var n=t.offers_notify2,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.offers_notify2=n.concat([null])):c>-1&&(t.offers_notify2=n.slice(0,c).concat(n.slice(c+1)))}else t.offers_notify2=r},t.changeNoti2]}}),t._v(" "),e("label",{staticClass:"switch",attrs:{for:"switch2"}},[e("div",{staticClass:"main-div"},[e("span")])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},503:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{activeArLang:!0,activeEnLang:!1}},methods:{setArabic:function(){this.activeArLang=!0,this.activeEnLang=!1,localStorage.setItem("locale","ar"),this.$i18n.locale="ar",location.reload()},setEnglish:function(){this.activeArLang=!1,this.activeEnLang=!0,localStorage.setItem("locale","en"),this.$i18n.locale="en",location.reload()}},updated:function(){console.log(this.$i18n.locale)},mounted:function(){"en"==localStorage.getItem("locale")?(this.activeArLang=!1,this.activeEnLang=!0):(this.activeArLang=!0,this.activeEnLang=!1),this.$i18n.locale=localStorage.getItem("locale")}},r=n(46),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-8",modifiers:{"accordion-8":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","repeat"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("webLang"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-8",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile"},[e("h5",{staticClass:"mb-2"},[t._v(" "+t._s(t.$t("welcome"))+" ")]),t._v(" "),e("div",{staticClass:"gray-col font14"},[t._v(" "+t._s(t.$t("chooseLang"))+" ")]),t._v(" "),e("div",{staticClass:"flex-groupme yes-wrap mt-3"},[e("button",{staticClass:"lang-box",class:{active:t.activeArLang},on:{click:function(e){return t.setArabic()}}},[e("div",{staticClass:"lang-flag"},[e("img",{attrs:{src:n(466),alt:""}})]),t._v(" "),e("div",{staticClass:"lang-text"},[t._v(" "+t._s(t.$t("arabic"))+" ")])]),t._v(" "),e("button",{staticClass:"lang-box",class:{active:t.activeEnLang},on:{click:function(e){return t.setEnglish()}}},[e("div",{staticClass:"lang-flag"},[e("img",{attrs:{src:n(467),alt:""}})]),t._v(" "),e("div",{staticClass:"lang-text"},[t._v(" "+t._s(t.$t("english"))+" ")])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},504:function(t,e,n){"use strict";n(145),n(118),n(14),n(472);var o=n(468),r=n(464),c=(n(43),n(9)),l=c.default.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}}),d=n(465),f=n(469),v=c.default.extend({name:"rippleable",directives:{ripple:f.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),m=n(217),h=n(40),_=n(216);e.a=Object(_.a)(r.a,l,v,d.a,m.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,o=t.light,r=t.medium,small=t.small;return{dark:e,large:n,light:o,medium:r,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var n=t.genHoverIndex(e,i);t.clearable&&t.internalValue===n?t.internalValue=0:t.internalValue=n}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var n={click:e.click};return this.hover&&(n.mouseenter=function(e){return t.onMouseEnter(e,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(o.a,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(e)])}},render:function(t){var e=this,n=Object(h.e)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},523:function(t,e,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("a66f0c92",content,!0,{sourceMap:!1})},561:function(t,e,n){"use strict";n.r(e);var o=n(560),r=n(497),c=n(500),l=n(499),d=n(498),f=n(501),v=n(496),m=n(502),h=n(503),_={components:{providerForm:o.default,profilePrivacy:r.default,providerTerms:c.default,providerComplains:l.default,providerComments:d.default,providerWallet:f.default,fainancialProvider:v.default,providerNoti:m.default,providerLang:h.default}},C=n(46),component=Object(C.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile-collapses contact-us section-pad mt-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"col-md-8 col-12 margin-auto p-0"},[e("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[e("div",{staticClass:"accordion",attrs:{role:"tablist"}},[e("providerForm"),t._v(" "),e("profilePrivacy"),t._v(" "),e("providerTerms"),t._v(" "),e("providerComplains"),t._v(" "),e("providerComments"),t._v(" "),e("providerWallet"),t._v(" "),e("fainancialProvider"),t._v(" "),e("providerNoti"),t._v(" "),e("providerLang")],1)])])])])}),[],!1,null,null,null);e.default=component.exports},593:function(t,e,n){"use strict";n(523)},594:function(t,e,n){var o=n(67)((function(i){return i[1]}));o.push([t.i,".card[data-v-1efd4e98]{border:none}.dafeult-faq-icon[data-v-1efd4e98]{transition:all .3s ease-in-out}.not-collapsed .dafeult-faq-icon[data-v-1efd4e98]{transform:rotate(270deg)}",""]),o.locals={},t.exports=o},705:function(t,e,n){"use strict";n.r(e);var o={components:{providerInfoComp:n(561).default}},r=(n(593),n(46)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("homeHeader",{attrs:{headerTitle:t.$t("personalTitle")}}),t._v(" "),e("providerInfoComp"),t._v(" "),e("homeFooter")],1)}),[],!1,null,"1efd4e98",null);e.default=component.exports}}]);