var express = require("express");
var app = express();
var cp = require("child_process");

app.listen(5000, () => {
  console.log("Product loading...");
});

app.get("/kayitol", (request, response) => {
  cp.exec("C:\\Users\\erdin\\source\\repos\\CalorieApp\\WinFormUI\\bin\\Debug\\net6.0-windows\\WinFormUI.exe");
});