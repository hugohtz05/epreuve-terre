const argument = process.argv[2];
let result = 0;
let incrément = 2;

function firstNumber() {
    result = argument % incrément;
    while (incrément < argument) {
    	incrément++;
        if (result === 0) {
            console.log("non " + argument + " n'est pas un nombre premier");
            return;
        }
    }
    console.log("oui " + argument + " est un nombre premier");
    
}
firstNumber();
