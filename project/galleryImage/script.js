let boxx = document.querySelector('.boxx')
let imgs = document.querySelectorAll('.list-img img')
let blur = document.querySelectorAll('.img')
let box = document.querySelector('.container .box')

imgs.forEach(function (img) {
	img.addEventListener('click', ()=>{
		boxx.src = img.src
		boxx.style.width = '100%'
		boxx.style.boxShadow = '0 0 10px 3px rgba(255,255,255, .5)'
		boxx.classList.add('fade')

		setTimeout(()=>{
			boxx.classList.remove('fade')
		}, 100)

		blur.forEach( function(blr) {
			if(blr.classList.contains('active')){
				blr.classList.remove('active')
			}
		});
		img.classList.add('active')

		box.style.backgroundImage = 'url('+img.src+')'
		box.style.filter = 'blur(10px)'
		boxx.style.filter = 'blur(0)'
	})		
})



















