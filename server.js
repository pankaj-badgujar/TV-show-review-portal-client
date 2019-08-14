const express = require('express');
const app = express();
const path = require('path');


// Configure CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:8000/");
  res.header("Access-Control-Allow-Headers",
    'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent, mode');
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.static(__dirname + '/dist/wbdv-project-sf19-angular-client-group13'));
app.listen(process.env.PORT || 3000);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/wbdv-project-sf19-angular-client-group13/index.html'));
});
console.log('console listening');
