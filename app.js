const express = require("express");
const app = express();
const path = require("node:path");
const userRouter = require("./routes/userRoutes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", userRouter);

// Server
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Express app listening on localhost:${PORT}`);
});
