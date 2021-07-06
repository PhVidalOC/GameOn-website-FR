function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermer modale 1
let span = document.getElementsByClassName('close')[0];
span.addEventListener('click', closeModal);
  function closeModal(e) {
    modalbg.style.display = "none";
}


// Formulaire 2
document.getElementById("form").addEventListener("submit", validate);
function validate(event) {
  event.preventDefault();
  const first = document.getElementById("first");
  if (first.value.length < 2) {
    showError(first, 'le prénom doit avoir 2 lettres minimum');
  } else {
    hideError(first);
  }

  const last = document.getElementById("last");
  if (last.value.length < 2) {
    showError(last, 'le nom doit avoir 2 lettres minimum');
  } else {
    hideError(last);
  }
}

function showError(input, errorMsg){
  input.parentElement.setAttribute("data-error-visible", "true");
  input.parentElement.setAttribute("data-error", errorMsg)
}

function hideError(input){
  input.parentElement.setAttribute("data-error-visible", "false");
  input.parentElement.setAttribute("data-error", "")
}