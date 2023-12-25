import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _189883b6 = () => interopDefault(import('../pages/clientActiveCode.vue' /* webpackChunkName: "pages/clientActiveCode" */))
const _df5713d4 = () => interopDefault(import('../pages/clientLogin.vue' /* webpackChunkName: "pages/clientLogin" */))
const _d9aa39f4 = () => interopDefault(import('../pages/clientRegister.vue' /* webpackChunkName: "pages/clientRegister" */))
const _f8e3aaec = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0599434f = () => interopDefault(import('../pages/providerActive.vue' /* webpackChunkName: "pages/providerActive" */))
const _4b62e6b0 = () => interopDefault(import('../pages/providerLogin.vue' /* webpackChunkName: "pages/providerLogin" */))
const _eee717a8 = () => interopDefault(import('../pages/providerRegister.vue' /* webpackChunkName: "pages/providerRegister" */))
const _f8023df6 = () => interopDefault(import('../pages/providerRegisterComplete.vue' /* webpackChunkName: "pages/providerRegisterComplete" */))
const _a9a751dc = () => interopDefault(import('../pages/client/contactUs.vue' /* webpackChunkName: "pages/client/contactUs" */))
const _3492f3aa = () => interopDefault(import('../pages/client/HomePage.vue' /* webpackChunkName: "pages/client/HomePage" */))
const _4cd2821c = () => interopDefault(import('../pages/client/notifications.vue' /* webpackChunkName: "pages/client/notifications" */))
const _67655d38 = () => interopDefault(import('../pages/client/qommonQuestions.vue' /* webpackChunkName: "pages/client/qommonQuestions" */))
const _7ce9a98a = () => interopDefault(import('../pages/client/terms.vue' /* webpackChunkName: "pages/client/terms" */))
const _5d27144c = () => interopDefault(import('../pages/client/tripesTypes.vue' /* webpackChunkName: "pages/client/tripesTypes" */))
const _235603a0 = () => interopDefault(import('../pages/client/whoUs.vue' /* webpackChunkName: "pages/client/whoUs" */))
const _66a972d0 = () => interopDefault(import('../pages/provider/contactUS.vue' /* webpackChunkName: "pages/provider/contactUS" */))
const _2938f178 = () => interopDefault(import('../pages/provider/HomePage.vue' /* webpackChunkName: "pages/provider/HomePage" */))
const _37301ec2 = () => interopDefault(import('../pages/provider/notifications.vue' /* webpackChunkName: "pages/provider/notifications" */))
const _d49346ec = () => interopDefault(import('../pages/provider/qommonQuestions.vue' /* webpackChunkName: "pages/provider/qommonQuestions" */))
const _684acde1 = () => interopDefault(import('../pages/provider/terms.vue' /* webpackChunkName: "pages/provider/terms" */))
const _d5d6be54 = () => interopDefault(import('../pages/provider/whoUs.vue' /* webpackChunkName: "pages/provider/whoUs" */))
const _98a132f2 = () => interopDefault(import('../pages/client/books/activeMyBooks.vue' /* webpackChunkName: "pages/client/books/activeMyBooks" */))
const _ea9f72da = () => interopDefault(import('../pages/client/books/cancelMyBooks.vue' /* webpackChunkName: "pages/client/books/cancelMyBooks" */))
const _7e59624c = () => interopDefault(import('../pages/client/books/finishMyBooks.vue' /* webpackChunkName: "pages/client/books/finishMyBooks" */))
const _75bc8a8d = () => interopDefault(import('../pages/client/books/MyBooks.vue' /* webpackChunkName: "pages/client/books/MyBooks" */))
const _beb622fe = () => interopDefault(import('../pages/client/clientProfile/comments.vue' /* webpackChunkName: "pages/client/clientProfile/comments" */))
const _64f85e26 = () => interopDefault(import('../pages/client/clientProfile/complains.vue' /* webpackChunkName: "pages/client/clientProfile/complains" */))
const _1152f4ea = () => interopDefault(import('../pages/client/clientProfile/infoComp.vue' /* webpackChunkName: "pages/client/clientProfile/infoComp" */))
const _5c8fccab = () => interopDefault(import('../pages/client/clientProfile/notifications.vue' /* webpackChunkName: "pages/client/clientProfile/notifications" */))
const _0253078b = () => interopDefault(import('../pages/client/clientProfile/privacy.vue' /* webpackChunkName: "pages/client/clientProfile/privacy" */))
const _15b17a10 = () => interopDefault(import('../pages/client/clientProfile/profileForm.vue' /* webpackChunkName: "pages/client/clientProfile/profileForm" */))
const _0410ccfa = () => interopDefault(import('../pages/client/clientProfile/profileInfo.vue' /* webpackChunkName: "pages/client/clientProfile/profileInfo" */))
const _176774ca = () => interopDefault(import('../pages/client/clientProfile/terms.vue' /* webpackChunkName: "pages/client/clientProfile/terms" */))
const _ae0b5974 = () => interopDefault(import('../pages/client/clientProfile/wallet.vue' /* webpackChunkName: "pages/client/clientProfile/wallet" */))
const _b45f2336 = () => interopDefault(import('../pages/client/clientProfile/webLang.vue' /* webpackChunkName: "pages/client/clientProfile/webLang" */))
const _fb448bb8 = () => interopDefault(import('../pages/provider/boats/AllBoats.vue' /* webpackChunkName: "pages/provider/boats/AllBoats" */))
const _3db26ead = () => interopDefault(import('../pages/provider/books/activeMyBooks.vue' /* webpackChunkName: "pages/provider/books/activeMyBooks" */))
const _14b34eb9 = () => interopDefault(import('../pages/provider/books/cancelMyBooks.vue' /* webpackChunkName: "pages/provider/books/cancelMyBooks" */))
const _4ad65700 = () => interopDefault(import('../pages/provider/books/finishMyBooks.vue' /* webpackChunkName: "pages/provider/books/finishMyBooks" */))
const _601a2733 = () => interopDefault(import('../pages/provider/books/MyBooks.vue' /* webpackChunkName: "pages/provider/books/MyBooks" */))
const _1685b308 = () => interopDefault(import('../pages/provider/providerProfile/fainancialProvider.vue' /* webpackChunkName: "pages/provider/providerProfile/fainancialProvider" */))
const _c41fdaa8 = () => interopDefault(import('../pages/provider/providerProfile/profilePrivacy.vue' /* webpackChunkName: "pages/provider/providerProfile/profilePrivacy" */))
const _3cc55bd2 = () => interopDefault(import('../pages/provider/providerProfile/providerComments.vue' /* webpackChunkName: "pages/provider/providerProfile/providerComments" */))
const _951de488 = () => interopDefault(import('../pages/provider/providerProfile/providerComplains.vue' /* webpackChunkName: "pages/provider/providerProfile/providerComplains" */))
const _49ab35a2 = () => interopDefault(import('../pages/provider/providerProfile/providerForm.vue' /* webpackChunkName: "pages/provider/providerProfile/providerForm" */))
const _380a888c = () => interopDefault(import('../pages/provider/providerProfile/providerInfo.vue' /* webpackChunkName: "pages/provider/providerProfile/providerInfo" */))
const _a5193b8a = () => interopDefault(import('../pages/provider/providerProfile/providerInfoComp.vue' /* webpackChunkName: "pages/provider/providerProfile/providerInfoComp" */))
const _6599d468 = () => interopDefault(import('../pages/provider/providerProfile/providerLang.vue' /* webpackChunkName: "pages/provider/providerProfile/providerLang" */))
const _e8342058 = () => interopDefault(import('../pages/provider/providerProfile/providerNoti.vue' /* webpackChunkName: "pages/provider/providerProfile/providerNoti" */))
const _074d1dce = () => interopDefault(import('../pages/provider/providerProfile/providerTerms.vue' /* webpackChunkName: "pages/provider/providerProfile/providerTerms" */))
const _6247e0d7 = () => interopDefault(import('../pages/provider/providerProfile/providerWallet.vue' /* webpackChunkName: "pages/provider/providerProfile/providerWallet" */))
const _4a899d12 = () => interopDefault(import('../pages/client/boats/_id.vue' /* webpackChunkName: "pages/client/boats/_id" */))
const _405c4f28 = () => interopDefault(import('../pages/client/creatOrder/_id.vue' /* webpackChunkName: "pages/client/creatOrder/_id" */))
const _d39acde8 = () => interopDefault(import('../pages/client/orders/_id.vue' /* webpackChunkName: "pages/client/orders/_id" */))
const _3a168c60 = () => interopDefault(import('../pages/client/pill/_id.vue' /* webpackChunkName: "pages/client/pill/_id" */))
const _46ee4cfe = () => interopDefault(import('../pages/client/providers/_id.vue' /* webpackChunkName: "pages/client/providers/_id" */))
const _4d649578 = () => interopDefault(import('../pages/client/travels/_id.vue' /* webpackChunkName: "pages/client/travels/_id" */))
const _6dcb7cb8 = () => interopDefault(import('../pages/provider/boats/_id.vue' /* webpackChunkName: "pages/provider/boats/_id" */))
const _49a6a3b4 = () => interopDefault(import('../pages/provider/orders/_id.vue' /* webpackChunkName: "pages/provider/orders/_id" */))
const _1e31c00c = () => interopDefault(import('../pages/provider/pill/_id.vue' /* webpackChunkName: "pages/provider/pill/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/clientActiveCode",
    component: _189883b6,
    name: "clientActiveCode___ar"
  }, {
    path: "/clientLogin",
    component: _df5713d4,
    name: "clientLogin___ar"
  }, {
    path: "/clientRegister",
    component: _d9aa39f4,
    name: "clientRegister___ar"
  }, {
    path: "/en",
    component: _f8e3aaec,
    name: "index___en"
  }, {
    path: "/providerActive",
    component: _0599434f,
    name: "providerActive___ar"
  }, {
    path: "/providerLogin",
    component: _4b62e6b0,
    name: "providerLogin___ar"
  }, {
    path: "/providerRegister",
    component: _eee717a8,
    name: "providerRegister___ar"
  }, {
    path: "/providerRegisterComplete",
    component: _f8023df6,
    name: "providerRegisterComplete___ar"
  }, {
    path: "/client/contactUs",
    component: _a9a751dc,
    name: "client-contactUs___ar"
  }, {
    path: "/client/HomePage",
    component: _3492f3aa,
    name: "client-HomePage___ar"
  }, {
    path: "/client/notifications",
    component: _4cd2821c,
    name: "client-notifications___ar"
  }, {
    path: "/client/qommonQuestions",
    component: _67655d38,
    name: "client-qommonQuestions___ar"
  }, {
    path: "/client/terms",
    component: _7ce9a98a,
    name: "client-terms___ar"
  }, {
    path: "/client/tripesTypes",
    component: _5d27144c,
    name: "client-tripesTypes___ar"
  }, {
    path: "/client/whoUs",
    component: _235603a0,
    name: "client-whoUs___ar"
  }, {
    path: "/en/clientActiveCode",
    component: _189883b6,
    name: "clientActiveCode___en"
  }, {
    path: "/en/clientLogin",
    component: _df5713d4,
    name: "clientLogin___en"
  }, {
    path: "/en/clientRegister",
    component: _d9aa39f4,
    name: "clientRegister___en"
  }, {
    path: "/en/providerActive",
    component: _0599434f,
    name: "providerActive___en"
  }, {
    path: "/en/providerLogin",
    component: _4b62e6b0,
    name: "providerLogin___en"
  }, {
    path: "/en/providerRegister",
    component: _eee717a8,
    name: "providerRegister___en"
  }, {
    path: "/en/providerRegisterComplete",
    component: _f8023df6,
    name: "providerRegisterComplete___en"
  }, {
    path: "/provider/contactUS",
    component: _66a972d0,
    name: "provider-contactUS___ar"
  }, {
    path: "/provider/HomePage",
    component: _2938f178,
    name: "provider-HomePage___ar"
  }, {
    path: "/provider/notifications",
    component: _37301ec2,
    name: "provider-notifications___ar"
  }, {
    path: "/provider/qommonQuestions",
    component: _d49346ec,
    name: "provider-qommonQuestions___ar"
  }, {
    path: "/provider/terms",
    component: _684acde1,
    name: "provider-terms___ar"
  }, {
    path: "/provider/whoUs",
    component: _d5d6be54,
    name: "provider-whoUs___ar"
  }, {
    path: "/client/books/activeMyBooks",
    component: _98a132f2,
    name: "client-books-activeMyBooks___ar"
  }, {
    path: "/client/books/cancelMyBooks",
    component: _ea9f72da,
    name: "client-books-cancelMyBooks___ar"
  }, {
    path: "/client/books/finishMyBooks",
    component: _7e59624c,
    name: "client-books-finishMyBooks___ar"
  }, {
    path: "/client/books/MyBooks",
    component: _75bc8a8d,
    name: "client-books-MyBooks___ar"
  }, {
    path: "/client/clientProfile/comments",
    component: _beb622fe,
    name: "client-clientProfile-comments___ar"
  }, {
    path: "/client/clientProfile/complains",
    component: _64f85e26,
    name: "client-clientProfile-complains___ar"
  }, {
    path: "/client/clientProfile/infoComp",
    component: _1152f4ea,
    name: "client-clientProfile-infoComp___ar"
  }, {
    path: "/client/clientProfile/notifications",
    component: _5c8fccab,
    name: "client-clientProfile-notifications___ar"
  }, {
    path: "/client/clientProfile/privacy",
    component: _0253078b,
    name: "client-clientProfile-privacy___ar"
  }, {
    path: "/client/clientProfile/profileForm",
    component: _15b17a10,
    name: "client-clientProfile-profileForm___ar"
  }, {
    path: "/client/clientProfile/profileInfo",
    component: _0410ccfa,
    name: "client-clientProfile-profileInfo___ar"
  }, {
    path: "/client/clientProfile/terms",
    component: _176774ca,
    name: "client-clientProfile-terms___ar"
  }, {
    path: "/client/clientProfile/wallet",
    component: _ae0b5974,
    name: "client-clientProfile-wallet___ar"
  }, {
    path: "/client/clientProfile/webLang",
    component: _b45f2336,
    name: "client-clientProfile-webLang___ar"
  }, {
    path: "/en/client/contactUs",
    component: _a9a751dc,
    name: "client-contactUs___en"
  }, {
    path: "/en/client/HomePage",
    component: _3492f3aa,
    name: "client-HomePage___en"
  }, {
    path: "/en/client/notifications",
    component: _4cd2821c,
    name: "client-notifications___en"
  }, {
    path: "/en/client/qommonQuestions",
    component: _67655d38,
    name: "client-qommonQuestions___en"
  }, {
    path: "/en/client/terms",
    component: _7ce9a98a,
    name: "client-terms___en"
  }, {
    path: "/en/client/tripesTypes",
    component: _5d27144c,
    name: "client-tripesTypes___en"
  }, {
    path: "/en/client/whoUs",
    component: _235603a0,
    name: "client-whoUs___en"
  }, {
    path: "/en/provider/contactUS",
    component: _66a972d0,
    name: "provider-contactUS___en"
  }, {
    path: "/en/provider/HomePage",
    component: _2938f178,
    name: "provider-HomePage___en"
  }, {
    path: "/en/provider/notifications",
    component: _37301ec2,
    name: "provider-notifications___en"
  }, {
    path: "/en/provider/qommonQuestions",
    component: _d49346ec,
    name: "provider-qommonQuestions___en"
  }, {
    path: "/en/provider/terms",
    component: _684acde1,
    name: "provider-terms___en"
  }, {
    path: "/en/provider/whoUs",
    component: _d5d6be54,
    name: "provider-whoUs___en"
  }, {
    path: "/provider/boats/AllBoats",
    component: _fb448bb8,
    name: "provider-boats-AllBoats___ar"
  }, {
    path: "/provider/books/activeMyBooks",
    component: _3db26ead,
    name: "provider-books-activeMyBooks___ar"
  }, {
    path: "/provider/books/cancelMyBooks",
    component: _14b34eb9,
    name: "provider-books-cancelMyBooks___ar"
  }, {
    path: "/provider/books/finishMyBooks",
    component: _4ad65700,
    name: "provider-books-finishMyBooks___ar"
  }, {
    path: "/provider/books/MyBooks",
    component: _601a2733,
    name: "provider-books-MyBooks___ar"
  }, {
    path: "/provider/providerProfile/fainancialProvider",
    component: _1685b308,
    name: "provider-providerProfile-fainancialProvider___ar"
  }, {
    path: "/provider/providerProfile/profilePrivacy",
    component: _c41fdaa8,
    name: "provider-providerProfile-profilePrivacy___ar"
  }, {
    path: "/provider/providerProfile/providerComments",
    component: _3cc55bd2,
    name: "provider-providerProfile-providerComments___ar"
  }, {
    path: "/provider/providerProfile/providerComplains",
    component: _951de488,
    name: "provider-providerProfile-providerComplains___ar"
  }, {
    path: "/provider/providerProfile/providerForm",
    component: _49ab35a2,
    name: "provider-providerProfile-providerForm___ar"
  }, {
    path: "/provider/providerProfile/providerInfo",
    component: _380a888c,
    name: "provider-providerProfile-providerInfo___ar"
  }, {
    path: "/provider/providerProfile/providerInfoComp",
    component: _a5193b8a,
    name: "provider-providerProfile-providerInfoComp___ar"
  }, {
    path: "/provider/providerProfile/providerLang",
    component: _6599d468,
    name: "provider-providerProfile-providerLang___ar"
  }, {
    path: "/provider/providerProfile/providerNoti",
    component: _e8342058,
    name: "provider-providerProfile-providerNoti___ar"
  }, {
    path: "/provider/providerProfile/providerTerms",
    component: _074d1dce,
    name: "provider-providerProfile-providerTerms___ar"
  }, {
    path: "/provider/providerProfile/providerWallet",
    component: _6247e0d7,
    name: "provider-providerProfile-providerWallet___ar"
  }, {
    path: "/en/client/books/activeMyBooks",
    component: _98a132f2,
    name: "client-books-activeMyBooks___en"
  }, {
    path: "/en/client/books/cancelMyBooks",
    component: _ea9f72da,
    name: "client-books-cancelMyBooks___en"
  }, {
    path: "/en/client/books/finishMyBooks",
    component: _7e59624c,
    name: "client-books-finishMyBooks___en"
  }, {
    path: "/en/client/books/MyBooks",
    component: _75bc8a8d,
    name: "client-books-MyBooks___en"
  }, {
    path: "/en/client/clientProfile/comments",
    component: _beb622fe,
    name: "client-clientProfile-comments___en"
  }, {
    path: "/en/client/clientProfile/complains",
    component: _64f85e26,
    name: "client-clientProfile-complains___en"
  }, {
    path: "/en/client/clientProfile/infoComp",
    component: _1152f4ea,
    name: "client-clientProfile-infoComp___en"
  }, {
    path: "/en/client/clientProfile/notifications",
    component: _5c8fccab,
    name: "client-clientProfile-notifications___en"
  }, {
    path: "/en/client/clientProfile/privacy",
    component: _0253078b,
    name: "client-clientProfile-privacy___en"
  }, {
    path: "/en/client/clientProfile/profileForm",
    component: _15b17a10,
    name: "client-clientProfile-profileForm___en"
  }, {
    path: "/en/client/clientProfile/profileInfo",
    component: _0410ccfa,
    name: "client-clientProfile-profileInfo___en"
  }, {
    path: "/en/client/clientProfile/terms",
    component: _176774ca,
    name: "client-clientProfile-terms___en"
  }, {
    path: "/en/client/clientProfile/wallet",
    component: _ae0b5974,
    name: "client-clientProfile-wallet___en"
  }, {
    path: "/en/client/clientProfile/webLang",
    component: _b45f2336,
    name: "client-clientProfile-webLang___en"
  }, {
    path: "/en/provider/boats/AllBoats",
    component: _fb448bb8,
    name: "provider-boats-AllBoats___en"
  }, {
    path: "/en/provider/books/activeMyBooks",
    component: _3db26ead,
    name: "provider-books-activeMyBooks___en"
  }, {
    path: "/en/provider/books/cancelMyBooks",
    component: _14b34eb9,
    name: "provider-books-cancelMyBooks___en"
  }, {
    path: "/en/provider/books/finishMyBooks",
    component: _4ad65700,
    name: "provider-books-finishMyBooks___en"
  }, {
    path: "/en/provider/books/MyBooks",
    component: _601a2733,
    name: "provider-books-MyBooks___en"
  }, {
    path: "/en/provider/providerProfile/fainancialProvider",
    component: _1685b308,
    name: "provider-providerProfile-fainancialProvider___en"
  }, {
    path: "/en/provider/providerProfile/profilePrivacy",
    component: _c41fdaa8,
    name: "provider-providerProfile-profilePrivacy___en"
  }, {
    path: "/en/provider/providerProfile/providerComments",
    component: _3cc55bd2,
    name: "provider-providerProfile-providerComments___en"
  }, {
    path: "/en/provider/providerProfile/providerComplains",
    component: _951de488,
    name: "provider-providerProfile-providerComplains___en"
  }, {
    path: "/en/provider/providerProfile/providerForm",
    component: _49ab35a2,
    name: "provider-providerProfile-providerForm___en"
  }, {
    path: "/en/provider/providerProfile/providerInfo",
    component: _380a888c,
    name: "provider-providerProfile-providerInfo___en"
  }, {
    path: "/en/provider/providerProfile/providerInfoComp",
    component: _a5193b8a,
    name: "provider-providerProfile-providerInfoComp___en"
  }, {
    path: "/en/provider/providerProfile/providerLang",
    component: _6599d468,
    name: "provider-providerProfile-providerLang___en"
  }, {
    path: "/en/provider/providerProfile/providerNoti",
    component: _e8342058,
    name: "provider-providerProfile-providerNoti___en"
  }, {
    path: "/en/provider/providerProfile/providerTerms",
    component: _074d1dce,
    name: "provider-providerProfile-providerTerms___en"
  }, {
    path: "/en/provider/providerProfile/providerWallet",
    component: _6247e0d7,
    name: "provider-providerProfile-providerWallet___en"
  }, {
    path: "/en/client/boats/:id?",
    component: _4a899d12,
    name: "client-boats-id___en"
  }, {
    path: "/en/client/creatOrder/:id?",
    component: _405c4f28,
    name: "client-creatOrder-id___en"
  }, {
    path: "/en/client/orders/:id?",
    component: _d39acde8,
    name: "client-orders-id___en"
  }, {
    path: "/en/client/pill/:id?",
    component: _3a168c60,
    name: "client-pill-id___en"
  }, {
    path: "/en/client/providers/:id?",
    component: _46ee4cfe,
    name: "client-providers-id___en"
  }, {
    path: "/en/client/travels/:id?",
    component: _4d649578,
    name: "client-travels-id___en"
  }, {
    path: "/en/provider/boats/:id?",
    component: _6dcb7cb8,
    name: "provider-boats-id___en"
  }, {
    path: "/en/provider/orders/:id?",
    component: _49a6a3b4,
    name: "provider-orders-id___en"
  }, {
    path: "/en/provider/pill/:id?",
    component: _1e31c00c,
    name: "provider-pill-id___en"
  }, {
    path: "/client/boats/:id?",
    component: _4a899d12,
    name: "client-boats-id___ar"
  }, {
    path: "/client/creatOrder/:id?",
    component: _405c4f28,
    name: "client-creatOrder-id___ar"
  }, {
    path: "/client/orders/:id?",
    component: _d39acde8,
    name: "client-orders-id___ar"
  }, {
    path: "/client/pill/:id?",
    component: _3a168c60,
    name: "client-pill-id___ar"
  }, {
    path: "/client/providers/:id?",
    component: _46ee4cfe,
    name: "client-providers-id___ar"
  }, {
    path: "/client/travels/:id?",
    component: _4d649578,
    name: "client-travels-id___ar"
  }, {
    path: "/provider/boats/:id?",
    component: _6dcb7cb8,
    name: "provider-boats-id___ar"
  }, {
    path: "/provider/orders/:id?",
    component: _49a6a3b4,
    name: "provider-orders-id___ar"
  }, {
    path: "/provider/pill/:id?",
    component: _1e31c00c,
    name: "provider-pill-id___ar"
  }, {
    path: "/",
    component: _f8e3aaec,
    name: "index___ar"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
