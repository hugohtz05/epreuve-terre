let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Fonction utilisée
function alphabet(startLetter) {
  let startIndex = letters.indexOf(startLetter);

  if (startIndex !== -1) {
    let result = letters.slice(startIndex).join('');
    // affichage
    console.log(result);
  } else {
    console.log("erreur");
  }
}
let startLetter = process.argv[2];

if (startLetter) {
  alphabet(startLetter.toLowerCase()); // Convertir en minuscules pour la comparaison
} else {
  console.log("erreur");
}
