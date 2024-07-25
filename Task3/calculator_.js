var display = document.querySelector('.display');

var buttons = document.querySelectorAll('.number');

var currentValue = '0';

var operator = null;

var previousValue = null;

buttons.forEach(function (button) {

button.addEventListener('click', function () {

var value = button.dataset.value;

if (value === 'AC') {

  currentValue = '0';

  operator = null;

  previousValue = null;
}
else if (value === '+/-') {

  currentValue = (parseFloat(currentValue) * -1).toString();
}
else if (value === '%') {

  currentValue = (parseFloat(currentValue) / 100).toString();
}
else if (['+', '-', '*', '/'].includes(value)) 
{

    calculate();

    operator= value; 

    previousValue=currentValue; 

    currentValue='0';

}
else if  (value==='='){

  calculate(); 
Copy
} 
else{

if(currentValue=='0'){ currentValue=value; }else{ currentValue +=value; } }

display.value=currentValue; });

})

function calculate() 
{

var current= parseFloat(currentValue);

var previous= parseFloat(previousValue);

var result;
}
switch(operand)
{ 
    case '+': result=previous+current; break;

case '-': result=previous-current; break;

case '*':

result=previous*current;
}