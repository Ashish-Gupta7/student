const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose-DB-connection");

mongoose
    .connect(`${config.get("MONGODB_URI")}/student`)
    .then(() => {
        dbgr("connected with DB");
    })
    .catch((err) => {
        dbgr(err);
    });

const dbConnection = mongoose.connection;
module.exports = dbConnection;