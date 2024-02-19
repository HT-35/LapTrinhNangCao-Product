const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const bodyParser = require("body-parser");
const { root } = require("./routes/root.router");
const { connectDB } = require("./config/connectDB.config");
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/", root);

app.listen(port, () => {
  console.log("server run on : http://localhost:8080/");
});
