"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clientRoutes_1 = require("./src/routes/clientRoutes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/clients", clientRoutes_1.default);
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
