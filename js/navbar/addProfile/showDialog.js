import { addProfile } from "./addProfile.js";
import { divBlur, registerNewUserDialog, registerNewUserForm } from "../../app.js";
import { closeDialog, deleteErrorMessage, openDialog } from "../../dialogControls.js";

export function showDialog() {
  const selectContent = document.getElementById("profile-options");
  const closeDialogButton = document.getElementById("close-dialog");
  const inputDebtName = document.getElementById("debt-name");
  const inputDebtValue = document.getElementById("debt-value");

  inputDebtName.removeAttribute("disabled", "");
  inputDebtValue.removeAttribute("disabled", "");

  deleteErrorMessage(registerNewUserForm);
  
  openDialog(registerNewUserDialog, divBlur);

  selectContent.classList.remove("active");

  closeDialogButton.addEventListener("click", () =>
    closeDialog(registerNewUserDialog, divBlur)
  );

  registerNewUserForm.addEventListener("submit", addProfile);
}
