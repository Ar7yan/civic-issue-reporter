const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Civic Issue Reporter API" });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
