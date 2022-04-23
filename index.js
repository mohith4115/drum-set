for(var i=0;i<7;i++)
{
    var x = document.querySelectorAll(".drum");
    x[i].addEventListener("click", hehesound);
    function hehesound() {   
        var letter = this.innerHTML;
        makeSound(letter);
        changeStyle(letter);

    }
}

document.addEventListener("keydown",fun);
     function fun(event)
    {
    makeSound(event.key) ;
    changeStyle(event.key);
    //here event is the name we given to the object which keydown returns when any key is pressed
    // and .key returns the key we pressed like attribute name
    }

 function makeSound(letter){
    switch(letter){
        case "w": 
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a": 
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "s": 
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d": 
        var tom4 = new Audio("sounds/tom-3.mp3");
        tom4.play();
        break;
        case "j": 
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case "k": 
        var kick1 = new Audio("sounds/kick-bass.mp3");
        kick1.play();
        break;
        case "l": 
        var snare =new Audio("sounds/snare.mp3");
        snare.play();
        break;

    }  
 }
 function changeStyle(keyvalue)
 {
    var pressedEle = document.querySelector("."+keyvalue);
    pressedEle.classList.add("pressed");
    setTimeout(removeClass,100,pressedEle);//100 milli seconds = 0.1 sec 
    // and pressedEle in settimeout is like sending argument to removeClass
 }

 function removeClass(pressedEle){
     pressedEle.classList.remove("pressed");
 }
