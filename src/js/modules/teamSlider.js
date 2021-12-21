import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

export default () => {
	const teamSlider = document.querySelector(".our-team__slider");
	if (!teamSlider) return;

	let sliderTeam = new Swiper(teamSlider, {
		slidesPerView: 1.2,
        spaceBetween: 10,
		navigation: {
			nextEl: '.js-team-slider-nav-next',
			prevEl: '.js-team-slider-nav-prev',
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
			1200: {
				slidesPerView: 4,
				spaceBetween: 20
			},
		}
	});
};
