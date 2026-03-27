//votre code ici
function pairNumbers(a, b) {
  let numbers = [];

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      numbers.push(i); // stock et affiche tout les nombres
    }
  }

  console.log(numbers.join(",")); //crée et retourne une nouvelle chaîne de caractères en concaténant tous les éléments de ce tableau
}

pairNumbers(1, 10);
//export default pairNumbers;
