const express = require("express");
require('dotenv').config();
const app = express();
const RoutesExports = require('./routes/routes_export');

app.use(express.urlencoded({extended:false}));
app.use(express.json());


//ROUTES
new RoutesExports(app).callAllRoutes();

app.listen(process.env.PORT, function (e) {
    console.log("Server ligado em " + process.env.PORT);
});