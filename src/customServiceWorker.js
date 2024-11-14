importScripts('./ngsw-worker.js');

self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'assets/ambulance.gif'
    });
  }
});