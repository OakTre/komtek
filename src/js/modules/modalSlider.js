import { Navigation, Swiper } from 'swiper';

export default () => {
	const modalEvent = Array.from(document.querySelectorAll(".modal-event__slider"));
	if (!modalEvent) return;

	modalEvent.forEach( (slider) => {
		let modalEventSlider = new Swiper(slider, {
			slidesPerView: 1.3,
			spaceBetween: 20,
			navigation: {
				nextEl: slider.closest(".modal__content").querySelector('.js-modal-slider-nav-next'),
				prevEl: slider.closest(".modal__content").querySelector('.js-modal-slider-nav-prev'),
			},
		});
	});
};
