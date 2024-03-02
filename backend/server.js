if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

require("./config/database");
// const PORT = process.env.PORT;
const PORT = 4041;

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
require("./models/product");

app.use(cors());
app.use(require("./routes/product"));

app.listen(PORT, () => {
  console.log("Server Running On PORT:" + PORT);
});
