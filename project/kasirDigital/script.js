const getMakanan = document.getElementById('getMakanan')
const jmlMakanan = document.getElementById('jmlMakanan')
const btnAdd = document.getElementById('add')
const content = document.querySelector('.content')
const total = document.getElementById('total')
const all = document.getElementById('all')

const hargaMakanan = {
	NasiPadang : 10000,
	Rujak : 15000,
	Sate : 10000,
	Soto : 10000,
	Bakso : 7000
}

let hargaArr = []

btnAdd.addEventListener('click',()=>{
	createHead(content)
})

function createHead (content) {
	const head = document.createElement('div')
	head.setAttribute('class', 'head')

	for(let i = 1; i <= 3; i++){
		const span = document.createElement('span')
		span.setAttribute('class', 'span')
		if (i == 1) {
			span.textContent = getMakanan.value
		} else if (i == 2) {
			if (getMakanan.value == 'Nasi Padang') {
				span.textContent = hargaMakanan.NasiPadang
			//	total.textContent = hargaMakanan.NasiPadang * jmlMakanan.value
			} if (getMakanan.value == 'Rujak') {
				span.textContent = hargaMakanan.Rujak
			//	total.textContent = hargaMakanan.Rujak * jmlMakanan.value
			} if (getMakanan.value == 'Sate') {
				span.textContent = hargaMakanan.Sate
			//	total.textContent = hargaMakanan.Sate * jmlMakanan.value
			} if (getMakanan.value == 'Soto') {
				span.textContent = hargaMakanan.Soto
			//	total.textContent = hargaMakanan.Soto * jmlMakanan.value
			} if (getMakanan.value == 'Bakso') {
				span.textContent = hargaMakanan.Bakso
			//	total.textContent = hargaMakanan.Bakso * jmlMakanan.value
			}
				hargaArr.push(parseInt(span.textContent * jmlMakanan.value))
				total.textContent = hargaArr.reduce((acc, curr) => acc + curr)
				console.log(hargaArr.reduce((acc, curr) => acc + curr))
		} else {
			span.textContent = jmlMakanan.value
		}
	head.append(span)
	}

	content.append(head)
}