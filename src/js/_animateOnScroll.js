// Animate In Scroll
// class="animate-item" data-animation='from-left' data-animation-once
const animItems = document.querySelectorAll('.animate-item');

const scrollAnimate = () => {
	// let windowCenter = (window.innerHeight / 2) + window.scrollY;
	let windowBottom = window.innerHeight + window.scrollY - 300;
	animItems.forEach((el) => {
		let scrollOffset = el.offsetTop;
		if (windowBottom >= scrollOffset) {
			el.classList.add('animated')
		} else {
			let animationRepeat = el.hasAttribute('data-animation-once');
			if (!animationRepeat) {
				el.classList.remove('animated')
			}
		}
	});
}
if (animItems.length != 0) {
	console.log('@ANIMATEONSCROLL: "На странице есть елементы анимации. Функция scrollAnimate включена!"')
	scrollAnimate()
	window.addEventListener('scroll', () => {
		scrollAnimate()
	})
} else {
	console.log('@ANIMATEONSCROLL: "На странице нету елементов анимации, НО функция scrollAnimate включена! Возможно вам стоит её отключить?"')
}

// -- //
// ПОЧИНИТЬ!

/*
function offset(el) {
	 var rect = el.getBoundingClientRect(),
	 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	 return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
*/