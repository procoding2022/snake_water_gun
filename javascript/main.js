let name=prompt("Your Name: ")
document.getElementById("yourname").innerHTML = name.toUpperCase();
let playerscore=0;
let computerscore=0;
const array=['S','W','G'];
let cc,round=0;
console.log(cc);
const snake=document.getElementById('snake');
const water=document.getElementById('water');
const gun=document.getElementById('gun');
const resetst=document.getElementById('reset')
function snakea(){
    randomgen();
    if(cc=='W'){
        playerscore+=1;
        document.getElementById("playerscore").innerHTML=playerscore;
    }
    else if(cc=='G'){
        computerscore+=1;
        document.getElementById("computerscore").innerHTML=computerscore;
    }
    else{
        playerscore+=1;
        document.getElementById("playerscore").innerHTML=playerscore;
        computerscore+=1;
        document.getElementById("computerscore").innerHTML=computerscore;
    }
    checkforwinner();
}
function watera(){
    randomgen();
    if(cc=='G'){
        playerscore+=1;
        document.getElementById("playerscore").innerHTML=playerscore;
    }
    else if(cc=='S'){
        computerscore+=1;
        document.getElementById("computerscore").innerHTML=computerscore;
    }
    else{
        playerscore+=1;
        document.getElementById("playerscore").innerHTML=playerscore;
        computerscore+=1;
        document.getElementById("computerscore").innerHTML=computerscore;
    }
    checkforwinner();
}
function guna(){
    randomgen();
    if(cc=='S'){
        playerscore+=1;
        document.getElementById("playerscore").innerHTML=playerscore;
    }
    else if(cc=='W'){
        computerscore+=1;
        document.getElementById("computerscore").innerHTML=computerscore;
    }
    else{
        playerscore+=1;
        document.getElementById("playerscore").innerHTML=playerscore;
        computerscore+=1;
        document.getElementById("computerscore").innerHTML=computerscore;
    }
    checkforwinner();
}
function checkforwinner(){
    if(round==5){
        if(playerscore>computerscore){
            alert(name+" Wins")
        }
        else if(computerscore>playerscore){
            alert("Computer Wins")
        }
        else{
            alert("Match Drawn")
        }
        if(confirm("Reset Now?")){
            resetfun();
        }
    }
    
}
function randomgen(){
    cc=array[Math.floor(Math.random()*3)]
    round+=1
}
function resetfun(){
    name=prompt("Your Name: ")
    document.getElementById("yourname").innerHTML = name.toUpperCase();
    playerscore=0;
    computerscore=0;
    round=0;
    document.getElementById("playerscore").innerHTML="0";
    document.getElementById("computerscore").innerHTML="0";
}
snake.addEventListener('click',snakea);
water.addEventListener('click',watera);
gun.addEventListener('click',guna);
resetst.addEventListener('click',resetfun);