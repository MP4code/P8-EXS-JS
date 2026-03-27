const display = document.getElementById("display");
//tableau vide
let cal = [];

/**
 * Afficher la valeur à l'écran
 * @param {*} i
 */
function appendToDisplay(i) {
  display.value += i;
  cal.push(i);
}
/**
 * Calculer
 */

function calculateResult() {
  let expression = cal.join("");
  let result = eval(expression);
  display.value = result;
}
//Supprimer pour recommencer
function clearDisplay() {
  display.value = "";
  cal = [];
}
