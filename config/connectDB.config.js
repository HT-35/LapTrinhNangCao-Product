const Sequelize = require("sequelize");

const connectDB = async () => {
  try {
    const sequelize = new Sequelize("Product", "root", "huyA@0123", {
      host: "127.0.0.1",
      dialect: "mysql",
      logging: false,
    });
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};
module.exports = { connectDB };
