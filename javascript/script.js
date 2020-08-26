var astronaut= document.getElementById("astronaut");
var left= astronaut.offsetLeft;
var tp=astronaut.offsetTop;
var moveLeft=true;
setInterval(function(){
    astronaut.style.left=left + "px";
    astronaut.style.top= tp + "px";
    left++;

    if(tp>(window.innerHeight)){
        moveLeft=false;
    }
    if(tp<=0){
        moveLeft=true;
    }

    if(moveLeft){
        tp++;
    }
    else{
        tp--;
    }

    if(left>window.innerWidth){
        left=0;
        i=Math.floor(Math.random()*3)+1;
        document.getElementById("bg").style.backgroundImage=`url(images/space${[i]}.jpg)`;

    }
})

