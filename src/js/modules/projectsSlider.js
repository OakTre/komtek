import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

export default () => {
	const projectsSlider = document.querySelector(".projects__slider");
	if (!projectsSlider) return;

	let sliderProject = new Swiper(projectsSlider, {
		slidesPerView: 'auto',
        spaceBetween: 20,
		navigation: {
			nextEl: '.js-projects-slider-nav-next',
			prevEl: '.js-projects-slider-nav-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			768: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 'auto',
			},
		}
	});
};
