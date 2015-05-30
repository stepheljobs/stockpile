/*
 *
 */
'use strict';

var http = require('http'),
  sockjs = require('sockjs'),
  ztatic = require('node-static'),
  echo = sockjs.createServer({sockjs_url: 'http://cdn.jsdelivr.net/sockjs/0.3.4/sockjs.min.js'}),
  server = http.createServer(),
  ztaticDir = new ztatic.Server(__dirname);

server.addListener('request', function (req, res) {
  ztaticDir.serve(req, res);
});

echo.on('connection', function (conn) {

  conn.on('data', function (message) {
    conn.write(message);
  });
  conn.on('close', function () {
  });
});

echo.installHandlers(server, {prefix: '/echo'});
server.listen(9999, '0.0.0.0');
