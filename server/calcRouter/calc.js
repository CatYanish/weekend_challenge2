var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
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



module.exports = router;
