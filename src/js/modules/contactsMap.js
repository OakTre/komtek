import { ContactsMap } from "./initContactsMap"

export default () => {
	const switcher = document.querySelector(".js-switch");
	const list = document.querySelector(".contacts-map__list");
	const map = document.querySelector("#map");
	const hostElem = document.querySelector('#contacts-map-host');

	if (!switcher) return;

	switcher.addEventListener("click", (e)=>{
		let self = e.currentTarget;

		if (self.checked) {
			list.classList.add("mod-show");
			map.classList.remove("mod-show");
		} else {
			list.classList.remove("mod-show");
			map.classList.add("mod-show");
		}
	});

	new ContactsMap(hostElem);
};
