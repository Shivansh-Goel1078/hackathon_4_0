self.addEventListener('push', function(event) {
    const title = 'Emergency Ambulance';
    const options = {
      body: 'Your Location is being accessed',
      icon: 'path/to/icon.png',
      badge: 'path/to/badge.png'
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });