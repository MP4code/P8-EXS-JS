// Créez votre fonction ici
function calculateAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.log("No numbers to calculate average");
    return;
  }

  let moyenne = numbers.reduce((a, b) => a + b, 0) / numbers.length;

  console.log(moyenne);
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

//export default calculateAverage
