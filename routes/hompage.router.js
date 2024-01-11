const express = require("express");

const { homePageController } = require("../controller/homePage.controller");
const homePage = express.Router();

homePage.get("/", homePageController);
module.exports = {
  homePage,
};
