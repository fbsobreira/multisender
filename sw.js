importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1bae5d3193373be74dc3.js",
    "revision": "9b938eec8f07c136e5d6636f02a5cf60"
  },
  {
    "url": "/_nuxt/4e57137f0d7f264f595f.js",
    "revision": "302c156127a94848542794b7d03457ac"
  },
  {
    "url": "/_nuxt/808887e97b2cf8d942c5.js",
    "revision": "4ffb4727002a0a3702df405ae5cf70e5"
  },
  {
    "url": "/_nuxt/867e3800e671c38cd7e9.js",
    "revision": "5774988483b85556673fc20607ffba65"
  },
  {
    "url": "/_nuxt/8b3190102ba0db8db913.js",
    "revision": "226e93ed7b5b84043279c31df1f37d6d"
  },
  {
    "url": "/_nuxt/9feff2da10f2112d9fd5.js",
    "revision": "b13566f01e8a15e7aa8a034550bb522e"
  },
  {
    "url": "/_nuxt/a49efffc5ed8e41fda42.js",
    "revision": "2bb6ccf3a17a51ed92d62115dcb9aec1"
  },
  {
    "url": "/_nuxt/acc782605bf1c546a233.js",
    "revision": "7ad88f89631a32085c8bcef83d378829"
  },
  {
    "url": "/_nuxt/b5210388b427ebda27cc.js",
    "revision": "26a2a3f9b1e98d7f87bfc5a6cc62d54a"
  },
  {
    "url": "/_nuxt/be8083a88dc55a2e0803.js",
    "revision": "66fb24a3bce686f339bdb8286a2b1a0f"
  },
  {
    "url": "/_nuxt/c37a0f54d89359719e34.js",
    "revision": "995ca7b797739b795b3f496d992f11a1"
  },
  {
    "url": "/_nuxt/cd1c3c193e0e82648945.js",
    "revision": "207db284ee98a650d9e7eab6252c00a3"
  },
  {
    "url": "/_nuxt/cd7614ce5b2de1788ed9.js",
    "revision": "8e9bc6cb57a232c46ac1633bfce1fe31"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
