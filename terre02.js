// fonctions utlisées
function showFileName() {
  const path = require('path');
  const nomFichier = path.basename(__filename);
// affichage
  console.log(nomFichier);
}

showFileName();
