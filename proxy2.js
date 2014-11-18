var httpProxy = require('http-proxy');
var url       = require('url');
var speedTestStie = 'http://www.speedtest.net';
httpProxy.createServer(function(req, res, proxy) {
  var urlObj = url.parse(req.url);

  req.headers.host  = speedTestStie;
  req.url           = urlObj.path;

  proxy.proxyRequest(req, res, {
    host    : speedTestStie,
    port    : 80,
    enable  : { xforward: true }
  });
}).listen(3000, function () {
  console.log("Waiting on 3000 for requests...");
});
