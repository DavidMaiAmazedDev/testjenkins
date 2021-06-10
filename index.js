// const express = require('express')
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server,{
//   cors: {
//     origin: ["*"],
//     handlePreflightRequest: () => {
//       res.writeHead(200, {
//         "Access-Control-Allow-Origin": "localhost:4300",
//         "Access-Control-Allow-Method": "GET,POST"
//       });
//       res.end();
//     }
//   }
// });
// const port = 8000;

// app.get('/', function(req, res,next) {  
//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/makeOrder', function(req, res){ 
//   // Do logic
//   var javascriptObject = {name:'duy', age: 30};

//   io.emit("someName", javascriptObject);
//   console.log('ok');
//   res.send({test:"Some message"});
// });

// io.on('connection', (socket) => {
//   console.log('a user connected with socketID :' + socket.id);
//   socket.on('disconnect', () => {
//     console.log('user disconnected')
//   });
// });




// server.listen(port, () => {
//   console.log(`listening on *:${port}!`);
// });

// // app.listen(port, () => {
//   // console.log(`Example app listening on port ${port}!`)
// // });

const app = require('express')();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4300']
  }
});
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.post('/makeOrder', function(req, res){ 
  // Do logic
  var javascriptObject = {name:'duy', age: 30};

  io.emit("somePeople", req.body);
  console.log(req.body);
  res.send({test:"Some message"});
})

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
    io.emit("message", "hello user");
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(8000, () => {
  console.log('listening on *:8000');
});