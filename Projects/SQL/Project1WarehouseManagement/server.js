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

// Route to get data query1
app.get("/data/query1", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });

    // Query(Stored Procedure) the database
    let code = 1002; //parameter for stored procedure (for all item "code = null",for specific item "code=1002" or actual item code)
    const result = await sql.query(`EXEC GetItemsByCode @VarCode = ${code}`);
    //
    //used w3school+stack overflow +GPT(for small fix)
    if (result.recordset.length > 0) {
      // Convert data to HTML table
      const tableHTML = createHTMLTable(result.recordset);
      res.send(
        `<html><head><title>Data</title></head><body>${tableHTML}</body></html>`
      );
    } else {
      res.send(
        "<html><head><title>Data</title></head><body><p>No data found.</p></body></html>"
      );
    }

    // Send the results as JSON
    //res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Route to get data query2
app.get("/data/query2", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });
    let result = null;
    // Query(Stored Procedure) the database
    let SortBy = 1; // 1=Status, 2=Date, 3=OrderNo
    let Status = "closed"; // Status to filter by
    let Date1 = "2024-08-01"; // Start date for filtering by date range as a string
    let Date2 = "2024-08-03"; // End date for filtering by date range as a string
    let OrderNo = 101; // OrderNo for filtering by specific order
    // Connect to the SQL Server and execute the query with parameters
    try {
      await sql.connect(dbConfig);

      const request = new sql.Request();
      // Adding input parameters (gpt fix)
      request.input("VarSortBy", sql.Int, SortBy);
      request.input("VarStatus", sql.VarChar(255), Status);
      request.input("VarDate1", sql.Date, Date1);
      request.input("VarDate2", sql.Date, Date2);
      request.input("VarOrderNo", sql.Int, OrderNo);

      // Executing the stored procedure with parameters
      result = await request.query(`
    EXEC GetOrdersWithSorting 
    @VarSortBy = @VarSortBy, 
    @VarStatus = @VarStatus,  
    @VarDate1 = @VarDate1,    
    @VarDate2 = @VarDate2,    
    @VarOrderNo = @VarOrderNo;
  `);

      // Log the result (for debugging purposes)
      console.log(result.recordset); // Output the results

      // Assuming you want to return the result in the response
      //res.json(result.recordset); // Send the result to the client
    } catch (err) {
      console.error("SQL error", err);
      res.status(500).send("Server Error"); // Return a server error response
    }

    //used w3school+stack overflow +GPT(for small fix)
    if (result.recordset.length > 0) {
      // Convert data to HTML table
      const tableHTML = createHTMLTable(result.recordset);
      res.send(
        `<html><head><title>Data</title></head><body>${tableHTML}</body></html>`
      );
    } else {
      res.send(
        "<html><head><title>Data</title></head><body><p>No data found.</p></body></html>"
      );
    }

    // Send the results as JSON
    //res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Route to get data query3
app.get("/data/query3", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });
    let result = null;
    // Query(Stored Procedure) the database
    let CustID = 1;
    // Connect to the SQL Server and execute the query with parameters
    try {
      await sql.connect(dbConfig);

      const request = new sql.Request();
      // Adding input parameters (gpt fix)
      request.input("VarCustID", sql.Int, CustID);

      // Executing the stored procedure with parameters
      result = await request.query(`
    EXEC GetCustomerSubscriptions
    @VarCustID = @VarCustID
  `);

      // Log the result (for debugging purposes)
      console.log(result.recordset); // Output the results

      // Assuming you want to return the result in the response
      //res.json(result.recordset); // Send the result to the client
    } catch (err) {
      console.error("SQL error", err);
      res.status(500).send("Server Error"); // Return a server error response
    }

    //used w3school+stack overflow +GPT(for small fix)
    if (result.recordset.length > 0) {
      // Convert data to HTML table
      const tableHTML = createHTMLTable(result.recordset);
      res.send(
        `<html><head><title>Data</title></head><body>${tableHTML}</body></html>`
      );
    } else {
      res.send(
        "<html><head><title>Data</title></head><body><p>No data found.</p></body></html>"
      );
    }

    // Send the results as JSON
    //res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});
