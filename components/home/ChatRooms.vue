<template>         
  <section>
    <!-- chat rooms  -->
    <b-dropdown>
    <template #button-content>
      <button>
        <font-awesome-icon class="white-col" :icon="['fas', 'message']" />
      </button>
    </template>
    <b-dropdown-item href="#"  v-for="room in rooms" :key="room.id" @click="showRoom( room.id , room.user_id, room.delegate_id)" class="room_item mb-2">
      <div v-if="rooms.length>0">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <!-- img  -->
            <img :src="room.avatar" class="room_avatar" >
            <div class="d-flex justify-content-start align-items-start flex-column">
              <h6> {{ room.name }} </h6>
              <p class="para"> {{ room.message.content }} </p>
            </div>
          </div>
          <div>
            <span class="text-muted"> {{ room.time }} </span>
          </div>
        </div>
      </div>
      <div v-else>
        <h5 class="text-center"> لا توجد محادثات إلى الان </h5>
      </div>
    </b-dropdown-item>
    </b-dropdown>

    <!-- chat window  -->
    <section class="chat_window " v-if="showWindow">
      <main class="position-relative">
        <!-- window head -->
        <div class="window_head">
          <div class="d-flex pt-2 justify-content-between align-items-baseline">
            <h6 class="name"> {{ room.user_name }} </h6>

            <!-- <span class="status open" v-if="room.status == 'open'" > مفتوح  </span>
            <span class="status close" v-else-if="room.status == 'close'" > مغلق </span> -->
            
            <button class="btn btn-danger closeWindow" @click="closeWindow">
              <font-awesome-icon :icon="['fas', 'xmark']" />
            </button>
          </div>
        </div>

        <!-- window body  -->
        <div class="window_body" ref="chatSection">
          <section class="messages">
            <!-- single message -->
            <div class="message position-relative d-flex mb-2" v-for="message in reversedMessages" :key="message.id">

              <div class="d-flex" v-if="message.sent_by_me==true">
                <img :src="message.avatar" alt="" class="window_avatar">
               <p class="message_content" v-if="message.type=='text'"> {{ message.content }} </p>
                <div class="image_previewed" v-else-if="message.type=='file'">
                  <img :src="message.content" class="message_img" alt="">
                </div>
                <!-- created at  -->
                <span class="created_at"> {{ message.time }} </span>
              </div>

              <div class="receive d-flex" v-else-if="message.sent_by_me==false">
                <img :src="message.avatar" alt="" class="window_avatar">

                <p class="message_content" v-if="message.type=='text'"> {{ message.content }} </p>
                <div class="image_previewed" v-else-if="message.type=='file'">
                  <img :src="message.content" alt="" class="message_img">
                </div>
                <!-- created at  -->
                <span class="created_at"> {{ message.time }} </span>
              </div>
            </div>


          </section>
        </div>

        <!-- window footer  -->
        <div class="window_footer pt-2 pb-2 px-2">
          <div class="d-flex justify-content-between align-items-center">
            <!-- upload  -->
            <button class="upload btn position-relative">
              <font-awesome-icon :icon="['fas', 'camera']" />
              <input type="file" ref="file" name="file" class="uploadFile" @change="uploadImage">
            </button>

            <!-- textarea  -->
            <textarea name="" v-model="messageText" id="" class="form-control" placeholder="اكتب رسالتك"></textarea>

            <!-- send -->
            <button class="send btn btn-main" @click.prevent="addMessage()">ارسل</button>
          </div>
        </div>
            
            
        <div class="spinner-border" role="status" v-if="showLoad" style="  position: absolute; top: 50%;left: 50%;">
        </div>
      </main>

    </section>
  </section>
</template>

