const express = require('express');
const mongoose = require("mongoose");
const messsageRoutes = require("./routes/messages");

require("dotenv").config();

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
//routes
app.get('/', (req, res) => {
    res.send("Welcome to MyMessages API");
});

//middleware
app.use(express.json());
app.use('/api', messsageRoutes);

//mongodb

mongoose.connect(
    process.env.MONGODB_URI)
    .then(() => console.log("connected to MONGODB ATLAS"))
    .catch((error) => console.error(error));

app.listen(process.env.PORT, () => console.log('server listening on', process.env.PORT));