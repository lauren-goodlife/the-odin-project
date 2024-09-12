
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

function oneRound(userChoice, pcChoiceTest) {
    if (userChoice === pcChoiceTest) {
        console.log("It's a tie!");
        return;
    }

    switch (userChoice) {
        case 'carta':
            if (pcChoiceTest === 'forbice') {
                console.log("PC Won!");
                pcScore += 1;
            } else {
                console.log("User won!");
                userScore += 1;
            }
            break;

        case 'forbice':
            if (pcChoiceTest === 'sasso') {
                console.log("PC Won!");
                pcScore += 1;
            } else {
                console.log("User won!");
                userScore += 1;
            }
            break;

        case 'sasso':
            if (pcChoiceTest === 'carta') {
                console.log("PC Won!");
                pcScore += 1;
            } else {
                console.log("User won!");
                userScore += 1;
            }
            break;

        default:
            console.log("Scelta non valida");
    }
}


/*Il gioco completo*/

function playGame() {

    let round = 1;
    while (round <= 5) {
        let pcChoiceTest = pcChoice();
        console.log("Il pc ha scelto " + pcChoiceTest)

        let userChoice = prompt("Ciao, scegli con cosa vuoi giocare: Carta, Sasso, Forbici").toLowerCase();

        // Controllo input non valido
        if (!['carta', 'sasso', 'forbice'].includes(userChoice)) {
            console.log("Scelta non valida, riprova.");
            continue; // 
        }

        console.log("L'utente ha scelto " + userChoice);
        oneRound(userChoice,pcChoiceTest);
        round ++; 
    }

    console.log(userScore)
    console.log(pcScore)

    if (userScore > pcScore) {
            console.log("User won the game!");
        } else if (pcScore > userScore) {
            console.log("PC won the game!");
        } else {
            console.log("It's a tie overall!");
        }

    }


playGame();
