(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{534:function(t,e,n){var content=n(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("1e261c35",content,!0,{sourceMap:!1})},623:function(t,e,n){"use strict";n(534)},624:function(t,e,n){var o=n(67)((function(i){return i[1]}));o.push([t.i,".btn-info[data-v-2818f9d6]{background-color:#111b5a;border:1px solid #111b5a;color:#fff}",""]),o.locals={},t.exports=o},722:function(t,e,n){"use strict";n.r(e);var o=n(16),r=(n(53),{data:function(){return{text:"lorem ",faqs:[]}},methods:{getFaqs:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/faqs").then((function(e){t.faqs=e.data.data.faqs,console.log(e.data.data)}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getFaqs()}}),c=(n(623),n(46)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"faqs"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.faqs,(function(n){return e("b-card",{key:n.id,staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-".concat(n.id),expression:"`accordion-${faq.id}`"}],staticClass:"text-right",attrs:{block:"",variant:"info"}},[t._v(" "+t._s(n.question)+" ")])],1),t._v(" "),e("b-collapse",{attrs:{id:"accordion-"+n.id,visible:"",accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[t._v("\n                  "+t._s(n.answer)+"\n              ")])],1)],1)],1)})),1)])])}),[],!1,null,"2818f9d6",null);e.default=component.exports}}]);