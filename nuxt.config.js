import colors from 'vuetify/es5/util/colors'
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';


// var locale ;
// if( typeof localStorage !== 'undefined' ){
//   locale = localStorage.getItem('locale')
// }
// console.log(`trewedfgfdsdfgfds${locale}`)
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)


export default {
  router: {
    middleware: 'trailingSlashRedirect',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - site',
    title: 'book_a_boat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Group 70332.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "assets/css/style.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // nuxt carousal 
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // bootstrap vue
    'bootstrap-vue/nuxt',
    // i18n nuxt 
    '@nuxtjs/i18n',
    //https://www.npmjs.com/package/nuxt-gmaps
    ['nuxt-gmaps', {
      key: 'AIzaSyB4d19CAL7u_hJ8k4P7EaQFcnner_Q9KEo',
      //you can use libraries: ['places']
    }],
    // https://sweetalert2.github.io/ && https://codesandbox.io/s/2mtwe?file=/nuxt.config.js&resolutionWidth=320&resolutionHeight=675
    ['nuxt-sweetalert2',{
      timer: 2000,
      showConfirmButton: false,
    }],

    //https://dev.to/doctorbash/how-to-install-font-awesome-icons-to-nuxt-js-v2-59f2
    '@nuxtjs/fontawesome',
    //https://firebase.nuxtjs.org/guide/getting-started.html
    '@nuxtjs/firebase',

  ],

  
  
  // i18n config 
  i18n: {
    
    locales: [
      
      { code: "ar", iso: "ar-EG", file: require("./lang/ar.json"), dir: "rtl" },
      { code: "en", iso: "en-US", file: require("./lang/en.json"), dir: "ltr" },
    ],
    defaultLocale: "ar",
    // lazy : true ,
    // langDir : 'lang/',
    vueI18n: {
      fallbackLocale: "ar",
      locale : 'ar'  ,
      messages: {
        ar: require("./lang/ar.json"),
        en: require("./lang/en.json"),
        
      },
    },

  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/socket.io.js',
    '~/plugins/axios.js',
    { src: '~/plugins/vue-carousal.js', mode: 'client' },
    {
      src: '~plugins/i18n.js', // Path to your custom plugin file
      ssr: false, // Ensure the plugin runs only on the client-side
    },

  ],
  // fontawesome config 
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://backend.bookaboat.app/api',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // firebase FCM starts here

  firebase: {
    lazy: false,
    config: {
      apiKey: "AIzaSyA5WYrZUxFxMyaivbHTeTxAtIgXWk3UO98",
authDomain: "book-a-boat-ba4c0.firebaseapp.com",
projectId: "book-a-boat-ba4c0",
storageBucket: "book-a-boat-ba4c0.appspot.com",
messagingSenderId: "569365227229",
appId: "1:569365227229:web:b564b0893537aec516dd34",
measurementId: "G-FE2RLQ148Q"

    },
    onFirebaseHosting: false,
    services: {
      messaging: true,
    }
  },

  messaging: {
    createServiceWorker: true,
    actions: [
      {
        action: 'goHome',
        url: 'https://localhost:3000'
      }
    ],
    fcmPublicVapidKey: "BGH2va8Gv87ulGYL0M2Vi5O7P3Z3vwcScXtduiX-IKa5RP2r9n5kUX0hQ9FHKBT3KU-yaLpk0qTbBVLggntpXtI"
  },


}
