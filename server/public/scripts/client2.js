var xvalue;
var yvalue;
var operator = null;
console.log('JS sourced');
$(document).ready(function () {
console.log('document ready');

$(".operator-button").on('click', function() {
  $('#display-window').empty();
  operator = $(this).attr('id');
  console.log(operator);
});//end of operator on click button function


$(".number-button").on('click', function() {
  if(operator == null) {
        $('#display-window').append($(this).attr('id'));
        xvalue = $('#display-window').text();
        console.log(xvalue);
  } else {
    $('#display-window').append($(this).attr('id'));
     yvalue = $('#display-window').text();
     console.log(yvalue);
  }
}); //end of click function



$('#submit').on('click', function() {
  console.log(xvalue);//this will send as a string
  console.log(yvalue);
//on click of Calculate button, ajax post this
  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: { x: xvalue, //x: the value of first input
            y: yvalue, //y: the value of second input
            type: operator}, //NOT SURE HOW SERVER WILL READ THIS....
            //it IS part of an object, so should be able to access that
            //on server and then call the appropriate function using a switch statement.
    success: function(response) {
      console.log('posted some data');
      $('#display-window').text('Computing...'); //changed from .answer
      //want to append the response to the DOM
      setTimeout(function(){
        $('#display-window').text(response);  //changed from .answer
      }, 3000);
      // $('.answer').append(response);
    }
  }); //end of AJAX post function.

}); //end of on click function

$("#reset").on('click', function () {
  $('#display-window').text('');
}); //end of reset on click function



}); //end of doc ready
