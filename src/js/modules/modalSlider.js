import { Navigation, Swiper } from 'swiper';

export default () => {
	const modalEvent = document.querySelector(".modal-event__slider");
	if (!modalEvent) return;

	let modalEventSlider = new Swiper(modalEvent, {
		slidesPerView: 1.3,
        spaceBetween: 20,
		navigation: {
			nextEl: '.js-modal-slider-nav-next',
			prevEl: '.js-modal-slider-nav-prev',
		},
	});

	window.modalSliderUpdate = () => {
		modalEventSlider.update();
	};
};
