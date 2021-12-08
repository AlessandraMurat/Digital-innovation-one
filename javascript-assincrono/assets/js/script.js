//Atividade 1 API "catAPI"
/*

Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
Filtre as chamadas de catch por cada tipo de 

*/
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const getCats = async () => {

		const data = await fetch(BASE_URL)
    .then((res) => res.json())
		.catch((e) => console.log(e));
    
		return data.webpurl;
};


const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();


catBtn.addEventListener('click', loadImg);
