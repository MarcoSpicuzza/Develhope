"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("express-async-errors");
var app = (0, express_1["default"])();
//route
app.get("/username", function (req, res) {
    res.json([{ nome: "Marco" }]);
});
exports["default"] = app;
