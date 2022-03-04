import gsap from "gsap";

export default () => {
	function disableScroll() {
		let pagePosition = window.scrollY;
		lockPadding();
		document.body.classList.add('disable-scroll');
		document.body.dataset.position = pagePosition;
		document.body.style.top = -pagePosition + 'px';
	}

	function enableScroll() {
		let pagePosition = parseInt(document.body.dataset.position, 10);
		unlockPadding();
		document.body.style.top = 'auto';
		document.body.classList.remove('disable-scroll');
		window.scroll({
			top: pagePosition,
			left: 0
		});
		document.body.removeAttribute('data-position');
	}

	function lockPadding() {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		document.body.style.paddingRight = paddingOffset;
	}

	function unlockPadding() {
		document.body.style.paddingRight = '0px';
	}

	gsap.set(".js-menu", {
		y: "-100%"
	});
	gsap.set(".menu__bottom-block", {
		y: "2rem",
		opacity: 0
	});
	gsap.set(".menu__md-block", {
		y: "1rem",
		opacity: 0
	});
	gsap.set(".menu__top-block", {
		y: "-2rem",
		opacity: 0
	});

	const openMenuBtns = document.querySelectorAll(".js-open-menu");

	function isReversed(animation) {
		animation.reversed() ? animation.play() : animation.reverse();
	};

	let timeline = gsap.timeline({
		paused: true,
		reversed: true
	});

	timeline
		.to(".js-menu", {
			y: 0,
			duration: 0.8,
			ease: "power4.out"
		})
		.to(".menu__bottom-block", {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: "power4.out"
		}, "-=0.4")
		.to(".menu__md-block", {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: "power4.out"
		}, "-=0.4")
		.to(".menu__top-block", {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: "power4.out"
		}, "-=0.8")

	let flag = false;

	openMenuBtns.forEach((btn) => {
		btn.addEventListener("click", () => {

			switch (flag) {
				case false:
					timeline.play();
					disableScroll();
					flag = true;
					break;
				case true:
					timeline.reverse();
					enableScroll();
					flag = false;
					break;
			}

			openMenuBtns.forEach((btn) => {
				btn.classList.toggle("is-active");
			})
		});
	})
};
