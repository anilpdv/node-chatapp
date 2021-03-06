var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var socketIO = require("socket.io");
var http = require("http");
// path
const publicPath = path.join(__dirname, "../public");
var app = express();

var server = http.createServer(app);
var io = socketIO(server);
// configure
app.use(express.static(publicPath));

// connectio
io.on("connection", socket => {
  console.log("new user connected");

  // on disconnect just console log clients diesconnected
  socket.on("disconnect", () => {
    console.log("client disconnect");
  });

  // on creating mail
  socket.on("createmessage", email => {
    io.emit("newmessage", {
      from: email.from,
      text: email.text,
      createdAt: new Date()
    });
  });
});

const port = process.env.PORT || 3000;
// listen to port:3000
server.listen(port, () => {
  console.log("[chat code app] app is running on port: " + port);

  // setTimeout(function() {
  //   console.log("[chat code app] app started...");
  // }, 2000);
  //
  // setTimeout(function() {
  //   console.log("[chat code app] happy coding!(.-.)/");
  // }, 1000);
  //
  // setTimeout(function() {
  //   console.log("[chat code app] click here https://localhost:3000");
  // }, 3000);
});