<script>
export default {
  data(){
    return{
      rooms : [],
      room : {},
      messages : [],
      reversedMessages : [],
      user_id: '',
      delegate_id : '',
      room_id : '',
      sended_room : '',
      showWindow : false,
      showLoad : false,
      messageText : '',
      avatar : '',
      fileChosen : "",
      file : "",
      type : '',
      client : false,
      provider : false
    }
  },
  methods:{

    // main send method => { check if the message is file or text }
    addMessage(){
      if( this.fileChosen !== "" ){
        // upload file
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("type", this.type);

        // if message uploaded is file then send it 
        this.uploadFile(formData);
      }
      else if (this.messageText.trim() == "") {
        return false;
      } else {
        // send text message
        this.sendMessage(this.messageText, "text");
      }

    },
    // upload file (request)
    uploadFile(formData) {
      // POST /someUrl
      this.$axios
        .$post("/upload-file", formData, {
          headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then((response) => {
          if (response.key == "success") {
            this.fileChosen = "";

            // send message here
            this.sendMessage(
              response.data.name,
              "file",
              response.data.url
            );
          }
        });
    },


    // send message 
    sendMessage(msg , type , url){

      let body = msg;
      if (url != null) {
        body = url;
      }

      if( this.client == true ){
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
          created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' }),
        });
      }else if( this.provider == true ){
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
          created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' }),
        });
      }

      
      


      let user = localStorage.getItem('user');
      this.avatar = JSON.parse(user).avatar ;
      this.messages.push({
        // created_at: date,
        is_sender: 1,
        // original_message: { body: body, type: $type },
        avatar : this.avatar,
        sent_by_me: true,
        type: type,
        content: body,
        time:new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' }),
        fileChosen : this.fileChosen

      });
      // this.messages = this.messages.reverse();

      this.messageText = "";
      this.$nextTick(() => {
          this.scrollToBottom();
      });
      
      console.log(this.room_id)
      console.log(this.user_id)
      console.log(this.delegate_id)

    },
    // get rooms 
    async getChatRooms(){
      await this.$axios.$get('/my-rooms?page=1', {
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.key == 'success' ){
          this.rooms = res.data.rooms ;
        }
      } )
    },
    // get single room 
    async showRoom(room_id, user_id , delegate_id){
      this.showWindow = true ;
      this.showLoad = true ;
      await this.$axios.$get(`/single-room?room_id=${room_id}&page=1`, {
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then( (res)=>{
        if( res.key == 'success' ){
          this.room = res.data.room ;
          this.messages = res.data.room.messages ;

          this.reversedMessages = this.messages.reverse()

          this.showLoad = false ;

          this.room_id = room_id;
          this.user_id = user_id;
          this.delegate_id = delegate_id;

          this.$nextTick(() => {
              this.scrollToBottom();
          });


          if( typeof localStorage !== 'undefined'  ){
              let user = localStorage.getItem('user');
              let user_id = JSON.parse(user).id;
              let type = JSON.parse(user).acc_type;
              this.$socket.emit("adduser", {
                user_id: user_id,
                // delegate_id: 64,
                room_id: this.room_id,
                user_type : type
              });
            }
        }
      } )
    },
    closeWindow(){
      this.showWindow = false
    },
    scrollToBottom(){
      const chatSection = this.$refs.chatSection;
      chatSection.scrollTop = chatSection.scrollHeight;
    },
    uploadImage(){
      this.file = this.$refs.file.files[0];
      this.fileChosen = URL.createObjectURL(this.file);
      this.messageText = this.$refs.file.files[0].name;
      this.type = this.$refs.file.files[0].type ;

      console.log( this.fileChosen )
    }


  },
  sockets: {
    newMessage(data) {
      // console.log('new message' ,data);
      var date = new Date(data.created_at);
      date.toLocaleString("en-US", { timeZone: "Asia/Riyadh" });
      this.messages.push({
        sent_by_me: false,
        type: data.type,
        content: data.content,
        date: date.toDateString("en-US", { timeZone: "Asia/Riyadh" }),
        time: this.formatAMPM(date),
      });
    },
  },


  beforeMount(){
        this.getChatRooms()
  },
  mounted(){
    // console.log(this.fileChosen)

    this.$socket.on('connect', () => {
      console.log('socket connect')
    })

    if( this.$route.fullPath.includes('client') ){
      this.client = true ;
    }else if( this.$route.fullPath.includes('provider') ){
      this.provider = true ;
    }


  },



  created(){
    this.$socket.on('newMessage', (data) => {
      console.log(data)
      console.log('neeeeeeew messssssageeeeeee')
      var date = new Date(data.created_at);
      date.toLocaleString("en-US", { timeZone: "Asia/Riyadh" });
      this.messages.push({
        sent_by_me: false,
        type: data.type,
        content: data.content,
        date: date.toDateString("en-US", { timeZone: "Asia/Riyadh" }),
        time: data.created_at,
      });

    // this.messages = this.messages.reverse()
    // this.scrollToBottom()
    
    })
  },
}
</script>

<style lang="scss" >
.uploadFile{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.message_img{
  width: 80px;
  height: 80px;
}
.status.open{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(17, 114, 17);
}
.status.close{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(160, 14, 26);
}
.closeWindow{
  width:25px;
  height:25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat_window{
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 320px;
  background: #fff;
  box-shadow: 0px 0px 10px #33333345;
  .window_body{
    overflow-y: auto;
    height: 212px;
    margin-top: 12px;
    .created_at{
      color: #dfd2d2;
      font-size: 12px;
    }
    .window_avatar{
      width: 35px;
      height:35px;
      border-radius: 50%;
    }
    .message_content{
      background: #ccc;
      border-radius: 5px;
      padding: 5px;
      color:#424040 ;
      font-size: 13px;
    }
  }
}
.window_footer{
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 8px #8b85853d;
    .send{
      height: 30px;
      padding: 0;
      width: 81px;
      font-size: 12px;
    }
    textarea{
      height: 40px;
      width: 122px;
      font-size: 12px;
      &:focus{
        position: fixed;
        width: 285px;
      }
    }
    .upload{
      color:#ccc
    }
}

.window_head{
  background: #111b5a;
  height: 40px;
  padding-right: 12px;
  padding-left: 12px;
  .status{
    margin: 0 5px;
  }
}
.status,.name{
    color:#fff ;
}
.dropdown-toggle::after{
  display: none;
}
.btn-secondary{
  background: transparent;
  border: none;
}
.room_avatar{
  width:40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 7px;
}
.room_item{
  border-bottom: 1px solid #ccc;
}
.para{
    width: 202px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.receive{
  flex-direction: row-reverse;
  width: 100%;
}
.dropdown-menu{
  max-height: 400px;
  overflow-y: auto;
  min-height: auto;
}
</style>

