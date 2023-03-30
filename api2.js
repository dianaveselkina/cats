const config = {
	baseUrl: 'https://cats.petiteweb.dev/api/single/dianaveselkina/',
};

export const getAllCats = () => {
    return fetch(`${config.baseUrl}show`).then((res) => {
        return res.ok ? res.json() : Promise.reject('я не кот');
    });
};

export const addCat = (cat) => {
    return fetch(`${config.baseUrl}add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cat),
    }).then((res) => {
        return res.ok ? res.json() : Promise.reject('я не кот');
    });
};

export const updateCat = (newCat) => {
    return fetch(`${config.baseUrl}update/${newCat.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCat),
    }).then((res) => {
        return res.ok ? res.json() : Promise.reject('я не кот');
    });
};

export const getAllCatsIds = () => {
    return fetch(`${config.baseUrl}ids`).then((res) => {
        return res.ok ? res.json() : Promise.reject('я не кот');
    });
};

export const getCat = (catId) => {
    return fetch(`${config.baseUrl}show/${catId}`).then((res) => {
        return res.ok ? res.json() : Promise.reject('я не кот');
    });
};

export const deleteCat = (id) => {
    return fetch(`${config.baseUrl}delete/${id}`, {
        method: 'DELETE',
    }).then((res) => {
        return res.ok ? res.json() : Promise.reject('я не кот');
    });
};