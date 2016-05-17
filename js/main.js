$(document).ready(function(){
  var buttons = $('span:not(.operator):not(#cancel)');
  var cancel = $('#cancel');
  var operators = $('.operator:not(#cancel)');
  var equals = $('#calc');
  var divide = $('#divide');
  var display = $('#screen');
  var input = '';
  var inputs = [];
  var count = 0;
  var displayText = '';

  cancel.click(function(){
    inputs = [];
    count = 0;
    displayText = '';
    display.text(displayText);
  });

  buttons.click(function(){
    inputs[count] = parseInt($(event.target).text());
    if(!$.isNumeric(inputs[count-1])){
      displayText = '';
    }
    displayText += inputs[count];
    display.text(displayText);
    count += 1;
  });

  operators.click(function(){
    inputs[count] = $(event.target).text();
    displayText = inputs[count];
    display.text(displayText);
    count += 1;
  });

  equals.click(function(){
    console.log(inputs);
    var num1;
    var total;
    op = '';
    for (var i = 0; i < inputs.length; i++) {
      if(!num1) {
        num1 = inputs[i];
      } else if(!isNaN(inputs[i]) && !isNaN(inputs[i-1])) {
        num1 = parseInt(inputs[i-1].toString() + inputs[i].toString());
      } else if(isNaN(inputs[i])) {
        op = inputs[i];
      } else {
        if (op == '+') {
          total = num1 + inputs[i];
          num1 = total;
          op = '';
        } else if (op == '-') {
          total = num1 - inputs[i];
          num1 = total;
          op = '';
        } else if ( op == '÷') {
          total = num1 / inputs[i];
          num1 = total;
          op = '';
        } else if (op == 'x') {
          total = num1 * inputs[i];
          num1 = total;
          op = '';
        }
      }
    }
    console.log(total);
    displayText = total;
    display.text(displayText);
  });

});

/*
On equals click:

1. read off clicks from array in order until reach end

2. return result of array of clicks
*/
