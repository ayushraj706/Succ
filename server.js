const express = require('express');
const app = express();
const port = 3000;

// 'public' फोल्डर से HTML फाइल्स दिखाएगा
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
  console.log(`👨‍🎓 Student Panel: http://localhost:${port}/index.html`);
  console.log(`👨‍🏫 Admin Panel: http://localhost:${port}/admin.html`);
});
