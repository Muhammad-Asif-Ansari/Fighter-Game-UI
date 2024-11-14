// Game movement logic
var forward1 = 0, forward2 = 0;

function abc(event) {
console.log(event.keyCode);

var character = document.getElementById("character");
var characterWidth = character.offsetWidth;
var screenWidth = window.innerWidth;

if (event.keyCode === 65) { // 'A' key: Move right
  if (forward1 + characterWidth + 10 <= screenWidth) { // Check if within right boundary
    forward1 += 10;
    character.style.left = forward1 + "px";
  }
}
if (event.keyCode === 66) { // 'B' key: Move left
  if (forward1 - 10 >= 0) { // Check if within left boundary
    forward1 -= 10;
    character.style.left = forward1 + "px";
  }
}
if (event.keyCode === 67) { // 'C' key: Snap action
  character.style.width = "300px";
  character.style.height = "500px";
  character.src = "./Images/chris-snap.gif";
}
if (event.keyCode === 68) { // 'D' key: Stance action
  character.style.width = "300px";
  character.style.height = "500px";
  character.src = "./Images/orochi-chris-kof97-stance.gif";
}
}
window.onkeyup = abc;

function xyz(event) {
console.log(event.keyCode);

var character1 = document.getElementById("character1");
var character1Width = character1.offsetWidth;
var screenWidth = window.innerWidth;

if (event.keyCode === 69) { // 'E' key: Move right
  if (forward2 + character1Width + 10 <= screenWidth) { // Check if within right boundary
    forward2 += 10;
    character1.style.right = forward2 + "px";
  }
}
if (event.keyCode === 70) { // 'F' key: Move left
  if (forward2 - 10 >= 0) { // Check if within left boundary
    forward2 -= 10;
    character1.style.right = forward2 + "px";
  }
}
if (event.keyCode === 71) { // 'G' key: Snap action
  character1.style.width = "300px";
  character1.style.height = "600px";
  character1.src = "./Images/chris-snap.gif";
}
if (event.keyCode === 72) { // 'H' key: Stance action
  character1.style.width = "300px";
  character1.style.height = "500px";
  character1.src = "./Images/orochi-chris-kof2002-stance.gif";
}
}

window.onkeydown = xyz;