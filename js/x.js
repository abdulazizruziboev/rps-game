let score  = 0;
function selectWinner(u,c) {
    if(u==c) {
        return "Tie";
    } /*Durang tugadi*/ 
    else if (u=="tosh"&&c=="qaychi") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="qaychi"&&c=="tosh") {
        score=score-1/2;
        return "you lose";
    } /* tosh qaychi tugadi */
    else if (u=="qaychi"&&c=="qogoz") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="qogoz"&&c=="qaychi") {
        score=score-1/2;
        return "you lose";
    } /* qogoz qaychi tugadi */
    else if (u=="qogoz"&&c=="tosh") {
        score=score+1/2;
        return "you win";
    }
    else if (u=="tosh"&&c=="qogoz") {
        score=score-1/2;
        return "you lose";
    } /* tosh qogoz tugadi */
};
console
.log(
selectWinner("qogoz","qaychi")
)