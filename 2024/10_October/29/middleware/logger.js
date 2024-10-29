const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  if (Object.keys(req.query).length) {
    console.log("Query Parameters:", req.query);
  }
  next();
};

module.exports = logger;
