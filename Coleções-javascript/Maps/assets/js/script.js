// Atividade 1 

/*
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

*/

function getsAdmins(map) {

	let admins = [];
	for ([key, value] of map ) {
		if (value === 'Admin') {
			admins.push(key)
		}
	}
	return admins;
}

const usuarios = new Map();


usuarios.set('Luiz', 'Admin')
usuarios.set('Wesley', 'Admin')
usuarios.set('Alessandra', 'Admin')
usuarios.set('Pedro', 'User')

console.log(getsAdmins(usuarios))