document.addEventListener("keydown",function(e){
    keypressHandler(e.key);
    buttonAnimation(e.key);
});

const btns=document.querySelectorAll(".drum");
for(const btn of btns){
    btn.addEventListener('click',function(){
        for(b of btns){
         b.style.color="red"; 
        }
        this.style.color="white";
        keypressHandler(this.innerHTML);
        buttonAnimation(this.innerHTML)
    });
}

function keypressHandler(value){
    switch(value){
        case 'w':new Audio('sounds/tom-1.mp3').play();break;
        case 'a':new Audio('sounds/tom-2.mp3').play();break;
        case 's':new Audio('sounds/tom-3.mp3').play();break;
        case 'd':new Audio('sounds/tom-4.mp3').play();break;
        case 'j':new Audio('sounds/crash.mp3').play();break;
        case 'k':new Audio('sounds/kick-bass.mp3').play();break;
        case 'l':new Audio('sounds/snare.mp3').play();break;
        default:new Audio('sounds/tom-1.mp3').play();break;
    }
}  


function buttonAnimation(currentKey){
 var activeButton=document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
 setTimeout(()=>{
    activeButton.classList.remove("pressed");
 },100);
}