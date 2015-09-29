function getVideoWidth() {						//Non-jQuery jQuery-ish
    return document.getElementById("video").offsetWidth;
}
function getVideoHeight() {						//Non-jQuery jQuery-ish
    return document.getElementById("video").offsetHeight;
}
var buttonCounter = 0;
var fontSizeCounter = 20;

function addButton () { 
  var newA = document.createElement("a"); 
  var newContent = document.createTextNode("Leedle!");

  newA.id = "pinkPill" + buttonCounter;

  var currentDiv = document.getElementById("finder"); 
  document.body.insertBefore(newA, currentDiv); 

  var tempButton = document.getElementById("pinkPill" + buttonCounter);
  tempButton.className = "pinkPill";
  tempButton.innerHTML = "Leedle!";

  var randomWidth = Math.floor(Math.random() * (getVideoWidth())) + 100;
  var randomHeight = Math.floor(Math.random() * (getVideoHeight())) + 60;

  tempButton.style.top = randomHeight - 90 + "px";
  tempButton.style.left = randomWidth + "px";

  buttonCounter++;
}

function growButton(button){
	if(fontSizeCounter < 200){
		fontSizeCounter += 10;
		button.style.fontSize = fontSizeCounter + "px";
		button.style.marginLeft = -1 * button.offsetWidth/2 +"px";
	}
	else{
		fontSizeCounter -= 10;
		button.style.fontSize = fontSizeCounter + "px";
		button.style.marginLeft = -1 * button.offsetWidth/2 +"px";
	}
}

var greenButton = document.querySelector('.greenButton');
greenButton.onclick = function() {
	growButton(greenButton);
    addButton();
}