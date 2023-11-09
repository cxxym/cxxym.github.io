/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/22/使用termux安装hexo并上传github/index.html","1c906a0a41a684a6d704cf237cb6d37f"],["/2022/09/28/储存目录清理脚本/index.html","d93e47d8f94d973a2d2b28bad172a599"],["/2023/11/06/谷歌相机拍摄/index.html","f3a6626f07cffb82f514792b876b4022"],["/archives/2022/09/index.html","1dff94da05143edcaeb3ebc0167e5800"],["/archives/2022/index.html","b50311965de4df2df98341913262bf2e"],["/archives/2023/11/index.html","03989c9b14afd41140a8a5836f17b034"],["/archives/2023/index.html","626c3208da761636a95d28100e33ab2c"],["/archives/index.html","f2ed88510cd8e7e959cd11901983ff6f"],["/css/common/animated.css","08c347578b9d4abdad60ebc99157fe9a"],["/css/common/basic.css","1252a93bffb3f2443bcc2432d4d5d5c7"],["/css/common/code-block/code-block.css","54f0e6b7b8d4be4c47c0e4b08094c9d9"],["/css/common/code-block/code-theme.css","ac4e55da277edc7b616fa4b80932d5eb"],["/css/common/code-block/highlight.css","5bfdc1ebafaf0b5342f73ab03e6197c4"],["/css/common/css-variables.css","0ce7df785dc49a71d2ad9f9f6c98eb62"],["/css/common/keep-style.css","fd93a7e28390ed0f5fa9f056723a1d11"],["/css/common/markdown.css","451a93584da68046d49fc4c4f19a3e17"],["/css/common/stylus-variables.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/tags/keep-button.css","e64b14e84930c1e1a6c1ee7fd39fb96e"],["/css/common/tags/keep-note.css","c91bc8cb13a6642c86c342ddfa2c630f"],["/css/common/tags/keep-tabs.css","218ef149b4c8db34b5b8babac174617e"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","de7917bbf59e5e2931f605d425b59410"],["/css/layout/category-content.css","5c37f066d6592c197a168369b0b82b11"],["/css/layout/category-list.css","07a7ac766159836d0780aa0cd4703e5e"],["/css/layout/home-content.css","99b156418057b0010fdde9e3cc7fb5d9"],["/css/layout/page.css","f4e8e13aac61aa860977a595fa78fb7b"],["/css/layout/tag-content.css","2ddbf9b29a55e3c801ce8b3b903eb86a"],["/css/style.css","46cefcf0802b8e9628f17bbba035709e"],["/font/css/brands.min.css","32804996baacc18f6a2ebb3d2b3dc667"],["/font/css/fontawesome.min.css","cec5567ac2839f3a11b7cf23c59de2bf"],["/font/css/regular.min.css","c6e88d822a629554b8bcf7c40b1a9e52"],["/font/css/solid.min.css","b4b6a21001bc977da32ed4c246e356bc"],["/font/webfonts/fa-brands-400.ttf","bb8cd014d7a55672934233c354e1c4a3"],["/font/webfonts/fa-regular-400.ttf","675809e48e35c47d51c7d6fcc687ee28"],["/font/webfonts/fa-solid-900.ttf","0248ab19e74fc3731de14d647db4687a"],["/font/webfonts/fa-v4compatibility.ttf","58f1253e5639d508a6fe310c97327f82"],["/images/avatar.svg","97722a7e825fbe4b82629c20b54a62e4"],["/images/bg.svg","2cfdbb338a1d44d700b493d7ecbe65d3"],["/images/deploy-provider/aliyun.png","76a0420ed71a3fe7da06e024a0e7d893"],["/images/deploy-provider/gitee.png","1a1adc2570010a96efc5eea48e851c4d"],["/images/deploy-provider/github.png","9ff51e3e791b92646e64fea4097e6362"],["/images/deploy-provider/netlify.png","eb9e367355615cdeb909dd535bfc2202"],["/images/deploy-provider/tencent_cloud.png","9693e72d12f581715dffcaf5fe7be3f5"],["/images/deploy-provider/upyun.png","425d4a9c861d892e8a8e0defe38f840d"],["/images/deploy-provider/vercel.png","ada1daa9ef523662dea0cab3f6276762"],["/images/logo.svg","e2e718bdc4c411aa8712d931c620cca8"],["/index.html","7d9898e72abecaa38c6f72376222d6f9"],["/js/back2top.js","5547a18714c956ce85282ddacd590fb1"],["/js/category-page.js","7780a25e17a3c389feca8b5c87a9d4e1"],["/js/code-block.js","74200c8238d6f35feea49c975174014c"],["/js/dark-light-toggle.js","f9697b37004d55d12361b03dca560f80"],["/js/header-shrink.js","71a79c59d320a10b78fc5664ae66dc84"],["/js/lazyload.js","f1e4b68ec3901ea8fe09b3ea38fb2ddb"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/links-page.js","75769dd643173f788d4b8475850a106a"],["/js/local-search.js","ae27e4d09740e3006f11f3caddea78a7"],["/js/main.js","273209db919b2f85374dfd2ef2e07682"],["/js/post/copyright-info.js","fcbd7748b1e2ba5addf08d8d1d4455eb"],["/js/post/post-helper.js","08fc806299facd45ca457964fa0fe8a4"],["/js/post/share.js","923f54816210e9fd4c19ede9c54fdb3f"],["/js/post/toc.js","7c410c52ab9f52833039ff1a6df58009"],["/js/utils.js","8a8892859feb656d2c1887ed282590fa"],["/sw-register.js","f16812eec9904a39edf504a598ea3890"],["/tags/Termux/index.html","4284e14217b7c6088cfb8293a565a256"],["/tags/hexo/index.html","f9f0b78889315a214bd2f450a4c3573b"],["/tags/index.html","ead6cb78db540a3c6fe1a81058b4afdf"],["/tags/shell/index.html","dc7eb8a3098389981f3e3f5d8c92c689"],["/tags/随拍/index.html","492d588c33274fbef91d4074f8632a7c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
