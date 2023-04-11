let inputKegiatan = document.getElementById('inputKegiatan')
let inputHari = document.getElementById('inputHari')
let inputTanggal = document.getElementById('inputTanggal')
let inputTempat = document.getElementById('inputTempat')
let inputJam = document.getElementById('inputJam')
let submit = document.getElementById('submit')
const container = document.querySelector('.container')
const save = document.getElementById('save')
let num = 1

submit.addEventListener('click', ()=>{

	if (inputKegiatan.value.length == 0) {
		alert('Data Belum Lengkap')
	} else if (inputHari.value == 'Day') {
		alert('Data Belum Lengkap')
	} else if (inputTanggal.value.length == 0) {
		alert('Data Belum Lengkap')
	} else if (inputTempat.value.length == 0) {
		alert('Data Belum Lengkap')
	} else if (inputJam.value.length == 0) {
		alert('Data Belum Lengkap')
	} else {
		const head = document.createElement('div')
		head.style.border = 'none'
		head.setAttribute('class', 'head')

		container.append(head)

		for(let i = 0; i <= 5; i++){
			const span = document.createElement('span')
			if (i == 0){
				span.textContent = num++
				span.style.flex = '.2'
			} else if (i == 1) {
				span.textContent = inputKegiatan.value
				span.style.textTransform = 'capitalize'
			} else if(i == 2) {
				span.textContent = inputHari.value + ', ' + inputTanggal.value
			} else if(i == 3) {
				span.textContent = inputTempat.value
				span.style.textTransform = 'capitalize'
			} else if(i == 4) {
				span.textContent = inputJam.value
			} else {
				const select = document.createElement('select')
				for(let i = 1; i <= 4; i++){
					let option = document.createElement('option')
					if (i == 1) option.textContent = 'Belum'
					if (i == 2) option.textContent = 'Sedang Dikerjakan'
					if (i == 3) option.textContent = 'Selesai'
					if (i == 4) option.textContent = 'Batal'
					
					save.addEventListener('click', ()=>{
						let box = select.options.selectedIndex
						if (box == 0) head.style.backgroundColor = 'white'
						if (box == 1) head.style.backgroundColor = 'yellow'
						if (box == 2) head.style.backgroundColor = 'rgb(0,255,0)'
						if (box == 3) head.style.backgroundColor = 'rgb(255,0,0)'
					})
					select.style.border = 'none'
					select.style.fontWeight = 'bold'
					select.style.backgroundColor = 'inherit'
					select.append(option)
				}
				span.append(select)
			}
			head.append(span)
		}
	}

inputKegiatan.value = ''
inputHari.value = 'Day'
inputTanggal.value = ''
inputJam.value = ''
inputTempat.value = ''

})