import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // enter your Google Maps API key here
    apiKey: 'YOUR_API_KEY',
    // set the version of the Google Maps JavaScript API
    // this is optional but recommended
    version: '3'
  }
})
