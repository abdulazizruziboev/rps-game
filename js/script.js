let elScoreTxt = document.getElementById("scoreTxt");
const elSelectBtns = document.querySelectorAll(".selectBtns");
const elGameBox = document.getElementById("gameBox");
const elResultBox = document.getElementById("resultBox");
let elResultTxt = document.getElementById("resultTxt");
const elUserSelectImg = document.getElementById("userSelectImg");
const elComputerSelectImg = document.getElementById("computerSelectImg");
const elAgainPlay = document.getElementById("againPlay");
const elRestartBox = document.getElementById("restartBox");
const elRulesModalOpenBtn = document.getElementById("rulesModalOpenBtn");
const elRulesModalCloseBtn = document.getElementById("rulesModalCloseBtn");
const elRulesModal = document.getElementById("rulesModal");

let score = 0;
let handsArr = [];

elSelectBtns.forEach((elBtn)=>{
    handsArr.push(elBtn.alt);
});

function computerChoose() {
    let randomIndex = Math.trunc(Math.random()*handsArr.length);
    return handsArr[randomIndex];
}

elSelectBtns.forEach((elBtn)=>{
    elBtn.addEventListener("click",computerChoose);
    elBtn.addEventListener("click",(evt)=>{
        let elStatus = "";
        let elUserSelectHand="";
        let elComputerSelectHand=computerChoose();
        elUserSelectHand += evt.target.alt;
        switchBox(true);
        elUserSelectImg.src=`/imgs/${elUserSelectHand}.svg`;
        elComputerSelectImg.src=`/imgs/hand-load.svg`
        setTimeout(() => {
            elComputerSelectImg.src=`/imgs/${elComputerSelectHand}.svg`;
        }, 1400);
        elRestartBox.classList.add("hidden")
        elRestartBox.classList.remove("flex");
        setTimeout(() => {
           selectWinner(elUserSelectHand,elComputerSelectHand);
           elStatus = (elStatus=selectWinner(elUserSelectHand,elComputerSelectHand));
           elResultTxt.textContent = elStatus;
           elScoreTxt.textContent = score;
           elRestartBox.classList.remove("hidden")
           elRestartBox.classList.add("flex");
        }, 2000);
    });
});

function switchBox(boolean) {
    if(boolean==true) {
        elGameBox.classList.remove("flex");
        elGameBox.classList.add("hidden");
        elResultBox.classList.remove("hidden");
        elResultBox.classList.add("flex");
    } else {
        elGameBox.classList.add("flex");
        elGameBox.classList.remove("hidden");
        elResultBox.classList.add("hidden");
        elResultBox.classList.remove("flex");
    };
};

elAgainPlay.addEventListener("click",()=>{setTimeout(()=>{switchBox(false)},400)});

// rock - tosh
// paper - qog'oz
// scissors - qaychi
function selectWinner(u,c) {
    if(u==c) {
        return "Tie";
    } else if (u=="rock"||c=="scissors") {
        score=score-1/2;
        return "Computer win";
    } else if (u=="scissors"||c=="rock") {
        score=score+1/2;
        return "User win";
    } else if (u=="scissors"||c=="paper") {
        score=score-1/2;
        return "Computer win";
    } else if (u=="paper"||c=="scissors") {
        score=score+1/2;
        return "User win";
    } else if (u=="rock"||c=="paper") {
        score=score-1/2;
        return "Computer win";
    } else if (u=="paper"||c=="rock") {
        score=score+1/2;
        return "User win";
    }
};

elRulesModalOpenBtn.addEventListener("click",()=>{
    elRulesModal.classList.remove("hidden");
    elRulesModal.classList.add("flex");
});

elRulesModalCloseBtn.addEventListener("click",()=>{
    elRulesModal.classList.remove("flex");
    elRulesModal.classList.add("hidden");
});