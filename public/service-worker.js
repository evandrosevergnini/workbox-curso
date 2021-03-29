import { precacheAndRoute } from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {NetworkFirst} from 'workbox-strategies';
import {CacheFirst} from 'workbox-strategies';
import {cacheNames} from 'workbox-core';
import {setCacheNameDetails} from 'workbox-core';

console.log('Hello from service-worker.js');
console.log(`%cprecacheCacheName: ${cacheNames.precache}`, "padding: 1rem; color: lightblue;")
console.log(`%cruntimeCacheName: ${cacheNames.runtime}`, "padding: 1rem; color: lightblue;")

setCacheNameDetails({
  prefix: 'assets',
  suffix: 'v1',
  precache: 'precache',
});


precacheAndRoute(self.__WB_MANIFEST);
  
  // 'https://jsonplaceholder.typicode.com'
registerRoute(
  ({url}) => {
    console.log(url)
    return url.origin === 'https://jsonplaceholder.typicode.com'
  },
  new CacheFirst({
    cacheName: 'data-runtime-v1',
  })
);