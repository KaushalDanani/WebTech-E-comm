const mongoose = require("mongoose");

mongoose.
    connect("mongodb://127.0.0.1:27017/webtech-ecomm")
    .then(() => {
        console.log("Mongo connection successful !!");
    })
    .catch((err) => {
        console.log("Mongo connection unsuccessful !!");
        console.log(err);
    });