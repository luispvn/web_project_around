let editInfo = document.querySelector(".profile__info");
let editButton = editInfo.querySelector(".profile__update");

let container = document.querySelector(".form");
let editShow = container.querySelector(".form__card");

function popupProfile() {
  editShow.classList.remove("form__card-hide");
}

editButton.addEventListener("click", popupProfile);

let closeEdit = container.querySelector(".form__close");

function closeForm() {
  editShow.classList.add("form__card-hide");
}

closeEdit.addEventListener("click", closeForm);

let editImage = document.querySelector(".profile");
let editImageButton = editImage.querySelector(".profile__add");

let editAdd = container.querySelector(".form__image");

function popupImage() {
  editAdd.classList.remove("form__image-hide");
}

editImageButton.addEventListener("click", popupImage);

let closeEditAdd = editAdd.querySelector(".form__profile");
let addClose = closeEditAdd.querySelector(".form__image-close");

function closeFormAdd() {
  editAdd.classList.add("form__image-hide");
}

addClose.addEventListener("click", closeFormAdd);

const profileName = document.querySelector("#profile-name");
const profileWork = document.querySelector(".profile__work");
const inputName = document.querySelector("#input-name");
const inputWork = document.querySelector("#input-work");
const saveButton = document.querySelector("#form__save-card");

saveButton.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileWork.textContent = inputWork.value;
  closeForm();
});
