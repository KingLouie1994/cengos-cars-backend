const express = require("express");

const routes = require("./api-router");
const rootMiddleware = require("./root-middleware");

const server = express();

rootMiddleware(server);

server.use("/", routes);

module.exports = server;