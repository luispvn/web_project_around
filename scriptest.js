let editInfo = document.querySelector(".profile__info");
let editButton = editInfo.querySelector(".profile__update");

let container = document.querySelector(".form");
let editShow = container.querySelector(".form__card");

function popupProfile() {
  editShow.classList.toggle("form__card-hide");
}

editButton.addEventListener("click", popupProfile);
