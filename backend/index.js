require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3002;
const mongoURL = process.env.MONGO_URL;

const holdingsRoute = require("./routes/holdingsRoute");
const positionsRoute = require("./routes/positionsRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use(cors());
app.use(bodyParser.json());

app.use("/holdings", holdingsRoute);
app.use("/positions", positionsRoute);
app.use("/user", userRoute);
app.use("/orders", orderRoute);

// Global Error Handler (Catches unhandled route errors)
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, async () => {
  console.log(`App is listening on ${port}`);
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to DB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
});
