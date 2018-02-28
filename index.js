var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.listen(8090, function () {
  console.log('selkie-node app listening on port 8090!');
});
