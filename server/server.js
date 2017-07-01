var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var path = require("path");
var response; //NOT SURE IF THIS GOES HERE

app.post('/calculate', function(req, res){
  var type = req.body.type;
  //the req.body function would do nothing without body parser.
  var x = parseInt(req.body.x);
  var y = parseInt(req.body.y);
  console.log(x);
  console.log(y);
  console.log(type);
  switch(type) {
    case "add":
      answer = x + y;
      console.log(answer);
      response = answer.toString();
      console.log(response);
      res.send(response);
      break;
    case "subtract":
      answer = x - y;
      response = answer.toString();
      console.log(response);
      res.send(response);
      break;
    case "multiply":
      answer = x * y;
      response = answer.toString();
      console.log(response);
      res.send(response);
      break;
    case "divide":
      answer = x / y;
      response = answer.toString();
      console.log(response);
      res.send(response);
      break;
  } //end of switch statement

  //here we add the information from the client request to our existing array.
   //not SURE IF SCOPING PROBLEMS
  //respond to the request with a success status message.
});




app.get("/*", function(req, res) {
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public", file));
}); //end of appget function

app.listen(5000, function() {
  console.log('Listening on port 5000');
});
