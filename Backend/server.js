if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const PORT = process.env.PORT;

const express = require("express");
const app = express();

const cors = require("cors");
require("./config/database");
require("./models/product");

app.listen(PORT,()=>{
    console.log("Server Running On PORT:"+PORT);
})