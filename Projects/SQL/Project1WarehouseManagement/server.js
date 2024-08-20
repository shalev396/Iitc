const express = require("express");
const sql = require("mssql");
require("dotenv").config();
let GlobalResult = [1];
const app = express();
const port = 3000;

// Database configuration
const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true, // Bypass SSL certificate validation
    trustedConnection: true,
    connectTimeout: 30000, // Increase connection timeout to 30 seconds
  },
};

// Route to get data
app.get("/data", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });

    // Query the database
    const result = await sql.query("SELECT * FROM Items");
    GlobalResult = result;
    res.json(GlobalResult);
    //export GlobalResult
    // Send the results as JSON
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error1");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/////////////////////////////////
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/array", (req, res) => {
  console.log("Sending array:", GlobalResult); // Log the array being sent
  res.json(GlobalResult);
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
