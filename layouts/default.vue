<template>
<client-only>
    <v-main>
        <Nuxt />
        <commonLoader v-if="loader" />
    </v-main>
</client-only>   
</template>

<script>
import '~/assets/css/style-ltr.scss'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      loader : true ,

      // fire fcm 
      listenersStarted: false,
      idToken: "",

      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted(){


    this.startListeners();


    this.loader = false ;
    this.loader = false ;
    if (localStorage.getItem("locale") == "en") {
      document.querySelector("body").classList.add("ltr");
    } else {
      document.querySelector("body").classList.remove("ltr");
    }

    // this.$i18n.locale = localStorage.getItem('locale')
      console.log(this.$route.fullPath)

  },
  created(){
  },
  methods: {
    // FCM NOTIFICATION FUNCTIONS
    async startListeners() {
      await this.startOnMessageListener();
      await this.startTokenRefreshListener();
      await this.requestPermission();
      await this.getIdToken();
      this.listenersStarted = true;
    },
    startOnMessageListener() {
      try {
        this.$fire.messaging.onMessage((payload) => {
          console.info("Message received : ", payload);
          alert(payload.notification.body)
          console.log(payload.notification.body);
        });
      } catch (e) {
        console.error("Error : ", e);
      }
    },
    startTokenRefreshListener() {
      try {
        this.$fire.messaging.onTokenRefresh(async () => {
          try {
            await this.$fire.messaging.getToken();
          } catch (e) {
            console.error("Error : ", e);
          }
        });
      } catch (e) {
        console.error("Error : ", e);
      }
    },
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission();
        console.log("GIVEN notify perms");
        console.log(permission);
      } catch (e) {
        console.error("Error : ", e);
      }
    },
    async getIdToken() {
      try {
        this.idToken = await this.$fire.messaging.getToken();
        console.log("TOKEN ID FOR this browser");
        localStorage.setItem('fcm',this.idToken)
        console.log(this.idToken);
      } catch (e) {
        console.error("Error : ", e);
      }
    },
  }
  // created(){
  //     if( typeof localStorage !== 'undefined' ){
  //       this.$i18n.locale = localStorage.getItem('locale')
  //     }else{
  //       console.log('sssssssssssssssssssssssssssssssss')
  //     }
  //   }
}
</script>
