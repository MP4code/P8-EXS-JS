function convertToBinary() {
  // Récupérer la valeur saisie
  let decimal = document.getElementById("decimalInput").value;

  // Convertir en nombre entier
  decimal = parseInt(decimal);

  // Vérifier si c'est un nombre valide
  if (isNaN(decimal) || decimal < 0) {
    document.getElementById("binaryResult").textContent =
      "Veuillez entrer un nombre décimal valide.";
    return;
  }

  let binary = "";

  // Cas particulier si le nombre est 0
  if (decimal === 0) {
    binary = "0";
  } else {
    // Conversion en binaire
    while (decimal > 0) {
      let reste = decimal % 2;
      binary = reste + binary; // On ajoute devant
      decimal = Math.floor(decimal / 2);
    }
  }

  // Afficher le résultat
  document.getElementById("binaryResult").textContent = "Binaire : " + binary;
}
