const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const showRouters = require("./data/routers/showsRouter");
const charactersRouters = require("./data/routers/charactersRouter");

const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use("/api/shows", showRouters)

// server.use("/api/characters", charactersRouters)


server.get('/', (req, res) => {
    res.send({message:'Test message'});
  });

module.exports=server;