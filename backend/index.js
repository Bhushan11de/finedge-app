require("dotenv").config(); // Ensure this loads the .env file properly
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000; // Use environment variable for port
const url = process.env.MONGO_URL; // Use environment variable for MongoDB connection

// Import routes
const holdingsRoute = require("./routes/holdingsRoute");
const positionsRoute = require("./routes/positionsRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use(cors());
app.use(bodyParser.json());

// Add test route for debugging purposes
app.get("/holdings", (req, res) => {
  res.json({ message: "This is the holdings route!" });
});

app.get("/positions", (req, res) => {
  res.json({ message: "This is the positions route!" });
});

app.get("/user", (req, res) => {
  res.json({ message: "This is the user route!" });
});

app.get("/orders", (req, res) => {
  res.json({ message: "This is the orders route!" });
});

// Use the actual routes
app.use("/holdings", holdingsRoute);
app.use("/positions", positionsRoute);
app.use("/user", userRoute);
app.use("/orders", orderRoute);

// Add a default route to check if the server is working
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Handle invalid routes (404)
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start the server and connect to DB
app.listen(port, async () => {
  console.log(`App is listening on port ${port}`);

  // Connect to MongoDB and handle errors
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
});
