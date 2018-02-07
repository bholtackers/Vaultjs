var codeContainer = document.getElementById('Entered-Code');
var x = "312"
var codeInput = codeContainer.length;

function getNumber(button){
  codeContainer.innerHTML += button.value
  if (codeInput == 3) {
    alert("The number = 3");
  }
  else {
    alert("The number < 3")
  }
}
