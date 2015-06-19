/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    http = require('http'),
    httpProxy = require('http-proxy');

gulp.task('proxy', function () {
    var proxy = httpProxy.createProxyServer({});

    proxy.on('proxyReq', function (proxyReq) {
        proxyReq.setHeader('Host', 'depo');
    });

    http.createServer(function (req, res) {
        proxy.web(req, res, { target: 'http://depo' });
    }).listen(8001);
});
