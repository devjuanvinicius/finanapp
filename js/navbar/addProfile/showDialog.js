import { disableInputs } from "../../disableInputs.js";
import { addProfile } from "./addProfile.js";

const registerNewUserForm = document.getElementById("form-new-user");
const registerNewUserDialog = document.getElementById("register-dialog");
const divBlur = document.getElementById("blur-div");

// retira qualquer mensagem de erro que apareça na tela. 
export function deleteErrorMessage() {
  const existingErrorMessages = registerNewUserForm.querySelectorAll("span");
  existingErrorMessages.forEach((span) => span.remove());
}

export function closeDialog() {
  registerNewUserDialog.classList.remove("register-dialog-active");
  divBlur.classList.remove("blur");

  disableInputs();
}

export function showDialog() {
  const selectContent = document.getElementById("profile-options");
  const closeDialogButton = document.getElementById("close-dialog");
  const inputDebtName = document.getElementById("debt-name");
  const inputDebtValue = document.getElementById("debt-value");

  inputDebtName.removeAttribute("disabled", "")
  inputDebtValue.removeAttribute("disabled", "")

  deleteErrorMessage();

  registerNewUserDialog.classList.add("register-dialog-active");
  divBlur.classList.add("blur");
  selectContent.classList.remove("active");

  closeDialogButton.addEventListener("click", closeDialog);

  registerNewUserForm.addEventListener("submit", addProfile);
}