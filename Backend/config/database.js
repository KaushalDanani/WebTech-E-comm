const mongoose = require("mongoose");

mongoose.
    connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongo connection successful !!");
    })
    .catch((err) => {
        console.log("Mongo connection unsuccessful !!");
        console.log(err);
    });