import Vue from 'vue'
import io from 'socket.io-client'

const socket = io('https://backend.bookaboat.app:4711') // Replace with your server URL

Vue.prototype.$socket = socket