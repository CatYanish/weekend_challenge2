var x;
var y;
var operator;
console.log('JS sourced');
$(document).ready(function () {
console.log('document ready');

//need to set operator value when a operator button is clicked.
//too tired to think of efficient method for this.
$(".operator-button").on('click', function() {
  operator = $(this).attr('id');
  console.log(operator);
}); //end of on click for operator buttons



$('#submit').on('click', function() {
  console.log($('#x').val());//this will send as a string
  console.log($('#y').val());
//on click of Calculate button, ajax post this
  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: { x: $('#x').val(), //x: the value of first input
            y: $('#y').val(), //y: the value of second input
            type: operator}, //NOT SURE HOW SERVER WILL READ THIS....
            //it IS part of an object, so should be able to access that
            //on server and then call the appropriate function using a switch statement.
    success: function(response) {
      console.log('posted some data');
      //want to append the response to the DOM
      $('.answer').append(response);
    }
  }); //end of AJAX post function.

}); //end of on click function

$("#reset").on('click', function () {
  $('input').val('');
  $('.answer').empty();
}); //end of reset on click function



}); //end of doc ready
