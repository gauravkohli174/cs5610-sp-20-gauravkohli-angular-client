const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cs5610-sp-20-gauravkohli-angular-client'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/cs5610-sp-20-gauravkohli-angular-client/index.html'));});
app.listen(process.env.PORT || 8080);
