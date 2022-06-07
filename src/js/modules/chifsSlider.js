import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default () => {
	const chifsSlider = document.querySelector(".chifs-slider");
	if (!chifsSlider) return;

	let sliderChief = new Swiper(chifsSlider, {
		slidesPerView: 1.2,
        spaceBetween: 10,
		navigation: {
			nextEl: '.js-chif-slider-nav-next',
			prevEl: '.js-chif-slider-nav-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1.3,
			  spaceBetween: 18
			},
			// when window width is >= 480px
			767: {
			  slidesPerView: 2.1,
			  spaceBetween: 20
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 20
			},
		}
	});
};
