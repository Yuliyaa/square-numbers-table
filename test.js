var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var max = 4;
  var result = '';
  if (typeof(max) === 'number' && max > 0) {
    for (var i = 1; i <= max; i++) {
      result += i + '^2=' + i * i + '<br>';
    }
  } else {
    res.send('error');
  }
  res.send(result);
});

app.listen(3000);
