import { monthlySpending } from "../app.js";
import { debtSum } from "../debtHandler/debtSum.js";
import { closeDialog } from "../dialogControls.js";
import { showValuesInCard } from "../showValuesInCard.js";
import { paymentEditDialog, showPaymentsHistory } from "./showPaymentsHistory.js";

export function deletePayment (userID, paymentID) {
  monthlySpending[0].gastos.splice(paymentID, 1);
  console.log(monthlySpending);

  debtSum();
  showPaymentsHistory(userID);
  showValuesInCard();
  closeDialog(paymentEditDialog);
}