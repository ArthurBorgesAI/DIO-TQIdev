var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
  currentNumber = currentNumber + 1;
  if (currentNumber => 0){
    currentNumberWrapper.style.color = 'green';
  }
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
  currentNumber = currentNumber - 1;
  if (currentNumber < 0){
    currentNumberWrapper.style.color = 'red';
  }
  currentNumberWrapper.innerHTML = currentNumber;
}
