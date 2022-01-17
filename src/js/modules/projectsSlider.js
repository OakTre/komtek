import { Navigation, Swiper } from 'swiper';
import gsap from "gsap";

Swiper.use([Navigation]);

export default () => {
	const projectsSlider = document.querySelector(".projects__slider");
	if (!projectsSlider) return;

	let sliderProject = new Swiper(projectsSlider, {
		slidesPerView: 1,
        spaceBetween: 10,
		speed: 600,
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
			769: {
				slidesPerView: "auto",
				spaceBetween: 20,
			},
		},
		on: {
			slideChange: function (swiper) {
				if (window.matchMedia("(min-width: 994px)").matches) {
					if (swiper.activeIndex === 1) {
						let blockWidth = +document.querySelector(".projects__content ._block:nth-child(1)").offsetWidth;
						blockWidth = blockWidth + 20;
						gsap.to(".projects__content ._block:nth-child(1)",{autoAlpha: 0, duration: 0.6, ease: "power4.out" });
						gsap.to(".projects__content ._block:nth-child(2)",{x: -blockWidth, duration: 0.6, ease: "power4.out" });
					} else if(swiper.activeIndex === 0) {
						gsap.to(".projects__content ._block:nth-child(2)",{x: 0, duration: 0.6, ease: "power4.out" });
						gsap.to(".projects__content ._block:nth-child(1)",{autoAlpha: 1, duration: 0.6, ease: "power4.out" });
					}
				}
			}
		},
	});
};
