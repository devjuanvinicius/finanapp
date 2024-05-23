import { createDialog } from "./components.js";
import { disableInputs } from "./disableInputs.js";

const nav = document.querySelector("nav");
const divBlur = document.getElementById("blur-div");

export function openDialog(typeOfDialog) {
  const dialog = createDialog(typeOfDialog);

  dialog.classList.add("active");
  divBlur.classList.add("blur");

  return dialog;
}

export function closeDialog(dialog) {
  dialog.classList.remove("active");
  divBlur.classList.remove("blur");

  nav.removeChild(dialog);

  disableInputs();
}

export function deleteErrorMessage(form) {
  const existingErrorMessages = form.querySelectorAll("span");
  existingErrorMessages.forEach((span) => span.remove());
}