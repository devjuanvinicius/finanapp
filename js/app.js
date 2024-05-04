lucide.createIcons();
export { users, monthlySpending, selectProfile, clearInputs };

import { disableInputs } from "./disableInputs.js";
import { navbarProfiles } from "./navbar/showNavbarProfiles.js";
import { showProfileOptions } from "./showProfileOptions.js";
import { registerNewDebt } from "./registerDebt/registerNewDebt.js";

const selectProfile = document.getElementById("select-profile");
const formDebt = document.getElementById("form-debt");

const users = []; 
const monthlySpending = [];

function clearInputs() {
  document.getElementById("debt-name").value = "";
  document.getElementById("debt-value").value = "";
  document.getElementById("parcelas").value = "";
}

clearInputs();
disableInputs();
navbarProfiles();

selectProfile.addEventListener("click", showProfileOptions);

formDebt.addEventListener("submit", (event) => {
  event.preventDefault();

  registerNewDebt();
});