let player = document.querySelectorAll('.player .select')
let hasil = ''
const result = document.getElementById('result')
const computer = document.querySelector('.comp .select')
const color = document.getElementById('color')
let scPlayer = document.getElementById('scPlayer')
let scComp = document.getElementById('scComp')
let draw = document.getElementById('draw')
let score = document.getElementById('score')
let Pscore = 0
let Cscore = 0
let Dscore = 0

let audio = new Audio ('click.mp3')
let win = new Audio ('clapWin.mp3')
let fart = new Audio ('fart1.mp3')
let lose = new Audio ('lose.mp3')
let drawS = new Audio ('draw.mp3')

let aStop = new Audio('')


player.forEach(function (pilPlayer) {
pilPlayer.addEventListener('click', ()=>{


	audio.play()
	let comp = Math.floor(Math.random()*15+1)
		if (comp >= 1 && comp <= 5) {
			comp = '✊'
		} else if (comp >= 6 && comp <= 10){
			comp = '✌'
		} else if (comp >= 11 && comp <= 15){
			comp = '✋'
		}

	if (pilPlayer.textContent == comp) {
		hasil = 'DRAW🤙🗿'
		} else if (pilPlayer.textContent == '✊'){
		hasil = (comp == '✌') ? '🌠YOU WIN🌠' : 'YOU LOSE 🚬🗿'
		} else if (pilPlayer.textContent == '✌'){
		hasil = (comp == '✋') ? '🌠YOU WIN🌠' : 'YOU LOSE 🚬🗿'
		} else if (pilPlayer.textContent == '✋'){
		hasil = (comp == '✊') ? '🌠YOU WIN🌠' : 'YOU LOSE 🚬🗿'
		}

	player.forEach(function (pilP){
		if (pilP.classList.contains ('active')){
			pilP.classList.remove ('active')
		}
	})

	pilPlayer.classList.add ('active')

		
		const pil = ['✊','✌','🖐']
		const load = ['•','••','•••','••••','•••••']
		let i = 0
		let j = 0
		const waktuMulai = new Date(). getTime()
		setInterval(()=>{
			if(new Date(). getTime() - waktuMulai > 3000){
				clearInterval
				return
			}
			computer.textContent = pil[i++]
			if(i == pil.length) i = 0
			result.textContent = load[j++]
			result.style.color = 'yellow'
			if(j == load.length) j = 0
		},70)
		
		
		/*computer.textContent = '....'
		result.textContent = '....'
		result.style.color = 'yellow'*/

		setTimeout(()=>{
			computer.textContent = comp
			computer.style.color = 'red'
			result.textContent = hasil
				if (result.textContent =='🌠YOU WIN🌠') {
					result.style.color = 'rgb(0, 255,0)'
					Pscore++
					scPlayer.textContent = Pscore
					scPlayer.style.color = 'rgb(0,255,0)'
					win.play()
				} else if(result.textContent == 'YOU LOSE 🚬🗿'){
					result.style.color = 'rgb(255,0,0)'
					Cscore++
					scComp.textContent = Cscore
					scComp.style.color = 'rgb(255,0,0)'
					fart.play()
					lose.play()
				} else if (result.textContent == 'DRAW🤙🗿'){
					result.style.color = 'yellow'
					Dscore++
					draw.textContent = Dscore
					draw.style.color = 'yellow'
					drawS.play()
				}
		}, 3000)
		setTimeout(()=>{
			pilPlayer.classList.remove ('active')
		},10000)
	})
})


color.addEventListener('input', ()=>{
	document.body.style.backgroundColor = color.value
})

const bgColor = document.getElementById('bgButton')
const container = document.getElementById('ctn') 
bgColor.addEventListener('click', ()=>{
	audio.play()
	const r1 = Math.floor(Math.random()*255+1)
	const g1 = Math.floor(Math.random()*255+1)
	const b1 = Math.floor(Math.random()*255+1)

	const r2 = Math.floor(Math.random()*255+1)
	const g2 = Math.floor(Math.random()*255+1)
	const b2 = Math.floor(Math.random()*255+1)

	const r3 = Math.floor(Math.random()*255+1)
	const g3 = Math.floor(Math.random()*255+1)
	const b3 = Math.floor(Math.random()*255+1)

	container.style.backgroundImage = 'linear-gradient(to bottom, rgb('+ r1 +', '+ g1 +', '+ b1 +'), rgb('+ r2 +', '+ g2 +', '+ b2 +'), rgb('+ r3 +', '+ g3 +', '+ b3 +'))'
	score.style.backgroundImage = 'linear-gradient(to bottom, rgb('+ r1 +', '+ g1 +', '+ b1 +'), rgb('+ r2 +', '+ g2 +', '+ b2 +'), rgb('+ r3 +', '+ g3 +', '+ b3 +'))'
})
const sR = document.getElementById('sR')
const sG = document.getElementById('sG')
const sB = document.getElementById('sB')
const cBg = document.querySelectorAll('.setting .bg .cBg')
cBg.forEach(function (warna){
	warna.addEventListener('input', ()=>{
		container.style.backgroundColor = 'rgb('+ sR.value +', '+ sG.value +', '+ sB.value +')'
		console.log(warna.value)
		container.style.backgroundImage = 'none'
	})
})


// sR.addEventListener('input', ()=>{
// 	container.style.backgroundColor = 'rgb('+ sR.value +', '+ sG.value +', '+ sB.value +')'
// })
// sG.addEventListener('input', ()=>{
// 	container.style.backgroundColor = 'rgb('+ sR.value +', '+ sG.value +', '+ sB.value +')'
// })
// sB.addEventListener('input', ()=>{
// 	container.style.backgroundColor = 'rgb('+ sR.value +', '+ sG.value +', '+ sB.value +')'
// })



const setting = document.getElementById('setting')
const sideSet = document.getElementById('sideSet')
sideSet.addEventListener('click', ()=>{
	audio.play()
	setting.classList.toggle ('active')
})


const music = document.getElementById('music')
const s = new Audio('Sleep Away.mp3')
let count = 0
music.addEventListener('click', ()=>{
	if(count == 0){
		count = true
		s.play()
	} else {
		count = 0
		s.pause()
	}
})