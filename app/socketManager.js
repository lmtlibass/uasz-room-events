module.exports = (socket) => {
     try{
          console.log("connected");
          socket.on("code", (data, callback) => {
               socket.broadcast.emit("code", data);
          });
     } catch(err) {
          console.log(err.message);
     }
}