let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#user");
let computer = document.querySelector("#computer");

let genComChoice = ()=>{
    const option = ["rock","paper","scissor"];
    let compChoice = Math.floor(Math.random() * 3);
    return option[compChoice];
}
let showWinner = (userWin,compChoice,userChoice)=>{
    if (userWin){
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        console.log("user win");
    }else{
        compScore++;
        computer.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        console.log("user lose");
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        //user choice
        let userChoice = choice.getAttribute("id");

        //generate computer choice
        let compChoice = genComChoice();
        console.log(userChoice+" "+compChoice);

        //checking draw
        if (userChoice === compChoice){
            console.log("draw");
            msg.innerText = "Game was Draw!";
        }else{
            let userWin = true;
            if (userChoice === "rock"){
                //comp choice=> paper,scissor
                userWin = compChoice === "paper" ? false:true;
            }else if(userChoice === "paper"){
                // rock,scissor
                userWin = compChoice === "rock" ? true:false;
            }else{
                // rock,paper
                userWin = compChoice === "rock" ? false:true;
            }
            showWinner(userWin,compChoice,userChoice);
        }
    });
});