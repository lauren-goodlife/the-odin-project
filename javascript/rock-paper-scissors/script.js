
/* Programma carta sasso forbici */

/* Step 1: il pc ritorna un valore qualsiasi tra carta sasso forbici */
function pcChoice () {
    let values = ['carta', 'sasso', 'forbice'];
    let choice = values[(Math.random()*values.length) | 0];
    return choice;
}

/*Inizializzazione dei punteggi*/

let pcScore = 0;
let userScore = 0;

/* Un solo round */

function oneRound(userChoice,pcChoiceTest) {
switch (userChoice) {
    case 'carta':
        if (pcChoiceTest == 'forbice') {
            console.log("PC Won!")
            pcScore += 1;
        } else if (pcChoiceTest == 'sasso') {
            console.log("User won!")
            userScore += 1;
        } else if (pcChoiceTest == 'carta') {
            console.log("It's a tie!")
        }
        break;

    case 'forbice':
        if (pcChoiceTest == 'sasso') {
            console.log("PC Won!")
            pcScore += 1;
        } else if (pcChoiceTest == 'carta') {
            console.log("User won!")
            userScore += 1;
        } else if (pcChoiceTest == 'forbice') {
            console.log("It's a tie!")
        }
        break;
    case 'sasso':
        if (pcChoiceTest == 'carta') {
            console.log("PC Won!")
            pcScore += 1;
        } else if (pcChoiceTest == 'forbice') {
            console.log("User won!")
            userScore += 1;
        } else if (pcChoiceTest == 'sasso') {
            console.log("It's a tie!")
        }
        break;

    default:
        break;
}
}

/*Il gioco completo*/

function playGame() {

    let round = 1;
    while (round <= 5) {
        let pcChoiceTest = pcChoice();
        console.log("Il pc ha scelto " + pcChoiceTest)
        let userChoice = prompt("Ciao, scegli con cosa vuoi giocare: Carta, Sasso, Forbici").toLowerCase();
        console.log("L'utente ha scelto " + userChoice);
        oneRound(userChoice,pcChoiceTest);
        round ++; 
    }

    console.log(userScore)
    console.log(pcScore)
    if (userScore > pcScore) {
        console.log("User won!")
    } else {
        console.log("PC Won")
    }

    }


playGame();
