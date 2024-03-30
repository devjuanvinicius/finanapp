import { disableInputs } from "./disableInputs.js";
import { navbarProfiles } from "./navbar/showNavbarProfiles.js";
import { showProfileOptions } from "./showProfileOptions.js";
import { registerNewDebt } from "./registerNewDebt.js";
lucide.createIcons();

const selectProfile = document.getElementById("select-profile");
const formDebt = document.getElementById("form-debt");
const users = []; // "Juan", "Vera"
export { users }

disableInputs();
navbarProfiles();

selectProfile.addEventListener("click", showProfileOptions);

formDebt.addEventListener("submit", (event) => {
  event.preventDefault();

  registerNewDebt();
});