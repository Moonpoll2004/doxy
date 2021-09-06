const express = require("express");
const path = require("path")
const server = express()

server.use("/assets",express.static(path.join(__dirname,"./dist/assets")))
server.use("/",express.static(path.join(__dirname,"./dist/")))
server.use("/",express.static(path.join(__dirname,"./doxy")))

server.listen(2400,() => console.log("listening on port 2400"))