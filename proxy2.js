var httpProxy = require('http-proxy');
var url       = require('url');
var speedTestSite = 'http://www.speedtest.net';
httpProxy.createServer(function(req, res, proxy) {
  var urlObj = url.parse(req.url);

  req.headers.host  = speedTestSite;
  req.url           = urlObj.path;

  proxy.proxyRequest(req, res, {
    host    : speedTestSite,
    port    : 80,
    taget   : speedTestSite + urlObj.path,
    enable  : { xforward: true }
  });
}).listen(3000, function () {
  console.log("Waiting on 3000 for requests...");
});
