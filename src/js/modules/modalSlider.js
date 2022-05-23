import { Navigation, Swiper } from 'swiper';

export default () => {
	const modalEvent = Array.from(document.querySelectorAll(".modal-event__slider"));
	if (!modalEvent) return;

	modalEvent.forEach( (slider) => {
		let modalEventSlider = new Swiper(slider, {
			slidesPerView: 1.3,
			spaceBetween: 20,
			navigation: {
				nextEl: slider.querySelector('.js-modal-slider-nav-next'),
				prevEl: slider.querySelector('.js-modal-slider-nav-prev'),
			},
		});
	});
};
