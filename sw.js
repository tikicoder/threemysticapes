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
    "url": "webpack-runtime-26c5a5c1eecd02b8592c.js"
  },
  {
    "url": "framework-0d76cc96511f69a85a0c.js"
  },
  {
    "url": "app-ff416bcfa0627723c6e5.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "dced30da3076271809c77d7476c7b1cf"
  },
  {
    "url": "fontawesome-css.css"
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
    "url": "1412f27805f833e8c7f8a2743fd97427d9836162-e7620c8306c4d402b833.js"
  },
  {
    "url": "component---src-templates-page-page-js-770bcbf4ce4cf8954413.js"
  },
  {
    "url": "styles-474c0340beb1ced255f1.js"
  },
  {
    "url": "de5d1ec2b3494da8c5f36adade182d818073e173-49f04b217d19c02e474c.js"
  },
  {
    "url": "a9a7754c-21b30b1bbd0164a7ef7c.js"
  },
  {
    "url": "cb1608f2-918dca49a6f25a81b478.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1ef3b3bf728e6446799e7e2e49ad7181"
  },
  {
    "url": "page-data/sq/d/1984615537.json",
    "revision": "c86c1f540a191e912504d5bd09fdff1b"
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
    "url": "page-data/sq/d/361942995.json",
    "revision": "9a62cd7ae8fa57cad35e677e63bb72b9"
  },
  {
    "url": "page-data/sq/d/3753486965.json",
    "revision": "84f1f06e6f8f35189edd4a02911369ae"
  },
  {
    "url": "page-data/sq/d/547522633.json",
    "revision": "027353b3efb73b3e37bd71f9d3f0b016"
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
    "revision": "720e995dc85bb1dc7c1a43d62d10d3de"
  },
  {
    "url": "component---src-templates-blog-year-month-year-js-81b94adc8acaa947d2c1.js"
  },
  {
    "url": "page-data/blog/2020/page-data.json",
    "revision": "66baa9d67af6c7f721afccdd04767e1c"
  },
  {
    "url": "component---src-templates-blog-blog-js-b595983c3dd36e76f8cd.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "5108c612d37de94a416722e5b20bcf76"
  },
  {
    "url": "component---src-templates-blog-mystic-apes-js-4d55c3d4f8ac7d0f2b3b.js"
  },
  {
    "url": "page-data/blog/mysticape/page-data.json",
    "revision": "7322e02e26ae20e5db01e5bf2fb4faa4"
  },
  {
    "url": "component---src-templates-blog-series-js-e578a9afc7ca4a52f4e3.js"
  },
  {
    "url": "page-data/blog/series/page-data.json",
    "revision": "6b4349a2806dd9b2c36a718b237ab36e"
  },
  {
    "url": "component---src-templates-blog-tag-js-b131dcb67ed359369ed6.js"
  },
  {
    "url": "page-data/blog/tag/page-data.json",
    "revision": "035795946cbb79280cbb211187aace4a"
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
  if (!resources || !(await caches.match(`/app-ff416bcfa0627723c6e5.js`))) {
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
