var http = require('http'),
    httpProxy = require('http-proxy');


var proxy = httpProxy.createProxy();


var server = http.createServer(function(req, res) {
  console.log(req.url);
  proxy.web(req, res, { target: 'http://www.speedtest.net',timeout:1000*1000 });
});

console.log("listening on port 3000")
server.listen(3000);
