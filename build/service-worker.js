"use strict";var precacheConfig=[["/index.html","b36be67ba6886e94b50e01a9e1e86d32"],["/static/css/main.df6f540e.css","71b201bbd86519c98d03ccdb89830af1"],["/static/js/main.11e4c8ae.js","9b528c08c09291529d0c36e37b046a33"],["/static/media/arrow_left.11911410.svg","11911410dca2de148f30954eb2fd5eab"],["/static/media/arrow_right.8ef6a08c.svg","8ef6a08cdc1154920165680a4edde771"],["/static/media/fa-brands-400.0cb5a5c0.svg","0cb5a5c0d251c109458c85c6afeffbaa"],["/static/media/fa-brands-400.13685372.ttf","13685372945d816a2b474fc082fd9aaa"],["/static/media/fa-brands-400.a06da7f0.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/static/media/fa-brands-400.c1868c95.eot","c1868c9545d2de1cf8488f1dadd8c9d0"],["/static/media/fa-brands-400.ec3cfdde.woff","ec3cfddedb8bebd2d7a3fdf511f7c1cc"],["/static/media/fa-regular-400.261d666b.eot","261d666b0147c6c5cda07265f98b8f8c"],["/static/media/fa-regular-400.89ffa3ab.svg","89ffa3aba80d30ee0a9371b25c968bbb"],["/static/media/fa-regular-400.c20b5b73.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/static/media/fa-regular-400.db78b935.ttf","db78b9359171f24936b16d84f63af378"],["/static/media/fa-regular-400.f89ea91e.woff","f89ea91ecd1ca2db7e09baa2c4b156d1"],["/static/media/fa-solid-900.1ab236ed.ttf","1ab236ed440ee51810c56bd16628aef0"],["/static/media/fa-solid-900.a0369ea5.eot","a0369ea57eb6d3843d6474c035111f29"],["/static/media/fa-solid-900.b15db15f.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/static/media/fa-solid-900.bea989e8.woff","bea989e82b07e9687c26fc58a4805021"],["/static/media/fa-solid-900.ec763292.svg","ec763292e583294612f124c0b0def500"],["/static/media/logo.c3ba82a5.png","c3ba82a536fe4983dad4c06b578dcd5d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});