import { addProfile } from "./addProfile.js";
import { deleteErrorMessage, openDialog } from "../../dialogControls.js";

export function showRegisterDialog() {
  const dialog = openDialog("register");

  const selectContent = document.getElementById("profile-options");
  const inputDebtName = document.getElementById("debt-name");
  const inputDebtValue = document.getElementById("debt-value");

  inputDebtName.removeAttribute("disabled", "");
  inputDebtValue.removeAttribute("disabled", "");

  deleteErrorMessage(dialog);

  selectContent.classList.remove("active");

  dialog.addEventListener("submit", (event) => {
    event.preventDefault();
    addProfile();
  });
}
