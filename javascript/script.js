var astronaut= document.getElementById("astronaut");
var ptr=0;                       //Rotating pointer. Helps to rotate the astronaut
var left= astronaut.offsetLeft;  //can also write var left= 0;
var tp=astronaut.offsetTop;      //can also write var tp= 0; 
var moveLeft=true;
setInterval(function(){
    astronaut.style.left=left + "px";
    astronaut.style.top= tp + "px";
    left++;

    if(tp>window.innerHeight){
        ptr+=0.5;   
        astronaut.style.transform= `rotate(${ptr}deg)`;     //rotated astronaut by 0.5deg
        moveLeft=false;
    }
    if(tp<=0){                  //in absence of this condition, the astronaut will move linearly towards left
        ptr+=0.5;
        astronaut.style.transform= `rotate(${ptr}deg)`;     //rotated astronaut by 0.5deg
        moveLeft=true;
    }

    if(moveLeft){
        ptr+=0.5;
        astronaut.style.transform= `rotate(${ptr}deg)`;     //rotated astronaut by 0.5deg
        tp++;
    }
    else{
        ptr+=0.5;
        astronaut.style.transform= `rotate(${ptr}deg)`;     //rotated astronaut by 0.5deg
        tp--;
    }

    if(left>window.innerWidth){
        ptr+=0.5;
        astronaut.style.transform= `rotate(${ptr}deg)`;     //rotated astronaut by 0.5deg
        left=0;
        i=Math.floor(Math.random()*3)+1;                    //generates a random number between 1 to 3
        document.getElementById("bg").style.backgroundImage=`url(images/space${[i]}.jpg)`; //changes background after each cycle

    }
},7);

