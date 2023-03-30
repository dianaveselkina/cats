const homepage = document.getElementById('homepage');
console.log(homepage);

const refreshCatsAndContent = () => {
	const content = document.getElementsByClassName('content')[0];
	content.innerHTML = '';

	api.getAllCats().then((res) => {
		console.log(res);
		const cards = res.reduce((acc, el) => (acc += generateCard(el)), '');
		content.insertAdjacentHTML('afterbegin', cards); //загуглите insertAdjacentHTML afterbegin
	});
};

refreshCatsAndContent();

document
	.getElementsByClassName('content')[0]
	.addEventListener('click', (event) => {
		console.log(event.target);
		if (event.target.tagName === 'BUTTON') {
			console.log(event.target.className);
			// переписать на switch
			if (event.target.className === 'cat-card-view') {
			} else if (event.target.className === 'cat-card-update') {
			} else if (event.target.className === 'cat-card-delete') {
				api.deleteCat(event.target.value).then((res) => {
					console.log(res);
					refreshCatsAndContent();
				});
			}
		}
	});

document.forms[0].addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(event.target);
	const formData = new FormData(event.target);
	const body = Object.fromEntries(formData.entries());
	console.log(formData);
	console.log(body);

    // api.addCat() с использованием getNewIdOfCat
    // api.updateCat() с использованием getNewIdOfCat
});

const getNewIdOfCat = () => {
	return api.getIdsOfCat().then((res) => {
		return Math.max(...res) + 1;
	});
};

getNewIdOfCat().then((res) => {
	console.log(res);
});