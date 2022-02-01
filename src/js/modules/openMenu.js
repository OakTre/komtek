import gsap from "gsap";

export default () => {
	gsap.set(".js-menu", {y: "-100%"});
	gsap.set(".menu__bottom-block", {y: "2rem", opacity: 0});
	gsap.set(".menu__top-block", {y: "-2rem", opacity: 0});

	const openMenuBtn = document.querySelector(".js-open-menu");

	function isReversed(animation) {
		animation.reversed() ? animation.play() : animation.reverse();
	}

	let timeline = gsap.timeline({
		paused: true,
		reversed: true
	});

	timeline
		.to(".js-menu", {y: 0, duration: 1, ease: "power4.out"})
		.to(".menu__bottom-block", {y: 0, opacity: 1, duration: 1, ease: "power4.out"}, "-=0.5")
		.to(".menu__top-block", {y: 0, opacity: 1, duration: 1, ease: "power4.out"}, "-=1")

	openMenuBtn.addEventListener("click", ()=>{
		isReversed(timeline);
		openMenuBtn.classList.toggle("is-active");

	});
};
