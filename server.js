require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT;
const bodyParser = require("body-parser");
const Routes = require("./app/routes");

app.use([
     cors(),
     bodyParser.json(),
     bodyParser.urlencoded({ extended: true }),
     Routes,
]);

const io = require("socket.io")(server, {
     cors: {
          origin: "*",
     }
});
const socketManager = require("./app/socketManager");

io.on("connection", socketManager);

server.listen(port, () => {
     console.log(`Server running on port ${port}`);
});
