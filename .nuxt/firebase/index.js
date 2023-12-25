import createApp from './app.js'

import messagingService from './service.messaging.js'

const appConfig = {"apiKey":"AIzaSyA5WYrZUxFxMyaivbHTeTxAtIgXWk3UO98","authDomain":"book-a-boat-ba4c0.firebaseapp.com","projectId":"book-a-boat-ba4c0","storageBucket":"book-a-boat-ba4c0.appspot.com","messagingSenderId":"569365227229","appId":"1:569365227229:web:b564b0893537aec516dd34","measurementId":"G-FE2RLQ148Q"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.client) {
    servicePromises = [
      messagingService(session, firebase, ctx, inject),

    ]
  }

  const [
    messaging
  ] = await Promise.all(servicePromises)

  const fire = {
    messaging: messaging
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}