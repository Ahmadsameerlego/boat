(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{501:function(t,e,n){"use strict";n.r(e);var l=n(16),o=(n(53),{data:function(){return{wallet:""}},methods:{getWallet:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/wallet",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.wallet=e.data.wallet}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getWallet()}}),r=n(46),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-6",modifiers:{"accordion-6":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","wallet"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("wallet"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-6",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile text-center"},[e("div",{staticClass:"flex-groupme mb-3"},[e("img",{staticClass:"wallet-img",attrs:{src:"imgs/43.png",alt:""}})]),t._v(" "),e("div",{staticClass:"gray-col mb-1"},[t._v(" "+t._s(t.$t("current_wallet"))+" ")]),t._v(" "),e("div",{staticClass:"fontbolder28 mb-1"},[t._v(t._s(t.wallet))]),t._v(" "),e("div",{staticClass:"mb-1"},[t._v("ريال سعودي")]),t._v(" "),e("div",{staticClass:"flex-groupme mt-3"},[e("button",{staticClass:"btn-main up",attrs:{type:"button"}},[t._v(" "+t._s(t.$t("chargeWallet"))+" ")]),t._v(" "),e("button",{staticClass:"btn-main up light-b",attrs:{type:"button"}},[t._v(" "+t._s(t.$t("returnWallet"))+" ")])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);