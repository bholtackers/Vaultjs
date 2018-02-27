var codeContainer = document.getElementById('Entered-Code');
var ButtonDisabler = document.getElementsByClassName('Button')
var redLight = document.getElementById('Light-Red')
var greenLight = document.getElementById('Light-Green')
var outcome = document.getElementById('Outcome')
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
      if (codeLengthChecker === 3)
        {
          ButtonDisabler[DisableCounter].disabled = true;
          setTimeout(resetButton,6000)
        }
      else
        {
          ButtonDisabler[DisableCounter].disabled = false;
                    setTimeout(resetButton,6000)
        }
    }
  if (codeContainer.innerHTML === CorrectCode)
    {
      outcome.classList.add("fade-in");
      outcome.innerHTML = "THE CODE IS CORRECT"
      greenLight.classList.add("blinkG");
      CorrectTimes++;
      greenLight.innerHTML = "CORRECT: " + CorrectTimes.toString() + " TIMES"
      var audio = new Audio('snd/Open.mp3');
      audio.play();
      setTimeout(reset, 6000)
    }
  else if ((codeContainer.innerHTML != CorrectCode) && (codeLengthChecker === 3) )
    {
      outcome.classList.add("fade-in");
      outcome.innerHTML = "THE CODE IS INCORRECT"
      redLight.classList.add("blinkR");
      IncorrectTimes++;
      redLight.innerHTML = "INCORRECT: " + IncorrectTimes.toString() + " TIMES"
      var audio = new Audio('snd/Close.mp3');
      audio.play();
      setTimeout(reset, 6000)
    }
}

function reset()
  {
    DisableCounter = 0;
    greenLight.classList.remove("blinkG");
    redLight.classList.remove("blinkR");
    codeContainer.innerHTML = "";
    outcome.innerHTML = "";
    outcome.classList.remove("fade-in");
  }

function resetButton()
  {
    DisableCounter = 0
    for(counterEnable=0; counterEnable < ButtonDisabler.length; counterEnable++) {

        ButtonDisabler[counterEnable].disabled = false;
      }
  }
