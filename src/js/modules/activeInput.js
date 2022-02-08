export default () => {
	const inputs = document.querySelectorAll(".input");

	if (inputs.length) {
		inputs.forEach(input => {
			const inputContainer = input.closest(".form__label");

			if(input.value) {
				inputContainer.querySelector(".input-heading").classList.add("is-active");
			}

			input.addEventListener("change", ()=>{
				const container = input.closest(".form__label");
				const heading = container.querySelector(".input-heading");
				const ok = container.querySelector(".input-ok");

				if(input.value) {
					heading.classList.add("is-active");
					ok.classList.add("is-shown");
				} else {
					heading.classList.remove("is-active");
					ok.classList.remove("is-shown");
				}
			});
		});
	}
}
