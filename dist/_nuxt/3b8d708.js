(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{544:function(e,t,r){var content=r(650);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("607e5a6c",content,!0,{sourceMap:!1})},649:function(e,t,r){"use strict";r(544)},650:function(e,t,r){var n=r(67)((function(i){return i[1]}));n.push([e.i,".filteredSearch{background:#fff;border:1px solid #ccc;border-radius:4px;margin-top:10px;padding:10px 5px}.filteredSearch li{color:#333;cursor:pointer;padding:5px 0}.filteredSearch li:not(:last-of-type){border-bottom:1px solid #dfdddd}.filteredSearch .desc{color:#0e8686;font-size:13px}",""]),n.locals={},e.exports=n},739:function(e,t,r){"use strict";r.r(t);r(23);var n=r(16),o=(r(54),r(75),r(53),{data:function(){return{searchBar:null,searchItems:[],products:[],showList:!1,searchBar2:null,searchItems2:[],products2:[],showList2:!1,categories:{},provider:!1,client:!1}},methods:{goToAd:function(e,t){this.$router.push("/client/travels/".concat(e)),this.searchBar=t,this.showList=!1},goToAd2:function(e,t){this.$router.push("/provider/orders/".concat(e)),this.searchBar=t,this.showList=!1},getProduct:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/home?search=".concat(e.searchBar)).then((function(t){"success"==t.key&&(""!=e.searchBar&&(e.showList=!0),e.searchItems=t.data[1].trip_types,console.log(e.searchItems))}));case 2:case"end":return t.stop()}}),t)})))()},getProduct2:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/delegate-near-waiting-orders?search=".concat(e.searchBar2),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){"success"==t.key&&(""!=e.searchBar2&&(e.showList2=!0),e.searchItems2=t.data.orders,console.log(e.searchItems2))}));case 2:case"end":return t.stop()}}),t)})))()}},watch:{searchBar:function(){""==this.searchBar&&(this.showList=!1)},searchBar2:function(){""==this.searchBar2&&(this.showList2=!1)}},mounted:function(){this.$route.fullPath.includes("client")?this.client=!0:this.$route.fullPath.includes("provider")&&(this.provider=!0)}}),c=(r(649),r(46)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("section",[e.client?t("div",{staticClass:"col-md-8 col-12 margin-auto mt-5"},[t("form",{attrs:{action:""}},[t("div",{staticClass:"header-inp-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchBar,expression:"searchBar"}],staticClass:"inp-search",attrs:{type:"text",placeholder:e.$t("searchHome")},domProps:{value:e.searchBar},on:{input:[function(t){t.target.composing||(e.searchBar=t.target.value)},function(t){return e.getProduct()}]}}),e._v(" "),t("button",{staticClass:"f-inp-icon color-main"},[t("font-awesome-icon",{attrs:{icon:["fas","magnifying-glass"]}})],1)])]),e._v(" "),e.showList?t("div",{staticClass:"filteredSearch"},[e.searchItems.length>0?t("ul",e._l(e.searchItems,(function(r){return t("li",{key:r.id,staticClass:"adName",on:{click:function(t){return e.goToAd(r.id,r.name)}}},[e._v(" "+e._s(r.name)+" ")])})),0):t("ul",[t("li",[e._v("لا توجد رحلات")])])]):e._e()]):e.provider?t("div",{staticClass:"col-md-8 col-12 margin-auto mt-5"},[t("form",{attrs:{action:""}},[t("div",{staticClass:"header-inp-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchBar2,expression:"searchBar2"}],staticClass:"inp-search",attrs:{type:"text",placeholder:e.$t("searchProvider")},domProps:{value:e.searchBar2},on:{input:[function(t){t.target.composing||(e.searchBar2=t.target.value)},function(t){return e.getProduct2()}]}}),e._v(" "),t("button",{staticClass:"f-inp-icon"},[t("font-awesome-icon",{attrs:{icon:["fas","magnifying-glass"]}})],1)])]),e._v(" "),e.showList2?t("div",{staticClass:"filteredSearch"},[e.searchItems2.length>0?t("ul",e._l(e.searchItems2,(function(r){return t("li",{key:r.id,staticClass:"adName",on:{click:function(t){return e.goToAd2(r.id,r.name)}}},[e._v("\n                     "+e._s(r.user_name)+" ("+e._s(r.name)+") \n                ")])})),0):t("ul",[t("li",[e._v(" "+e._s(e.$t("noOrders"))+" ")])])]):e._e()]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);