
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const port = 3000;
const app = express()
const server = http.createServer(app);
const io = socketIO(server);
server.listen(port, () => console.log(`Listening on port ${port}`))
const dataset = require('./dataset.js');


var i = 0;

setInterval(emitNewNotification, 1000);

function emitNewNotification(){
  let dt = new Date();
  dataset[i].timestamp = dt.getTime();
  dataset[i].date = dt.getFullYear() + "-" + dt.getMonth() + "-" + dt.getDate(); 
  io.emit('notification', JSON.stringify(dataset[i]));
  i ++;
  if(i === dataset.length){
    i = 0;
  }
}

