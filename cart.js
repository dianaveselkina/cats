function createCard(cat, el = box) {
  const card = document.createElement("div");
  card.className = "card";
  
  const btn = document.createElement("div");
  btn.className="btn-card"

  
  const button1 = document.createElement("BUTTON");
  button1.className="look"
  button1.innerHTML="Посмотреть"
  btn.append(button1)

  const button2 = document.createElement("BUTTON");
  button2.className="change"
  button2.innerHTML="Изменить"
  btn.append(button2)

  const button3 = document.createElement("BUTTON");
  button3.className="delete"
  button3.innerHTML="Удалить"
  btn.append(button3)

  card.append(btn)

  button1.onclick = function getCat() {
    fetch(`${path}/show/${cat.id}`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              },
            })
            .then(res => 
            res.json())
            .then (res => {
            mdBoxLookContent.insertAdjacentHTML('beforeend', generateCardView(res)) 
            mdBoxLook.style.display = "flex"
            
            })
            }
  
        

  button2.onclick = function updateCat() {
    fetch(`${path}/update/${cat.id}`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json"
              },
            })
            .then(res => 
              res.json())
              .then (res => {
              mdBoxLookContent.insertAdjacentHTML('beforeend', generateCardView(res)) 
              mdBoxUpdate.style.display = "flex"
          })
      }

  button3.onclick = function deleteCard() {
    
        fetch(`${path}/delete/${cat.id}`, {
            method: "delete"
        })
            .then(res => {
                  if (res.status === 200) {
                  el.remove();
                }
            })
    
}

  

  if (!cat.image) {
      card.classList.add("default");
  } else {
      card.style.backgroundImage = `url(${cat.image})`;
  }
  const name = document.createElement("h3");
  name.innerText = cat.name;
  const like = document.createElement("i");
  like.className = "fa-heart card__like";
  like.classList.add(cat.favorite ? "fa-solid" : "fa-regular");
  like.addEventListener("click", e => {
      e.stopPropagation();
      if (cat.id) {
          fetch(`${path}/update/${cat.id}`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({favorite: !cat.favorite})
          })
          .then(res => {
              if (res.status === 200) {
                  like.classList.toggle("fa-solid");
                  like.classList.toggle("fa-regular");
              }
          })
      }
  })
  card.append(like, name);
    
    
    el.append(card);
}

function deleteCard(id, el) {
  if (id) {
      fetch(`${path}/delete/${id}`, {
          method: "delete"
      })
          .then(res => {
              
              if (res.status === 200) {
                  el.remove();
              }
          })
  }
}


fetch(path + "/show")
  .then(function(res) {
      console.log(res);
      if (res.statusText === "OK") {
          
          return res.json();
      }
  })
  .then(function(data) {
      
      if (!data.length) {
          box.innerHTML = "<div class=\"empty\">У вас еще нет котов</div>"
      } else {
          for (let c of data) {
              createCard(c, box);
          }
      }
  })



function addCat(cat) {
  fetch(path + "/add", {
      method: "POST", 
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(cat)
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
  })
}

