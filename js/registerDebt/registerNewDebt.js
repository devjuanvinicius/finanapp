import { monthlySpending, clearInputs} from "../app.js";
import { debtSum } from "./debtSum.js";

export const findingId = (selectedUser) => {
  const foundUser = monthlySpending.find((user) => user.user === selectedUser)
  return monthlySpending.indexOf(foundUser);
}

export function registerNewDebt(event) {
  event.preventDefault();

  const selectedProfile = document.getElementById("selected-profile").dataset.user;
  let installmentsValues = 0;
  const inputDebtName = document.getElementById("debt-name").value;
  const inputDebtValue = document.getElementById("debt-value").value;
  const totalInstallments = document.getElementById("parcelas").value;
  const typeOfDebt = document.querySelector('input[type="radio"]:checked').value;

  if (typeOfDebt === "parcelado") {
    installmentsValues = inputDebtValue / totalInstallments;
  }

  monthlySpending[findingId(selectedProfile)].gastos.push({
    name: inputDebtName,
    value: parseFloat(inputDebtValue),
    type: typeOfDebt, // parcelado ou fixo
    installments: totalInstallments, // total prestações
    installmentsValues: parseFloat(installmentsValues), // valor parcelado
  })
  console.log(monthlySpending);
  clearInputs();
}