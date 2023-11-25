function evenOrOdd() {
    
    const argument = process.argv[2];
    const number = parseFloat(argument);


     if (isNaN(number)) {
        console.log("Tu ne me la mettras pas en l'envers.");
        return;
    } else {  
        if (number % 2 === 0) {
            console.log("pair");
        } else {
            console.log("impair");
        }
    }
}

evenOrOdd();
