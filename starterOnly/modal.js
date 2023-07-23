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

// close modal
document.querySelector(".close").addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

// fonction pour valider le formulaire
document.querySelector("form").addEventListener("submit", (e) => {
  // "annuler" le comportement par défaut
  e.preventDefault();

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
    let message=document.createElement("p");
    message.innerHTML="Merci ! Votre inscription est validée.";
    message.style.color="red";
    message.style.textAlign="center";
    message.style.marginTop="100px";
    message.style.marginBottom="100px";
    message.style.marginRight="40px";
    message.style.marginLeft="40px";
    message.style.fontSize="25px";
    document.querySelector(".modal-body").appendChild(message);
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

