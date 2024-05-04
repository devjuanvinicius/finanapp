import { monthlySpending, clearInputs} from "../app.js";
import { debtSum } from "./debtSum.js";
import { findingId } from "./findingId.js";

export const selectedProfile = document.getElementById("selected-profile");

export function registerNewDebt() {
  let inputValue;
  let installmentsValues;
  const inputDebtName = document.getElementById("debt-name").value;
  const inputDebtValue = document.getElementById("debt-value").value;
  const totalInstallments = document.getElementById("parcelas").value;

  document.querySelectorAll("input[name='type']").forEach((item) => {
    if (item.checked) {
      inputValue = item.value;
    }
  });

  if (inputValue === "parcelado") {
    installmentsValues = inputDebtValue / totalInstallments;
    console.log(installmentsValues);
  }

  let userId = findingId(selectedProfile);

  if (userId === -1) {
    monthlySpending.push({
      user: selectedProfile.dataset.user,
      gastos: [
        {
          name: inputDebtName,
          value: parseFloat(inputDebtValue),
          type: inputValue, // parcelado ou fixo
          installments: totalInstallments, // total prestações
          installmentsValues: installmentsValues, // valor parcelado
        },
      ],
    });

    console.log(monthlySpending);
    debtSum();
  } else {
    monthlySpending[userId].gastos.push([
      {
        name: inputDebtName,
        value: parseFloat(inputDebtValue),
        type: inputValue, // parcelado ou fixo
        installments: totalInstallments, // total prestações
        installmentsValues: installmentsValues, // valor parcelado
      },
    ]);
    console.log(monthlySpending);
    debtSum();
  }  
  clearInputs();
}