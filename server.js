const express = require('express');
const socket = require('socket.io');


// App Setup
const app = express();
const PORT = 5000
const server = app.listen(PORT, console.log(`Server is running on port ${PORT}`));

// Static Files
app.use(express.static('public'));

//Socket Setup
const io = socket(server);

io.on('connection', socket => {
  console.log('User Connected');

  socket.on('disconnect', () => {
    console.log('User Disconnected');
  })

  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })
})
