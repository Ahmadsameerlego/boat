(window.webpackJsonp=window.webpackJsonp||[]).push([[51,34],{457:function(t,e,n){t.exports=n.p+"img/device.0d65006.png"},459:function(t,e,n){t.exports=n.p+"img/Group 4460.9cd2763.png"},460:function(t,e,n){t.exports=n.p+"img/Group 4461.6bb21dd.png"},462:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(53),{data:function(){return{src1:n(459),src2:n(460),src3:n(457),site_image:"",site_secription:"",site_title:""}},methods:{getAboutData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/general-data").then((function(e){t.site_image=e.data.site_image,t.site_secription=e.data.site_secription,t.site_title=e.data.site_title}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getAboutData()}}),c=n(46),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"app section-pad"},[e("div",{staticClass:"container"},[e("div",{staticClass:"flex-groupme"},[e("h5",{staticClass:"main-title color-main font600 mb-5"},[t._v(" "+t._s(t.$t("app")))])]),t._v(" "),e("div",{staticClass:"landing mb-3 mt-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-12"},[e("div",{staticClass:"landing-right"},[e("h4",{staticClass:"line-under mb-3 font600"},[t._v("\n                    "+t._s(t.site_title)+"\n                ")]),t._v(" "),e("h2",{staticClass:"landing-join font-bold"},[t._v("Book A Boat")]),t._v(" "),e("p",[t._v("\n                    "+t._s(t.site_secription)+"\n                ")]),t._v(" "),e("div",{staticClass:"downloads"},[e("img",{attrs:{src:t.src1,alt:""}}),t._v(" "),e("img",{attrs:{src:t.src2,alt:""}})])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-12"},[e("div",{staticClass:"landing-left text-center"},[e("img",{attrs:{src:n(457),alt:""}})])])])])])])])}),[],!1,null,null,null);e.default=component.exports},695:function(t,e,n){"use strict";n.r(e);var o={},r=n(46),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("main",[e("homeHeader",{attrs:{headerTitle:t.$t("activeBooks")}}),t._v(" "),e("booksActive"),t._v(" "),e("HomeDownloadApp"),t._v(" "),e("homeFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeDownloadApp:n(462).default})}}]);