const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require("path");

// require db & models & routes
const db = require("./config/mongoose-connection");
const indexRouter = require("./routes/index");

// views and public folder middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// parse req.body data
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(cookieParser());

// routes
app.use("/", indexRouter);

// server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}...`);
});