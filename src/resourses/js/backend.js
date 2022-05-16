function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject)=> {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = "json";
		xhr.setRequestHeader("Content-Type", "application/json")

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);
			}
		};

		xhr.onerror = () => {
			reject(xhr.response);
		};

		xhr.send(JSON.stringify(body));
	});
};

document.addEventListener("DOMContentLoaded", function (event) {
	const forms = Array.from(document.querySelectorAll("form"));
	const succesContainer = document.querySelector(".js-success-block");
	const formContainer = document.querySelector(".js-form-block");
	const callbackSection = document.querySelector(".js-container");

	forms.forEach(form=>{
		form.addEventListener("submit", (e)=>{
			e.preventDefault();
			let url = form.getAttribute("action");

			let data = {
				name: "123"
			};

			sendRequest("GET", url, data)
				.then(resp=>{
					succesContainer.classList.add("is-active");
					formContainer.classList.add("is-hidden");
					callbackSection.classList.add("is-succes-visible");
				})
				.catch(resp=>{
					console.log("erro");
				});
		});
	});
});
