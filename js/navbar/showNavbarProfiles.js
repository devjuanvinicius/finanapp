import { showProfileInNav } from "./showProfileInNav.js";
import { showDialog } from "./addProfile/showDialog.js";
import { users } from "../app.js";

export function navbarProfiles() {
  const selectedProfile = document.getElementById("selected-profile");
  
  if (users.length > 0) {
    selectedProfile.innerText = users[0];
    selectedProfile.setAttribute("data-user", users[0]);
  } else {
    selectedProfile.innerText = "Adicionar novo perfil";
  }

  const btnAddProfile = document.getElementById("btn-add-profile");

  showProfileInNav();

  btnAddProfile.addEventListener("click", showDialog);
}