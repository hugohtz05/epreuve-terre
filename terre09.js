let argument = process.argv[2];
let exponent = process.argv[3];
let increment = 0;
let result = 1; 
function powerOfNumber() {
    while (increment < exponent) {
        increment ++;
        result = result * argument;  
    }
    console.log(result);
}

powerOfNumber();
