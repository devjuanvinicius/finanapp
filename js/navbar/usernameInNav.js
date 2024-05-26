import { showProfileInNav } from "./showProfileInNav.js";
import { showRegisterDialog } from "./userHandler/showRegisterDialog.js";
import { selectedProfile, users } from "../app.js";

export function navbarProfiles() {
  const selectedProfileSpan = document.getElementById("selected-profile");
  
  if (users.length > 0 && !selectedProfile) {
    selectedProfileSpan.innerText = "Selecionar perfil";
  } else {
    selectedProfileSpan.innerText = "Adicionar novo perfil";
  }

  const btnAddProfile = document.getElementById("btn-add-profile");

  showProfileInNav();

  btnAddProfile.addEventListener("click", showRegisterDialog);
}