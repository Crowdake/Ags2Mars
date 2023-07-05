const express = require("express");
const router = express.Router();

const home = require("../controllers/index.controllers.js");

module.exports = app => {
  router.get("/", home.index);
  router.get("/data", home.getData);

  app.use(router);
};