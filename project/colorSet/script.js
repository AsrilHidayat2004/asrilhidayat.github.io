const box = document.querySelector('.box')
let input = document.querySelector('input')
let spanName = document.getElementById('name')
let spanHex = document.getElementById('hex')
let spanRGB = document.getElementById('rgb')
let spanHSLA = document.getElementById('hsla')

input.addEventListener('input',()=>{
	box.style.backgroundColor = input.value
	spanHex.textContent = input.value
	spanRGB.textContent = hexToRGB(input.value)
	spanHSLA.textContent = hexToHSLA(input.value)
})

function hexToRGB (hex){
	hex = hex.replace('#', '')

	let r = parseInt(hex.substring(0,2), 16)
	let g = parseInt(hex.substring(2,4), 16)
	let b = parseInt(hex.substring(4,6), 16)

	return 'rgb('+ r +', '+ g +', '+ b +')'
}

function hexToHSLA(hex) {
	//menhilangkan tanda #
	hex = hex.replace('#', '')

	//mengkonversi nilai Hex to RGB
	let r = parseInt(hex.substring(0,2), 16) / 255
	let g = parseInt(hex.substring(2,4), 16) / 255
	let b = parseInt(hex.substring(4,6), 16) / 255

	//menhitung nilai HSLA

	let cmin = Math.min(r,g,b)
	let cmax = Math.max(r,g,b)
	let delta = cmax - cmin
	let h = 0, s = 0, l = 0

	if (delta == 0) {
		h = 0
	} else if (cmax == r) {
		h = ((g - b) / delta) % 6
	} else if (cmax == g){
		h = (b - r) / delta + 2
	} else {
		h = (r - g ) / delta + 4
	}

	h = Math.round(h * 60)

	if (h < 0){
		h += 360
	}

	l = (cmax + cmin) / 2

	if (delta == 0){
		s = 0
	} else {
		s = delta / (1 - Math.abs(2 * l - 1))
	}

	s = +(s * 100).toFixed(1)
	l = +(l * 100).toFixed(1)

	//menbgembalikan nilai HSLA

	return 'hsla('+ h +', '+ s +'%, ' + l + '%, 1)'
}