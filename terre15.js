const argument1 = parseFloat(process.argv[2]);
const argument2 = parseFloat(process.argv[3]);
const argument3 = parseFloat(process.argv[4]);

function listSortedOrNot() {
    if (!isNaN(argument1) && !isNaN(argument2) && !isNaN(argument3)) {
        if (argument1 < argument2 && argument2 < argument3) {
            console.log("triée !");
        } else {
            console.log("pas triée !");
        }
    } else {
        console.log("erreur.");
    }
}

listSortedOrNot();
