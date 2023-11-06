const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`서버 작동 중 http://localhost:${PORT}`));
