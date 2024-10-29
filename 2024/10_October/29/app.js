const express = require("express");
const app = express();
const logger = require("./middleware/logger");

app.use(express.json());

app.use(logger);

const jokesRoutes = require("./routes/jokes");
const usersRoutes = require("./routes/users");

app.use("/api/jokes", jokesRoutes);
app.use("/api/users", usersRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = statusCode < 500 ? err.message : "Internal Server Error";
  res.status(statusCode).json({ error: message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
