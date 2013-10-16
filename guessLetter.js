var word = ['b','a','n','a','n','a'];
var correctLetters = ['_', '_', '_','_','_','_'];
var reward = 0;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function guessLetter(letter) {
        var str = "";
        for(var i = 0; i < word.length; i++){
                if(word[i] === letter){
                    correctLetters[i] = letter;
                    console.log("You guessed a correct letter!");
                    reward++;
                }
                str = str+correctLetters[i];

        }
        console.log(str);
        ifWon();
        
}
function ifWon() {
    var status = true;
    for (var i = 0; i < correctLetters.length; i++){
        if (correctLetters[i] === "_"){
            status = false;
            console.log("Guess again!");
            break;
        }
    }
    if (status === true) {
        console.log("Congrats! You've won!");
    }
    
}


// while (ifWon){
//     guessLetter('a');

// }



guessLetter('t');
guessLetter(2);
guessLetter('b');
guessLetter('a');
guessLetter('n');
