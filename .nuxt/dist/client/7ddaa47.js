(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{553:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(53),{data:function(){return{complains:[]}},methods:{getComplains:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/get-tickets",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.complains=e.data.tickets}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getComplains()}}),c=n(46),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-card",{attrs:{"no-body":""}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"flex-bet all-qestion m-1",attrs:{role:"tab"}},[e("div",{staticClass:"flex-qet-me"},[e("div",{staticClass:"icon-faq color-main"},[e("font-awesome-icon",{attrs:{icon:["fas","file"]}})],1),t._v(" "),e("div",{staticClass:"full-q"},[t._v(" "+t._s(t.$t("complaints"))+" ")])]),t._v(" "),e("div",{staticClass:"dafeult-faq-icon"},[e("font-awesome-icon",{attrs:{icon:["fas","chevron-left"]}})],1)]),t._v(" "),e("b-collapse",{attrs:{id:"accordion-4",accordion:"my-accordion",role:"tabpanel"}},[e("div",{staticClass:"parent-profile"},[t.complains.length>0?e("div",t._l(t.complains,(function(n){return e("div",{key:n.id,staticClass:"sh-report mb-3 mt-3"},[e("div",{staticClass:"flex-bet2 wrab-sm"},[e("div",{staticClass:"flex-defi-report wrab-db-sm"},[e("div",{staticClass:"right-report shrink-no"},[e("img",{attrs:{src:n.order.image,alt:""}})]),t._v(" "),e("div",{staticClass:"left-report"},[e("h6",[t._v(" "+t._s(t.$t("complainNumber"))+" : "+t._s(n.id))]),t._v(" "),e("p",{staticClass:"underline-p gray-col font14"},[t._v("\n                  "+t._s(n.text)+"\n                ")]),t._v(" "),e("div",{staticClass:"all-condition color-main mt-2"},[e("span",{staticClass:"gray-col"},[t._v(" "+t._s(t.$t("status"))+" :")]),t._v(" "+t._s(n.status)+"\n                ")])])]),t._v(" "),e("div",{staticClass:"gray-col font14 shrink-no"},[t._v("\n              "+t._s(n.created_at)+"\n            ")])])])})),0):e("div",{staticClass:"not-f text-center text-danger"},[t._v(" "+t._s(t.$t("noComplaints"))+" ")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);