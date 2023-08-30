let timerVal = 60;
let newHit;
let score = 0;


function GetBubbles() {
    let addingCircle= "";
    for (let i = 1; i <= 126; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        addingCircle += `<div class="bubble">${randomNumber}</div>`    
    }
    document.querySelector(".bottom-panel").innerHTML = addingCircle; 
}

function GetTime() {
    setInterval(() => {
        if (timerVal > 0) {
            timerVal --;
            document.querySelector("#timerbox").textContent = timerVal;
        } else {
            clearInterval(timerVal);
            document.querySelector(".bottom-panel").innerHTML = `<h1>Game Over!</h1>`;
        }
    }, 1000);

}

function GetNewHit() {
    newHit = Math.floor(Math.random() * 10); 
    document.querySelector("#hitval").textContent = newHit;
}

function IncreaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function DecreaseScore() {
    score -= 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".bottom-panel").addEventListener('click', (element)=>{
    let clickNum = Number(element.target.textContent);
    if (newHit === clickNum) {
        IncreaseScore();
        GetBubbles();
        GetNewHit();
    } else {
        DecreaseScore();
        GetBubbles();
    }
})

GetBubbles();
GetTime();
GetNewHit();