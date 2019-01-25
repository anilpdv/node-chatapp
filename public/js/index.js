let socket = io();
// on connect console.log hello
socket.on("connect", function() {
  console.log("connected to server");
});
// on disconnect console log no hello
socket.on("disconnect", function() {
  console.log("disconnected");
});
// on email client send
socket.on("newmessage", function(email) {
  console.log("New message", email);
});
