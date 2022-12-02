const container =  document.querySelector('.container')

const uURL = 'https://source.unsplash.com/random/';

const rows = 10;

for ( let i = 0; i < rows * 3; i++) {
	const img = document.createElement('img')
	img.src = `${uURL}${getRS()}`
	container.appendChild(img)
}

function getRS() {
	return `${getRN()}*${getRN()}`
}

function getRN() {
	return Math.floor(Math.random() * 10) + 300
}





