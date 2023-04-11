const inputS1 = document.getElementById('inputS1')
const inputS2 = document.getElementById('inputS2')
const inputS3 = document.getElementById('inputS3')
const submit = document.getElementById('submit')
const inputName = document.getElementById('inputName')
const container = document.querySelector('.container')

const section1 = [24,25,26,27,28,29,30,31,32,32,33,35,37,38,39,41,41,42,43,44,45,45,46,47,47,48,48,49,49,50,51,51,52,52,53,54,54,55,56,57,57,58,59,60,61,62,63,65,66,67,68]

const section2 = [20,20,21,22,23,25,26,27,29,31,33,35,36,37,38,40,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,63,65,67,68]

const section3 = [21,22,23,23,25,26,27,28,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,43,44,45,46,46,47,48,48,49,50,51,52,52,53,54,54,55,56,57,58,59,60,61,63,65,66,67]

submit.addEventListener('click',()=>{
	if (inputS1.value.length == 0 || 
		inputS2.value.length == 0 || 
		inputS3.value.length == 0 || 
		inputS1.value < 0 || 
		inputS1.value > 50 ||
		inputS2.value < 0 ||
		inputS2.value > 40 ||
		inputS3.value < 0 ||
		inputS3.value > 50) {
		alert('Data is not complete')
	} else {
		const setS1 = parseInt(inputS1.value)
		const setS2 = parseInt(inputS2.value)
		const setS3 = parseInt(inputS3.value)
		const getAllScore = section1[setS1] + section2[setS2] + section3[setS3]

		const finalScore = getAllScore * 10 / 3
		const hasil = Math.floor(finalScore)
		console.log(`Section 1 = ${section1[setS1]}\nSection 2 = ${section2[setS2]}\nSection 3 = ${section3[setS3]}\nJumlah semua skor = ${getAllScore}\nMaka final score = ${finalScore}\nHasil = ${hasil}`)

		createHead('div', 'span', setS1, setS2, setS3, getAllScore, hasil)

	}
})

function createHead(headTag, spanTag,setS1, setS2, setS3, getAllScore, hasil) {
	const head = document.createElement(headTag)
	head.classList.add('head')

	for(let i = 1; i <= 4; i++){
		const span = document.createElement(spanTag)
		span.classList.add('span')
		if (i == 1) {
			span.textContent = inputName.value
		} else if (i == 2) {
			for(let j = 1; j <= 3; j++){
				const spn = document.createElement('span')
				spn.classList.add('spn')
				if (j == 1) {
					spn.textContent = section1[setS1]
				} else if (j == 2) {
					spn.textContent = section2[setS2]
				} else if (j == 3) {
					spn.textContent = section3[setS3]
				}
				span.append(spn)
			}
		} else if (i == 3) {
			span.textContent = getAllScore
		} else if (i == 4) {
			span.textContent = hasil
		}
		head.append(span)
	}

	container.append(head)
}