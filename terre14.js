const argument1 = parseFloat(process.argv[2]);
const argument2 = parseFloat(process.argv[3]);
const argument3 = parseFloat(process.argv[4]);

function isShowSuisse() {
    if (argument1 < argument2 && argument2 < argument3) {
        console.log(argument2);
    } else if (argument2 < argument1 && argument1 < argument3) {
        console.log(argument1);
    } else if (argument1 === argument2 && argument2 === argument3) {
        console.log("erreur.");
    } else {
        console.log(argument3);
    }
}

isShowSuisse();
