const elLoader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
    elLoader.classList.add("transform-[translateY(-100%)]");
    },2000)
    setTimeout(()=>{
    elLoader.classList.remove("flex");
    elLoader.classList.add("hidden");
    },2500)
});

document.addEventListener("load",()=>{
    setTimeout(()=>{
    elLoader.classList.add("transform-[translateY(-100%)]");
    },2000)
    setTimeout(()=>{
    elLoader.classList.remove("flex");
    elLoader.classList.add("hidden");
    },2500)
});

let elScoreTxt = document.getElementById("scoreTxt");
const elSelectBtnsBasic = document.querySelectorAll(".selectBtnsBasic");
const elSelectBtnsAdvanced = document.querySelectorAll(".selectBtnsAdvanced");
const elGameBoxBasic = document.getElementById("gameBoxBasic");
const elGameBoxAdvanced = document.getElementById("gameBoxAdvanced");
const elResultBox = document.getElementById("resultBox");
let elResultTxt = document.getElementById("resultTxt");
const elUserSelectImg = document.getElementById("userSelectImg");
const elComputerSelectImg = document.getElementById("computerSelectImg");
const elAgainPlay = document.getElementById("againPlay");
const elRestartBox = document.getElementById("restartBox");
const elRulesModalOpenBtn = document.getElementById("rulesModalOpenBtn");
const elRulesModalCloseBtn = document.getElementById("rulesModalCloseBtn");
const elRulesModal = document.getElementById("rulesModal");
const elRulesImg = document.getElementById("rulesImg");
const elGameModeChanger = document.getElementById("gameModeChanger")

let gameMode = "basic";

elGameModeChanger.addEventListener("click",()=>{
    if(gameMode=="basic") {
        gameMode = "advanced";
        elResultBox.classList.remove("flex");
        elResultBox.classList.add("hidden");
        elGameBoxBasic.classList.remove("flex");
        elGameBoxAdvanced.classList.remove("hidden");
        elGameBoxBasic.classList.add("hidden");
        elGameBoxAdvanced.classList.add("flex");
        elRulesImg.src = "/imgs/rule-advanced.svg";
        gameModeAdvanced();
    } else if(gameMode=="advanced") {
        gameMode = "basic";
        elResultBox.classList.remove("flex");
        elResultBox.classList.add("hidden");
        elGameBoxBasic.classList.remove("hidden");
        elGameBoxAdvanced.classList.remove("flex");
        elGameBoxBasic.classList.add("flex");
        elGameBoxAdvanced.classList.add("hidden");
        elRulesImg.src = "/imgs/rule-basic.svg";
        gameModeBasic();
    }
})

elSelectBtnsAdvanced.forEach((elBtns)=>{
    elBtns.addEventListener("click",gameModeBasic())
});

