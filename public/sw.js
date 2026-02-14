// यह फाइल सिर्फ ब्राउज़र को यह विश्वास दिलाने के लिए है कि यह एक असली App है।
self.addEventListener('install', (e) => console.log('App Installed'));
self.addEventListener('fetch', (e) => {});
