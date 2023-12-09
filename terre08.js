const argument = process.argv[2];

function countCharacters() {
    let numberOfCharacters = 0;

    for (let character of argument) {
        numberOfCharacters++;  
    }
    console.log(numberOfCharacters);
    return numberOfCharacters;
}

if (!isNaN(argument) || argument === undefined || !/\s/.test(argument)) {
    console.log("erreur") 
    return
}

countCharacters()

