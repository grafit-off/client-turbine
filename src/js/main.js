// Includes
@include('_scrollLockIOS.js');
@include('_dynamicAdapt.js');
@include('_modal.js');
// -- //


// Burger Menu
const headerBurger = document.querySelector('.burger');
const headerMenu = document.querySelector('.nav');
const headerLink = document.querySelectorAll('.menu__link');
const closeBtn = document.querySelector('.nav__menu-close')

function burgerToggle() {
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('nav--visible');
	body.classList.toggle('lock');
}

headerBurger.addEventListener('click', () => {
	burgerToggle()
})

if (isiPhone || isiPad || isiPod) {
	scrollLock_BtnListener(headerBurger);
	scrollLock_BtnListener(closeBtn);
}

closeBtn.addEventListener('click', () => {
	burgerToggle()
})
headerLink.forEach((el) => {
	el.addEventListener('click', () => {
		if (isiPhone || isiPad || isiPod) {
			enableScroll();
			headerBurger.classList.toggle('scroll');
		}
		setTimeout(() => {
			burgerToggle();
		}, 200)
	})
})

// -- //

// Active header on scroll
const header = document.querySelector(".header");
let prevScrollpos = window.pageYOffset;
console.log(prevScrollpos);

function navOpen() {
	if (prevScrollpos != 0) {
		header.classList.add('header--onscroll');
	} else {
		header.classList.remove('header--onscroll');
	}
}
function navScroll() {
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos < currentScrollPos) {
			header.classList.add('header--onscroll');
		} else if (prevScrollpos = currentScrollPos) {
			setTimeout(() => {
				header.classList.add('header--onscroll');
			}, 0);
		} else {
			header.classList.remove('header--onscroll');
		}
		prevScrollpos = currentScrollPos;
	}
}
navOpen()
navScroll()
// -- //