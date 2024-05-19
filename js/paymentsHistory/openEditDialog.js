import { divBlur } from "../app.js";
import { openDialog } from "../dialogControls.js";
import { nameEdited, valueEdited, paymentEditDialog } from "./showPaymentsHistory.js";

export function openEditDialog(payment) {
  openDialog(paymentEditDialog, divBlur);

  const divEditValues = document.getElementById("edit-values");

  nameEdited.value = payment.name;
  valueEdited.value = payment.value;

  if (payment.type === "parcelado" && divEditValues.childElementCount === 1) {
    const editInstallments = document.createElement("div");
    const editInstallmentsLabel = document.createElement("label");
    const editInstallmentsInput = document.createElement("input");

    editInstallments.classList.add("edit-installments");
    editInstallmentsLabel.htmlFor = "edit-installments";
    editInstallmentsLabel.innerText = "Edite as parcelas:";

    editInstallmentsInput.type = "number";
    editInstallmentsInput.id = "edit-installments";
    editInstallmentsInput.value = payment.installments;

    editInstallments.append(editInstallmentsLabel, editInstallmentsInput);
    divEditValues.appendChild(editInstallments);
  }
}
