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

let form = document.querySelector("form");
let message=document.createElement("p");

// close modal
document.querySelector(".close").addEventListener("click", closeModal);
function closeModal() {
  document.querySelector("form").style.display="block";
  modalbg.style.display = "none";
  if(message.classList.contains('message')){
    message.innerHTML="";
    message.remove();
   }
}

// fonction pour valider le formulaire
document.querySelector("form").addEventListener("submit", (e) => {
  //previous "annuler" le comportement par défaut
  e.preventDefault();
  // "annuler" le comportement par défaut
  resetError();
  

  // vérifier un par un tous les champs
  const verifFirstName = FirstName();
  const verifLastName = LastName();
  const verifEmail = Email();
  const verifBirthdate = Birthdate();
  const verifQuantity = Quantity();
  const verifCity = City();
  const verifCheckbox = Checkbox();


  // si tout est vrai 
  if(verifFirstName && verifLastName && verifEmail && verifBirthdate && verifQuantity && verifCity && verifCheckbox)
  {
    // j'affiche le message de succès
    document.querySelector("form").style.display="none";
    message.innerHTML="Merci ! Votre inscription est validée.";
    message.classList.add('message');
    document.querySelector(".modal-body").appendChild(message);
    form.first.value = "";
    form.last.value = "";
    form.email.value = "";
    form.birthdate.value = "";
    form.quantity.value = "";
    uncheckLocation();
  }
  // si j'ai au moins un faux
  else
  {
    if(!verifFirstName)
    {
      document.querySelector("#first").parentElement.setAttribute("data-error", "Saisissez un prénom valide")
      document.querySelector("#first").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifLastName)
    {
      document.querySelector("#last").parentElement.setAttribute("data-error", "Saisissez un nom valide")
      document.querySelector("#last").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifEmail)
    {
      document.querySelector("#email").parentElement.setAttribute("data-error", "Saisissez un email valide")
      document.querySelector("#email").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifBirthdate)
    {
      document.querySelector("#birthdate").parentElement.setAttribute("data-error", "Saisissez une date de naissance")
      document.querySelector("#birthdate").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifQuantity)
    {
      document.querySelector("#quantity").parentElement.setAttribute("data-error", "Saisissez un nombre valide")
      document.querySelector("#quantity").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifCity)
    {
      document.querySelector(".checkbox-input").parentElement.setAttribute("data-error", "Saisissez une ville")
      document.querySelector(".checkbox-input").parentElement.setAttribute("data-error-visible", true)
    }

    if(!verifCheckbox)
    {
      document.querySelector("#checkbox1").parentElement.setAttribute("data-error", "Ce champ est obligatoire")
      document.querySelector("#checkbox1").parentElement.setAttribute("data-error-visible", true)
    }
  }

})

// vider les erreurs
function resetError() {
  document.querySelector("#first").parentElement.setAttribute("data-error", "")
  document.querySelector("#first").parentElement.setAttribute("data-error-visible", false)

  document.querySelector("#last").parentElement.setAttribute("data-error", "")
  document.querySelector("#last").parentElement.setAttribute("data-error-visible", false)

  document.querySelector("#email").parentElement.setAttribute("data-error", "")
  document.querySelector("#email").parentElement.setAttribute("data-error-visible", false)

  document.querySelector("#birthdate").parentElement.setAttribute("data-error", "")
  document.querySelector("#birthdate").parentElement.setAttribute("data-error-visible", false)

  document.querySelector("#quantity").parentElement.setAttribute("data-error", "")
  document.querySelector("#quantity").parentElement.setAttribute("data-error-visible", false)

  document.querySelector(".checkbox-input").parentElement.setAttribute("data-error", "")
  document.querySelector(".checkbox-input").parentElement.setAttribute("data-error-visible", false)

  document.querySelector("#checkbox1").parentElement.setAttribute("data-error", "")
  document.querySelector("#checkbox1").parentElement.setAttribute("data-error-visible", false)
}

//check "prénom" data
function FirstName () {
  let regex = /^([a-zA-Z '\-éèêëçäàïÿ]+)$/;
	let inputValue = document.getElementById("first").value;
	if (inputValue !== null && inputValue.length > 2) {
    return regex.test(inputValue);
  }   
	else {
    return false;
  }
}

//check "nom de famille" data
function LastName () {
  let regex = /^([a-zA-Z '\-éèêëçäàïÿ]+)$/;
	let inputValue = document.getElementById("last").value;
	if (inputValue !== null && inputValue.length > 2) {
    return regex.test(inputValue);
  }   
	else {
    return false;
  }
}

//check "email" data
function Email () {
    let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,4})$/;
    let inputValue = document.getElementById("email").value;
    if (inputValue !== null){
      return regex.test(inputValue);
    }
    else {
      return false;
    }
}

//check "anniversaire" data
function Birthdate () {
  let inputValue = document.getElementById("birthdate").value;
  if (inputValue !== ""){
    return true;
  }
  else {
    return false;
  }
}

//check "tournois quantité" data
function Quantity() {
    let regex = /^[0-9]+$/;
    let inputValue = document.getElementById("quantity").value;
    if (inputValue !== null){
      return regex.test(inputValue);
    }
    else {
      return false;
    }
}

//check "ville" radio
function City() {
    let radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
    for(let radio of radioButtons){
        if(radio.checked === true) 
          return true;
    }
    return false;
}

//check "première checkbox"
function Checkbox() {
    let inputValue = document.getElementById("checkbox1").checked;
    return inputValue;
}

function uncheckLocation(){
  if(document.querySelector('#location1').checked == true) document.querySelector('#location1').checked = false;
  if(document.querySelector('#location2').checked == true) document.querySelector('#location2').checked = false;
  if(document.querySelector('#location3').checked == true) document.querySelector('#location3').checked = false;
  if(document.querySelector('#location4').checked == true) document.querySelector('#location4').checked = false;
  if(document.querySelector('#location5').checked == true) document.querySelector('#location5').checked = false;
  if(document.querySelector('#location6').checked == true) document.querySelector('#location6').checked = false;
}