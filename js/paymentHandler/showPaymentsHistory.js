import { monthlySpending } from "../app.js";
import { closeDialog } from "../dialogControls.js";
import { numberFormater } from "../showValuesInCard.js";
import { deletePayment } from "./deletePayment.js";
import { editPayment } from "./editPayment.js";
import { openEditDialog } from "./openEditDialog.js";

export const paymentEditDialog = document.getElementById("payment-edit-dialog");
export const nameEdited = document.getElementById("edit-name");
export const valueEdited = document.getElementById("edit-value");
export const installmentsEdited = document.getElementById("edit-installments");
export const paymentList = document.getElementById("payments-list");

export function showPaymentsHistory(user) {
  const formEditPayment = document.getElementById("form-edit-payment");
  const paymentCloseIcon = document.getElementById("close-dialog");
  const deleteBtn = document.getElementById("btn-remove");

  paymentList.innerHTML = "";

  formEditPayment.addEventListener("submit", (event) => {
    event.preventDefault();
    const index = formEditPayment.dataset.index;
    editPayment(user, index);
  });

  deleteBtn.addEventListener("click", () => {
    const index = deleteBtn.dataset.index;
    deletePayment(user, index);
  });

  paymentCloseIcon.addEventListener("click", () => {
    closeDialog(paymentEditDialog);
  });

  monthlySpending[user].gastos.forEach((item, index) => {
    const paymentDiv = document.createElement("div");
    const paymentInfos = document.createElement("div");
    const paymentName = document.createElement("span");
    const paymentValue = document.createElement("span");
    const penLineIcon = document.createElement("img");

    penLineIcon.src = "./assets/icons/pencil-line.svg";

    paymentDiv.classList.add("payment");
    paymentInfos.classList.add("payment-infos");
    paymentName.classList.add("payment-name");
    paymentValue.classList.add("payment-value");
    penLineIcon.classList.add("icon");

    paymentName.innerText = item.name;
    paymentValue.innerText = `${numberFormater(item.value)} ${item.type !== "parcelado" ? "" : `- ${item.installments}x`}`;
    penLineIcon.dataset.index = index;

    paymentInfos.append(paymentName, paymentValue);
    paymentDiv.append(paymentInfos, penLineIcon);
    paymentList.appendChild(paymentDiv);
    
    penLineIcon.addEventListener("click", () => {
      const payment = monthlySpending[user].gastos[index];
      openEditDialog(payment);

      formEditPayment.dataset.index = index;
      deleteBtn.dataset.index = index;
    });
  });
}
