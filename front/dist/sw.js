self.addEventListener('install', (event) => {
  console.log('Installed');
  event.waitUntil(
    caches.open('my-cache')
      .then((cache) => {
        cache.addAll([
          './',
          './index.html',
          './main.css',
          './e595d4ab6f91a187cec5.png'
        ])
      })
  )
})

self.addEventListener('activate', (event) => {
  console.log('Activated');
})

self.addEventListener('fetch', (event) => {
  console.log('Fetched');
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  )
})
