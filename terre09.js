let argument = process.argv[2];
let exposant = process.argv[3];
let resultat;

function powerOfNumber() {
  if (exposant >= 0) {
    resultat = Math.pow(argument, exposant);
    console.log(resultat);
  } else {
    console.log("erreur");
  }
}

powerOfNumber();
