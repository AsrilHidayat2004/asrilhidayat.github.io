const textType = document.getElementById('textType')

let i = -1
let text = ['P','Pr','Pro','Prog','Progr','Program','Programm','Programme','Programmer','','G','Ga','Gam','Game','Gamer']
setInterval(()=>{
	i++
	textType.style.fontWeight = 'bold'
	textType.textContent = text[i]
	textType.style.color = "red"
	if (i == 10 || i == 11 || i == 12 || i == 13 || i == 14) textType.style.color = "blue"
	if (i == text.length) i = -1
},500)


const btnsSee = document.querySelectorAll('#seeMore')
btnsSee.forEach(function (btnSee){
		btnSee.addEventListener('click',()=>{
			const container = combine('div','div','div','img', btnSee.parentElement.previousElementSibling.src, 'h3', btnSee.previousElementSibling.textContent, 'p', 'a')
			document.body.append(container)
		})
	})


function createScreen(screenTag) {
	const screen = document.createElement(screenTag)
	screen.classList.add('screen')
	return screen
}

function createCard(cardTag) {
	const card = document.createElement(cardTag)
	card.classList.add('kartu')
	return card
}

function createClose(closeTag){
	const close = document.createElement(closeTag)
	close.classList.add('close')
	close.textContent = 'X'
	return close
}
function createImg(imgTag, src){
	const img = document.createElement(imgTag)
	img.src = src
	img.classList.add('img')
	return img
}
function createh3(h3Tag,txt) {
	const h3 = document.createElement(h3Tag)
	h3.textContent = txt
	h3.classList.add('h3')
	return h3
}

function createP(pTag) {
	const p = document.createElement(pTag)
	p.classList.add('p')
	return p
}


function createButton(aTag){
	const a = document.createElement(aTag)
	a.textContent = 'Try Now'
	a.classList.add('btn')
	a.classList.add('btn-danger')
	a.classList.add('m-2')
	btnF(a)
	return a
}
function combine(screenTag, cardTag, closeTag, imgTag, src, h3Tag, txt, pTag, aTag) {
	const screen = createScreen(screenTag)
	const card = createCard(cardTag)
	const close = createClose(closeTag)
	const img = createImg(imgTag,src)
	const h3 = createh3(h3Tag, txt)
	const p = createP(pTag)
	const a = createButton(aTag)

	if (h3.textContent == 'To-Do-List Ver.2'){
		p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptas, aliquam molestias voluptatibus ratione blanditiis, incidunt consequatur iste, unde impedit, sed quod maiores deleniti a deserunt inventore eius. Incidunt, aspernatur, ipsam.'
	}
	if (h3.textContent == 'Kasir Digital'){
		p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptas, aliquam molestias voluptatibus ratione blanditiis, incidunt consequatur iste, unde impedit'
	}
	if (h3.textContent == 'R-P-S Game'){
		p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptas, aliquam molestias voluptatibus ratione blanditiis, incidunt consequatur iste, unde impedit'
	}
	if (h3.textContent == 'Color Set'){
		p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptas, aliquam molestias voluptatibus ratione blanditiis, incidunt consequatur iste, unde  incidunt consequatur iste, unde impedit '
	}
	if (h3.textContent == 'Gallery Image'){
		p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptas, aliquam molestias voluptatibus ratione blanditiis, incidunt consequatur iste, unde impedit'
	}
	if (h3.textContent == 'TOEFL Value Convert'){
		p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptas, aliquam molestias voluptatibus ratione blanditiis, incidunt consequatur iste, unde impedit'
	}


	closeF(close, screen)
	card.append(close)
	card.append(img)
	card.append(h3)
	card.append(p)
	card.append(a)
	screen.appendChild(card)
	return screen
}

function closeF(cF, screen){
	cF.addEventListener('click',()=>{
		screen.style.display = 'none'
	})
	return cF
}

function btnF(a, screen){
	a.addEventListener('click',()=>{
		let link = a.previousElementSibling.previousElementSibling.textContent
		if (link == 'To-Do-List Ver.2') {
			a.setAttribute('href', 'project/toDoList2/index.html')
			a.setAttribute('target', '_blank')
		}
		if (link == 'Kasir Digital') {
			a.setAttribute('href', 'project/kasirDigital/index.html')
			a.setAttribute('target', '_blank')
		}
		if (link == 'R-P-S Game') {
			a.setAttribute('href', 'project/batuGuntingKertas/index.html')
			a.setAttribute('target', '_blank')
		}
		if (link == 'Color Set') {
			a.setAttribute('href', 'project/colorSet/index.html')
			a.setAttribute('target', '_blank')
		}
		if (link == 'Gallery Image') {
			a.setAttribute('href', 'project/galleryImage/index.html')
			a.setAttribute('target', '_blank')
		}
		if (link == 'TOEFL Value Convert') {
			a.setAttribute('href', 'project/konversiNilaiTOEFL/index.html')
			a.setAttribute('target', '_blank')
		} 
		a.parentElement.parentElement.style.display = 'none'
	})
}

// DarkMode

const setting = document.querySelector('.setting')
setting.addEventListener('click',()=>{
	setting.nextElementSibling.classList.toggle('on')
	setting.classList.add('spin')
	setTimeout(()=>{
		setting.classList.remove('spin')
	},1000)
})

const nav = document.getElementById('nav')
const home = document.getElementById('home')
const about = document.getElementById('about')
const project = document.getElementById('projects')
const cards = document.querySelectorAll('#card')
const contact = document.getElementById('contact')
const footer = document.querySelector('footer')
const darkMode = document.getElementById('darkMode')
darkMode.addEventListener('click',()=>{
	nav.classList.toggle('bg-dark')
	home.classList.toggle('bg-secondary')
	home.classList.toggle('text-light')
	about.classList.toggle('bg-dark')
	about.classList.toggle('text-light')
	project.classList.toggle('bg-dark')
	project.classList.toggle('text-light')

	cards.forEach(function(card){
		card.classList.toggle('bg-secondary')
		card.classList.toggle('text-light')
	})

	contact.classList.toggle('bg-secondary')
	contact.classList.toggle('text-light')
	footer.classList.toggle('bg-dark')
	footer.classList.toggle('text-light')
	if (darkMode.textContent == 'Dark Mode') {
		darkMode.textContent = 'Light Mode'
			darkMode.classList.add('bg-light')
			darkMode.classList.add('text-dark')
			darkMode.classList.remove('border-light')
	}  else {
		darkMode.textContent = 'Dark Mode'	
			darkMode.classList.remove('bg-light')
			darkMode.classList.remove('text-dark')
			darkMode.classList.add('border-light')
	} 
	darkMode.classList.add('flip')
	setTimeout(()=>{
		darkMode.classList.remove('flip')
	},1000)
})