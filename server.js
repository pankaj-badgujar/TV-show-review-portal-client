const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(__dirname + '/dist/wbdv-project-sf19-angular-client-group13'));
app.listen(process.env.PORT || 3000);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/wbdv-project-sf19-angular-client-group13/index.html'));
});
console.log('console listening');
