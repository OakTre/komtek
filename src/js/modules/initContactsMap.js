
export class ContactsMap {
	hostElem;
	mapElem;
	myMap;
	officesElems;

	officesArr = [];
	filteredForInputArr = [];
	filteredForPartnerArr = [];

	inputSearch;
	checkboxPartner;
	notFound;
	mapListElem;
	switcher;
	list;

	constructor(hostElem) {
		this.initMap = this.initMap.bind(this);

		this.hostElem = hostElem;
		this.mapElem = this.hostElem.querySelector('.js-map');
		this.officesElems = this.hostElem.querySelectorAll('.js-offices-item');
		this.mapListElem = this.hostElem.querySelector('.js-map-list');
		this.switcher = this.hostElem.querySelector('.js-switch');
		this.list = this.hostElem.querySelector('.js-map-list');

		ymaps.ready(this.initMap);
	}

	initMap() {
		const center = JSON.parse(this.mapElem.getAttribute('data-center'));

		this.myMap = new ymaps.Map(this.mapElem, {
			center: center,
			controls: [],
			zoom: 12
		}, {
			searchControlProvider: 'yandex#search'
		});

		this.officesElems.forEach(officeElem => {
			const newItem = {
				elem: officeElem,
				coords: JSON.parse(officeElem.getAttribute('data-coord')),
				address: officeElem.querySelector('.js-address').innerText,
				city: officeElem.querySelector('.js-city').innerText,
				phone: officeElem.querySelector('.js-phone').innerText,
				email: officeElem.querySelector('.js-email').innerText,
				time: officeElem.querySelector('.js-time').innerText,
				placemark: null
			}
			this.officesArr.push(newItem);

			// this.filteredForInputArr.push(newItem);

			// this.showNotFound(!this.filteredForInputArr.length);

			this.addGeoMark(newItem);

			officeElem.onclick = (e) => {
				this.myMap.setCenter(newItem.coords, 16);

				this.switcher.checked = false;

				this.mapElem.classList.add("mod-show");
				this.list.classList.remove("mod-show");
			}
		})

		this.setZoom();
	}

	setZoom() {
		this.myMap.controls.add('zoomControl', {
			position: {
				right: window.innerWidth > 768 ? 14 : 10,
				top: window.innerWidth > 768 ? 14 : 12
			}
		})

		this.myMap.behaviors.disable('scrollZoom');
	}

	addGeoMark(newItem) {
		const myPlacemark = new ymaps.Placemark([newItem.coords[0], newItem.coords[1]], {
			balloonContentHeader: `
		  <div class="header-wrapper">
		  	<div class="city">${newItem.city}</div>
		  </div>
		`,
			balloonContentBody: `
		  <div class="body-wrapper">
			<div class="body-item">
				<div class="caption">${newItem.address}</div>
			  	<div class="value">${newItem.time}</div>
			</div>
			<div class="body-item">
			  <div class="caption bold">${newItem.phone}</div>
			  <div class="value">${newItem.email}</div>
			</div>
		  </div>
		`,
			hintContent: newItem.address
		}, {
			iconLayout: 'default#image',
			iconImageHref: this.mapElem.getAttribute('data-pin'),
			iconImageSize: [60, 60],
			iconImageOffset: [0, 0],
			hideIconOnBalloonOpen: false
		});
		newItem.placemark = myPlacemark
		this.myMap.geoObjects.add(myPlacemark);
	}
}

