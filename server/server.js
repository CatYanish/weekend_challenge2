var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var path = require("path");


app.get("/*", function(req, res) {
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public", file));
}); //end of appget function

app.listen(5000, function() {
  console.log('Listening on port 5000');
});
