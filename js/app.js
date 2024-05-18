lucide.createIcons();
export { users, monthlySpending, selectProfile, typeOfDebtInputs, divBlur, registerNewUserForm, registerNewUserDialog, clearInputs, clearInputType };

import { disableInputs } from "./disableInputs.js";
import { navbarProfiles } from "./navbar/showNavbarProfiles.js";
import { showProfileOptions } from "./navbar/showProfileOptions.js";
import { registerNewDebt } from "./registerDebt/registerNewDebt.js";

const selectProfile = document.getElementById("select-profile");
const formDebt = document.getElementById("form-debt");
const inputTotal = document.querySelector(".input-parcelas");
const typeOfDebtInputs = document.querySelectorAll('input[type="radio"]');

const divBlur = document.getElementById("blur-div");
const registerNewUserForm = document.getElementById("form-new-user");
const registerNewUserDialog = document.getElementById("register-dialog");

const users = [];
const monthlySpending = [];

function clearInputs() {
  document.getElementById("debt-name").value = "";
  document.getElementById("debt-value").value = "";
  document.getElementById("parcelas").value = "";
}

function clearInputType() {
  typeOfDebtInputs.forEach((input) => {
    input.checked = false;
    inputTotal.classList.remove("active");

    input.addEventListener("click", () => {
      if(input.checked === true && input.value === "parcelado") {
        inputTotal.classList.add("active");
      } else {
        inputTotal.classList.remove("active");
      }
    }) 
  })
}

clearInputs();
disableInputs();
navbarProfiles();
clearInputType();

selectProfile.addEventListener("click", showProfileOptions);
formDebt.addEventListener("submit", registerNewDebt);

//! MUDAR A PALAVRA DEBITS/SPENDING PARA PAYMENTS