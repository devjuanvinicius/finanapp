import { divBlur, monthlySpending } from "../app.js";
import { closeDialog } from "../dialogControls.js";
import { paymentEditDialog, showPaymentsHistory } from "./showPaymentsHistory.js";

export function editPayment(user, index) {
  const nameEdited = document.getElementById("edit-name").value;
  const valueEdited = document.getElementById("edit-value").value
  let installmentsEdited = monthlySpending[user].gastos[index].installments;
  
  if(document.getElementById("edit-installments") !== null){
    installmentsEdited = parseFloat(document.getElementById("edit-installments").value);
  }

  monthlySpending[user].gastos[index].name = nameEdited;
  monthlySpending[user].gastos[index].value = valueEdited;
  monthlySpending[user].gastos[index].installments = installmentsEdited;

  showPaymentsHistory(user);
  closeDialog(paymentEditDialog, divBlur);
}