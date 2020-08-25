function animation() {
  var elem = document.getElementById("astronaut");   
  var pos = 0;

  var id = setInterval(frame, 35);
  function frame() {
    if (pos == 100) { 
      pos=0;  //as soon as the astronaut reaches at the end of the screen, position becomes zero again
      // clearInterval(id);
      // clearinterval function stops the animation.
      // Since, we want to keep this animation going forever, we won't use it.
    } else {
      pos++; 
      elem.style.top = pos + "vh"; 
      elem.style.left = pos + "vw"; 
      // this will make the astronaut move towards bottom-right by 1 vh and vw respectively
    }
  }
}


  animation();


