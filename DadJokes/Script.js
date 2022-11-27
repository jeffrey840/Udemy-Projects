
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)


generateJoke()

//USING .THEN
// function generateJoke() {
// 	const config = {
// 		headers: {
// 			'accept': 'application/json'
// 		}
// 	}
//
// 	fetch('https://icanhazdadjoke.com', config)
// 		.then(res => res.json() )
// 		.then(data => {
// 		jokeEl.innerHTML = data.joke
// 	})
// }

//USING ASYNC
async function generateJoke() {
	const config = {
		headers: {
			'accept': 'application/json'
		}
	}
	//setting what is returned from fetch into a variable
	const res = await fetch('https://icanhazdadjoke.com', config)

	//setting what is returned from res into a variable
	const data = await res.json()

	//setting to inner html
	jokeEl.innerHTML = data.joke
}





