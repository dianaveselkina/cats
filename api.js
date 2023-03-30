const config = {
	baseUrl: 'https://cats.petiteweb.dev/api/single/dianaveselkina/',
};

class Api {
	constructor(config) {
		this.baseUrl = config.baseUrl;
	}

	getAllCats = () => {
		return fetch(`${this.baseUrl}show`).then((res) => {
			return res.ok ? res.json() : Promise.reject('я не кот');
		});
	};

	addCat = (cat) => {
		return fetch(`${this.baseUrl}add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cat),
		}).then((res) => {
			return res.ok ? res.json() : Promise.reject('я не кот');
		});
	};

	updateCat = (newCat) => {
		return fetch(`${this.baseUrl}update/${newCat.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newCat),
		}).then((res) => {
			return res.ok ? res.json() : Promise.reject('Я не кот');
		});
	};
}

getAllCatsIds = () => {
    return fetch(`${this.baseUrl}ids`).then((res) => {
    return res.ok ? res.json() : Promise.reject(res.json());
  });
};


getCat = (catId) => {
    return fetch(`${this.baseUrl}show/${catId}`).then((res) => {
    return res.ok ? res.json() : Promise.reject('я не кот');
  });
};


deleteCat = (id) => {
  return fetch(`${this.baseUrl}update/${id}`, {
    method: 'DELETE',
    }).then((res) => {
    return res.ok ? res.json() : Promise.reject('я не кот');
  });
};

let api = new Api({
	baseUrl: 'https://cats.petiteweb.dev/api/single/dianaveselkina/',
});

// export default api;





// api
// 	.getAllCats()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

//  api
//  	.updateCat({
//  		id: 3,
//  		name: 'Барсик',
//  		favorite: false,
//  		rate: 8,
//  		age: 3,
//  		description: 'Черный кот',
//  		image:
//      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.maximonline.ru%2Flongreads%2Fsposobny-li-koty-lyubit-mnenie-uchenykh-id681825%2F&psig=AOvVaw2kool9TgHjqjEFQZKH-rxk&ust=1679829797015000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDnx-X79v0CFQAAAAAdAAAAABAE",
//  	})
//  	.then((res) => {
//  		console.log(res);
//  	})
//  	.catch((error) => {
//  		console.log(error);
//  	});

//  api
//  	.addCat({
//  		id: 2,
//  		name: 'Муся',
//  		favorite: false,
//  		rate: 10,
//  		age: 2,
//  		description: 'Белая девочка',
//  		image:
//      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgraziamagazine.ru%2Flifestyle%2Fiz-za-chego-koty-plachut-spoyler-ne-potomu-chto-im-grustno%2F&psig=AOvVaw3LtzVjdi5LCLyaul6bC-8D&ust=1679776416732000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCd8ve09f0CFQAAAAAdAAAAABAJ",
//  	})
//  	.then((res) => {
//  		console.log(res);
//  	})
//  	.catch((error) => {
//  		console.log(error);
//  	});

//    api
//    .getAllCatsIds()
//    .then((res) => {
//      console.log(res);
//    })
//    .catch((error) => {
//      console.log(error);
//    });

//    api
//    .getCat()
//    .then((res) => {
//      console.log(res);
//    })
//    .catch((error) => {
//      console.log(error);
//    });

//    api
//    .deleteCat()
//    .then((res) => {
//      console.log(res);
//    })
//    .catch((error) => {
//      console.log(error);
//    });
 

