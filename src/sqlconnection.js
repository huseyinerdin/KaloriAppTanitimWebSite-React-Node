const sql = require("mssql/msnodesqlv8");
var fs = require("fs");

const config = {
  database: "KaloriTakip",
  server: ".",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

sql.connect(config, function (err) {
  err && console.log(err);
  var request = new sql.Request();

  request.query("select Id, ProductName, UnitCalorie, Image from Product order by ProductName", function (err, result) {
    err
      ? console.log(err)
      : fs.writeFile("./yemekler.json", JSON.stringify(result.recordset), (err) => {
          console.log(err);
        });
  });
});
