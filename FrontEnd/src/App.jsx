import React from 'react';
// const socket = new WebSocket('http://localhost:5000/');
import { w3cwebsocket as W3CWebSocket } from "websocket";

const socket = new W3CWebSocket('ws://127.0.0.1:5000');




const App = () => {
  socket.addEventListener('open', function (event) {
    console.log('Connected to WS Server');
  });

  socket.addEventListener('message', function (event) {
    console.log('Message From Server', event.data);
  })

  const sendMessage = () => {
    socket.send('Hello this is react app')
  }
  return (
    <div>
      <button onclick={sendMessage()}>Message</button>
    </div>
  );
};

export default App;
