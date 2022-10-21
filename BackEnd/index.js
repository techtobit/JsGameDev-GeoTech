const express = require('express');
const app = express();
const WebSocket = require('ws');
var cors = require('cors')
const port = 5000;
const server = require('http').createServer(app);
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ server: server });
app.use(cors())


wss.on('connection', function connection(ws) {
 console.log('a new client connected');
 ws.send('welcome new client');

 ws.on('message', function incoming(message) {
  console.log('received : %s', message);

  wss.clients.forEach(function each(client) {
   if (client !== ws && client.readyState === WebSocket.OPEN) {
    client.send(message);
   }
  })
 })
})
app.get('/', (req, res) => {
 res.send('Hello World! Web Socket Setup');
});

app.listen(port, () => {
 console.log(`Backend Server Running from port ${port}`);
});

