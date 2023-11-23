const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/api/categories', (req, res) => {
  const filePath = path.resolve('frontend/data', 'categories.json');

  res.json(JSON.parse(fs.readFileSync(filePath, 'utf-8')));
});

app.get('/api/articles', (req, res) => {
  const filePath = path.resolve('frontend/data', 'articles.json');

  res.json(JSON.parse(fs.readFileSync(filePath, 'utf-8')));
});

app.get('/api/article/:articleId', (req, res) => {
  const { articleId } = req.params;
  const filePath = path.resolve('frontend/data/article', `${articleId}.json`);

  res.json(JSON.parse(fs.readFileSync(filePath, 'utf-8')));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`서버 작동 중 http://localhost:${PORT}`));
