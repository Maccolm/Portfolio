
//menu burger=================================================

const iconMenu = document.querySelector('.menu__icon');
const headerButton = document.querySelector('.header__button');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		});
}

//===================swiper============================================================
//slider
new Swiper('.portfolio__slider', {
  navigation: {
    nextEl: '.portfolio__arrow_right',
    prevEl: '.portfolio__arrow_left',
  },
  loop: false,
  slidesPerView: 3,
  spaceBetween: 56,
  observer: true, 
  observeParents: true,
  speed: 800,
  // autoHeight: false,

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
		},
		650: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			spaceBetween: 55,
		},
}

  // If we need pagination

  // Navigation arrows
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

//===================TABS============================================================

const tabsBtns = document.querySelectorAll(".navigation-career__title");
const tabsItems = document.querySelectorAll(".content-career__body");

tabsBtns.forEach(function (item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (! currentBtn.classList.contains("_tab-active")) {
			tabsBtns.forEach(function (item) {
				item.classList.remove("_tab-active");
			});

			tabsItems.forEach(function (e) {
				e.classList.remove("_tab-active");
			});
		}



		currentBtn.classList.add("_tab-active");
		currentTab.classList.add("_tab-active");
	});
});

//===============================================================================\
//Плавна прокрутка

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
 
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}

//====================================================================================
//Continue reading
function readMore() {

const dots = document.getElementById("dots");
const dots3 = document.getElementById("dots3");

const more = document.getElementById("more");
const more3 = document.getElementById("more3");

const btn = document.getElementById("btn");
const btn3 = document.getElementById("btn3");

		if (dots.style.display === "none") {
			dots.style.display = "inline";
			btn.innerHTML = "Continue Reading";
			more.classList.remove("_open");
		} else {
			dots.style.display = "none" ;
			btn.innerHTML = "Read Less" ;
			more.classList.add("_open") ;
		}
}

function readMoreSecond() {
	const dots2 = document.getElementById("dots2");
	const more2 = document.getElementById("more2");
	const btn2 = document.getElementById("btn2");

	if (dots2.style.display === "none" ) {
			dots2.style.display = "inline";
			btn2.innerHTML = "Continue Reading";
			more2.classList.remove("_open");
		} else {
			dots2.style.display = "none" ;
			btn2.innerHTML = "Read Less" ;
			more2.classList.add("_open") ;
	}

}function readMoreThird() {
	const dots3 = document.getElementById("dots3");
	const more3 = document.getElementById("more3");
	const btn3 = document.getElementById("btn3");

	if (dots3.style.display === "none" ) {
			dots3.style.display = "inline";
			btn3.innerHTML = "Continue Reading";
			more3.classList.remove("_open");
		} else {
			dots3.style.display = "none" ;
			btn3.innerHTML = "Read Less" ;
			more3.classList.add("_open") ;
	}
}
