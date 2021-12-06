function comparaNumeros(numero1, numero2) {
  const primeiraFrase = criaPrimeiraFrase(numero1, numero2);
  const segundaFrase = criaSegundaFrase(numero1, numero2);

  if(!numero1 || !numero2) return `Defina dois numeros`

  return `${primeiraFrase}. ${segundaFrase}`
}

function criaPrimeiraFrase(numero1, numero2) {
  let saoIguais = "";

  if (numero1 != +numero2) {
    saoIguais = "não";
  }

  return `Os números ${numero1} e ${numero2} ${saoIguais} são iguais`;
}

function criaSegundaFrase(numero1, numero2) {
  const soma = numero1 + numero2;
  let resultado10 = 'menor';
  let resultado20 = 'menor';
  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10) {
    resultado10 = 'maior'
  }

  if (compara20) {
    resultado20 = 'maior'
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(7, 8))