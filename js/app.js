lucide.createIcons();
export { users, monthlySpending, selectProfile, typeOfDebtInputs, registerNewUserForm, registerNewUserDialog, clearInputs, clearInputType };

import { disableInputs } from "./disableInputs.js";
import { navbarProfiles } from "./navbar/usernameInNav.js";
import { showProfileOptions } from "./navbar/showProfileOptions.js";
import { registerNewDebt } from "./debtHandler/registerNewDebt.js";

const selectProfile = document.getElementById("select-profile");
const formDebt = document.getElementById("form-debt");
const inputTotal = document.querySelector(".input-parcelas");
const typeOfDebtInputs = document.querySelectorAll('input[type="radio"]');

const registerNewUserForm = document.getElementById("form-new-user");
const registerNewUserDialog = document.getElementById("register-dialog");

const users = JSON.parse(localStorage.getItem("@users")) || [];
const monthlySpending = JSON.parse(localStorage.getItem("@infos")) || [];

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


export function saveUsersData(){
  localStorage.setItem("@users", JSON.stringify(users));
}

export function saveUsersInfos(){
  localStorage.setItem("@infos", JSON.stringify(monthlySpending));
}

clearInputs();
disableInputs();
navbarProfiles();
clearInputType();

selectProfile.addEventListener("click", showProfileOptions);
formDebt.addEventListener("submit", registerNewDebt);

//! MUDAR A PALAVRA DEBITS/SPENDING PARA PAYMENTS