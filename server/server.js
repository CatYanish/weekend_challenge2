var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var path = require("path");
var response;


// var productRouter = require('./calcRouter/calc.js');
// app.use('/product', productRouter);
// //app use takes /PRODUCT ALL REQUESTS and SEND IT TO ROUTER!
//


app.post('/calculate', function(req, res){
  var type = req.body.type;
  var x = parseInt(req.body.x);
  var y = parseInt(req.body.y);
  switch(type) {
    case "add":
      answer = x + y;
      response = answer.toString();
      res.send(response);
      break;
    case "subtract":
      answer = x - y;
      response = answer.toString();
      res.send(response);
      break;
    case "multiply":
      answer = x * y;
      response = answer.toString();
      res.send(response);
      break;
    case "divide":
      answer = x / y;
      response = answer.toString();
      res.send(response);
      break;
  } //end of switch statement
});




app.get("/*", function(req, res) {
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public", file));
}); //end of appget function

app.listen(5000, function() {
  console.log('Listening on port 5000');
});
