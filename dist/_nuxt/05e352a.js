(window.webpackJsonp=window.webpackJsonp||[]).push([[84,34],{457:function(t,n,e){t.exports=e.p+"img/device.0d65006.png"},459:function(t,n,e){t.exports=e.p+"img/Group 4460.9cd2763.png"},460:function(t,n,e){t.exports=e.p+"img/Group 4461.6bb21dd.png"},462:function(t,n,e){"use strict";e.r(n);var o=e(16),r=(e(53),{data:function(){return{src1:e(459),src2:e(460),src3:e(457),site_image:"",site_secription:"",site_title:""}},methods:{getAboutData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$get("/general-data").then((function(n){t.site_image=n.data.site_image,t.site_secription=n.data.site_secription,t.site_title=n.data.site_title}));case 2:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.getAboutData()}}),c=e(46),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"app section-pad"},[n("div",{staticClass:"container"},[n("div",{staticClass:"flex-groupme"},[n("h5",{staticClass:"main-title color-main font600 mb-5"},[t._v(" "+t._s(t.$t("app")))])]),t._v(" "),n("div",{staticClass:"landing mb-3 mt-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-12"},[n("div",{staticClass:"landing-right"},[n("h4",{staticClass:"line-under mb-3 font600"},[t._v("\n                    "+t._s(t.site_title)+"\n                ")]),t._v(" "),n("h2",{staticClass:"landing-join font-bold"},[t._v("Book A Boat")]),t._v(" "),n("p",[t._v("\n                    "+t._s(t.site_secription)+"\n                ")]),t._v(" "),n("div",{staticClass:"downloads"},[n("img",{attrs:{src:t.src1,alt:""}}),t._v(" "),n("img",{attrs:{src:t.src2,alt:""}})])])]),t._v(" "),n("div",{staticClass:"col-md-6 col-12"},[n("div",{staticClass:"landing-left text-center"},[n("img",{attrs:{src:e(457),alt:""}})])])])])])])])}),[],!1,null,null,null);n.default=component.exports},703:function(t,n,e){"use strict";e.r(n);var o={},r=e(46),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("main",[n("homeHeader",{attrs:{headerTitle:t.$t("finishBooks")}}),t._v(" "),n("booksFinish"),t._v(" "),n("HomeDownloadApp"),t._v(" "),n("homeFooter")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HomeDownloadApp:e(462).default})}}]);