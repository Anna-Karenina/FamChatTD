const app = require('express')();
const http = require('http').createServer(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3030, function(){
  console.log('listening on *:3030');
});
