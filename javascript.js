let HumanScore=0, ComputerScore=0;

function getComputerChoice()
{

   const x=Math.floor(Math.random()*3);
   let result=0;

    if (x===0)
      result="Rock";
    else if (x===1)
      result="Paper";
    else
      result="Scissors";
    return result;

}



  function playround(HumanChoice)
  {
    if (HumanScore>=5 || ComputerScore>=5) return;

    HumanChoice=HumanChoice.toLowerCase();
    const ComputerChoice=getComputerChoice().toLowerCase();

    const roundMessage= document.createElement("div");
    roundMessage.classList.add("round-message");
    const roundScore= document.createElement("div");
    roundScore.classList.add("round-score");
    const roundContainer=document.querySelector("div.round-container");


    if (HumanChoice===ComputerChoice)
        roundMessage.textContent="It's a tie!";
    else if ((HumanChoice==="rock" && ComputerChoice==="scissors")|| (HumanChoice==="paper" && ComputerChoice==="rock") || (HumanChoice==="scissors" && ComputerChoice==="paper"))
    {
        HumanScore++;
        roundMessage.textContent="You win this round!";
    
    }
    else {
        ComputerScore++;
        roundMessage.textContent="You lost this round!";
    }
    roundScore.textContent="Human Score="+HumanScore+" Computer Score="+ComputerScore;

    roundContainer.innerHTML="";
    roundContainer.appendChild(roundMessage);
    roundContainer.appendChild(roundScore);

    if (HumanScore===5 || ComputerScore===5) {
    const resultMessage=document.createElement("div");
    resultMessage.classList.add("result-message");
    const scoreFinal=document.createElement("div");
    scoreFinal.classList.add("final-scores");

    if (HumanScore===ComputerScore)
      resultMessage.textContent="It's a TIE!";
    else if (HumanScore>ComputerScore)
      resultMessage.textContent="You won the game!";
    else 
      resultMessage.textContent= "You lost.....";

    scoreFinal.textContent="Human Score="+HumanScore+" Computer Score="+ComputerScore;

    const resultContainer=document.querySelector("div.result-container");
    resultContainer.innerHTML="";
    resultContainer.appendChild(resultMessage);
    resultContainer.appendChild(scoreFinal);

    }  
    
  }

  const Rock=document.querySelector("button#Rock");
  const Paper=document.querySelector("button#Paper");
  const Scissors=document.querySelector("button#Scissors");
  Rock.addEventListener("click",()=>{playround("Rock")} );
  Paper.addEventListener("click",()=>{ playround("Paper")} );
  Scissors.addEventListener("click",()=>{ playround("Scissors")});

  

