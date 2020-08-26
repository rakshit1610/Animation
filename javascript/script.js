var astronaut= document.getElementById("astronaut");
var ptr=0;
var left= astronaut.offsetLeft;
var tp=astronaut.offsetTop;
var moveLeft=true;
setInterval(function(){
    astronaut.style.left=left + "px";
    astronaut.style.top= tp + "px";
    left++;

    if(tp>(window.innerHeight)){
        ptr+=0.25;
        astronaut.style.transform= `rotate(${ptr}deg)`;
        moveLeft=false;
    }
    if(tp<=0){
        ptr+=0.5;
        astronaut.style.transform= `rotate(${ptr}deg)`;
        moveLeft=true;
    }

    if(moveLeft){
        ptr+=0.5;
        astronaut.style.transform= `rotate(${ptr}deg)`;
        tp++;
    }
    else{
        ptr+=0.5;
        astronaut.style.transform= `rotate(${ptr}deg)`;
        tp--;
    }

    if(left>window.innerWidth){
        ptr+=0.5;
        astronaut.style.transform= `rotate(${ptr}deg)`;
        left=0;
        i=Math.floor(Math.random()*3)+1;
        document.getElementById("bg").style.backgroundImage=`url(images/space${[i]}.jpg)`;

    }
})

