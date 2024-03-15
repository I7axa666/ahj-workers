self.addEventListener('install', (event) => {
  console.log('Installed');
  event.waitUntil(
    caches.open('my-cache')
      .then((cache) => {
        cache.addAll([
          './',
          './index.html',
          './main.css',
          './main.js',
        ]);
      }, (error) => {
        console.log(error);
      }),
  );
});

self.addEventListener('activate', (event) => {
  console.log('Activated');
});

async function fetchPriorityThenCache(event) {
  let response;

  try {
    response = await fetch(event.request);
  } catch (error) {
    const cacheResponse = await caches.match(event.request);

    if (cacheResponse) {
      return cacheResponse;
    }

    return new Response('Нет соединения');
  }

  const cache = await caches.open('my-cache');

  cache.put(event.request, response.clone());
  return response;
}

self.addEventListener('fetch', (event) => {
  console.log('Fetched', event.request.url);

  event.respondWith(fetchPriorityThenCache(event));
});
