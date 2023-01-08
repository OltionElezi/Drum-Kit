



var j = document.querySelectorAll(".drum")//kapim te gjith butonat

for(var i = 0; i<j.length; i++){                               //for loop (consol all the button tek e tek behind the scene)
  j[i].addEventListener("click", function(){

    var btn = this.innerHTML // every input in string

    makeSound(btn);
    animation(btn);


  });
}

document.addEventListener("keydown",function(event){
 makeSound(event.key);
 animation(event.key);
});


function makeSound(key){
  switch (key) { // put the string in to the switch
    //all btn sound diferend with the switch methodd case
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()
    break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()
    break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()
    break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()
    break;
    case "j":
      var snare = new Audio("sounds/snare.mp3")
      snare.play()
    break;
    case "k":
      var crash = new Audio("sounds/crash.mp3")
      crash.play()
    break;
    case "l":
      var kickB = new Audio("sounds/kick-bass.mp3")
      kickB.play()
    break;
    default:
    console.log(btn)
  }
}


function animation(currentKey){
  var animationButton = document.querySelector("."+currentKey);
  animationButton.classList.add("pressed");
  setTimeout(function(){
    animationButton.classList.remove("pressed");
  },100)
}
