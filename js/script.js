var swiper = new Swiper(".my-swiper", {
	navigation: {
    nextEl: '.swiper-button-next',
	},
	scrollbar: {
    el: '.swiper-scrollbar',
	},
  pagination: {
    el: '.swiper-pagination',
  },
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
	300: {
		slidesPerView: 1,
	},
	992: {
		slidesPerView: 3,
	}
},
});

const swiperNext = document.getElementById('swiperNext')
swiperNext.addEventListener('click', () => {
  swiper.slideNext();
})