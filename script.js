const allText = document.querySelector('.all-text');
const mainText = document.querySelector('.main-text');
const button = document.querySelector('button');
const header = document.querySelector('.header');
const wordLimit = document.querySelectorAll('input[data-max-words]');

button.addEventListener('click', highlightWord);

function highlightWord() {
	let inputText = allText.value;
	let textToHighlight = mainText.value;
	if(inputText == '' || textToHighlight == '' ) {
		alert("Input should be less than 100 and not empty");
	} 
	else {
		let textArray = inputText.split(' ');
		let count = 0;
		let newArray = textArray.map(eachWord => {
			if(eachWord.toLowerCase() === textToHighlight.toLowerCase().trim()) {
			count += 1;
			eachWord = `<mark>${eachWord.toUpperCase()}</mark>`;
			}
			return eachWord;
		})
		
		let finalOutput = newArray.join(' ');
		header.innerHTML = finalOutput;
		if (count === 0) {
			alert("Cannot highlight word in sentence")
		} else if (count > 2) {
			alert("Too many occurrences to be highlighted")
		}
	}
}

wordLimit.forEach(input => {
	let maxWords = parseInt(input.getAttribute('data-max-words') || 0)
	input.addEventListener('keydown', e => {
		let target = e.currentTarget
		let words = target.value.split(/\s+/).length
		if (!target.getAttribute('data-announce'))
			words >= maxWords && e.keyCode == 32 && e.preventDefault()
		else
			words >= maxWords && e.keyCode == 32 && (e.preventDefault() || alert(`Only ${maxWords} words allowed`))
	})
})