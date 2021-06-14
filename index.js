const express = require("express");

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 return res.send("Hello World23");
});

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
  console.log("Server is running");
});

module.exports = app;

// const app = require('express')();
// const cors = require('cors');
// const http = require('http').createServer(app);
// const io = require('socket.io')(http, {
//   cors: {
//     origins: ['http://localhost:4300']
//   }
// });
// const bodyParser = require('body-parser');

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/makeOrder', function(req, res){ 
//   // Do logic
//   var javascriptObject = {name:'duy', age: 30};

//   io.emit("somePeople", req.body);
//   console.log(req.body);
//   res.send({test:"Some message"});
// })

// app.get('/', (req, res) => {
//   res.send('<h1>Hey Socket.io</h1>');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
//     io.emit("message", "hello user");
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// http.listen(8000, () => {
//   console.log('listening on *:8000');
// });