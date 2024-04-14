require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));
