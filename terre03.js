// fonctions utilisées
function ShowArgument() {
  let argument = process.argv.slice(2);
  for (let i = 0; i < argument.length; i++) {
    console.log(argument[i]);
  }
}

ShowArgument();
