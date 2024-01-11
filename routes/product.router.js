const express = require("express");

const productRouter = express.Router();

const {
  createProductController,
  GetProductByIDController,
} = require("../controller/product.controller");

productRouter.post("/", createProductController);

productRouter.get("/detail", GetProductByIDController);

module.exports = {
  productRouter,
};
