//código para abrir el formulario de actualización de nombre
const editInfo = document.querySelector(".profile__info");
const editButton = editInfo.querySelector(".profile__update");
const container = document.querySelector(".form");
const editShow = container.querySelector(".form__card");
function popupProfile() {
  editShow.classList.remove("form__card-hide");
}
editButton.addEventListener("click", popupProfile);

//código para cerrar el formulario de actualización de nombre
const closeEdit = container.querySelector(".form__close");
function closeForm() {
  editShow.classList.add("form__card-hide");
}
closeEdit.addEventListener("click", closeForm);

//código para abrir el formulario de actualización de imagenes
const editImage = document.querySelector(".profile");
const editImageButton = editImage.querySelector(".profile__add");
const editAdd = container.querySelector(".form__image");
const saveImage = document.querySelector("#form__create");
const imageNew = document.querySelector("#new-image");
function popupImage() {
  editAdd.classList.remove("form__image-hide");
}
editImageButton.addEventListener("click", popupImage);

//código para cerrar el formulario de actualización de imágenes
const closeEditAdd = editAdd.querySelector(".form__profile");
const addClose = closeEditAdd.querySelector(".form__image-close");
function closeFormAdd() {
  editAdd.classList.add("form__image-hide");
}
addClose.addEventListener("click", closeFormAdd);

//código para conectar el formulario al nombre que aparece en pantalla
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

//array de las cards
const template = document.querySelector(".template__card");
const cardArea = document.querySelector(".elements");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function cardClone(name, link) {
  const card = template
    .cloneNode(true)
    .content.querySelector(".elements__card");
  const cardImage = card.querySelector(".elements__image");
  const cardTitle = card.querySelector(".elements__title");
  const btnDelete = card.querySelector(".elements__delete");

  btnDelete.addEventListener("click", function () {
    card.remove();
  });

  const btnLike = card.querySelector(".elements__btn-like");
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("elements__btn-like_active");
  });

  cardImage.addEventListener("click", openImage);

  function openImage() {
    imageCover.classList.remove("elements__image-cover-hide");
    imageFull.src = cardImage.src;
    imageSubtitle.textContent = cardTitle.textContent;
  }

  cardImage.src = link || imageLink.value;
  cardTitle.textContent = name || imageName.value;
  cardArea.alt = name || imageName.value;
  return card;
}

initialCards.forEach(function (element) {
  const newCard = cardClone(element.name, element.link);
  cardArea.append(newCard);
});

const imageName = document.querySelector("#input-title");
const imageLink = document.querySelector("#input-url");

imageNew.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardSaved = cardClone();
  cardArea.prepend(cardSaved);
  cardClone();
  closeFormAdd();
});

const imageCover = document.querySelector(".elements__image-cover");
const imageWindow = imageCover.querySelector(".elements__image-window");
const imageFull = imageWindow.querySelector(".elements__image-full");
const imageClose = imageCover.querySelector(".elements__window-close");
const imageSubtitle = imageWindow.querySelector(".elements__image-name");

function closeImage() {
  imageCover.classList.add("elements__image-cover-hide");
  console.log(Event);
}
imageClose.addEventListener("click", closeImage);
