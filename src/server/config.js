const path = require("path");

const express = require("express");
const errorhandler = require("errorhandler");

const routes = require("../routes/index.routes");
//REST 

module.exports = app => {
  //Settings
  app.set("port", process.env.PORT || 3000);

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  //* VIEW ENGINE
  //app.set("views", path.join(__dirname, "../views"));
  //app.set("view engine", "pug"); //View engine
  
  // routes
  routes(app);

  // static files
  app.use("/public", express.static(path.join(__dirname, "../public")));
  app.use("/js", express.static(path.join(__dirname, "../js")));
  app.use("/css", express.static(path.join(__dirname, "../css")));
  app.use("/maincss", express.static(path.join(__dirname, "../maincss")));
  app.use("/fonts", express.static(path.join(__dirname, "../fonts")));
  app.use("/media", express.static(path.join(__dirname, "../media")));
  app.use("/robot", express.static(path.join(__dirname, "../robot")));
  app.use("/bower_components", express.static(path.join(__dirname, "../bower_components")));


  //errorhandlers
  if ("development" === app.get("env")) {
    app.use(errorhandler);
  }

  return app;
};
