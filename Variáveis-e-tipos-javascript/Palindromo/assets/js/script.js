// Atividade 1 

/*Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

*/


//Solução 1 

function verificaPalindromo(string) {
  if(!string) return "string não existe"

  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ama"))

//Solução 2 

function verificaPalindromo2(string) {
  if(!string) return "string não existe"

  for (let i =0; i < string.length/2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindromo2("ana"))
