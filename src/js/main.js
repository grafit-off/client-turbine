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
	if (window.innerWidth >= 1024) {
		const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';

		body.style.paddingRight = lockPaddingValue;
		lockPadding.forEach((el) => {
			el.style.paddingRight = lockPaddingValue;
		});
	}
	headerBurger.classList.toggle('active');
	headerMenu.classList.toggle('nav--visible');
	if (headerBurger.getAttribute('aria-expanded') == 'false') {
		headerBurger.setAttribute('aria-expanded', 'true')
		closeBtn.setAttribute('aria-expanded', 'true')
	} else {
		headerBurger.setAttribute('aria-expanded', 'false')
	}

	if (!isiPhone && !isiPad && !isiPod) { body.classList.toggle('lock'); }

}
if (isiPhone || isiPad || isiPod) {
	scrollLock_BtnListener(headerBurger);
}
headerBurger.addEventListener('click', () => {
	burgerToggle()
})

closeBtn.addEventListener('click', () => {
	burgerToggle();
	if (closeBtn.getAttribute('aria-expanded') == 'true') {
		closeBtn.setAttribute('aria-expanded', 'false')
	}
	if (isiPhone || isiPad || isiPod) {
		enableScroll();
		headerBurger.classList.toggle('scroll')
	}
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
const headerContainer = document.querySelector(".header__container");
const header = document.querySelector(".header");
let prevScrollpos = window.pageYOffset;

function navOpen() {
	if (prevScrollpos != 0) {
		headerContainer.classList.add('header__container--onscroll');
		header.classList.add('header--onscroll');
	} else {
		headerContainer.classList.remove('header__container--onscroll');
		header.classList.remove('header--onscroll');
	}
}
function navScroll() {
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos < currentScrollPos) {
			headerContainer.classList.add('header__container--onscroll');
			header.classList.add('header--onscroll');
		} else if (prevScrollpos = currentScrollPos) {
			setTimeout(() => {
				headerContainer.classList.add('header__container--onscroll');
				header.classList.add('header--onscroll');
			}, 0);
		} else {
			headerContainer.classList.remove('header__container--onscroll');
			header.classList.remove('header--onscroll');
		}
		prevScrollpos = currentScrollPos;
	}
}
navOpen()
navScroll()
// -- //

// Video turn on
const videoBtn = document.querySelector('.instruction__video-btn');
const video = document.querySelector('.modal__video')

videoBtn.addEventListener('click', () => {
	setTimeout(() => {
		video.play()
	}, 200);
})

const modal = document.querySelectorAll('.modal');
modal.forEach((el) => {
	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		if (e.target == document.querySelector('.modal__close') || e.target == el) {
			self.querySelector('.modal__video').pause();
		}
	})
});

// Swiper
const swiperBtnHidden = document.querySelector('.swiper__button--hidden');
const swiper = new Swiper(".swiper", {
	containerModifierClass: "swiper",
	wrapperClass: "swiper__wrapper",
	slideClass: "swiper__slide",
	spaceBetween: 50,
	loop: true,
	pagination: {
		el: '.swiper__pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: ".swiper__button--next",
		prevEl: ".swiper__button--prev"
	},
});
swiper.on('slideChange', () => {
	swiperBtnHidden.classList.remove('swiper__button--hidden');
})

// Accordion
document.querySelectorAll('.accordion-triger').forEach((item) =>
	item.addEventListener('click', () => {
		item.parentNode.classList.toggle('accordion--active');
		let accordionBody = item.parentNode.querySelector('.accordion__body');
		if (item.parentNode.classList.contains('accordion--active')) {
			item.parentNode.querySelector('.accordion-triger').setAttribute('aria-expanded', true)
			accordionBody.setAttribute('aria-hidden', false)
			accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
		} else {
			item.parentNode.querySelector('.accordion-triger').setAttribute('aria-expanded', false)
			accordionBody.setAttribute('aria-hidden', true)
			accordionBody.style.maxHeight = null;
		}
	})
)
// -- //


// Validate

const formTeaxtarea = document.querySelector('.form__input--textarea');
formTeaxtarea.addEventListener('click', () => {
	if (formTeaxtarea.value == '?????????? ?????? ??????????????') {
		formTeaxtarea.value = '';
	}
})

// -- //