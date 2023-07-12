// src/main/frontend/src/setProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

export default function (app) {
  app.use(
      '/api',
      createProxyMiddleware({
          target: "http://localhost:8080",
          changeOrigin: true,
      })

  );
};