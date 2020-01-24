import * as _ from 'lodash';


function component() {

	const apiKey = "5d8bf2990a40ee592eee0bd672676d61";
	let movieId = 181812;
	let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

	// a parte a partir do const está rodando em paralelo? (assincrono)
	fetch(apiUrl, { method: "GET" }).then(response =>
		{
			console.log(response.status);
			console.log(response.statusText);
			console.log(response.type);
			console.log(response.url);
			response.json().then(data => console.log(data));
		}
	);

	const element = document.createElement('div');
	element.innerHTML = 'Oi Raquel'
	return element;

	
}

document.body.appendChild(component());
