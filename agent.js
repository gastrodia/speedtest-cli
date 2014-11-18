var superagent = require('superagent');
var agent = superagent.agent();
agent.get('http://www.speedtest.net/speedtest-config.php').end(function(err, res) {
  console.log(res.text)
});
