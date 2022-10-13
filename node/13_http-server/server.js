"use strict";
exports.__esModule = true;
require("dotenv/config");
var app_1 = require("./app");
var port = process.env.PORT;
var name = "Marco";
console.log("Hello ".concat(name, "!"));
app_1["default"].listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