// Route to get data query3
app.get("/data/query4", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });
    let result = null;
    // Query(Stored Procedure) the database
    let StartDate = "2024-08-22";
    // Connect to the SQL Server and execute the query with parameters
    try {
      await sql.connect(dbConfig);

      const request = new sql.Request();
      // Adding input parameters (gpt fix)
      request.input("VarDateStart", sql.Date, StartDate);

      // Executing the stored procedure with parameters
      result = await request.query(`
    EXEC GetCreditandDebitByDate
    @VarDateStart = @VarDateStart
  `);

      // Log the result (for debugging purposes)
      console.log(result.recordset); // Output the results

      // Assuming you want to return the result in the response
      //res.json(result.recordset); // Send the result to the client
    } catch (err) {
      console.error("SQL error", err);
      res.status(500).send("Server Error"); // Return a server error response
    }

    //used w3school+stack overflow +GPT(for small fix)
    if (result.recordset.length > 0) {
      // Convert data to HTML table
      const tableHTML = createHTMLTable(result.recordset);
      res.send(
        `<html><head><title>Data</title></head><body>${tableHTML}</body></html>`
      );
    } else {
      res.send(
        "<html><head><title>Data</title></head><body><p>No data found.</p></body></html>"
      );
    }

    // Send the results as JSON
    //res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Route to get data query3
app.get("/data/query5", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });
    let result = null;
    // Query(Stored Procedure) the database
    // Connect to the SQL Server and execute the query with parameters
    try {
      await sql.connect(dbConfig);

      const request = new sql.Request();
      // Adding input parameters (gpt fix)

      // Executing the stored procedure with parameters
      result = await request.query(`
    EXEC GetAllExOrderUnclamedAndUnsent
  `);

      // Log the result (for debugging purposes)
      console.log(result.recordset); // Output the results

      // Assuming you want to return the result in the response
      //res.json(result.recordset); // Send the result to the client
    } catch (err) {
      console.error("SQL error", err);
      res.status(500).send("Server Error"); // Return a server error response
    }

    //used w3school+stack overflow +GPT(for small fix)
    if (result.recordset.length > 0) {
      // Convert data to HTML table
      const tableHTML = createHTMLTable(result.recordset);
      res.send(
        `<html><head><title>Data</title></head><body>${tableHTML}</body></html>`
      );
    } else {
      res.send(
        "<html><head><title>Data</title></head><body><p>No data found.</p></body></html>"
      );
    }

    // Send the results as JSON
    //res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});
// Route to get data query6
app.get("/data/query6", async (req, res) => {
  try {
    sql
      .connect(dbConfig)
      .then(() => {
        console.log("Connected successfully!");
      })
      .catch((err) => {
        console.error("Connection failed:", err);
      });
    let result = null;
    // Query(Stored Procedure) the database
    // Connect to the SQL Server and execute the query with parameters
    try {
      await sql.connect(dbConfig);

      const request = new sql.Request();
      // Adding input parameters (gpt fix)

      // Executing the stored procedure with parameters
      result = await request.query(`
    EXEC GetAllExOrderUnclamedAndUnsent
  `);

      // Log the result (for debugging purposes)
      console.log(result.recordset); // Output the results

      // Assuming you want to return the result in the response
      //res.json(result.recordset); // Send the result to the client
    } catch (err) {
      console.error("SQL error", err);
      res.status(500).send("Server Error"); // Return a server error response
    }

    //used w3school+stack overflow +GPT(for small fix)
    if (result.recordset.length > 0) {
      // Convert data to HTML table
      const tableHTML = createHTMLTable(result.recordset);
      res.send(
        `<html><head><title>Data</title></head><body>${tableHTML}</body></html>`
      );
    } else {
      res.send(
        "<html><head><title>Data</title></head><body><p>No data found.</p></body></html>"
      );
    }

    // Send the results as JSON
    //res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//used w3school+stack overflow
function createHTMLTable(data) {
  let html = '<table border="1" style="width:100%; text-align:left;">'; // Start table and add styles for visibility
  html += "<tr>";
  // Add table headers
  if (data.length > 0) {
    Object.keys(data[0]).forEach((colName) => {
      html += `<th>${colName}</th>`;
    });
    html += "</tr>";

    // Add table rows
    data.forEach((row) => {
      html += "<tr>";
      Object.values(row).forEach((val) => {
        html += `<td>${val}</td>`;
      });
      html += "</tr>";
    });
  } else {
    html += '<tr><td colspan="100%">No data available</td></tr>';
  }
  html += "</table>";
  return html;
}
