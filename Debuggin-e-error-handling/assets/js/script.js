//Atividade 1 Validação de erros por tipo
/*

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de 

*/


function validaArray(array, numero) {
  try {

    if(!array && !numero) throw new ReferenceError('Envie os parâmetros')

  if(typeof array !== 'object') throw new TypeError('O array precisa ser do tipo object')

  if(typeof numero !== 'number') throw new TypeError('O numero precisa ser do tipo number')

  if (array.length !== numero) throw new RangeError('Tamanho inválido')
  
    return array;
  }
  catch(e) {
    if(e instanceof ReferenceError) {
      console.log('Este erro é uma ReferenceError')
      console.log(e.message);

    } else if (e instanceof TypeError) {
			console.log('Este erro é um TypeError');
			console.log(e.stack);

    }else if (e instanceof RangeError) {
			console.log('Este erro é uma RangeError');
			console.log(e.stack);

		} else {
			console.log('Tipo de erro não esperado: ' + e );

		}
  }
}

console.log(validaArray([1, 2, 3, 4, 5], 5))
