console.log("Let's play Rock-Paper-Scissors through the console!");

let HumanScore=0, ComputerScore=0;
console.log("Human Score="+HumanScore+" Computer Score="+ComputerScore);

function getComputerChoice() {

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

function getHumanChoice() {

let y=prompt("Enter your choice!");
console.log(y);
return y;

}

function playgame() {

  let i=0;
  for(i=0;i<5;i++)
{
function playround(HumanChoice,ComputerChoice) {

    HumanChoice=HumanChoice.toLowerCase();
    ComputerChoice=ComputerChoice.toLowerCase();

    console.log("You chose :"+HumanChoice);
    console.log("Computer chose:"+ComputerChoice);

    if (HumanChoice===ComputerChoice)
        console.log("It's a tie!");
    else if ((HumanChoice==="rock" && ComputerChoice==="scissors")|| (HumanChoice==="paper" && ComputerChoice==="rock") || (HumanChoice==="scissors" && ComputerChoice==="paper"))
    {
        HumanScore++;
        console.log("You win this round!");
    
    }
    else {
        ComputerScore++;
        console.log("You lost this round!");
    }
    console.log("Human Score="+HumanScore+" Computer Score="+ComputerScore);
}

 let Humanchoice=getHumanChoice();
 let Computerchoice=getComputerChoice();

playround(Humanchoice,Computerchoice);
}
if (HumanScore===ComputerScore)
  console.log("It's a TIE!");
else if (HumanScore>ComputerScore)
  console.log("You won the game!");
else 
  console.log("You lost.....");
console.log("Human Score="+HumanScore+" Computer Score="+ComputerScore);
}

playgame();