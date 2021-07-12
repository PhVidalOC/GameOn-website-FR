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
/**
 * Ajout de la fonctionnalitée pour fermer la modale en cliquantsur la "X".
 */
let span = document.getElementsByClassName('close')[0];
span.addEventListener('click', closeModal);
  function closeModal(e) {
    modalbg.style.display = "none";
}


// Formulaire 2
/**
 * Controle de l'évènement de validation
 */
document.getElementById("form").addEventListener("submit", validate);
function validate(event) {
  event.preventDefault();

  /**
   * Controle du nombre de caractère du nom.
   */
  const first = document.getElementById("first");
  if (first.value.length < 2) {
    showError(first, 'le prénom doit avoir 2 lettres minimum');
  } else {
    hideError(first);
  }

  /**
   * Controle du nombre de caractère du prénom.
   */
  const last = document.getElementById("last");
  if (last.value.length < 2) {
    showError(last, 'le nom doit avoir 2 lettres minimum');
  } else {
    hideError(last);
  }

  /**
   * Controle de validité de l'écriture de l'adresse mail.
   */
  const email = document.getElementById("email");
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
  let testEmail = emailRegExp.test(email.value);
  if (testEmail) {
    hideError(email);
  } else {
    showError(email, 'adresse de messagerie non correcte');
  }
  
/**
 * Controle de la saisie de la date
 */
  const birthdate = document.getElementById("birthdate");
  if (isNaN(birthdate.value)) {
    hideError(birthdate);
  } else {
    showError(birthdate, 'Modifier la date');
  }

  /**
   * Controle du nombre de participation au GameOn.
   */
  const games = document.getElementById("quantity");
  if (isNaN(games.value) || (games.value < 0) || (games.value > 99) || (games.value.length===0)) {
  showError(games, 'Le nombre doit être compris entre 0 et 99');
  } else {
    hideError(games);
  }


  /**
   * Controle, avec la fonction "checklocation", qu'une ville à été selcetionnée.
   */
  const locationError = document.getElementById("location-error");
  if (!checkLocation()) {
  locationError.innerText= 'veuillez choisir une ville';
  } else {
  locationError.innerText = '';
  }



  /**
   * Controle de la cas cochée pour les CGU
   */
  const checkbox1Input = document.getElementById("checkbox1");
  const cguError = document.getElementById("cgu-error");
  if (!checkbox1Input.checked) {
    cguError.innerText= 'veuillez lire et accépter les CGU';
    } else {
      cguError.innerText = '';
    }


/**
 * Fonction de retour d'erreur
 * @param {*} input 
 * @param {*} errorMsg 
 */
  function showError(input, errorMsg){
    input.parentElement.setAttribute("data-error-visible", "true");
    input.parentElement.setAttribute("data-error", errorMsg)
  }

  function hideError(input){
    input.parentElement.setAttribute("data-error-visible", "false");
    input.parentElement.setAttribute("data-error", "")
  }
}

/**
 * Fonction qui récupèere les radio location et vérifie qu'un soit sélectionné.
 * @returns boolean
 */
function checkLocation() {
    const locations = document.getElementsByName("location");
    let res = false;
    locations.forEach(l => {
      if (l.checked){
        res=true
      }
    })
    return res;
}
