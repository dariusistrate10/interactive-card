const form = document.querySelector(".form-container");
const cardNameInput = document.querySelector(".card-front-name");
const cardNameDisplay = document.querySelector(".card-front-name-display");
const cardNumberInput = document.querySelector(".card-front-number");
const cardNumberDisplay = document.querySelector(".card-front-number-display");
const cardMonthInput = document.querySelector(".card-front-month");
const cardMonthDisplay = document.querySelector(".card-front-expirymonth-display");
const cardYearInput = document.querySelector(".card-front-year");
const cardYearDisplay = document.querySelector(".card-front-expiryyear-display");
const cardCVCInput = document.querySelector(".card-front-cvc");
const cardCVCDisplay = document.querySelector(".card-back-cvc-display");
const errorName = document.querySelector(".error-name");
const errorNumber = document.querySelector(".error-number");
const errorMonthYear = document.querySelector(".error-month-year");
const errorCVC = document.querySelector(".error-cvc");
const buttonConfirm = document.querySelector(".btn");
const success = document.querySelector(".success");

cardNameInput.oninput = () => {
    cardNameDisplay.innerText = cardNameInput.value;
}

cardNumberInput.oninput = () => {
    cardNumberDisplay.innerText = cardNumberInput.value;
}

cardMonthInput.oninput = () => {
    cardMonthDisplay.innerText = cardMonthInput.value;
}

cardYearInput.oninput = () => {
    cardYearDisplay.innerText = cardYearInput.value;
}

cardCVCInput.oninput = () => {
    cardCVCDisplay.innerText = cardCVCInput.value;
}

buttonConfirm.addEventListener("click", function() {
    form.style.display = "none";
    success.style.display = "block";
})