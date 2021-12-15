//Atividade Filter
/*

Filtre e retorne todos os números pares de um array. 

*/
function filtraPares(arr) {
	return arr.filter(callback)
}

function callback(item) {
	return item % 2 === 0;
}

const meuArray = [1, 30, 40, 35, 32, 2, 6]

console.log(filtraPares(meuArray))