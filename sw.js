/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6d4e9b2231166ab2f485.js"
  },
  {
    "url": "framework-16bc5478e030ce10c05d.js"
  },
  {
    "url": "app-685caf41683c14cb0a79.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cf0c901ededbc68c54e00166646bbca4"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd4fb51a6fac1c18bdde.js"
  },
  {
    "url": "polyfill-b055a39fdf17d730ea48.js"
  },
  {
    "url": "styles.17b3e55e8408fbc5d7ce.css"
  },
  {
    "url": "styles-474c0340beb1ced255f1.js"
  },
  {
    "url": "cb1608f2-918dca49a6f25a81b478.js"
  },
  {
    "url": "a9a7754c-21b30b1bbd0164a7ef7c.js"
  },
  {
    "url": "de5d1ec2b3494da8c5f36adade182d818073e173-63cf6bd7289ca9ed2ac8.js"
  },
  {
    "url": "1412f27805f833e8c7f8a2743fd97427d9836162-ccab39958455cbe042eb.js"
  },
  {
    "url": "component---src-templates-page-page-js-b6055e438d02afbe8dda.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b41c7b7b39d6ccce9208b16297a3e18e"
  },
  {
    "url": "page-data/sq/d/1984615537.json",
    "revision": "12fe46ee2263605bc7266c02c134a7c5"
  },
  {
    "url": "page-data/sq/d/2337939889.json",
    "revision": "5f3d43298513b0afeb90c274f7d83f64"
  },
  {
    "url": "page-data/sq/d/2491335609.json",
    "revision": "1f838a9be38c875c79465244f81f8263"
  },
  {
    "url": "page-data/sq/d/3074419520.json",
    "revision": "d8d465f6e5f4688510019828e6026408"
  },
  {
    "url": "page-data/sq/d/3424372577.json",
    "revision": "f848f70f06d9d0e82379ed8384733d12"
  },
  {
    "url": "page-data/sq/d/350099740.json",
    "revision": "7667958b38b881b6b2a609d8e54d0e89"
  },
  {
    "url": "page-data/sq/d/359809651.json",
    "revision": "47621490c58c9a574a822042f8f8f4db"
  },
  {
    "url": "page-data/sq/d/361942995.json",
    "revision": "9a62cd7ae8fa57cad35e677e63bb72b9"
  },
  {
    "url": "page-data/sq/d/3753486965.json",
    "revision": "84f1f06e6f8f35189edd4a02911369ae"
  },
  {
    "url": "page-data/sq/d/547522633.json",
    "revision": "a3627cc9448cd9b7d0b3f0f4c667be71"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "86a7554271721705d78935e232f18fe7"
  },
  {
    "url": "page-data/sq/d/823812300.json",
    "revision": "b9fcac81ca63f22945b8de80b3b6aabc"
  },
  {
    "url": "page-data/sq/d/893186008.json",
    "revision": "f1a0f68f090835b45f4fd867fef958ac"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "19c22c8b78344df8f49589e752601c8c"
  },
  {
    "url": "component---src-templates-blog-year-month-year-js-72cbed1b73c9d4cb7294.js"
  },
  {
    "url": "page-data/blog/2020/page-data.json",
    "revision": "236e55583ca0bd5cd48557ba410e8c31"
  },
  {
    "url": "component---src-templates-blog-blog-js-8a2318cc947abe85f71a.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "07893a22f46fc8e01f003945c261dfc4"
  },
  {
    "url": "component---src-templates-blog-mystic-apes-js-dd0678b0330d931a2740.js"
  },
  {
    "url": "page-data/blog/mysticape/page-data.json",
    "revision": "35b713f060f36e38576cc6c7b0f35101"
  },
  {
    "url": "component---src-templates-blog-series-js-aac0512598eafa93944f.js"
  },
  {
    "url": "page-data/blog/series/page-data.json",
    "revision": "9459149ae638b18341f08123e0536acc"
  },
  {
    "url": "component---src-templates-blog-tag-js-a7f6a9c203eafaa5b934.js"
  },
  {
    "url": "page-data/blog/tag/page-data.json",
    "revision": "22f812db83e12e167b087fffc1b38732"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3139004470650a6380253896d01fa9a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-685caf41683c14cb0a79.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