function gameModeBasic() {
let score = 0;
elScoreTxt.textContent=score;
let handsArr = [];
elSelectBtnsBasic.forEach((elBtn)=>{
    handsArr.push(elBtn.alt);
});

function computerChoose() {
    let randomIndex = Math.trunc(Math.random()*handsArr.length);
    return handsArr[randomIndex];
}

elSelectBtnsBasic.forEach((elBtn)=>{
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
        elGameBoxBasic.classList.remove("flex");
        elGameBoxBasic.classList.add("hidden");
        elGameBoxAdvanced.classList.remove("flex");
        elGameBoxAdvanced.classList.add("hidden");
        elResultBox.classList.remove("hidden");
        elResultBox.classList.add("flex");
    } else {
        elGameBoxAdvanced.classList.remove("flex");
        elGameBoxAdvanced.classList.add("hidden");
        elGameBoxBasic.classList.add("flex");
        elGameBoxBasic.classList.remove("hidden");
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
    } /*Durang tugadi*/ 
    else if (u=="rock"&&c=="scissors") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="scissors"&&c=="rock") {
        score=score-1/2;
        return "you lose";
    } /* tosh qaychi tugadi */
    else if (u=="scissors"&&c=="paper") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="paper"&&c=="scissors") {
        score=score-1/2;
        return "you lose";
    } /* qogoz qaychi tugadi */
    else if (u=="paper"&&c=="rock") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="rock"&&c=="paper") {
        score=score-1/2;
        return "you lose";
    } /* tosh qogoz tugadi */
};
};
//////////////////////////////////////////////////
function gameModeAdvanced() {
let score = 0;
elScoreTxt.textContent=score;
let handsArr = [];
elSelectBtnsAdvanced.forEach((elBtn)=>{
    handsArr.push(elBtn.alt);
});

function computerChoose() {
    let randomIndex = Math.trunc(Math.random()*handsArr.length);
    return handsArr[randomIndex];
}

elSelectBtnsAdvanced.forEach((elBtn)=>{
    elBtn.addEventListener("click",computerChoose);
    elBtn.addEventListener("click",(evt)=>{
        let elStatus = "";
        let elUserSelectHand="";
        let elComputerSelectHand=computerChoose();
        elUserSelectHand += evt.target.alt;
        switchBox2(true);
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

function switchBox2(boolean) {
    if(boolean==true) {
        elGameBoxBasic.classList.remove("flex");
        elGameBoxBasic.classList.add("hidden");
        elGameBoxAdvanced.classList.remove("flex");
        elGameBoxAdvanced.classList.add("hidden");
        elResultBox.classList.remove("hidden");
        elResultBox.classList.add("flex");
    } else {
        elGameBoxBasic.classList.remove("flex");
        elGameBoxBasic.classList.add("hidden");
        elGameBoxAdvanced.classList.add("flex");
        elGameBoxAdvanced.classList.remove("hidden");
        elResultBox.classList.add("hidden");
        elResultBox.classList.remove("flex");
    };
};

elAgainPlay.addEventListener("click",()=>{setTimeout(()=>{switchBox2(false)},400)});

// rock - tosh
// paper - qog'oz
// scissors - qaychi
// lizard - kaltakesak
// spock - ayri 

function selectWinner(u,c) {
    if(u==c) {
        return "Tie";
    } /*Durang tugadi*/ 
    else if (u=="rock"&&c=="scissors") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="scissors"&&c=="rock") {
        score=score-1/2;
        return "you lose";
    } /* tosh qaychi tugadi */
    else if (u=="scissors"&&c=="paper") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="paper"&&c=="scissors") {
        score=score-1/2;
        return "you lose";
    } /* qogoz qaychi tugadi */
    else if (u=="paper"&&c=="rock") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="rock"&&c=="paper") {
        score=score-1/2;
        return "you lose";
    } /* tosh qogoz tugadi */
        else if (u=="rock" && c=="lizard") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="lizard" && c=="rock") {
        score=score-1/2;
        return "you lose";
    }
    else if (u=="scissors" && c=="lizard") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="lizard" && c=="scissors") {
        score=score-1/2;
        return "you lose";
    }
    else if (u=="lizard" && c=="paper") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="paper" && c=="lizard") {
        score=score-1/2;
        return "you lose";
    }
    else if (u=="spock" && c=="lizard") {
        score=score-1/2;
        return "you lose";
    }
    else if (u=="lizard" && c=="spock") {
        score=score+1/2;
        return "you win";
    }
    /* lizard tugadi */
    else if (u=="spock" && c=="scissors") {
        score=score+1/2; return "you win";
    } 
    else if (u=="scissors" && c=="spock") {
        score=score-1/2;
        return "you lose";
    } 
    else if (u=="spock" && c=="rock") {
        score=score+1/2;
        return "you win";
    } 
    else if (u=="rock" && c=="spock") {
        score=score-1/2;
        return "you lose";
    } 
    else if (u=="paper" && c=="spock") {
        score=score+1/2;
        return "you win";
    } 
    else if (u=="spock" && c=="paper") {
        score=score-1/2;
        return "you lose";
    };
    /* spock tugadi */
};
};



elRulesModalOpenBtn.addEventListener("click",()=>{
    elRulesModal.classList.remove("hidden");
    elRulesModal.classList.add("flex");
});

elRulesModalCloseBtn.addEventListener("click",()=>{
    elRulesModal.classList.remove("flex");
    elRulesModal.classList.add("hidden");
});
