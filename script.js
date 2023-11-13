console.log("hi javascript");
var clutter = "";
var timer = 3;
var increaseScore = 0;
for ( var i=0; i <= 167; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="hitBall"> ${rn}</div>`;
    console.log("for loog rnning");
    
}
document.querySelector("#pball").innerHTML= clutter;


function increaseTime() {
let runingTime = setInterval(() => {
    if(timer!= -1){
    document.querySelector("#time").textContent=timer;
    timer --;
    } else{
        clearInterval(runingTime);
    }
       
    }, 1000);
   
}
function score () {

    increaseScore += 5;
    document.querySelector("#score").textContent = increaseScore;
}
score();
increaseTime();
score();
score();
score();