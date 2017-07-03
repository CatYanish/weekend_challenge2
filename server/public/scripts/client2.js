var xvalue;
var yvalue;
var operator = null;

$(document).ready(function () {
  numberClickEvents();
  submitPost();
  operatorClick();
  resetButton();
}); //end of doc ready

//math operator click
function operatorClick() {
  $(".operator-button").on('click', function() {
    $('#display-window').empty();
    operator = $(this).attr('id');
  });//end of on click
}//end of operatorClick function


//if operator button hasn't been clicked, input concatanates to x
//after operator button click, input concats to y value.
function numberClickEvents() {
  $(".number-button").on('click', function() {
    if(operator == null) {
      $('#display-window').append($(this).attr('id'));
      xvalue = $('#display-window').text();
    } else {
      $('#display-window').append($(this).attr('id'));
       yvalue = $('#display-window').text();
    }
  }); //end of click function
} //end of numberClickEvents function


//submit button posts x and y values and operator type to server
function submitPost() {
  $('#submit').on('click', function() {
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: { x: xvalue, //x: the value of first input
              y: yvalue, //y: value of second input
              type: operator},
      //response is set to delay 3 seconds with setTimeout function
      success: function(response) {
        $('#display-window').text('Computing...');
        setTimeout(function(){
          $('#display-window').text(response);
        }, 3000); //end of setTimeout function
      } //success function
    }); //AJAX post function.
  }); //on click function
}//end of submitPost


//reset button clears display and resets x and y to zero
function resetButton() {
  $("#reset").on('click', function () {
    xvalue = 0;
    yvalue = 0;
    operator = null;
    $('#display-window').empty();
  });
} //reset on click function
