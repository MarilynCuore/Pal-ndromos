//Palíndromo
var incognita = "Ama"
function frase(incogita){
  let nuevoArray = incognita.split("");
  let alReves = nuevoArray.reverse().join("").toLowerCase();
  return alReves == incognita.toLowerCase();
}
console.log(frase(incognita))