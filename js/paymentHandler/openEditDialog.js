import { moneyMask } from "../moneyMask.js";
import { nameEdited, valueEdited, paymentEditDialog } from "./showPaymentsHistory.js";

export function openEditDialog(payment) {
  const divEditValues = document.getElementById("edit-values");
  const divBlur = document.getElementById("blur-div");

  paymentEditDialog.classList.add("active");
  divBlur.classList.add("blur");

  nameEdited.value = payment.name;
  valueEdited.value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(payment.value);

  moneyMask(valueEdited);

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
