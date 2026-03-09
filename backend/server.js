const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "../.env" })

const promptRoutes = require("./routes/prompt");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ResponseRally Backend Running");
});

app.use("/api", promptRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
