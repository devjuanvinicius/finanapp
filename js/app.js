lucide.createIcons();
export { users, monthlySpending, selectProfile, clearInputs, typeOfDebtInputs, clearInputType };

import { disableInputs } from "./disableInputs.js";
import { navbarProfiles } from "./navbar/showNavbarProfiles.js";
import { showProfileOptions } from "./showProfileOptions.js";
import { registerNewDebt } from "./registerDebt/registerNewDebt.js";

const selectProfile = document.getElementById("select-profile");
const formDebt = document.getElementById("form-debt");
const inputTotal = document.querySelector(".input-parcelas");
const typeOfDebtInputs = document.querySelectorAll('input[type="radio"]');
const mainCards = document.getElementById("main-cards");

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
        console.log("add")
        inputTotal.classList.add("active");
      } else {
        console.log("remove")
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