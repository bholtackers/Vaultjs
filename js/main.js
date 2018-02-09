var codeContainer = document.getElementById('Entered-Code');
var ButtonDisabler = document.getElementsByClassName('Button')
var redLight = document.getElementById('Light-Red')
var greenLight = document.getElementById('Light-Green')
var CorrectCode = "123";
var CorrectTimes = 0;
var IncorrectTimes = 0;

function getNumber(button)
{
  codeContainer.innerHTML += button.value;
  var codeLengthChecker = codeContainer.innerHTML.length;
  var DisableCounter = 0;
  for (DisableCounter = 0; DisableCounter < ButtonDisabler.length; DisableCounter++)
    {
      if (codeLengthChecker == 3)
        {
          ButtonDisabler[DisableCounter].disabled = true;
          setTimeout(resetButton,10000)
        }
      else
        {
          ButtonDisabler[DisableCounter].disabled = false;
        }
    }
  if (codeContainer.innerHTML == CorrectCode)
    {
      document.getElementById('Outcome').innerHTML = "THE CODE IS CORRECT"
      CorrectTimes++;
      greenLight.innerHTML = "CORRECT: " + CorrectTimes.toString() + " TIMES"
      var audio = new Audio('snd/Open.mp3');
      audio.play();
      setTimeout(reset, 10000)
    }
else if ((codeContainer.innerHTML != CorrectCode) && (codeLengthChecker == 3) )
    {
      document.getElementById('Outcome').innerHTML = "THE CODE IS INCORRECT"
      IncorrectTimes++;
      redLight.innerHTML = "INCORRECT: " + IncorrectTimes.toString() + " TIMES"
      var audio = new Audio('snd/Close.mp3');
      audio.play();
      setTimeout(reset, 10000)
    }
}

function reset(){
  DisableCounter = 0;
  codeContainer.innerHTML = "";
  document.getElementById('Outcome').innerHTML = "";
}

function resetButton(){
  DisableCounter = 0;
  ButtonDisabler[DisableCounter].disabled = false;
}

//Blinker kleuren: "rgb(199, 19, 0)" en "rgb(0, 199,19)"
