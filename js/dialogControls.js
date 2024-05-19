import { disableInputs } from "./disableInputs.js";

export function deleteErrorMessage(form) {
  const existingErrorMessages = form.querySelectorAll("span");
  existingErrorMessages.forEach((span) => span.remove());
}

export function closeDialog(dialog, blur) {
  dialog.classList.remove("register-dialog-active");
  blur.classList.remove("blur");

  disableInputs();
}

export function openDialog(dialog, blur) {
  dialog.classList.add("register-dialog-active");
  blur.classList.add("blur");
}