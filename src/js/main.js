import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import indexSlider from "./modules/indexSlider";
import teamSlider from "./modules/teamSlider";
import siteSlider from "./modules/siteSlider";
import projectsSlider from "./modules/projectsSlider";
import btnHide from "./modules/btnHide";
import openMenu from "./modules/openMenu";
import initSelects from "./modules/initSelects.js";
import activeInput from "./modules/activeInput.js";
import validation from "./modules/validation.js";
import inputMask from "./modules/inputMask.js";
import initHistorySlider from "./modules/initHistorySlider.js";
import initAccordion from "./modules/initAccordion.js";
import initTabs from "./modules/initTabs";
import contactsMap from "./modules/contactsMap";
import chifsSlider from "./modules/chifsSlider";
import searchResult from "./modules/searchResult.js";
import showListProjects from "./modules/showListProjects.js";
import fileUpload from './modules/fileUpload.js';
import initModal from './modules/initModal.js';
import modalSlider from './modules/modalSlider.js';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function startAnim() {
	const tmln1 = gsap.timeline();
	tmln1.to(".header__container", { y: 0, autoAlpha: 1, duration: 1, ease: "power4.out", clearProps: "all" })

	if (document.querySelector(".hero__title")) {
		tmln1
			.to(".hero__title", { y: 0, opacity: 1, duration: 1, ease: "power4.out", clearProps: "all" }, "-=0.9")
			.to(".hero__btn", { y: 0, opacity: 1, duration: 1, ease: "power4.out", clearProps: "all" }, "-=0.7")
			.to(".hero__slider-warpper", { opacity: 1.2, duration: 1, ease: "power4.out", clearProps: "all" }, "-=0.9")
			.to(".hero__slider-img", { y: 0, opacity: 1, duration: 1, ease: "power4.out", clearProps: "all" }, "-=0.9")
			.to(".js-first-step", { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", clearProps: "all" }, '-=0.1')
			.to(".js-second-step", { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", clearProps: "all" }, '-=0.1')
			.to(".hero__rec", { opacity: 1, duration: 1.2, ease: "power4.out", clearProps: "all" }, "-=1.2");
	}

}

window.onload = function () {
	let preloader = document.querySelector(".preloader");
	preloader.classList.add("_is-loaded");

	setTimeout(() => {
		startAnim();
	}, 150);

	setTimeout(() => {
		preloader.style.display = "none";
	}, 550);
};

documentReady(() => {
	lazyImages();
	indexSlider();
	teamSlider();
	projectsSlider();
	btnHide();
	openMenu();
	initSelects();
	activeInput();
	validation();
	inputMask();
	initHistorySlider();
	initAccordion();
	initTabs();
	contactsMap();
	chifsSlider();
	searchResult();
	siteSlider();
	showListProjects();
	fileUpload();
	initModal();
	modalSlider();

	const showBtn = document.querySelector(".team-lead__btn");

	if (showBtn) {
		showBtn.addEventListener("click", ()=>{
			document.querySelector(".team-lead__text-wrapper").classList.toggle("is-active");
			showBtn.classList.toggle("is-active");
		});
	}

	gsap.registerPlugin(ScrollTrigger);

	gsap.set(".header__container", { y: -50, autoAlpha: 0 });

	if (document.querySelector(".hero__slider-warpper")) {
		gsap.set(".hero__slider-warpper", { opacity: 0 });
		gsap.set(".hero__title", { opacity: 0, y: -75 });
		gsap.set(".hero__btn", { opacity: 0, y: -75 });
		gsap.set(".hero__slider-img", { opacity: 0, y: -75 });
		gsap.set(".hero__rec", { opacity: 0 });
		gsap.utils.toArray(".js-opacity-el").forEach((el) => {
			gsap.set(el, { opacity: 0, y: "-4rem" });
		});
	}


	if(document.querySelector(".parallax")) {
		// paralax
		const tmln = gsap.timeline({
			scrollTrigger: {
				trigger: ".parallax",
				start: "top 85%",
				end: "bottom 30%",
				scrub: true
			}
		});

		gsap.utils.toArray(".parallax").forEach(layer => {
			gsap.set(layer, { y: 175 })
		});

		gsap.utils.toArray(".parallax").forEach(layer => {
			gsap.to(layer, {
				y: 0,
				duration: 1,
				ease: "sine.out",
				// ease: "power4.out",
				scrollTrigger: {
					trigger: layer,
					start: "top 90%",
					end: "bottom top",
				}
			});
		});
	}


	if (document.querySelector(".map")) {
		gsap.set(".map__map-img", { y: 75 });
		gsap.set(".map", { y: 185 });
		gsap.set(".map__title", { autoAlpha: 0 });

		const tmln2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".map",
				start: "top bottom",
				end: "bottom top",
			}
		});

		tmln2
			.to(".map__title", { autoAlpha: 1, duration: 2.5, ease: "power4.out" })
			.to(".map__map-img", { y: 0 }, "-=2.5")
			.to(".map", { y: 0, duration: 2.5, ease: "power4.out" }, "-=2.5");

		gsap.utils.toArray(".map__info-item ._layer").forEach(layer => {
			tmln2.to(layer, { y: "-100%", duration: 1.8, ease: "power4.out" }, "-=2.5");
		});
	}
});
