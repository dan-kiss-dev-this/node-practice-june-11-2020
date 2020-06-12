const http = require('http');

// this server is an event emitter
const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.write('Hello world');
    res.end()
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]))
    res.end()
  }
});
// sever is event emitter as shown below
// server.emit

// this is an event handler aka listener below for the server
server.on('connection', (socket) => {
  console.log('new connection')
})

server.listen(3000)
console.log('listening on port 3000')