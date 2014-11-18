var http = require('http');

var proxy = http.createServer(function(request, response) {

    var options = {
        host: 'http://www.speedtest.net', // 这里是代理服务器
        port: 80,             // 这里是代理服务器端口
        path: request.url,
        method: request.method
    };
    console.log(request.url);
    var req = http.request(options, function(req, res) {
        res.pipe(response);    // 这个pipe很喜欢
        console.log(req.url);
    }).end();

}).listen(3000);
