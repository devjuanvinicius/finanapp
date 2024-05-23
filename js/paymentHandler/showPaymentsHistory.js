import { monthlySpending } from "../app.js";
import { closeDialog } from "../dialogControls.js";
import { numberFormater } from "../showValuesInCard.js";
import { editPayment } from "./editPayment.js";
import { openEditDialog } from "./openEditDialog.js";

export const paymentEditDialog = document.getElementById("payment-edit-dialog");
export const nameEdited = document.getElementById("edit-name");
export const valueEdited = document.getElementById("edit-value");
export const installmentsEdited = document.getElementById("edit-installments");
export const paymentList = document.getElementById("payments-list");

export function showPaymentsHistory(user) {
  const paymentCloseIcon = document.getElementById("close-edit-dialog");
  const formEditPayment = document.getElementById("form-edit-payment");

  paymentList.innerHTML = "";

  monthlySpending[user].gastos.map((item, index) => {
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
    paymentValue.innerText = `${numberFormater(item.value)} - ${item.installments}x`;
    penLineIcon.dataset.index = index;

    paymentInfos.append(paymentName, paymentValue);
    paymentDiv.append(paymentInfos, penLineIcon);
    paymentList.appendChild(paymentDiv);

    penLineIcon.addEventListener("click", () => {
      const payment = monthlySpending[user].gastos[index];
      openEditDialog(payment);

      formEditPayment.addEventListener("submit", (event) => {
        event.preventDefault();

        editPayment(user, index);
      });
    });
  });

  paymentCloseIcon.addEventListener("click", () =>
    closeDialog(paymentEditDialog)
  );
}
