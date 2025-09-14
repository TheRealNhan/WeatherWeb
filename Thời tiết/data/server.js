import http from 'http'
import fs from 'fs'
import path from 'path'
//const express = require('express');
//const app = express();

/*app.use(express.static(path.join(__dirname, this)));

// Định nghĩa route cho trang chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, this, 'H:/index.html'));
});*/
// Tạo máy chủ
const hostname = '127.0.0.1';
const server = http.createServer((req, res) => {
  // Kiểm tra đường dẫn yêu cầu
  let filePath = '';
  if (req.url === '/') {
    //filePath = path.join(__dirname, req.url === '/' ? 'Thời%20tiết.html' : req.url);
    filePath = path.join('..','/..', '/Thời%20tiết.html');
  } else {
    filePath = path.join(req.url);
  }

  // Xác định loại nội dung dựa trên phần mở rộng tệp
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
    case '.mp4':
      contentType = 'video/mp4';
      break;
    case '.html':
      contentType = 'text/html';
      break;
    default:
      contentType = 'application/octet-stream';
  }
fetch("../../Thời%20tiết.html").then(response => response.text())
    .then(htmlText => {
        res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.end(htmlText);
    })
    .catch(error => {console.log(error);throw new Error(error)})
  // Đọc và gửi tệp
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(`<h1 style="text-align:center;">404 Not Found.</h1><br>`);
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
});
import express from 'express';
import fetch, { FetchError } from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/astronomy', async (req, res, next) => {
  const apiKey = 'kr2amdBYm1';
  const lat = req.query.lat || 0;
  const lon = req.query.lon || 0;
  var date1 = new Date();
  var formatted_date = date1.getFullYear() + '-' + ('0'+ date1.getMonth()).slice(-2) + '-' + ('0' + date1.getDate()).slice(-2);
  const date = req.query.date || formatted_date;
  const url = `https://api.xmltime.com/astronomy?key=${apiKey}&lat=${lat}&lon=${lon}&date=${date}&format=json`;
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});
// Thiết lập cổng và bắt đầu lắng nghe yêu cầu
server.listen(PORT, hostname, () => {
  console.log(`Server is running at http://localhost:${PORT}/ | http://${hostname}:${PORT}`);
});
