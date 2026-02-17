const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Smart Expense Tracker API Running...");
});

(async () => {
  try {
    await db.query("SELECT 1");
    console.log("MySQL Connected");
  } catch (error) {
    console.error("Database connection failed");
    console.error(error.message);
  }
})();

(async () => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    console.log("Users table data:", rows);
  } catch (err) {
    console.error("Error reading users table:", err.message);
  }
})();

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

