import { Navigation, Swiper } from 'swiper';

Swiper.use([Navigation]);

export default () => {
	const historySlider = document.querySelector(".js-history-slider");
	if (!historySlider) return;

	let sliderHistory = new Swiper(historySlider, {
		slidesPerView: 3,
        spaceBetween: 0,
		navigation: {
			nextEl: '.js-history-slider-nav-next',
			prevEl: '.js-history-slider-nav-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			// 320: {
			//   slidesPerView: 1.3,
			//   spaceBetween: 10
			// },
			// // when window width is >= 480px
			// 767: {
			//   slidesPerView: 3,
			//   spaceBetween: 20
			// },
			// 1200: {
			// 	slidesPerView: 4,
			// 	spaceBetween: 20
			// },
		}
	});
};
