function enableValidation(settings) {
  const formElement = document.querySelector(settings.formSelector);
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );

  inputList.forEach(function (input) {
    input.addEventListener("input", function () {
      checkInputValidity(input, settings);
    });
  });

  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(".form__content-button_disabled");
    } else {
      buttonElement.classList.remove(".form__content-button_disabled");
    }
  };

  toggleButtonState(inputList, buttonElement);

  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
}

function checkInputValidity(input, settings) {
  if (input.validity.valid) {
    hideInputError(input, settings);
  } else {
    showInputError(input, settings);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

function showInputError(input, settings) {
  const errorText = document.querySelector(`#${input.name}-error`);
  errorText.textContent = input.validationMessage;
  input.classList.add(settings.inputErrorClass);
}

function hideInputError(input, settings) {
  const errorText = document.querySelector(`#${input.name}-error`);
  errorText.textContent = "";
  input.classList.remove(settings.inputErrorClass);
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__content-button",
  inactiveButtonClass: ".form__content-button_disabled",
  inputErrorClass: ".form__input_error",
  errorClass: ".form__error_visible",
});
