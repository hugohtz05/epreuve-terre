let argument = process.argv[2];
let result = 0
let multiplication = 0

function squareRoot() {
    while (result <= argument) {
        result = multiplication * multiplication
        multiplication = multiplication + 0.0000001;
     }
    console.log(multiplication)
    
}
squareRoot();
