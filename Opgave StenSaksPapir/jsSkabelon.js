function User()
{
    let userChoiceNumber = document.getElementsByName("valg");

    for(i = 0; i < userChoiceNumber.length; i++) {
        if(userChoiceNumber[i].checked) {
            var userChoice = userChoiceNumber[i].value;
            break; 
        }
    }
    let computerChoice = Computer();
    document.getElementById("computerInput").innerHTML = computerChoice;

    computerChoice === userChoice ? document.getElementById("resultHere").innerHTML = `I har begge valgt ${userChoice}. Prøv igen.`: 
    Results(computerChoice,userChoice);
}

function Computer()
{
    let computerChoice = Math.ceil(Math.random()*3);
    computerChoice = computerChoice === 1 ? "Sten": computerChoice = computerChoice === 2 ? "Saks": "Papir";
    return computerChoice;
}

function Results(computerChoice,userChoice)
{
    (userChoice === "Sten" && computerChoice === "Saks") ||
    (userChoice === "Papir" && computerChoice === "Sten") || 
    (userChoice === "Saks" && computerChoice === "Papir") ?
    document.getElementById("resultHere").innerHTML = "Tillykke. Du vandt":  
    document.getElementById("resultHere").innerHTML = "Desværre ingen held denne gang."; 
}