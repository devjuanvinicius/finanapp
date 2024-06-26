import { monthlySpending } from "../app.js";
import { closeDialog } from "../dialogControls.js";
import { debtSum } from "../debtHandler/debtSum.js";
import { showValuesInCard } from "../showValuesInCard.js";
import { paymentEditDialog, showPaymentsHistory } from "./showPaymentsHistory.js";

export function editPayment(user, index) {
  const nameEdited = document.getElementById("edit-name").value;
  const valueEdited = VMasker.toNumber(document.getElementById("edit-value").value);
  let installmentsEdited = monthlySpending[user].gastos[index].installments;

  if (document.getElementById("edit-installments") !== null) {
    installmentsEdited = parseFloat(document.getElementById("edit-installments").value);
  }

  monthlySpending[user].gastos[index].name = nameEdited;
  monthlySpending[user].gastos[index].value = parseFloat(valueEdited);
  monthlySpending[user].gastos[index].installments = installmentsEdited;

  debtSum();
  showPaymentsHistory(user);
  showValuesInCard();
  closeDialog(paymentEditDialog);
}
