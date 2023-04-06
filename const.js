const box = document.querySelector('.container');
const addBtn = document.querySelector('.add-btn');
const mdBox = document.querySelector('.homepage');
const mdClose = mdBox.querySelector('.homepage-close');
const addForm = document.forms.add;

const mdBoxLook = document.querySelector('.cardView-popup');
const mdLookClose = mdBoxLook.querySelector('.cardView-popup-close');
const mdBoxLookContent = document.querySelector('.content-cardView-popup');
const mdBoxLookInfo = document.querySelector('.cardView-popup-info');
const addFormGet = document.forms.get;

const mdBoxUpdate = document.querySelector('.cardUpdate-popup');
const mdUpdateClose = mdBoxUpdate.querySelector('.cardUpdate-popup-close');
const mdBoxUpdateContent = document.querySelector('.content-cardUpdate-popup');
const addFormUpdate = document.forms.update;

const path = `https://cats.petiteweb.dev/api/single/dianaveselkina`;

let cats = localStorage.getItem('cats-data');

const generateCardView = (cat) => {
  return `<div class='cardView-popup-info'>
  <div class="cardView">
  <div class="cardView-image">
 	<img src=${
    cat.image !== '' ? cat.image : 'default'
  } alt="Картинка котика" width = "300px"/> 
  </div>
	<div class="cardView-content">
		<div class="card-name">Имя: ${cat.name}</div>
		<div class="card-description">Описание: ${cat.description}</div>
		<div class="card-age">Возраст: ${cat.age}</div> 
		<div class="card-rate">Рейтинг: ${cat.rate}</div> 
		<button class="cardView-exit"></button>
	</div>
  </div>
 </div>`;
};
