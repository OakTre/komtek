import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

export default () => {
	const siteSlider = document.querySelector(".site-slider__slider");
	if (!siteSlider) return;

	let sliderTeam = new Swiper(siteSlider, {
		slidesPerView: 1.2,
        spaceBetween: 10,
		navigation: {
			nextEl: '.js-site-slider-nav-next',
			prevEl: '.js-site-slider-nav-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1.3,
			  spaceBetween: 10
			},
			// when window width is >= 480px
			767: {
			  slidesPerView: 3,
			  spaceBetween: 20
			},
		}
	});
};
