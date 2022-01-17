export default () => {
	const btntop = document.querySelector('.btn-top-container');
	const first = document.querySelector('.map');
	const btntopHeight = btntop.offsetHeight;
	const firstHeight = first.offsetHeight;
	let lastScrollTop = 0;
	const btnTop = document.querySelector(".btn-top");

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;

		if (scrollDistance >= firstHeight + btntopHeight) {
			btntop.classList.add('is-active');
		} else {
			btntop.classList.remove('is-active');
		}

		// if (scrollDistance > lastScrollTop) {
		// 	btntop.classList.remove('is-active');
		// } else {
		// 	btntop.classList.add('is-active');
		// }

		// if (scrollDistance === 0) {
		// 	btntop.classList.remove('is-active');
		// }

		lastScrollTop = scrollDistance;
	});

	btnTop.addEventListener("click", ()=>{
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});


};
