(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{543:function(e,t,o){var content=o(645);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(68).default)("2f30454e",content,!0,{sourceMap:!1})},644:function(e,t,o){"use strict";o(543)},645:function(e,t,o){var n=o(67)((function(i){return i[1]}));n.push([e.i,".uploadFile{height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.message_img{height:80px;width:80px}.status.open{background:#117211}.status.close,.status.open{border-radius:50%;height:12px;width:12px}.status.close{background:#a00e1a}.closeWindow{align-items:center;display:flex;height:25px;justify-content:center;width:25px}.chat_window{background:#fff;bottom:0;box-shadow:0 0 10px rgba(51,51,51,.271);height:320px;position:fixed;right:0;width:300px}.chat_window .window_body{height:212px;margin-top:12px;overflow-y:auto}.chat_window .window_body .created_at{color:#dfd2d2;font-size:12px}.chat_window .window_body .window_avatar{border-radius:50%;height:35px;width:35px}.chat_window .window_body .message_content{background:#ccc;border-radius:5px;color:#424040;font-size:13px;padding:5px}.window_footer{background:#fff;box-shadow:0 0 8px hsla(0,3%,53%,.239);width:100%}.window_footer .send{font-size:12px;height:30px;padding:0;width:81px}.window_footer textarea{font-size:12px;height:40px;width:122px}.window_footer textarea:focus{position:fixed;width:285px}.window_footer .upload{color:#ccc}.window_head{background:#111b5a;height:40px;padding-left:12px;padding-right:12px}.window_head .status{margin:0 5px}.name,.status{color:#fff}.dropdown-toggle:after{display:none}.btn-secondary{background:transparent;border:none}.room_avatar{border-radius:50%;height:40px;margin:0 7px;width:40px}.room_item{border-bottom:1px solid #ccc}.para{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:202px}.receive{flex-direction:row-reverse;width:100%}.dropdown-menu{max-height:400px;min-height:auto;overflow-y:auto}",""]),n.locals={},e.exports=n},737:function(e,t,o){"use strict";o.r(t);o(23);var n=o(16),r=(o(53),o(42),o(1),o(37),o(41),o(471),o(176),o(54),o(75),{data:function(){return{rooms:[],room:{},messages:[],reversedMessages:[],user_id:"",delegate_id:"",room_id:"",sended_room:"",showWindow:!1,showLoad:!1,messageText:"",avatar:"",fileChosen:"",file:"",type:"",client:!1,provider:!1}},methods:{addMessage:function(){if(""!==this.fileChosen){var e=new FormData;e.append("file",this.file),e.append("type",this.type),this.uploadFile(e)}else{if(""==this.messageText.trim())return!1;this.sendMessage(this.messageText,"text")}},uploadFile:function(e){var t=this;this.$axios.$post("/upload-file",e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){"success"==e.key&&(t.fileChosen="",t.sendMessage(e.data.name,"file",e.data.url))}))},sendMessage:function(e,t,o){var n=this,body=e;null!=o&&(body=o),1==this.client?this.$socket.emit("sendMessage",{sender_id:this.user_id,sender_type:"user",avater:this.avatar,receiver_id:this.delegate_id,receiver_type:"delegate",room_id:this.room_id,type:t,content:body,duration:0,created_at:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}):1==this.provider&&this.$socket.emit("sendMessage",{sender_id:this.delegate_id,sender_type:"delegate",avater:this.avatar,receiver_id:this.user_id,receiver_type:"user",room_id:this.room_id,type:t,content:body,duration:0,created_at:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})});var r=localStorage.getItem("user");this.avatar=JSON.parse(r).avatar,this.messages.push({is_sender:1,avatar:this.avatar,sent_by_me:!0,type:t,content:body,time:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),fileChosen:this.fileChosen}),this.messageText="",this.$nextTick((function(){n.scrollToBottom()})),console.log(this.room_id),console.log(this.user_id),console.log(this.delegate_id)},getChatRooms:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/my-rooms?page=1",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){"success"==t.key&&(e.rooms=t.data.rooms)}));case 2:case"end":return t.stop()}}),t)})))()},showRoom:function(e,t,o){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.showWindow=!0,r.showLoad=!0,n.next=4,r.$axios.$get("/single-room?room_id=".concat(e,"&page=1"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(n){if("success"==n.key&&(r.room=n.data.room,r.messages=n.data.room.messages,r.reversedMessages=r.messages.reverse(),r.showLoad=!1,r.room_id=e,r.user_id=t,r.delegate_id=o,r.$nextTick((function(){r.scrollToBottom()})),"undefined"!=typeof localStorage)){var c=localStorage.getItem("user"),d=JSON.parse(c).id,l=JSON.parse(c).acc_type;r.$socket.emit("adduser",{user_id:d,room_id:r.room_id,user_type:l})}}));case 4:case"end":return n.stop()}}),n)})))()},closeWindow:function(){this.showWindow=!1},scrollToBottom:function(){var e=this.$refs.chatSection;e.scrollTop=e.scrollHeight},uploadImage:function(){this.file=this.$refs.file.files[0],this.fileChosen=URL.createObjectURL(this.file),this.messageText=this.$refs.file.files[0].name,this.type=this.$refs.file.files[0].type,console.log(this.fileChosen)}},sockets:{newMessage:function(data){var e=new Date(data.created_at);e.toLocaleString("en-US",{timeZone:"Asia/Riyadh"}),this.messages.push({sent_by_me:!1,type:data.type,content:data.content,date:e.toDateString("en-US",{timeZone:"Asia/Riyadh"}),time:this.formatAMPM(e)})}},beforeMount:function(){this.getChatRooms()},mounted:function(){this.$socket.on("connect",(function(){console.log("socket connect")})),this.$route.fullPath.includes("client")?this.client=!0:this.$route.fullPath.includes("provider")&&(this.provider=!0)},created:function(){var e=this;this.$socket.on("newMessage",(function(data){console.log(data),console.log("neeeeeeew messssssageeeeeee");var t=new Date(data.created_at);t.toLocaleString("en-US",{timeZone:"Asia/Riyadh"}),e.messages.push({sent_by_me:!1,type:data.type,content:data.content,date:t.toDateString("en-US",{timeZone:"Asia/Riyadh"}),time:data.created_at})}))}}),c=(o(644),o(46)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("section",[t("b-dropdown",{scopedSlots:e._u([{key:"button-content",fn:function(){return[t("button",[t("font-awesome-icon",{staticClass:"white-col",attrs:{icon:["fas","message"]}})],1)]},proxy:!0}])},[e._v(" "),e._l(e.rooms,(function(o){return t("b-dropdown-item",{key:o.id,staticClass:"room_item mb-2",attrs:{href:"#"},on:{click:function(t){return e.showRoom(o.id,o.user_id,o.delegate_id)}}},[e.rooms.length>0?t("div",[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("div",{staticClass:"d-flex"},[t("img",{staticClass:"room_avatar",attrs:{src:o.avatar}}),e._v(" "),t("div",{staticClass:"d-flex justify-content-start align-items-start flex-column"},[t("h6",[e._v(" "+e._s(o.name)+" ")]),e._v(" "),t("p",{staticClass:"para"},[e._v(" "+e._s(o.message.content)+" ")])])]),e._v(" "),t("div",[t("span",{staticClass:"text-muted"},[e._v(" "+e._s(o.time)+" ")])])])]):t("div",[t("h5",{staticClass:"text-center"},[e._v(" لا توجد محادثات إلى الان ")])])])}))],2),e._v(" "),e.showWindow?t("section",{staticClass:"chat_window"},[t("main",{staticClass:"position-relative"},[t("div",{staticClass:"window_head"},[t("div",{staticClass:"d-flex pt-2 justify-content-between align-items-baseline"},[t("h6",{staticClass:"name"},[e._v(" "+e._s(e.room.user_name)+" ")]),e._v(" "),t("button",{staticClass:"btn btn-danger closeWindow",on:{click:e.closeWindow}},[t("font-awesome-icon",{attrs:{icon:["fas","xmark"]}})],1)])]),e._v(" "),t("div",{ref:"chatSection",staticClass:"window_body"},[t("section",{staticClass:"messages"},e._l(e.reversedMessages,(function(o){return t("div",{key:o.id,staticClass:"message position-relative d-flex mb-2"},[1==o.sent_by_me?t("div",{staticClass:"d-flex"},[t("img",{staticClass:"window_avatar",attrs:{src:o.avatar,alt:""}}),e._v(" "),"text"==o.type?t("p",{staticClass:"message_content"},[e._v(" "+e._s(o.content)+" ")]):"file"==o.type?t("div",{staticClass:"image_previewed"},[t("img",{staticClass:"message_img",attrs:{src:o.content,alt:""}})]):e._e(),e._v(" "),t("span",{staticClass:"created_at"},[e._v(" "+e._s(o.time)+" ")])]):0==o.sent_by_me?t("div",{staticClass:"receive d-flex"},[t("img",{staticClass:"window_avatar",attrs:{src:o.avatar,alt:""}}),e._v(" "),"text"==o.type?t("p",{staticClass:"message_content"},[e._v(" "+e._s(o.content)+" ")]):"file"==o.type?t("div",{staticClass:"image_previewed"},[t("img",{staticClass:"message_img",attrs:{src:o.content,alt:""}})]):e._e(),e._v(" "),t("span",{staticClass:"created_at"},[e._v(" "+e._s(o.time)+" ")])]):e._e()])})),0)]),e._v(" "),t("div",{staticClass:"window_footer pt-2 pb-2 px-2"},[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("button",{staticClass:"upload btn position-relative"},[t("font-awesome-icon",{attrs:{icon:["fas","camera"]}}),e._v(" "),t("input",{ref:"file",staticClass:"uploadFile",attrs:{type:"file",name:"file"},on:{change:e.uploadImage}})],1),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageText,expression:"messageText"}],staticClass:"form-control",attrs:{name:"",id:"",placeholder:"اكتب رسالتك"},domProps:{value:e.messageText},on:{input:function(t){t.target.composing||(e.messageText=t.target.value)}}}),e._v(" "),t("button",{staticClass:"send btn btn-main",on:{click:function(t){return t.preventDefault(),e.addMessage()}}},[e._v("ارسل")])])]),e._v(" "),e.showLoad?t("div",{staticClass:"spinner-border",staticStyle:{position:"absolute",top:"50%",left:"50%"},attrs:{role:"status"}}):e._e()])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);