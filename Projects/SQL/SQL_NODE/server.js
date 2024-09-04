const axios = require("axios");
const express = require("express");
const sql = require("mssql");
require("dotenv").config();

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
app.get("/data/auth", async (req, res) => {
  try {
    // Connect to the database
    // await sql.connect(dbConfig);

    // Query the database
    // const result = await sql.query('SELECT * FROM YourTableName');

    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const data = {
      username: process.env.USER,
      password: process.env.PASSWORD,
    };

    //Send Auth request using Axios
    const response = await axios.post(
      "https://restful-booker.herokuapp.com/auth",
      data,
      headers
    );

    res.json({
      message: "Data successfully sent via Axios",
      data: response.data,
    });

    //Send the results as JSON
    // res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;
