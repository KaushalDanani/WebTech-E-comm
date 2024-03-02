if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

require("./config/database");
const PORT = process.env.PORT;

const express = require("express");
const app = express();

const cors = require("cors");
require("./models/product");

app.use(cors());
app.use(require("./routes/product"));

app.listen(PORT, () => {
  console.log("Server Running On PORT:" + PORT);
});
