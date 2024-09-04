const express = require("express");
const sql = require("mssql");
require("dotenv").config();
const path = require("path");
const webPath = path.join(__dirname, "../Web");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // Use EJS as the template engine
app.use(express.static(webPath));

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
    trustServerCertificate: true,
    trustedConnection: true,
    connectTimeout: 30000,
  },
};
app.get("/main", async function (req, res) {
  try {
    res.sendFile(path.join(webPath, "MainPage", "index.html"));
  } catch (err) {
    console.error("Server Error", err);
    res.status(500).send("Server Error");
  }
});

app.post("/main", (req, res) => {
  console.log("POST /main route hit");

  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      await sql.connect(dbConfig);
      console.log("Connected to the database!");
      const request = new sql.Request();
      request.output("FirstName", sql.VarChar(225));
      request.output("Message", sql.VarChar(255));
      const result = await request.execute("login");
      console.log("SQL Query Result:", result);

      const FirstName = result.output.FirstName;
      const message = result.output.Message;
      console.log("Login Message:", message);
      console.log("Login BackupUID:", FirstName);
      // Send response based on the result
      if (FirstName) {
        res.status(200).json({ success: true, FirstName: FirstName });
      } else {
        res.status(400).json({ success: false, message });
      }
    } catch (err) {
      console.error("SQL error:", err);
      // Send error response as JSON
      res.status(500).json({ error: "Server Error" });
    }
  });
});
