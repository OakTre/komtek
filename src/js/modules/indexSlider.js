import { Navigation, Swiper, Pagination, EffectFade, Controller, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade, Controller, Autoplay]);

export default () => {
	const slider1 = document.querySelector(".hero__slider");
	// const slider2 = document.querySelector(".hero__slider-img");
	if (!slider1) return;

	let swiperText = new Swiper(slider1, {
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			type: "custom",
			renderCustom: function(swiper, current, total) {
				var text = "<div class='_dots-container'>";
				for (let i = 1; i <= total; i++) {
				  if (current == i) {
					text += `<span class="_dot current">0${i}</span>`;
				  } else {
					text += `<span class="_dot">0${i}</span>`;
				  }
				}
				text += "</div>";
				return text;
			}
		},
		navigation: {
			nextEl: '.js-swiper-button-next',
			prevEl: '.js-swiper-button-prev',
		},
		effect: 'fade',
		fadeEffect: {
		  crossFade: true
		},
		autoplay: {
			delay: 9000,
			disableOnInteraction: false,
		},
		on: {
			afterInit: function() {
				let btn = document.querySelector(".js-hero-slider");

				btn.classList.add("js-anim-start");
			},
			slideChange: function () {
				let btn = document.querySelector(".js-hero-slider");

				btn.classList.remove("js-anim-start");
				setTimeout(() => {
					btn.classList.add("js-anim-start");
				});
			}
		}
	});

	// let swiperImg= new Swiper(slider2, {
	// 	effect: 'fade',
	// 	slidesPerView: 'auto',
	// 	fadeEffect: {
	// 	  crossFade: true
	// 	},
	// });

	// swiperText.controller.control = swiperImg;
	// swiperImg.controller.control = swiperText;

	let slideLength = document.querySelectorAll(".hero__slider-item").length;

	document.querySelector("._count ._dot").textContent = "0" + slideLength;
};
