"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      NameProduct: DataTypes.STRING,
      IdProduct: DataTypes.NUMBER,
      Price: DataTypes.NUMBER,
      origin: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
