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
    "url": "webpack-runtime-94d237a7291808800de4.js"
  },
  {
    "url": "framework-62aa192001dd5d50f28d.js"
  },
  {
    "url": "app-9df19ff2ebf03252ab86.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c267350766d84c4b868b2c20c1598168"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd4fb51a6fac1c18bdde.js"
  },
  {
    "url": "polyfill-b055a39fdf17d730ea48.js"
  },
  {
    "url": "styles.b94d911fdec959d60055.css"
  },
  {
    "url": "1412f27805f833e8c7f8a2743fd97427d9836162-72dc719ba03f850fa9a7.js"
  },
  {
    "url": "component---src-templates-page-page-js-770bcbf4ce4cf8954413.js"
  },
  {
    "url": "styles-474c0340beb1ced255f1.js"
  },
  {
    "url": "de5d1ec2b3494da8c5f36adade182d818073e173-1257e3bc2b8c11153891.js"
  },
  {
    "url": "a9a7754c-5df41a589a987b2652b0.js"
  },
  {
    "url": "cb1608f2-40bd4791011390e82e6d.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "4880647ae9925eae9bef58c626784ec1"
  },
  {
    "url": "page-data/sq/d/1984615537.json",
    "revision": "12fe46ee2263605bc7266c02c134a7c5"
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
    "revision": "6e21eea3d2850f89886093285f538451"
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
    "url": "page-data/sq/d/3753486965.json",
    "revision": "84f1f06e6f8f35189edd4a02911369ae"
  },
  {
    "url": "page-data/sq/d/547522633.json",
    "revision": "3e8bd592d4909b0fedd70c8c044e3c1b"
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
    "revision": "64a6fd345c9483a0311f6f005f3ceb2d"
  },
  {
    "url": "component---src-templates-blog-year-month-year-js-81b94adc8acaa947d2c1.js"
  },
  {
    "url": "page-data/blog/2020/page-data.json",
    "revision": "9dec775baa6e99283cac9afe56ee9f16"
  },
  {
    "url": "component---src-templates-blog-blog-js-b595983c3dd36e76f8cd.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "9b2fbaaba80feee242147fb729ec2175"
  },
  {
    "url": "component---src-templates-blog-mystic-apes-js-4d55c3d4f8ac7d0f2b3b.js"
  },
  {
    "url": "page-data/blog/mysticape/page-data.json",
    "revision": "45d27dc67e3f56294cebdffc5ee14a2b"
  },
  {
    "url": "component---src-templates-blog-series-js-e578a9afc7ca4a52f4e3.js"
  },
  {
    "url": "page-data/blog/series/page-data.json",
    "revision": "b1acbb3d77f4a0f905f6b7fdcc5c9dbc"
  },
  {
    "url": "component---src-templates-blog-tag-js-b131dcb67ed359369ed6.js"
  },
  {
    "url": "page-data/blog/tag/page-data.json",
    "revision": "e3c9550b90da4158f175487e6e7868f7"
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
  if (!resources || !(await caches.match(`/app-9df19ff2ebf03252ab86.js`))) {
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
