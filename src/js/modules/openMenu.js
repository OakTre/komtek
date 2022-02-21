import gsap from "gsap";

export default () => {
	gsap.set(".js-menu", {y: "-100%"});
	gsap.set(".menu__bottom-block", {y: "2rem", opacity: 0});
	gsap.set(".menu__md-block", {y: "1rem", opacity: 0});
	gsap.set(".menu__top-block", {y: "-2rem", opacity: 0});

	const openMenuBtns = document.querySelectorAll(".js-open-menu");

	function isReversed(animation) {
		animation.reversed() ? animation.play() : animation.reverse();
	}

	let timeline = gsap.timeline({
		paused: true,
		reversed: true
	});

	timeline
		.to(".js-menu", {y: 0, duration: 0.8, ease: "power4.out"})
		.to(".menu__bottom-block", {y: 0, opacity: 1, duration: 0.8, ease: "power4.out"}, "-=0.4")
		.to(".menu__md-block", {y: 0, opacity: 1, duration: 0.8, ease: "power4.out"}, "-=0.4")
		.to(".menu__top-block", {y: 0, opacity: 1, duration: 0.8, ease: "power4.out"}, "-=0.8")

	openMenuBtns.forEach((btn)=>{
		btn.addEventListener("click", ()=>{
			isReversed(timeline);
			openMenuBtns.forEach((btn)=>{btn.classList.toggle("is-active");})
		});
	})
};
