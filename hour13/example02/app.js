var app = require('express').createServer(),
    io = require('socket.io').listen(app);

app.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('nickname', function (data) {
    console.log('The server received the following nickname: ' + data);
  });
});
