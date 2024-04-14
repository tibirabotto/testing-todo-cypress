const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const app = express();

const routes = require("./routes");
app.use(express.json());
app.use(cors());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
