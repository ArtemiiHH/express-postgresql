const express = require("express");
const app = express();
const path = require("node:path");
const router = require("./routes/userRoutes");

// Set EJS as view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Register body parser
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

// Server
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Express app listening on localhost:${PORT}`);
});
