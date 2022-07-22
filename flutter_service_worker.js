'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ebde4fe54166c6b66ff482c61e93ae8b",
".git/config": "09108fbb5620a73b04152591db203449",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "982e66b066b065dfc4c0f564fb3ebac3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "914164f135a3835c69d8aa5c10ceb486",
".git/logs/refs/heads/main": "e0a1a53fcc3f6331cdd99d5f4bc6db4c",
".git/logs/refs/remotes/origin/main": "15ff651d93e5e957ec3e7964f3807579",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/04/737d883800133c42583135a788757c7d7a9924": "3226a24ebe828422c449c5ee0ca5aa3a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/6055efea3956eb034560c1a6c6512fd765c7d3": "4a9b2827ca64d164f8563b2cf1afeff2",
".git/objects/1e/109d5e4b3c3bb1358384e6bcb7f54476240519": "57fedd854f024738267c36b60c47bebc",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/e8acc52a9ba8435a39db8afc9acbf07881a8cf": "3eb833f5ea6243d66881f6ab594682dc",
".git/objects/2c/9e94acc9dfa73e029d43c3306f5721d58e6e09": "5c01049110918e8cfe83763107c7964a",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/a59a6ac223d1ecb91a6e5369fe3b32b1511fcd": "d8293b313ac8b6c6569d1a4f6adab004",
".git/objects/2f/1fd543fb58e00263333e3e7921d6eb5653cd3e": "f4b4ebcf06e076fbcb12a8004f2407d7",
".git/objects/36/0634ddccd29eeb7d1cc27ee698bc12b40806b8": "33e47e197a3734a8a80db614bf8920cc",
".git/objects/3b/cffddc53c72933e61bc3c8dc3a8247f1cdc829": "2f4ffb837b90ab88f8d50369263260a9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b4dfd3fd25eee7a451e0d47ccd57374bb79f59": "f8794aa84d777bf356dded30b5b137f4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/1b86a1210bb6c4b4e3c8338e12e51514d7cf12": "4a1e656c02e0e1958186e6aac76045c5",
".git/objects/4f/d3bd271168ce1b3dc206c07ec0ee9c80bdfca6": "2ca6e5ab3bf6c659854ec544b6d578f3",
".git/objects/5d/5fdafc232b8bfef29dd2c1f2e4e6e17e939e58": "f2efc5d987967b92ee101cf85ea8b5db",
".git/objects/61/f4d2e5a9835d4323111e96a4f1b5a563df461a": "afe2701c6eb926b38ed1d0f5d543b30e",
".git/objects/63/a267c2d82dfdf281852ea4fe63fe20f1014ebf": "7c136026165e1594c685af19629c0a6c",
".git/objects/66/cbd2fb28915a9c963de5c785e32291ef590eff": "1d54826c04f252109a00eea410847dc0",
".git/objects/6a/e0e7bbb1ddf512f44b4a69006272c279ee2441": "a2f4c74e84cef1bbdc5c270a4fcbdeb7",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8b36ba3436c3bd4b20dfcc46950180c9e3ce1c": "781ba80c94c3b2306565ee12e75f171e",
".git/objects/7d/5d7633d8ea5de5577e9487278eaae7d3792dd6": "a8fbc17c73dd4a81a01d627c203b1562",
".git/objects/85/eb91ec42e5344ec61341d87b634860956610be": "43d68b4c57ceed9f5f49d86f36ef496f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/8d80ec03bee5fe15f9cb546897463131b76364": "5e5be11f6265b944a2d90f56a53fd8c5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/3e051aeb975143abad143592d739bee5b090d8": "393dd78b14dec63c887b695881959748",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/adca292344743dfbf881adfc0efe0841252334": "bb8b967c626ea13288a25bb220f0c763",
".git/objects/cc/2325eaacff56f90ed7345568ab79bf991fa101": "b27aece0402a44127d7a051209b0b911",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/32f454607b09cf9321e33f047ae9c059dcaaaf": "b2cbf6927b9f78cd4af5944947d49b60",
".git/objects/d1/6c46dadfff0c04f0d146dbfa0d6a7325bde1e2": "46eed40a790a8cfc0c093a218cc8a02b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/bbdd448f3a5bf0e581dcac2966d1ff0070eb32": "1085fb0fa6fa9b06b5b9d597df4c6ac2",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/10f82e4878420d625e12ff4f2697e6e1338398": "e6f6fb665efde2c969c6cb536e008756",
".git/objects/f8/a2fe91ece771c12a432f3b4c135efa7b0feda9": "6c33ae67aea54d7c068271c9d49fff4c",
".git/refs/heads/main": "12ce3198fdd4138a395aea8e33ef7cad",
".git/refs/remotes/origin/main": "12ce3198fdd4138a395aea8e33ef7cad",
"assets/AssetManifest.json": "baf8ef82a9170f46547ca8ba425fc756",
"assets/assets/entel1.png": "4eda48eb7872689fc91776b2a7b2976b",
"assets/assets/tigo.png": "e645c5e4ab37013a904877aae78f46b1",
"assets/assets/viva.png": "d9c2f7247aec96a8eaba058f1275e33a",
"assets/assets/white_appbar_label.png": "4c32b0e701108439fa96b00327ea0359",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "257c4385ed61e831f8b5564344ab9d08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef8079732793e47c6c976dad7207ed9d",
"/": "ef8079732793e47c6c976dad7207ed9d",
"main.dart.js": "edd4ca4a49cf62266357c5a7a0b041cd",
"manifest.json": "5d178a5179040545092976c8894abc6c",
"version.json": "1172737686da2833f8763618abeeb36d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
