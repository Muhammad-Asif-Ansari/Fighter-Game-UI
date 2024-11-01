// ------ game logics -----

var forward = 0;
function abc() {
  // console.log(event.key);
  console.log(event.keyCode);

  var character = document.getElementById("character");
  if(event.keyCode === 65){
    forward = forward + 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 66){
    forward = forward - 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 67){
    character.style.width = "300px"
    character.style.height = "450px"
    character.src = "./Images/chris-snap.gif"
    
  }
  if(event.keyCode === 68){
    character.style.width = "300px"
    character.style.height = "450px"
    character.src = "orochi-chris-kof2002-stance.gif"
    
  }
}
window.onkeyup = abc;

var forward = 0;
function xyz() {
  // console.log(event.key);
  console.log(event.keyCode);

  var character = document.getElementById("character1");
  if(event.keyCode === 69){
    forward = forward + 10;
    character.style.right = forward + "px"
  }
  if(event.keyCode === 70){
    forward = forward - 10;
    character.style.right = forward + "px"
  }
  if(event.keyCode === 71){
    character.style.width = "300px"
    character.style.height = "450px"
    character.src = "./Images/chris-snap.gif"
    
  }
  if(event.keyCode === 72){
    character.style.width = "300px"
    character.style.height = "450px"
    character.src = "orochi-chris-kof2002-stance.gif"
    
  }
}
window.onkeydown = xyz;