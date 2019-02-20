// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/chrome-icon.png') {
    myImage.setAttribute('src', 'images/chrome-icon.png');
  } else {
    myImage.setAttribute('src', 'images/chrome-icon.png');
  }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte gib deinen namen ein.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'CHROME is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Chrome ist Cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}