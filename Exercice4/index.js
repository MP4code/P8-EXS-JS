const myButton = document.querySelector("#myButton");

myButton.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerHTML = `Bonjour, vous avez cliqué sur le bouton !`;
  document.body.appendChild(p);
});
