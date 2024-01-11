const express = require("express");
const root = express.Router();
const { homePage } = require("./hompage.router");
const { productRouter } = require("./product.router");
root.use("/", homePage);
root.use("/product", productRouter);

module.exports = { root };
