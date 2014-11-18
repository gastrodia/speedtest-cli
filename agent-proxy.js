var superagent = require('superagent');
var agent = superagent.agent();
var speedTestSite = 'http://www.speedtest.net';
var express = require('express');
var app = express();

app.use(function(req,res,next){

    var method = req.method.toLowerCase();
    var url = speedTestSite+req.url;
    if(url === 'http://www.speedtest.net/favicon.ico'){
        next();
    }else{
        var req2 = agent[method](url);
        //req2.set('Host',speedTestSite);
        //req2.set('User-Agent','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.122 Safari/537.36')
        req2.end(function(err, res2){
            console.log(res2.text);
            res.set('Content-Type','text/xml');
            res.send(res2.text);
        });
    }

});

var http = require('http');
var port = 3000;
http.createServer(app).listen(port,function(){
    console.log('Express server listening on port ' + port);
});
