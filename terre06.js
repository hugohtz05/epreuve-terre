function divisions() {
  let result = process.argv[2] / process.argv[3];
  let rest = process.argv[2] % process.argv[3];

  if (isNaN(result) || !isFinite(result) || result == 0 || result > 0) {
    console.log("erreur");
  } else {
    console.log("resultat :", result);
    console.log("reste :", rest);
  }
}

divisions();
