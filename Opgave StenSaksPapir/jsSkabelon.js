let computerVins = 0;
let userVins = 0;
let counts = 0;

function User(){
    let userChoiceNumber = document.getElementsByName("valg");
    let computerChoice = Computer();

    for(i = 0; i < userChoiceNumber.length; i++) {
        if(userChoiceNumber[i].checked) {
            var userChoice = userChoiceNumber[i].value;
            counts++;
            break; 
        }
    }
    document.getElementById("turns").innerHTML = counts;

    computerChoice === userChoice ? (document.getElementById("resultHere").innerHTML = 
    "Uafgjort. I har begge valgt " + userChoice) + 
    (document.getElementById("computerInput").innerHTML = computerChoice): 
    userChoice === undefined ? document.getElementById("resultHere").innerHTML =
    "Hov. Du har ikke valgt noget":
    Results(computerChoice, userChoice);
}

function Computer(){
    let computerChoice = Math.ceil(Math.random()*3);
    computerChoice = computerChoice === 1 ? "Sten": computerChoice = computerChoice === 2 ? "Saks": "Papir";
    return computerChoice;
}

function Results(computerChoice, userChoice){
    document.getElementById("computerInput").innerHTML = computerChoice;

    (userChoice === "Sten" && computerChoice === "Saks") ||
    (userChoice === "Papir" && computerChoice === "Sten") || 
    (userChoice === "Saks" && computerChoice === "Papir") ?
    (document.getElementById("resultHere").innerHTML = "Tillykke. Ét point til dig") && userVins++:  
    (document.getElementById("resultHere").innerHTML = "Desværre. Ét point til computeren") && computerVins++; 

    BestOfTree(userVins, computerVins, computerChoice, userChoice);
}

function BestOfTree (userVins, computerVins, computerChoice, userChoice){
    if (userVins === 2 || computerVins === 2){
        userVins === 2 ? document.write(`Tillykke du vandt. Du valgte ${userChoice} 
        og computeren valgte ${computerChoice}. Samlede antal spil var ${counts}. Vil du prøve igen? `):
        document.write(`Du tabte desværre. Du valgte ${userChoice} 
        og computeren valgte ${computerChoice}. Samlede antal spil var ${counts}. Vil du prøve igen? `);
        CreateBotton();
    }   
}

function CreateBotton() {
    var yesBotton = document.createElement("BUTTON");
    yesBotton.innerHTML = "JA";
    document.body.appendChild(yesBotton);
    yesBotton.addEventListener ("click", function() {location.reload()})
}
