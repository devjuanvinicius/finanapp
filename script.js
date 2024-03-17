lucide.createIcons();

const selectProfile = document.getElementById("select-profile");
const formDebt = document.getElementById("form-debt");
const selectedProfile = document.getElementById("selected-profile");
const inputDebtName = document.getElementById("debt-name");
const inputDebtValue = document.getElementById("debt-value");

const users = []; // "Juan", "Vera"
const monthlySpending = [];

const arr = {
  user: "juan",
  gastos: {
    name: "faculdade",
    value: 340,
    type: "parcelado" // parcelado ou fixo
  },
  gastoMensal: 0,
  gastoFixo: 0,
  cofrinho: 0
}

function navbarProfiles() {
  if (users.length > 0) {
    selectedProfile.innerText = users[0];
    selectedProfile.setAttribute("data-user", users[0]);
  } else {
    selectedProfile.innerText = "Adicionar novo perfil";
  }

  const profileList = document.getElementById("list-profiles");
  const btnAddProfile = document.getElementById("btn-add-profile");

  function showProfileInNav() {
    profileList.innerHTML = "";
    users.map((user) => {
      const userItem = document.createElement("li");
      const iconCheck = document.createElement("img");

      userItem.innerText = user;
      userItem.dataset.user = user;
      userItem.classList.add("profile");
      iconCheck.setAttribute("src", "./assets/icons/check.svg");

      userItem.appendChild(iconCheck);
      profileList.appendChild(userItem);
    });
  }

  showProfileInNav();

  btnAddProfile.addEventListener("click", () => {
    const registerNewUserDialog = document.getElementById("register-dialog");
    const divBlur = document.getElementById("blur-div");
    const selectContent = document.getElementById("profile-options");
    const registerNewUserForm = document.getElementById("form-new-user");
    const closeDialogButton = document.getElementById("close-dialog");
    const inputDebtName = document.getElementById("debt-name");
    const inputDebtValue = document.getElementById("debt-value");

    inputDebtName.removeAttribute("disabled", "")
    inputDebtValue.removeAttribute("disabled", "")

    function closeDialog() {
      registerNewUserDialog.classList.remove("register-dialog-active");
      divBlur.classList.remove("blur");

      disableInputs();
    }

    function deleteErrorMessage() {
      const existingErrorMessages = registerNewUserForm.querySelectorAll("span");
      existingErrorMessages.forEach((span) => span.remove());
    }

    deleteErrorMessage();

    registerNewUserDialog.classList.add("register-dialog-active");
    divBlur.classList.add("blur");
    selectContent.classList.remove("active");

    closeDialogButton.addEventListener("click", closeDialog);
    
    registerNewUserForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const userName = document.getElementById("new-user").value;

      const verifyUserInArray = users.indexOf(userName);

      console.log(verifyUserInArray);

      deleteErrorMessage();

      if (verifyUserInArray !== -1) {
        const errorMessage = document.createElement("span");
        errorMessage.innerText = "Usuario já existente";
        errorMessage.style.color = "#7f1d1d";

        registerNewUserForm.appendChild(errorMessage);
      } else {
        users.push(userName);
        closeDialog();
        showProfileInNav();
      }
    });
  });
}

function showProfileOptions() {
  const selectContent = document.getElementById("profile-options");
  const selectValue = document.querySelector(".current-profile span");
  const selectItem = document.querySelectorAll("li");

  selectContent.classList.toggle("active");
  selectProfile.classList.toggle("selected-profile-clicked");

  selectItem.forEach((profile) => {
    profile.addEventListener("click", () => {
      selectValue.innerHTML = "";
      selectValue.innerText = profile.innerText;
      selectValue.dataset.user = profile.dataset.user;

      selectContent.classList.remove("active");
      selectProfile.classList.remove("selected-profile-clicked");

      selectItem.forEach((profile) => {
        profile.classList.remove("selected-profile");
      });

      profile.classList.add("selected-profile");
      disableInputs();
    });
  });
}

function disableInputs() {
  if(users.length <= 0){
    inputDebtName.setAttribute("disabled", "")
    inputDebtValue.setAttribute("disabled", "")
  } else{
    inputDebtName.removeAttribute("disabled", "")
    inputDebtValue.removeAttribute("disabled", "")
  }
}

function registerNewDebt() {
  const verifyUserInArray = users.indexOf(selectedProfile.value)
}

disableInputs();
navbarProfiles();

selectProfile.addEventListener("click", showProfileOptions);

formDebt.addEventListener("submit", (event) => {
  event.preventDefault();

  
})