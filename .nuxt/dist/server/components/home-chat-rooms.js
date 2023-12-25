exports.ids = [23];
exports.modules = {

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      rooms: [],
      room: {},
      messages: [],
      reversedMessages: [],
      user_id: '',
      delegate_id: '',
      room_id: '',
      sended_room: '',
      showWindow: false,
      showLoad: false,
      messageText: '',
      avatar: '',
      fileChosen: "",
      file: "",
      type: '',
      client: false,
      provider: false
    };
  },
  methods: {
    // main send method => { check if the message is file or text }
    addMessage() {
      if (this.fileChosen !== "") {
        // upload file
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("type", this.type);

        // if message uploaded is file then send it 
        this.uploadFile(formData);
      } else if (this.messageText.trim() == "") {
        return false;
      } else {
        // send text message
        this.sendMessage(this.messageText, "text");
      }
    },
    // upload file (request)
    uploadFile(formData) {
      // POST /someUrl
      this.$axios.$post("/upload-file", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        if (response.key == "success") {
          this.fileChosen = "";

          // send message here
          this.sendMessage(response.data.name, "file", response.data.url);
        }
      });
    },
    // send message 
    sendMessage(msg, type, url) {
      let body = msg;
      if (url != null) {
        body = url;
      }
      if (this.client == true) {
        this.$socket.emit("sendMessage", {
          sender_id: this.user_id,
          sender_type: 'user',
          avater: this.avatar,
          receiver_id: this.delegate_id,
          receiver_type: 'delegate',
          room_id: this.room_id,
          type: type,
          content: body,
          duration: 0,
          created_at: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        });
      } else if (this.provider == true) {
        this.$socket.emit("sendMessage", {
          sender_id: this.delegate_id,
          sender_type: 'delegate',
          avater: this.avatar,
          receiver_id: this.user_id,
          receiver_type: 'user',
          room_id: this.room_id,
          type: type,
          content: body,
          duration: 0,
          created_at: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })
        });
      }
      let user = localStorage.getItem('user');
      this.avatar = JSON.parse(user).avatar;
      this.messages.push({
        // created_at: date,
        is_sender: 1,
        // original_message: { body: body, type: $type },
        avatar: this.avatar,
        sent_by_me: true,
        type: type,
        content: body,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        }),
        fileChosen: this.fileChosen
      });
      // this.messages = this.messages.reverse();

      this.messageText = "";
      this.$nextTick(() => {
        this.scrollToBottom();
      });
      console.log(this.room_id);
      console.log(this.user_id);
      console.log(this.delegate_id);
    },
    // get rooms 
    async getChatRooms() {
      await this.$axios.$get('/my-rooms?page=1', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.rooms = res.data.rooms;
        }
      });
    },
    // get single room 
    async showRoom(room_id, user_id, delegate_id) {
      this.showWindow = true;
      this.showLoad = true;
      await this.$axios.$get(`/single-room?room_id=${room_id}&page=1`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.key == 'success') {
          this.room = res.data.room;
          this.messages = res.data.room.messages;
          this.reversedMessages = this.messages.reverse();
          this.showLoad = false;
          this.room_id = room_id;
          this.user_id = user_id;
          this.delegate_id = delegate_id;
          this.$nextTick(() => {
            this.scrollToBottom();
          });
          if (typeof localStorage !== 'undefined') {
            let user = localStorage.getItem('user');
            let user_id = JSON.parse(user).id;
            let type = JSON.parse(user).acc_type;
            this.$socket.emit("adduser", {
              user_id: user_id,
              // delegate_id: 64,
              room_id: this.room_id,
              user_type: type
            });
          }
        }
      });
    },
    closeWindow() {
      this.showWindow = false;
    },
    scrollToBottom() {
      const chatSection = this.$refs.chatSection;
      chatSection.scrollTop = chatSection.scrollHeight;
    },
    uploadImage() {
      this.file = this.$refs.file.files[0];
      this.fileChosen = URL.createObjectURL(this.file);
      this.messageText = this.$refs.file.files[0].name;
      this.type = this.$refs.file.files[0].type;
      console.log(this.fileChosen);
    }
  },
  sockets: {
    newMessage(data) {
      // console.log('new message' ,data);
      var date = new Date(data.created_at);
      date.toLocaleString("en-US", {
        timeZone: "Asia/Riyadh"
      });
      this.messages.push({
        sent_by_me: false,
        type: data.type,
        content: data.content,
        date: date.toDateString("en-US", {
          timeZone: "Asia/Riyadh"
        }),
        time: this.formatAMPM(date)
      });
    }
  },
  beforeMount() {
    this.getChatRooms();
  },
  mounted() {
    // console.log(this.fileChosen)

    this.$socket.on('connect', () => {
      console.log('socket connect');
    });
    if (this.$route.fullPath.includes('client')) {
      this.client = true;
    } else if (this.$route.fullPath.includes('provider')) {
      this.provider = true;
    }
  },
  created() {
    this.$socket.on('newMessage', data => {
      console.log(data);
      console.log('neeeeeeew messssssageeeeeee');
      var date = new Date(data.created_at);
      date.toLocaleString("en-US", {
        timeZone: "Asia/Riyadh"
      });
      this.messages.push({
        sent_by_me: false,
        type: data.type,
        content: data.content,
        date: date.toDateString("en-US", {
          timeZone: "Asia/Riyadh"
        }),
        time: data.created_at
      });

      // this.messages = this.messages.reverse()
      // this.scrollToBottom()
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)["URL"]))

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("2f30454e", content, true, context)
};

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRooms_vue_vue_type_style_index_0_id_1f6a25ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(249);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRooms_vue_vue_type_style_index_0_id_1f6a25ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRooms_vue_vue_type_style_index_0_id_1f6a25ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRooms_vue_vue_type_style_index_0_id_1f6a25ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatRooms_vue_vue_type_style_index_0_id_1f6a25ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".uploadFile{height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.message_img{height:80px;width:80px}.status.open{background:#117211}.status.close,.status.open{border-radius:50%;height:12px;width:12px}.status.close{background:#a00e1a}.closeWindow{align-items:center;display:flex;height:25px;justify-content:center;width:25px}.chat_window{background:#fff;bottom:0;box-shadow:0 0 10px rgba(51,51,51,.271);height:320px;position:fixed;right:0;width:300px}.chat_window .window_body{height:212px;margin-top:12px;overflow-y:auto}.chat_window .window_body .created_at{color:#dfd2d2;font-size:12px}.chat_window .window_body .window_avatar{border-radius:50%;height:35px;width:35px}.chat_window .window_body .message_content{background:#ccc;border-radius:5px;color:#424040;font-size:13px;padding:5px}.window_footer{background:#fff;box-shadow:0 0 8px hsla(0,3%,53%,.239);width:100%}.window_footer .send{font-size:12px;height:30px;padding:0;width:81px}.window_footer textarea{font-size:12px;height:40px;width:122px}.window_footer textarea:focus{position:fixed;width:285px}.window_footer .upload{color:#ccc}.window_head{background:#111b5a;height:40px;padding-left:12px;padding-right:12px}.window_head .status{margin:0 5px}.name,.status{color:#fff}.dropdown-toggle:after{display:none}.btn-secondary{background:transparent;border:none}.room_avatar{border-radius:50%;height:40px;margin:0 7px;width:40px}.room_item{border-bottom:1px solid #ccc}.para{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:202px}.receive{flex-direction:row-reverse;width:100%}.dropdown-menu{max-height:400px;min-height:auto;overflow-y:auto}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/ChatRooms.vue?vue&type=template&id=1f6a25ae&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('b-dropdown', {
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function () {
        return [_c('button', [_c('font-awesome-icon', {
          staticClass: "white-col",
          attrs: {
            "icon": ['fas', 'message']
          }
        })], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.rooms, function (room) {
    return _c('b-dropdown-item', {
      key: room.id,
      staticClass: "room_item mb-2",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function ($event) {
          return _vm.showRoom(room.id, room.user_id, room.delegate_id);
        }
      }
    }, [_vm.rooms.length > 0 ? _c('div', [_c('div', {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_c('div', {
      staticClass: "d-flex"
    }, [_c('img', {
      staticClass: "room_avatar",
      attrs: {
        "src": room.avatar
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "d-flex justify-content-start align-items-start flex-column"
    }, [_c('h6', [_vm._v(" " + _vm._s(room.name) + " ")]), _vm._v(" "), _c('p', {
      staticClass: "para"
    }, [_vm._v(" " + _vm._s(room.message.content) + " ")])])]), _vm._v(" "), _c('div', [_c('span', {
      staticClass: "text-muted"
    }, [_vm._v(" " + _vm._s(room.time) + " ")])])])]) : _c('div', [_c('h5', {
      staticClass: "text-center"
    }, [_vm._v(" لا توجد محادثات إلى الان ")])])]);
  })], 2), _vm._ssrNode(" "), _vm.showWindow ? _vm._ssrNode("<section class=\"chat_window\">", "</section>", [_vm._ssrNode("<main class=\"position-relative\">", "</main>", [_vm._ssrNode("<div class=\"window_head\">", "</div>", [_vm._ssrNode("<div class=\"d-flex pt-2 justify-content-between align-items-baseline\">", "</div>", [_vm._ssrNode("<h6 class=\"name\">" + _vm._ssrEscape(" " + _vm._s(_vm.room.user_name) + " ") + "</h6> "), _vm._ssrNode("<button class=\"btn btn-danger closeWindow\">", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'xmark']
    }
  })], 1)], 2)]), _vm._ssrNode(" <div class=\"window_body\"><section class=\"messages\">" + _vm._ssrList(_vm.reversedMessages, function (message) {
    return "<div class=\"message position-relative d-flex mb-2\">" + (message.sent_by_me == true ? "<div class=\"d-flex\"><img" + _vm._ssrAttr("src", message.avatar) + " alt class=\"window_avatar\"> " + (message.type == 'text' ? "<p class=\"message_content\">" + _vm._ssrEscape(" " + _vm._s(message.content) + " ") + "</p>" : message.type == 'file' ? "<div class=\"image_previewed\"><img" + _vm._ssrAttr("src", message.content) + " alt class=\"message_img\"></div>" : "<!---->") + " <span class=\"created_at\">" + _vm._ssrEscape(" " + _vm._s(message.time) + " ") + "</span></div>" : message.sent_by_me == false ? "<div class=\"receive d-flex\"><img" + _vm._ssrAttr("src", message.avatar) + " alt class=\"window_avatar\"> " + (message.type == 'text' ? "<p class=\"message_content\">" + _vm._ssrEscape(" " + _vm._s(message.content) + " ") + "</p>" : message.type == 'file' ? "<div class=\"image_previewed\"><img" + _vm._ssrAttr("src", message.content) + " alt class=\"message_img\"></div>" : "<!---->") + " <span class=\"created_at\">" + _vm._ssrEscape(" " + _vm._s(message.time) + " ") + "</span></div>" : "<!---->") + "</div>";
  }) + "</section></div> "), _vm._ssrNode("<div class=\"window_footer pt-2 pb-2 px-2\">", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<button class=\"upload btn position-relative\">", "</button>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'camera']
    }
  }), _vm._ssrNode(" <input type=\"file\" name=\"file\" class=\"uploadFile\">")], 2), _vm._ssrNode(" <textarea name id placeholder=\"اكتب رسالتك\" class=\"form-control\">" + _vm._ssrEscape(_vm._s(_vm.messageText)) + "</textarea> <button class=\"send btn btn-main\">ارسل</button>")], 2)]), _vm._ssrNode(" " + (_vm.showLoad ? "<div role=\"status\" class=\"spinner-border\" style=\"  position: absolute; top: 50%;left: 50%;\"></div>" : "<!---->"))], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/ChatRooms.vue?vue&type=template&id=1f6a25ae&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/home/ChatRooms.vue?vue&type=script&lang=js&
var ChatRoomsvue_type_script_lang_js_ = __webpack_require__(228);

// CONCATENATED MODULE: ./components/home/ChatRooms.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_ChatRoomsvue_type_script_lang_js_ = (ChatRoomsvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/home/ChatRooms.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(302)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_ChatRoomsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6d3ea0cb"
  
)

/* harmony default export */ var ChatRooms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-chat-rooms.js.map